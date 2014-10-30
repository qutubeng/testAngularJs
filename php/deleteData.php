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

$id = file_get_contents("php://input");
$id = json_decode($id);

$id = $id->{'id'};

//echo $id;

$userController = new userController();
$userController->deleteDataAction($id);

/*
if(isset($_POST['id'])) {
	$id = $_POST['id'];
	$userController = new userController();
	$userController->deleteDataAction($id);
}
elseif(isset($_GET['id'])) {
    $id = $_POST['id'];
    $userController = new userController();
    $userController->deleteDataAction($id);
}

*/