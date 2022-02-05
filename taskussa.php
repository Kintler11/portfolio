<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kait Tomson</title>

    <link rel="stylesheet" href="./css/style.css">
        <!-- Link Swiper's CSS -->
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>
<body>
<?php
$page = "projects";
require "./header.php";
?>
<div class="container">
    <div class="slide-container">
      <div class="pad"></div>
      <div class="image-container">
        <img src="./img/admin_ss1.png" slide="1">
        <img src="./img/admin_ss2.png" style="display:none" slide="2">
        <img src="./img/admin_ss3.png" style="display:none" slide="3">
      </div>
      <div class="image-navigation">
        <div class="navigation-handle active" slide="1">Etusivu</div>
        <div class="navigation-handle" slide="2">Kohteet</div>
        <div class="navigation-handle" slide="3">Tapahtumat</div>
      </div>
    </div>
    <div class="game-information">
        <h2 class="information-heading">Admin Taskussa</h2>
        <h3 class="information-text">
          Somero- ja Salo Taskussa sovelluksen admin osio. Tämä sivusto toimii puhelimella ja tietokonella.
          Sivustoa käytetään Somero ja Salo Taskussa sovelluksen hallintaan
        </h3>
        <a href="https://www.admin.taskussa.info" class="information-link">Sivustoon</a>
    </div>
</div>
<script src="./js/main.js"></script>

</body>
</html>