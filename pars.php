<?php
require_once('parse/slovoidilo_ua/slovoidilo_ua.php');
require_once('parse/rada_oporaua_org/rada_oporaua_org.php');
require_once('parse/w1_c1_rada_gov_ua/w1_c1_rada_gov_ua.php');

header('Content-Type: text/html; charset=utf-8');

//
$slovoidilo = new slovoidilo_ua();
//
//$rada_oporaua_org = new rada_oporaua_org();
//$rada_oporaua_org->list_deputats();

$w1_c1_rada_gov_ua = new w1_c1_rada_gov_ua();

//$w1_c1_rada_gov_ua->Voting_startDate = '27.11.2014';
//$w1_c1_rada_gov_ua->Voting_endDate = date('d.m.Y');
//$w1_c1_rada_gov_ua->json_list_deputats();
//
//$w1_c1_rada_gov_ua->pars_prameters_google_forms('https://docs.google.com/forms/d/e/1FAIpQLSdi_UPgOkmumus4Du8ewS_HrzIVaEV_253mr_fG8KOSTnXSIg/viewform?submit=Submit');


$slovoidilo->pars_prameters_google_forms();