<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$method = $request->methods;
$maxId = $request->next_max_id;

$obj = new Instagram();
$obj->$method($maxId);

class Instagram {
    public function getInstagramData($maxId) {
        if($maxId != null) {
            $url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=8369795.e8eb661.8546460ceb89437e9af2de1961452b57&max_id={$maxId}";
        }
        else {
//            $url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=8369795.e8eb661.8546460ceb89437e9af2de1961452b57";
            $url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=1549111720.1fb234f.e7a0a37eb2a547a4a8e4b4d384d673c5";
        }

        $curl_connection = curl_init($url);
        curl_setopt($curl_connection, CURLOPT_CONNECTTIMEOUT, 30);
        curl_setopt($curl_connection, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl_connection, CURLOPT_SSL_VERIFYPEER, false);

        $data = json_encode(curl_exec($curl_connection));

        curl_close($curl_connection);

        $data = json_decode($data);
        echo $data;
    }
}
//