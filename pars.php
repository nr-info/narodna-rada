<?php
require_once('parse/slovoidilo_ua/slovoidilo_ua.php');
require_once('parse/rada_oporaua_org/rada_oporaua_org.php');
require_once('parse/w1_c1_rada_gov_ua/w1_c1_rada_gov_ua.php');

header('text/html; charset=WINDOWS-1251');


$slovoidilo = new slovoidilo_ua();

$rada_oporaua_org = new rada_oporaua_org();
//$rada_oporaua_org->list_deputats();



$w1_c1_rada_gov_ua = new w1_c1_rada_gov_ua();

$w1_c1_rada_gov_ua->Voting_startDate = '27.08.2018';
$w1_c1_rada_gov_ua->Voting_endDate = date('d-m-Y');
$list = $w1_c1_rada_gov_ua->json_list_deputats();
