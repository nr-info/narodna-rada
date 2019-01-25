<?php
require_once('parse/core.php');

class w1_c1_rada_gov_ua{

    const BAZE_URI = "http://w1.c1.rada.gov.ua";
    
    const URL_Google_form = '';
    
    public $Voting_startDate;
    public $Voting_endDate;



    public function pars_list_deputats($skl = 9) {
        
        $dat = getPageQuery(static::BAZE_URI. '/pls/site2/fetch_mps?skl_id=' .$skl);
        //http://w1.c1.rada.gov.ua/pls/site2/fetch_mps?skl_id=9
        $lis = $dat->find(".search-filter-results.search-filter-results-thumbnails li .title a");
        
        $data = [];
        
        foreach ($lis as $li) {
            $l = pq($li);
            
            $data_ = [
                'link'=> $l->attr('href')
            ];
            
            $this->deputat($data_);
            
            $data[] = $data_;
            
        }
        
        return $data;
        
    }
    
    public function json_list_deputats() {
        
        $lis = $this->getSkl8_mps_data();
        
        $data = [];
        
        foreach ($lis as $li) {
            
            $li["anketa_url"] = "http://itd.rada.gov.ua/mps/info/page/". $li["id"];
            
            $this->deputat($li);
            
            $data[] = $li;
            
        }
        
        return $data;
        
    }
    
    public function deputat(&$data){
                    
        $dat = getPageQuery($data['anketa_url']);
        
        //visiting
        //======================================================================
        
        $box_visiting = $dat->find('.mp-general-info')->parent();        
        
        $html1 = trim($box_visiting->html());
        
        $li_vid = explode('<br>', $html1);
        $summ = '';
        foreach ($li_vid as $key => $value) {
            
            if(trim($value) == 'За даними письмової реєстрації:'){
                $summ = trim($li_vid[++$key]);
                break;
            }
        }
        
        if ($summ) {
            $ls = explode(",", $summ);
            
            $data['visiting']['present'] = (int)explode(" - ", $ls[0])[1];
            $data['visiting']['reasons_valide'] = (int)explode(" - ", $ls[1])[1];
            $data['visiting']['reasons_unknown'] = (int)explode(" - ", $ls[2])[1];
        }else{
            $data['visiting']['present'] = 0;
            $data['visiting']['reasons_valide'] = 0;
            $data['visiting']['reasons_unknown'] = 0;
        }
            
        //======================================================================
        
        //Voting
        //======================================================================
        
        $datVoting = getPageQuery("http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_dep_gol_list?startDate={$this->Voting_startDate}&endDate={$this->Voting_endDate}&kod={$data["rada_id"]}&nom_str=0");
        
//        За - By
//        Не голосував - No vote
//        Проти - Against
//        Відсутній - Missing
        
        $data["voting"]['by'] = 0;
        $data["voting"]['no_vote'] = 0;
        $data["voting"]['against'] = 0;
        $data["voting"]['missing'] = 0;
        $data["voting"]['abstained'] = 0;//Утримався
        
        $lsis = $datVoting->find(".zrez");
        
        foreach ($lsis as $value) {
            
            $v = trim(pq($value)->text());
            
            if ($v == "За" || $v == "Çà") {
                $data["voting"]['by']++;
            }elseif ($v == "Не голосував" || $v == "Íå ãîëîñóâàâ") {
               $data["voting"]['no_vote']++; 
            }elseif ($v == "Проти" || $v == "Ïðîòè") {
                $data["voting"]['against']++;
            }elseif ($v == "Відсутній" || $v == "Â³äñóòí³é") {
                $data["voting"]['missing']++;
            }elseif ($v == "Утримався" || $v == "Óòðèìàâñÿ") {
                $data["voting"]['abstained']++;
            }
            
        }
        
        //======================================================================
       
        //$this->push_form($data);
    }
    
    public function push_forms($data){
        
        foreach ($data as $value) {
            $this->push_form($value);            
        }
        
    }
    
    public function push_form($data){
        file_get_contents('https://docs.google.com/forms/d/'.static::URL_Google_form.'/formResponse?submit=Submit&'.http_build_query($data));        
    }
    
    
    public function getSkl8_mps_data() {
        
        $data = [];
        
        $textData = getPage('http://mytry.loc/db/deputat/mps-data.json');//"https://data.rada.gov.ua/ogd/mps/skl8/mps-data.json"
        
        if($textData){
            try {
                $jsonData = json_decode($textData, TRUE);
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
            }
            
            foreach ($jsonData["mps"] as $key => $value) {
                $data[$value['id']] = $value;
            }
        }
        
        return $data;
        
    }
    
}
