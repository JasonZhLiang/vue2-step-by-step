<?php
$status=[];

if($_SERVER['REQUEST_METHOD']=='POST') {
    $_POST = json_decode(file_get_contents('php://input'),true);
    if (!empty($_POST['name']) && !empty($_POST['description'])){
        $status['name'] = 'Your Project Name is: '.$_POST['name'];
        $status['description'] = 'Your Project Description is: '.$_POST['description'];
        $status['success'] = true;
        echo(json_encode($status));
    }else{
        echo json_response(422, ['Fields Required!']);
//        throw new Exception("fields are required");
    }
}else{
    echo json_response(500, 'Server Error! Please Try Again!');
//    throw new Exception("cannot find post methods");
}


function json_response($code = 200, $message = null)
{
    // clear the old headers
    header_remove();
    // set the actual code
    http_response_code($code);
    // set the header to make sure cache is forced
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    // treat this as json
    header('Content-Type: application/json');
    $status = array(
        200 => '200 OK',
        400 => '400 Bad Request',
        404 => '404 Not Found',
        422 => 'Unprocessable Entity',
        500 => '500 Internal Server Error'
    );
    // ok, validation error, or failure, set Response Header
    header('Status: '.$status[$code]);
    // return the encoded json
    return json_encode(array(
        'status' => $code < 300, // success or not?
        'message' => $message,
        'description' => ['put an array here']
    ));
}

