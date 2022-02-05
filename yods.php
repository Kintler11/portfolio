<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kait Tomson</title>

    <link rel="stylesheet" href="./css/style.css">
    <script type="text/javascript" src="./js/date_game.js"></script>
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
  <div class="game-container">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./img/yoda_ss1.png"></div>
          <div class="swiper-slide"><img src="./img/yoda_ss2.png"></div>
          <div class="swiper-slide"><img src="./img/yoda_ss3.png"></div>
          <div class="swiper-slide"><img src="./img/yoda_ss4.png"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <canvas id="canvas" width="800" height="600"></canvas>

      <div class="img" hidden="true">
        <img src="./img/yoda_date/yoda.png" id="yoda1">
        <img src="./img/yoda_date/starbucks.jpg" id="starb">
        <img src="./img/yoda_date/speechBar.png" id="sp">
        <img src="./img/yoda_date/fontdoor.jpg" id="frntd">
        <img src="./img/yoda_date/lattee.png" id="latte">
        <img src="./img/yoda_date/wave.gif" id="waver">
        <img src="./img/yoda_date/setup.png" id="setup">
        <img src="./img/yoda_date/bedroom.png" id="bdrm">
        <img src="./img/yoda_date/stronk.png" id="stronk">
        <img src="./img/yoda_date/hoes.png" id="fbi">
        <img src="./img/yoda_date/hoesf.png" id="fbiFlipped">
        <img src="./img/yoda_date/hoesH.png" id="fbiHeadless">
        <img src="./img/yoda_date/hoesHead.png" id="fbiHead">
        <img src="./img/yoda_date/alley.png" id="alleyway">
        <img src="./img/yoda_date/fbiclose.png" id="fbiClose">
        <img src="./img/yoda_date/inter.png" id="inter">
        <img src="./img/yoda_date/oldHome.jpg" id="oldHome">
        <img src="./img/yoda_date/agentG.png" id="agent">
        <img src="./img/yoda_date/kitchen.jpg" id="kitchen">
        <img src="./img/yoda_date/agentGback.png" id="agentB">
        <img src="./img/yoda_date/you.png" id="you">
        <img src="./img/yoda_date/dark.jpg" id="dark">
        <img src="./img/yoda_date/new.png" id="new">
        <img src="./img/yoda_date/ket.jpg" id="ket">
        <img src="./img/yoda_date/tYoda.png" id="yonos">
        <img src="./img/yoda_date/box2.png" id="sBox">
        <img src="./img/yoda_date/kid.png" id="kid">
        <img src="./img/yoda_date/wife.png" id="wife">
        <img src="./img/yoda_date/ef.png" id="flash">
        <img src="./img/yoda_date/jail.png" id="jail">
        <img src="./img/yoda_date/end1.png" id="first">
        <img src="./img/yoda_date/end2.png" id="sec">
      </div>

      <div hidden="true">
        <img src="./img/yoda_date/anim1/f00.jpg" id="anim1f00">
        <img src="./img/yoda_date/anim1/f01.jpg" id="anim1f01">
        <img src="./img/yoda_date/anim1/f02.jpg" id="anim1f02">
        <img src="./img/yoda_date/anim1/f03.jpg" id="anim1f03">
        <img src="./img/yoda_date/anim1/f04.jpg" id="anim1f04">
        <img src="./img/yoda_date/anim1/f05.jpg" id="anim1f05">
        <img src="./img/yoda_date/anim1/f06.jpg" id="anim1f06">
        <img src="./img/yoda_date/anim1/f07.jpg" id="anim1f07">
        <img src="./img/yoda_date/anim1/f08.jpg" id="anim1f08">
        <img src="./img/yoda_date/anim1/f09.jpg" id="anim1f09">
        <img src="./img/yoda_date/anim1/f10.jpg" id="anim1f10">
        <img src="./img/yoda_date/anim1/f11.jpg" id="anim1f11">
      </div>
      <div hidden="true">
        <img src="./img/yoda_date/anim2/f00.jpg" id="anim2f00">
        <img src="./img/yoda_date/anim2/f01.jpg" id="anim2f01">
        <img src="./img/yoda_date/anim2/f02.jpg" id="anim2f02">
        <img src="./img/yoda_date/anim2/f03.jpg" id="anim2f03">
        <img src="./img/yoda_date/anim2/f04.jpg" id="anim2f04">
        <img src="./img/yoda_date/anim2/f05.jpg" id="anim2f05">
        <img src="./img/yoda_date/anim2/f06.jpg" id="anim2f06">
        <img src="./img/yoda_date/anim2/f07.jpg" id="anim2f07">
        <img src="./img/yoda_date/anim2/f08.jpg" id="anim2f08">
        <img src="./img/yoda_date/anim2/f09.jpg" id="anim2f09">
        <img src="./img/yoda_date/anim2/f10.jpg" id="anim2f10">
        <img src="./img/yoda_date/anim2/f11.jpg" id="anim2f11">
      </div>
      <div hidden="true">
        <img src="./img/yoda_date/anim3/f00.jpg" id="anim3f00">
        <img src="./img/yoda_date/anim3/f01.jpg" id="anim3f01">
        <img src="./img/yoda_date/anim3/f02.jpg" id="anim3f02">
        <img src="./img/yoda_date/anim3/f03.jpg" id="anim3f03">
        <img src="./img/yoda_date/anim3/f04.jpg" id="anim3f04">
        <img src="./img/yoda_date/anim3/f05.jpg" id="anim3f05">
        <img src="./img/yoda_date/anim3/f06.jpg" id="anim3f06">
        <img src="./img/yoda_date/anim3/f07.jpg" id="anim3f07">
        <img src="./img/yoda_date/anim3/f08.jpg" id="anim3f08">
        <img src="./img/yoda_date/anim3/f09.jpg" id="anim3f09">
        <img src="./img/yoda_date/anim3/f10.jpg" id="anim3f10">
        <img src="./img/yoda_date/anim3/f11.jpg" id="anim3f11">
        <img src="./img/yoda_date/anim3/f12.jpg" id="anim3f12">
        <img src="./img/yoda_date/anim3/f13.jpg" id="anim3f13">
        <img src="./img/yoda_date/anim3/f14.jpg" id="anim3f14">
        <img src="./img/yoda_date/anim3/f15.jpg" id="anim3f15">
        <img src="./img/yoda_date/anim3/f16.jpg" id="anim3f16">
        <img src="./img/yoda_date/anim3/f17.jpg" id="anim3f17">
        <img src="./img/yoda_date/anim3/f18.jpg" id="anim3f18">
        <img src="./img/yoda_date/anim3/f19.jpg" id="anim3f19">
        <img src="./img/yoda_date/anim3/f20.jpg" id="anim3f20">
        <img src="./img/yoda_date/anim3/f21.jpg" id="anim3f21">
        <img src="./img/yoda_date/anim3/f22.jpg" id="anim3f22">
        <img src="./img/yoda_date/anim3/f23.jpg" id="anim3f23">
        <img src="./img/yoda_date/anim3/f24.jpg" id="anim3f24">
        <img src="./img/yoda_date/anim3/f25.jpg" id="anim3f25">
        <img src="./img/yoda_date/anim3/f26.jpg" id="anim3f26">
        <img src="./img/yoda_date/anim3/f27.jpg" id="anim3f27">
        <img src="./img/yoda_date/anim3/f28.jpg" id="anim3f28">
        <img src="./img/yoda_date/anim3/f29.jpg" id="anim3f29">
        <img src="./img/yoda_date/anim3/f30.jpg" id="anim3f30">
        <img src="./img/yoda_date/anim3/f31.jpg" id="anim3f31">
        <img src="./img/yoda_date/anim3/f32.jpg" id="anim3f32">
        <img src="./img/yoda_date/anim3/f33.jpg" id="anim3f33">
        <img src="./img/yoda_date/anim3/f34.jpg" id="anim3f34">
        <img src="./img/yoda_date/anim3/f35.jpg" id="anim3f35">
        <img src="./img/yoda_date/anim3/f36.jpg" id="anim3f36">
        <img src="./img/yoda_date/anim3/f37.jpg" id="anim3f37">
        <img src="./img/yoda_date/anim3/f38.jpg" id="anim3f38">
        <img src="./img/yoda_date/anim3/f39.jpg" id="anim3f39">
        <img src="./img/yoda_date/anim3/f40.jpg" id="anim3f40">
        <img src="./img/yoda_date/anim3/f41.jpg" id="anim3f41">
        <img src="./img/yoda_date/anim3/f42.jpg" id="anim3f42">
        <img src="./img/yoda_date/anim3/f43.jpg" id="anim3f43">
        <img src="./img/yoda_date/anim3/f44.jpg" id="anim3f44">
        <img src="./img/yoda_date/anim3/f45.jpg" id="anim3f45">
        <img src="./img/yoda_date/anim3/f46.jpg" id="anim3f46">
        <img src="./img/yoda_date/anim3/f47.jpg" id="anim3f47">
        <img src="./img/yoda_date/anim3/f48.jpg" id="anim3f48">
        <img src="./img/yoda_date/anim3/f49.jpg" id="anim3f49">
        <img src="./img/yoda_date/anim3/f50.jpg" id="anim3f50">
        <img src="./img/yoda_date/anim3/f51.jpg" id="anim3f51">
        <img src="./img/yoda_date/anim3/f52.jpg" id="anim3f52">
        <img src="./img/yoda_date/anim3/f53.jpg" id="anim3f53">
        <img src="./img/yoda_date/anim3/f54.jpg" id="anim3f54">
        <img src="./img/yoda_date/anim3/f55.jpg" id="anim3f55">
        <img src="./img/yoda_date/anim3/f56.jpg" id="anim3f56">
        <img src="./img/yoda_date/anim3/f57.jpg" id="anim3f57">
        <img src="./img/yoda_date/anim3/f58.jpg" id="anim3f58">
        <img src="./img/yoda_date/anim3/f59.jpg" id="anim3f59">
        <img src="./img/yoda_date/anim3/f60.jpg" id="anim3f60">
        <img src="./img/yoda_date/anim3/f61.jpg" id="anim3f61">
        <img src="./img/yoda_date/anim3/f62.jpg" id="anim3f62">
        <img src="./img/yoda_date/anim3/f63.jpg" id="anim3f63">
        <img src="./img/yoda_date/anim3/f64.jpg" id="anim3f64">
        <img src="./img/yoda_date/anim3/f65.jpg" id="anim3f65">
        <img src="./img/yoda_date/anim3/f66.jpg" id="anim3f66">
        <img src="./img/yoda_date/anim3/f67.jpg" id="anim3f67">
        <img src="./img/yoda_date/anim3/f68.jpg" id="anim3f68">
        <img src="./img/yoda_date/anim3/f69.jpg" id="anim3f69">
        <img src="./img/yoda_date/anim3/f70.jpg" id="anim3f70">
        <img src="./img/yoda_date/anim3/f71.jpg" id="anim3f71">
        <img src="./img/yoda_date/anim3/f72.jpg" id="anim3f72">
        <img src="./img/yoda_date/anim3/f73.jpg" id="anim3f73">
        <img src="./img/yoda_date/anim3/f74.jpg" id="anim3f74">
        <img src="./img/yoda_date/anim3/f75.jpg" id="anim3f75">
        <img src="./img/yoda_date/anim3/f76.jpg" id="anim3f76">
        <img src="./img/yoda_date/anim3/f77.jpg" id="anim3f77">
        <img src="./img/yoda_date/anim3/f78.jpg" id="anim3f78">
        <img src="./img/yoda_date/anim3/f79.jpg" id="anim3f79">
        <img src="./img/yoda_date/anim3/f80.jpg" id="anim3f80">
        <img src="./img/yoda_date/anim3/f81.jpg" id="anim3f81">
        <img src="./img/yoda_date/anim3/f82.jpg" id="anim3f82">
        <img src="./img/yoda_date/anim3/f83.jpg" id="anim3f83">
        <img src="./img/yoda_date/anim3/f84.jpg" id="anim3f84">
        <img src="./img/yoda_date/anim3/f85.jpg" id="anim3f85">
        <img src="./img/yoda_date/anim3/f86.jpg" id="anim3f86">
        <img src="./img/yoda_date/anim3/f87.jpg" id="anim3f87">
        <img src="./img/yoda_date/anim3/f88.jpg" id="anim3f88">
      </div>
      <div hidden="true">
        <img src="./img/yoda_date/anim4/f00.jpg" id="anim4f00">
        <img src="./img/yoda_date/anim4/f01.jpg" id="anim4f01">
        <img src="./img/yoda_date/anim4/f02.jpg" id="anim4f02">
        <img src="./img/yoda_date/anim4/f03.jpg" id="anim4f03">
        <img src="./img/yoda_date/anim4/f04.jpg" id="anim4f04">
        <img src="./img/yoda_date/anim4/f05.jpg" id="anim4f05">
        <img src="./img/yoda_date/anim4/f06.jpg" id="anim4f06">
        <img src="./img/yoda_date/anim4/f07.jpg" id="anim4f07">
        <img src="./img/yoda_date/anim4/f08.jpg" id="anim4f08">
        <img src="./img/yoda_date/anim4/f09.jpg" id="anim4f09">
        <img src="./img/yoda_date/anim4/f10.jpg" id="anim4f10">
        <img src="./img/yoda_date/anim4/f11.jpg" id="anim4f11">
        <img src="./img/yoda_date/anim4/f12.jpg" id="anim4f12">
        <img src="./img/yoda_date/anim4/f13.jpg" id="anim4f13">
        <img src="./img/yoda_date/anim4/f14.jpg" id="anim4f14">
        <img src="./img/yoda_date/anim4/f15.jpg" id="anim4f15">
        <img src="./img/yoda_date/anim4/f16.jpg" id="anim4f16">
        <img src="./img/yoda_date/anim4/f17.jpg" id="anim4f17">
        <img src="./img/yoda_date/anim4/f18.jpg" id="anim4f18">
        <img src="./img/yoda_date/anim4/f19.jpg" id="anim4f19">
        <img src="./img/yoda_date/anim4/f20.jpg" id="anim4f20">
        <img src="./img/yoda_date/anim4/f21.jpg" id="anim4f21">
        <img src="./img/yoda_date/anim4/f22.jpg" id="anim4f22">
        <img src="./img/yoda_date/anim4/f23.jpg" id="anim4f23">
        <img src="./img/yoda_date/anim4/f24.jpg" id="anim4f24">
        <img src="./img/yoda_date/anim4/f25.jpg" id="anim4f25">
        <img src="./img/yoda_date/anim4/f26.jpg" id="anim4f26">
        <img src="./img/yoda_date/anim4/f27.jpg" id="anim4f27">
        <img src="./img/yoda_date/anim4/f28.jpg" id="anim4f28">
        <img src="./img/yoda_date/anim4/f29.jpg" id="anim4f29">
        <img src="./img/yoda_date/anim4/f30.jpg" id="anim4f30">
        <img src="./img/yoda_date/anim4/f31.jpg" id="anim4f31">
        <img src="./img/yoda_date/anim4/f32.jpg" id="anim4f32">
        <img src="./img/yoda_date/anim4/f33.jpg" id="anim4f33">
        <img src="./img/yoda_date/anim4/f34.jpg" id="anim4f34">
        <img src="./img/yoda_date/anim4/f35.jpg" id="anim4f35">
        <img src="./img/yoda_date/anim4/f36.jpg" id="anim4f36">
        <img src="./img/yoda_date/anim4/f37.jpg" id="anim4f37">
        <img src="./img/yoda_date/anim4/f38.jpg" id="anim4f38">
        <img src="./img/yoda_date/anim4/f39.jpg" id="anim4f39">
        <img src="./img/yoda_date/anim4/f40.jpg" id="anim4f40">
        <img src="./img/yoda_date/anim4/f41.jpg" id="anim4f41">
        <img src="./img/yoda_date/anim4/f42.jpg" id="anim4f42">
        <img src="./img/yoda_date/anim4/f43.jpg" id="anim4f43">
        <img src="./img/yoda_date/anim4/f44.jpg" id="anim4f44">
        <img src="./img/yoda_date/anim4/f45.jpg" id="anim4f45">
        <img src="./img/yoda_date/anim4/f46.jpg" id="anim4f46">
      </div>
    </div>
    <div class="game-information">
        <h2 class="information-heading">Yoda Dating-Simulator</h2>
        <h3 class="information-text">
          Peli luotiin ammattikoulun ekaan javascript tehtävään. <br> Pelissä pelaat hahmoa joka mene treffeile Yodan kanssa ja joutuu moneen eri vaikeukseen sitä myötä.
        </h3>
    </div>
</div>
    <!-- Swiper JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
    </script>
</body>
</html>