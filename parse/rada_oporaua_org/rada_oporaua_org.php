<?php
require_once('parse/core.php');

class rada_oporaua_org extends parser{

    const BAZE_URI = "https://rada.oporaua.org";
    
    const URL_Google_form = '';
    
    public function list_deputats($page = "/deputaty/deputati"){
        
        set_time_limit(50000);
            
        $dat = getPageQuery(static::BAZE_URI. $page);
        
        $lis = $dat->find(".photo-gallery__item a");
        
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
            
        $deputy = $dat->find("div.deputy.clear");
        
        
        //Голосування (пленарні засідання):
        $data['golosyvanja']['za'] = $deputy->find(".deputy__voting-item.deputy__voting-item_1.font a")->text();
        $data['golosyvanja']['proty'] = $deputy->find(".deputy__voting-item.deputy__voting-item_2.font a")->text();
        $data['golosyvanja']['utrymavsya'] = $deputy->find(".deputy__voting-item.deputy__voting-item_3.font a")->text();
        $data['golosyvanja']['vidsutniy'] = $deputy->find(".deputy__voting-item.deputy__voting-item_4.font a")->text();
        $data['golosyvanja']['negolosuvav'] = $deputy->find(".deputy__voting-item.deputy__voting-item_5.font a")->text();
        
        print_r($data);
    }
    
    public function push_forms($data){
        
        foreach ($data as $value) {
            $this->push_form($value);            
        }
        
    }
    
}
