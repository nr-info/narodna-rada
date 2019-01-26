<?php
require_once('system/library/phpQuery-onefile.php');
require_once('system/helper/utf8.php');
libxml_use_internal_errors(true);

class parser{
    
    public $BAZE_URI;
    public $URL_Google_form;


    public function file_get_contentsA1($url){
    
        $options = array(
            'http' => array(
                'method' => "GET",
                'header' => implode("\r\n", []),
                'content' => [],
                'ignore_errors' => true
            )
        );

        $context = stream_context_create($options);
        try {
            return   file_get_contents($url, FALSE, $context);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }
    
    public function file_get_contents_utf8($fn,$g,$cv) {
        $content = file_get_contents($fn,$g,$cv);
        return mb_convert_encoding($content, 'UTF-8', mb_detect_encoding($content, 'UTF-8, ISO-8859-1', true));
    }
    
    public function getCURLA2($url){
        // create curl resource 
        $ch = curl_init(); 

        // set url 
        curl_setopt($ch, CURLOPT_URL, $url); 

        //return the transfer as a string 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

        // $output contains the output string 
        return curl_exec($ch); 

        // close curl resource to free up system resources 
        curl_close($ch);      
    }
    
    public function getPageQuery($url){
        return phpQuery::newDocument($this->file_get_contentsA1($url));
    }
    
    public function push_file($file_name, $content){
        file_put_contents($file_name, $content);
    }
    
    public function push_google_forms($data){
        file_get_contents('https://docs.google.com/forms/d/'. $this->URL_Google_form.'/formResponse?submit=Submit&'.http_build_query($data));        
    }
    
    public function pars_prameters_google_forms(){
        
        $dat = $this->getPageQuery('https://docs.google.com/forms/d/'. $this->URL_Google_form.'/formResponse');
        
        $lis = $dat->find("form input");
        
        foreach ($lis as $li) {
            
            $el = pq($li);
            
            if ($el->attr('aria-label')) {
                echo '$data[\''.$el->attr('name').'\'] = \'\';//'.$el->attr('aria-label').PHP_EOL;
            }            
            
        }
        
    }
    
    function normJsonStr($str){
        $str = preg_replace_callback('/\\\\u([a-f0-9]{4})/i', create_function('$m', 'return chr(hexdec($m[1])-1072+224);'), $str);
        return iconv('cp1251', 'utf-8', $str);
    }

    public function console_info($text){
        echo $text.PHP_EOL;
    }
    
}