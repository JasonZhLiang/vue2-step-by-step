<?php
$status=[];
//$status[] = ['FirstName'=>'Jane', 'Email'=>'project manage'];
//$status[] = ['FirstName'=>'Doe', 'Email'=>'UI designer'];
//$status[] = ['FirstName'=>'Smith', 'Email'=>'Front-end designer'];
//echo(json_encode($status));
header('Content-Type: application/json');
$pdo = new PDO('mysql:host=192.168.1.110:3306;dbname=erp_main', 'jliang', '7zpm9528');
$statement = $pdo->prepare("select * from users LIMIT 3");
$statement->execute();
$status = $statement->fetchAll(PDO::FETCH_CLASS);

//if ($statement->rowCount() > 0) {
//    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
//        $status[] = $row;
//    }
//}

//echo('<pre>'.print_r($status, 1).'</pre><br>');

echo(json_encode($status));



