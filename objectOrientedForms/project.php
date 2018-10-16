<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>project</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
</head>
<body>
<?php if (empty($_POST)) {$_POST = json_decode(file_get_contents("php://input"), true) ? : [];} ?>

Your project name:  <?php echo $_POST["name"]; ?><br>
Your project description is: <?php echo $_POST["description"]; ?>

</body>
</html

