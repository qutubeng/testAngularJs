<?php

if(!isset($_SESSION)) {
	session_start();
	if(!isset($_SESSION['path'])) {
		header("/index.html");
		die();
	}
}

require_once $_SESSION['path'].'/model/Employee.php';

class userController {
	public function __construct() {
	}

	public function getUserAction() {
		$employeeModel = new Employee();
		$users = $employeeModel-> getAllUsers();
		echo json_encode($users);
	}

	public function editDataAction($id) {
		$employeeModel = new Employee();
		$users = $employeeModel->getUserByID($id);
		return $users;
	}

	public function processEditAction() {
		$message = array('type' => 0, 'content' => '');
		$employeeModel = new Employee();

        $datetime = date('Y-m-d H:i:s');
        $getJsonData = file_get_contents("php://input");
        $getJsonData = json_decode($getJsonData);

        $id = $getJsonData->{'id'};
        $data = array(
            'name' => $getJsonData->{'name'},
            'age' => $getJsonData->{'age'},
            'company' => $getJsonData->{'company'},
            'lastname' => $getJsonData->{'lastname'},
            'insert_date' => $datetime,
        );

		$save = $employeeModel->updateData($data, $id);
		
		if($save) {
			$message['type'] = 1;
			$message['content'] = $data['name'].' is successfully updated';
		}
		else {
			$message['content'] = "employee save problem";
		}

		if($message['type'] == 0) 
			echo $message['content'];
		else 
			echo $message['type'];
	}

	public function deleteDataAction($id) {
		$employeeModel = new Employee();
		$employeeModel->del($id);

        return $employeeModel;
	}
}