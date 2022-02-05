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
$page = "projects";
require "./header.php";
?>
<div class="container">
        <div class="library-container">
        <div class="container-heading">
            <h1 class="container-title">Työni</h1>
        </div>
        
        <a href="./taskussa.php" class="library-item">
            <div class="library-item-image">
                <img src="./img/taskussa.png" alt="">
            </div>
            <div class="library-item-platforms">
                <div class="library-item-platform">
                    <h2>php</h2>
                </div>
                <div class="library-item-platform">
                    <i class="fab fa-js"></i>
                </div>
                <div class="library-item-platform">
                    <i class="fab fa-html5"></i>
                </div>
                <div class="library-item-platform">
                    <i class="fab fa-css3-alt"></i>
                </div>
            </div>
            <div class="library-item-info">
                <h2 class="library-item-title">Admin Taskussa</h2>
                <h2 class="library-item-description">Somero- ja Salo Taskussa hallinta puoli.</h2>
            </div>
        </a>
        
        <a href="./somerotaskussa.php" class="library-item">
            <div class="library-item-image">
                <img src="./img/somerotaskussa.png" alt="">
            </div>
            <div class="library-item-platforms">
                <div class="library-item-platform">
                    <h2>php</h2>
                </div>
                <div class="library-item-platform">
                    <i class="fab fa-js"></i>
                </div>
                <div class="library-item-platform">
                    <i class="fab fa-react"></i>
                </div>
            </div>
            <div class="library-item-info">
                <h2 class="library-item-title">Somero Taskussa</h2>
                <h2 class="library-item-description">Someron kaupungille tehty kaupunki-sovellus.</h2>
            </div>
        </a>
        
        <a href="./salotaskussa.php" class="library-item">
            <div class="library-item-image">
                <img src="./img/salotaskussa.png" alt="">
            </div>
            <div class="library-item-platforms">
                <div class="library-item-platform">
                    <h2>php</h2>
                </div>
                <div class="library-item-platform">
                    <i class="fab fa-js"></i>
                </div>
                <div class="library-item-platform">
                    <i class="fab fa-react"></i>
                </div>
            </div>
            <div class="library-item-info">
                <h2 class="library-item-title">Salo Taskussa</h2>
                <h2 class="library-item-description">Salon kaupungille tehty kaupunki-sovellus.</h2>
            </div>
        </a>

    </div>
    <div class="library-container">
        <div class="container-heading">
            <h1 class="container-title">Pelit</h1>
        </div>
        
        <a href="./yods.php" class="library-item">
            <div class="library-item-image">
                <img src="./img/date.png" alt="">
            </div>
            <div class="library-item-platforms">
                <div class="library-item-platform">
                    <i class="fab fa-js"></i>
                </div>
                <div class="library-item-platform">
                    <i class="fab fa-html5"></i>
                </div>
            </div>
            <div class="library-item-info">
                <h2 class="library-item-title">Yoda Dating Simulator</h2>
                <h2 class="library-item-description">Käyt treffeillä Yodan kanssa. Mutta mikä tapahtuu sen jälkeen on hyvin järkyttävä. </h2>
            </div>
        </a>
        
        <a href="./yodakart.php" class="library-item">
            <div class="library-item-image">
                <img src="./img/yodakart.png" alt="">
            </div>
            <div class="library-item-platforms">
                <div class="library-item-platform">
                    <h2>C#</h2>
                </div>
            </div>
            <div class="library-item-info">
                <h2 class="library-item-title">Yo Da-Kart</h2>
                <h2 class="library-item-description">Tyttöystäväsi on ryöstetty, sinun täytyy pelastaa hänet.</h2>
            </div>
        </a>
        
        <a href="./tpl.php" class="library-item">
            <div class="library-item-image">
                <img src="./img/timonpommilab.png" alt="">
            </div>
            <div class="library-item-platforms">
                <div class="library-item-platform">
                    <h2>C#</h2>
                </div>
            </div>
            <div class="library-item-info">
                <h2 class="library-item-title">Timon Pommilab</h2>
                <h2 class="library-item-description">Bombermanin tyylinen peli, jossa 2-4 pelaaja yrittää tappaa toisiaan kunnes vain 1 jää jäljelle.</h2>
            </div>
        </a>

        <a href="./chesspy.php" class="library-item">
            <div class="library-item-image">
                <img src="./img/shakkipy.png" alt="">
            </div>
            <div class="library-item-platforms">
                <div class="library-item-platform">
                    <i class="fab fa-python"></i>
                </div>
            </div>
            <div class="library-item-info">
                <h2 class="library-item-title">Shakki.py</h2>
                <h2 class="library-item-description">Pythonissa koodattu shakki-peli, jolla on stockfish tuki.</h2>
            </div>
        </a>


    </div>
</div>
<script src="./js/main.js"></script>
</body>
</html>