<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="shortcut icon" href="TemplateData/favicon.ico">
    <link rel="stylesheet" href="TemplateData/style.css">
    <script src="TemplateData/UnityProgress.js"></script>
    <script src="Build/UnityLoader.js"></script>
    <script>
      var unityInstance = UnityLoader.instantiate("unityContainer", "Build/New folder.json", {onProgress: UnityProgress});
    </script>
  </head>
  <body>
  <?php include './header.php'; ?>
<div class="peli">
  <div class="webgl-content">
    <div id="unityContainer" style="width: 70vw; height: 70vh"></div>
    <div class="Game-data">
      <h1>Yoda's Bizzare Adventure</h1>
      <img src="img/layout.png">
    </div>
  </div>
</div>
  </body>
</html>
