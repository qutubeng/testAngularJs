<?php

if(!isset($_SESSION)) {
	session_start();
	if(!isset($_SESSION['path'])) {
		header("/index.html");
		die();
	}
}

require_once $_SESSION['path'].'/model/Database.php';
require_once $_SESSION['path'].'/controller/userController.php';

/*if(isset($_POST['id'])) {
	$_SESSION['id'] = $_POST['id'];
}*/

if(file_get_contents("php://input")) {
    $id = file_get_contents("php://input");
    $id = json_decode($id);

    $id = $id->{'id'};
    $_SESSION['id'] = $id;
}

//echo $_SESSION['id'];

$userController = new userController();
$user = $userController->editDataAction($_SESSION['id']);
echo json_encode($user);