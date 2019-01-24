<?php
require_once('parse/core.php');

class slovoidilo{

    const BAZE_URI = "https://rada.oporaua.org";
    
    const URL_Google_form = '1ieD9s-EhipkM0O6_3IP6STzPwXHjgVe-dfkjWPsa-sI';
    
    public function list_deputats(){
        
        set_time_limit(50000);
            
        $dat = getPageQuery(static::BAZE_URI. "/rejtyngy/verhovna-rada/za-vidpovidalnistju");
        
        $lis = $dat->find(".rating-list.pr-responsibility .item.person a.name");

        $data = [];
        
        foreach ($lis as $li) {
            $l = pq($li);
            $data_ = [
                'entry.1751437528' => $l->text(),                               //П.І.Б
                'entry.1514254136' => "",                                       //У процесі
                'entry.260377466' => "",                                        //Виконано
                'entry.1815471178' => "",                                       //Не виконано
                'entry.224492135' => "",                                        //Всього
                'entry.957555455' => "",                                        //%
                'entry.1546363445' => static::BAZE_URI. $l->attr("href")        //link                    
            ];
            
            $this->deputat($data_);
            
            $data[] = $data_;
        }
        
        return $data;
        
    }
    
    public function deputat(&$data){
            
        $dat = getPageQuery($data['entry.1546363445']);
            
        $amm = $dat->find(".amounts");
        
        $data['entry.1514254136'] = $amm->find(".perform")->text();
        $data['entry.260377466'] = $amm->find(".succeed")->text();
        $data['entry.1815471178'] = $amm->find(".failed")->text();
        $data['entry.224492135'] = $amm->find(".all")->text();
            
        $this->push_form($data);
    }
    
    public function push_forms($data){
        
        foreach ($data as $value) {
            $this->push_form($value);            
        }
        
    }
    
    public function push_form($data){
        file_get_contents('https://docs.google.com/forms/d/'.static::URL_Google_form.'/formResponse?submit=Submit&'.http_build_query($data));        
    }
    
}
