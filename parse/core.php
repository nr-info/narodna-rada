<?php
require_once('system/library/phpQuery-onefile.php');
libxml_use_internal_errors(true);

function getPage($url){
    
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
        //return mb_convert_encoding($rsep, 'UTF-8',  mb_detect_encoding($rsep, 'UTF-8, ISO-8859-1', true));
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }
}


function getPageA1($url){
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

function getPageQuery($url){
    return phpQuery::newDocument(getPage($url));
}

function file_get_contents_utf8($fn,$g,$cv) {
    $content = file_get_contents($fn,$g,$cv);
    return mb_convert_encoding($content, 'UTF-8',
        mb_detect_encoding($content, 'UTF-8, ISO-8859-1', true));
}