<?php
require_once('parse/core.php');

class w1_c1_rada_gov_ua extends parser
{
    
    public $Voting_startDate;
    public $Voting_endDate;

    public function __construct() {
        
        $this->BAZE_URI = "http://w1.c1.rada.gov.ua";
        
    }

    public function pars_list_deputats($skl = 9) {
        
        $dat = $this->getPageQuery('/pls/site2/fetch_mps?skl_id=' .$skl);
        
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
        
        foreach ($lis as $key=>$li) {
            
            $li["anketa_url"] = "http://itd.rada.gov.ua/mps/info/page/". $li["id"];
            
            $this->deputat($li);
            
        }
        
    }
    
    public function deputat($data){
        
        $this->console_info("Start parse deputat " . $data["id"] );
        
        $_time_1 = microtime(true);
        
        //Visiting
        //======================================================================
        $this->console_info("	Visiting");
        $this->console_info("		getPage");
        $_time_ = microtime(true);
        
        $dat = $this->getPageQuery($data['anketa_url']);
        $_time_ = microtime(true) - $_time_;
        $this->console_info("			time - [".(string)$_time_."]");
        
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
        
        $data["voting"]["date"] = $this->Voting_endDate;
        $data["voting"]["source"] = $this->BAZE_URI;
        
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
        
        $this->console_info("			[".$data["visiting"]['present'].", ".$data["visiting"]['reasons_valide'].", ".$data["visiting"]['reasons_unknown']."]");
        
        //======================================================================
        
        
        //Voting
        //======================================================================
        $this->console_info("	Voting");
        
        $this->Voting_startDate = (new DateTime($data["date_oath"]))->format('d.m.Y');
        
        $this->console_info("		getPage");
        
        $_time_ = microtime(true);
        $datVoting = $this->getPageQuery("http://w1.c1.rada.gov.ua/pls/radan_gs09/ns_dep_gol_list?startDate={$this->Voting_startDate}&endDate={$this->Voting_endDate}&kod={$data["rada_id"]}&nom_str=0");
        $_time_ = microtime(true) - $_time_;
        $this->console_info("			time - [".(string)$_time_."]");
        
        
        
        $data["voting"]['by'] = 0;          //За
        $data["voting"]['no_vote'] = 0;     //Не голосував
        $data["voting"]['against'] = 0;     //Проти
        $data["voting"]['missing'] = 0;     //Відсутній
        $data["voting"]['abstained'] = 0;   //Утримався
        
        $data["voting"]["date"] = $this->Voting_endDate;
        $data["voting"]["source"] = $this->BAZE_URI;
        
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
        
        $this->console_info("			[".$data["voting"]['by'].", ".$data["voting"]['no_vote'].", ".$data["voting"]['against'].", ".$data["voting"]['missing'].", ".$data["voting"]['abstained']."]");
        
        //======================================================================
        $this->console_info("	push_file");
        $this->push_file("db/deputat1/".$data["id"].".json", json_encode($data,JSON_UNESCAPED_UNICODE));
        $_time_1 = microtime(true) - $_time_1;
        $this->console_info("time - [".(string)$_time_1."]");
        
    }
    
    public function getSkl8_mps_data() {
        
        $data = [];
        
        $textData = $this->file_get_contentsA1('http://mytry.loc/db/deputat/mps-data.json');//"https://data.rada.gov.ua/ogd/mps/skl8/mps-data.json"
        
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