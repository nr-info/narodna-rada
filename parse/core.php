<?php
require_once('system/library/phpQuery-onefile.php');
libxml_use_internal_errors(true);

function getPage($url){
    try {
        return file_get_contents($url);
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }
}

function getPageQuery($url){
    return phpQuery::newDocument(getPage($url));
}