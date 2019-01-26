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
    
    public function pars_prameters_google_forms($url){
        
        $dat = $this->getPageQuery($url);
        
        $lis = $dat->find("form input");
        
        foreach ($lis as $li) {
            
            $el = pq($li);
            
            if ($el->attr('aria-label')) {
                echo '$data[\''.$el->attr('name').'\'] = \'\';\\\\'.$el->attr('aria-label').PHP_EOL;
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
    
    public function unicode_to_utf8($unicode) {
		$string = '';

		for ($i = 0; $i < count($unicode); $i++) {
			if ($unicode[$i] < 128) {
				$string .= chr($unicode[$i]);
			}

			if ($unicode[$i] >= 128 && $unicode[$i] <= 2047) {
				$string .= chr(($unicode[$i] / 64) + 192) . chr(($unicode[$i] % 64) + 128);
			}

			if ($unicode[$i] >= 2048 && $unicode[$i] <= 65535) {
				$string .= chr(($unicode[$i] / 4096) + 224) . chr(128 + (($unicode[$i] / 64) % 64)) . chr(($unicode[$i] % 64) + 128);
			}

			if ($unicode[$i] >= 65536 && $unicode[$i] <= 2097151) {
				$string .= chr(($unicode[$i] / 262144) + 240) . chr((($unicode[$i] / 4096) % 64) + 128) . chr((($unicode[$i] / 64) % 64) + 128) . chr(($unicode[$i] % 64) + 128);
			}

			if ($unicode[$i] >= 2097152 && $unicode[$i] <= 67108863) {
				$string  .= chr(($unicode[$i] / 16777216) + 248) . chr((($unicode[$i] / 262144) % 64) + 128) . chr((($unicode[$i] / 4096) % 64) + 128) . chr((($unicode[$i] / 64) % 64) + 128) . chr(($unicode[$i] % 64) + 128);
			}

			if ($unicode[$i] >= 67108864 && $unicode[$i] <= 2147483647) {
				$string .= chr(($unicode[$i] / 1073741824) + 252) . chr((($unicode[$i] / 16777216) % 64) + 128) . chr((($unicode[$i] / 262144) % 64) + 128) . chr(128 + (($unicode[$i] / 4096) % 64)) . chr((($unicode[$i] / 64) % 64) + 128) . chr(($unicode[$i] % 64) + 128);
			}
		}

		return $string;
	}
    
}