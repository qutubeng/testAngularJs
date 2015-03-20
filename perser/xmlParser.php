<?php
/**
 * Created by PhpStorm.
 * User: Qutub
 * Date: 13/02/2015
 * Time: 6:05 PM
 */

class xmlParser {
    public function __construct() {

    }

    public function getWorkingDirectory() {
        $path = str_replace("\\", "/", getcwd());
        $path = str_replace("parser", "", $path);

        return $path;
    }

    public function readFile($filePath) {
        if (file_exists('test.xml')) {
            $xml = simplexml_load_file('test.xml');
            print_r($xml);
        } else {
            exit('Failed to open test.xml.');
        }
    }
}
