<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kait Tomson</title>

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>
<body>
<?php
if(!empty($_POST)){
    if($_POST["message"]) {
        $conf_subject = 'Käyttäjän Luonti';

        $to      = 'tomsonkait@gmail.com';
        $subject = 'Portfolio Viesti';
        $message = $_POST["message"];
        $headers = 'From: '.$_POST["email"];
        mail($to, $subject, $message, $headers);
        header("Location: ./index.php");
        exit;
    }
}
$page = "contact";
require "./header.php";
?>
<div class="container">
    <div class="container-heading">
            <h1 class="container-title">Ota Yhteyttä</h1>
        </div>
    <form method="post" action="./contact.php">
        <div class="contact-form"> 
            <div class="form-input half">
                <input type="text" name="name" placeholder="Nimi" id="">
                <input type="email" name="email" placeholder="Sähköposti" id="">
            </div>
            <div class="form-input full">
                <textarea name="message" id="" cols="30" rows="8" placeholder="viesti"></textarea>
            </div>
            <div class="form-input full">
                <button type="submit">Lähetä</button>
            </div>
        </div>
    </form>
</div>
</body>
</html>