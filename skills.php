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
$page = "skills";
require "./header.php";
?>
<div class="container">
    <div class="about-container">
        <div class="about-image">
            <img src="./img/profile.jpg" alt="" srcset="">
        </div>
        <div class="about-info">
            <div class="about-info-heading-small"> Nimeni on</div>
            <div class="about-info-heading"> Kait Tomson</div>
            <div class="about-info-text">
                Full Stack -kehittäjä, kotoisin virosta.</br>
                Opiskelen Datanomi-alaa Salon Seudun Ammattiopistossa, 
                mutta olen harrastanut ohjelmisto- ja nettisivu kehitystä jo hyvin nuoresta asti.
                Olen tehnyt mobiiliäppejä ja niihin tarvittavan hallinta-sivuston Someron ja Salon kaupungille. </br>
                
            </div>
            <div class="about-info-icon">
                <a href="https://www.github.com/Kintler11" class="library-item-platform">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="library-container center">
        <div class="container-heading">
            <h1 class="container-title">Osaamiseni</h1>
        </div>
        <div class="list-item">
            <div class="list-item-head">
            <i class="fad fa-browser"></i>
            </div>
            <div class="list-item-text">
                <div class="list-item-title">Back-End</div>
                <div class="list-item-info">PHP</div>
                <div class="list-item-info">MYSQL</div>
            </div>
        </div>
        <div class="list-item">
            <div class="list-item-head">
            <i class="fad fa-terminal"></i>
            </div>
            <div class="list-item-text">
                <div class="list-item-title">Front-End</div>
                <div class="list-item-info">HTML</div>
                <div class="list-item-info">CSS</div>
                <div class="list-item-info">Javascript</div>
                <div class="list-item-info">React</div>
                <div class="list-item-info">JQuery</div>
                <div class="list-item-info">Bootstrap</div>
            </div>
        </div>
        <div class="list-item">
            <div class="list-item-head">
            <i class="fad fa-code"></i>
            </div>
            <div class="list-item-text">
                <div class="list-item-title">Ohjelmistokehitys</div>
                <div class="list-item-info">C#</div>
                <div class="list-item-info">C++</div>
                <div class="list-item-info">Python</div>
            </div>
        </div>
        <div class="list-item">
            <div class="list-item-head">
            <i class="fad fa-image"></i>
            </div>
            <div class="list-item-text">
                <div class="list-item-title">Mediatuotanto</div>
                <div class="list-item-info">Photoshop</div>
                <div class="list-item-info">Premiere</div>
            </div>
        </div>
    </div>
</div>
</body>
</html>