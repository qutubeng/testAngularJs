<?php

//$dir = "F:/Pictures/Sweden/QutubGraduation/QutubGraduation/";
$dir = "https://www.dropbox.com/photos";
$filenameArray = [];
// Open a directory, and read its contents
if (is_dir($dir)){
    if ($dh = opendir($dir)){
        while (($file = readdir($dh)) !== false){
            if(str_replace(".", "", $file) !="") {
                array_push($filenameArray, [
                    'image' => $file
                    ]);
            }
        }
        closedir($dh);
    }
}

echo json_encode($filenameArray);
//echo json_decode($filenameArray);