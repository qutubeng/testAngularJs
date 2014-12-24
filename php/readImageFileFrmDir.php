<?php

//$dir = "F:/Pictures/Sweden/QutubGraduation/QutubGraduation/";
//$dir = "https://www.dropbox.com/sh/mp3qn15w7p0cm9l/AACZtdPxw8CqMTr5wJ_UsAOMa?dl=0";
//$filenameArray = [];
//// Open a directory, and read its contents
//if (is_dir($dir)){
//    if ($dh = opendir($dir)){
//        while (($file = readdir($dh)) !== false){
//            if(str_replace(".", "", $file) !="") {
//                array_push($filenameArray, [
//                    'image' => $file
//                    ]);
//            }
//        }
//        closedir($dh);
//    }
//}

//echo json_encode($filenameArray);
//echo json_decode($filenameArray);

$$url = "https://www.dropbox.com/sh/mp3qn15w7p0cm9l/AACZtdPxw8CqMTr5wJ_UsAOMa?dl=0";
$curl_connection = curl_init($url);
curl_setopt($curl_connection, CURLOPT_CONNECTTIMEOUT, 30);
curl_setopt($curl_connection, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl_connection, CURLOPT_SSL_VERIFYPEER, false);

$data = json_encode(curl_exec($curl_connection));

curl_close($curl_connection);

$data = json_decode($data);
echo $data;