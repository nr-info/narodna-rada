<?php
include_once '../system/vendor/php-rtf-parser-master/src/Document.php';
include_once '../system/vendor/php-rtf-parser-master/src/Parser.php';
include_once '../system/vendor/php-rtf-parser-master/src/Scanner.php';


$text = file_get_contents("Stat_gol (1).rtf");
$scanner = new RtfParser\Scanner($text);
$parser = new RtfParser\Parser($scanner);
$text = '';
$doc = $parser->parse();
foreach ($doc->childNodes() as $node) {
  $text .= $node->text();
}