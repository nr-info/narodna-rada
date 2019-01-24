<?php
require_once('parse/slovoidilo_ua/slovoidilo_ua.php');
require_once('parse/rada_oporaua_org/rada_oporaua_org.php');


//$slovoidilo = new slovoidilo_ua();

$rada_oporaua_org = new rada_oporaua_org();
$rada_oporaua_org->list_deputats();
