var timer = setInterval(main, 100);
var curLevel = 1;
var left = false;
var right = false;
var up = false;
var down = false;
var select = 0;
var ed = false;
var ew = false;
var eww = false;
var ewww = false;
var ewwww = false;
var lied = false;
var strnk = false;
var officers,headless = true;
var yes = 0;
var lover = 0;
var sec = 0;
let frameTime;
var curFrame = 0;
var fps = 30;
var show = false;
var change = false;
var flash = false;
var jail = false;

function main(){
   if(curLevel == 1){level1();}
   if(curLevel == 2){level2();}
   if(curLevel == 3){level3();}
   if(curLevel == 4){level4();}
   if(curLevel == 5){level5();}
   if(curLevel == 6){level6();}
   if(curLevel == 7){level7();}
   if(curLevel == 8){level8();}
   if(curLevel == 9){level9();}
   if(curLevel == 10){level10();}
   if(curLevel == 11){level11();}
   if(curLevel == 12){level12();}
   if(lover == 1){loves();}
   if(lover == 2){notLover();}
   if(jail){jailed();}
}

function level1(){
  var yodaText = "Yoda: See that date me you want, to starbucks we must go";
  var yodaText1 = "Yoda: Quickly we must go.";
  var yodaText2 = "Yoda: *Waves Hand* Sure you are?";
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var upT;
  var downT;
  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.fillRect(0, 0, 800, 600);
  ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 50,canvas.height/2 - 200, 400, 250);
  ctx.drawImage(img1, 0, 800-425, 800, 225);
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 0){ctx.fillText(yodaText, 20, 800-390);}
  if(select == 1){ctx.fillText(yodaText1, 20, 800-390);}
  if(select == 2){
    if(down){ctx.fillStyle = "red";}
    ctx.fillText("NO", 20, 800-365);
    ctx.fillStyle = "white";

    if(up){ctx.fillStyle = "red";}
    ctx.fillText("YES", 20, 800-390);
    ctx.fillStyle = "white";
  }
  if(select == 3){
    if(!down){curLevel = 2;select = 0;}
    if(down){ctx.fillText(yodaText2, 20, 800-390);}
  }
  if(select == 4){
    ctx.fillText(yodaText2, 20, 800-390);
    ctx.fillText("*You feel a strong urge to go to starbucks*", 20, 800-365);
  }
  if(select == 5){
    curLevel = 2;select = 0;
  }
}

function level2(){
  var yodaText = "Yoda: In starbucks we are, order I will go.";
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("starb");
  var img3 = document.getElementById("latte");
  var noYoda = false;
  var latte = true;
  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,0,800,600);
  ctx.drawImage(img1, 0, 800-425, 800, 225);
  if(select == 0){ctx.font = "24px Arial";ctx.fillStyle = "white";ctx.fillText(yodaText, 20, 800-390);}
  if(select == 1){noYoda = true;ctx.font = "24px Arial";ctx.fillStyle = "white";ctx.fillText("*Yoda went to order some coffee*", 20, 800-390);}
  if(select == 2){noYoda = false; latte = false;ctx.font = "24px Arial";ctx.fillStyle = "white";ctx.fillText("Yoda: Back I am, Got you Latte I did.", 20, 800-390);ctx.fillText("You: Thanks.", 20, 800-365);}
  if(!noYoda){ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 50,canvas.height/2 - 200, 400, 250);}
  if(!latte){ctx.drawImage(img3,250,220,57,91.4);}
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 3){ctx.fillText("Yoda:*Gives Latte*", 20, 800-390);ctx.fillText("How did he know I wanted latte?", 20, 800-365);}
  if(select == 4){ctx.fillText("Yoda:*Gives Latte*", 20, 800-390);ctx.fillText("How did he know I wanted latte?", 20, 800-365);ctx.fillText("Does he have somekind of Psychic powers?", 20, 800-340);}
  if(select == 5){ctx.fillText("Yoda: Tell me about yourself can you?", 20, 800-390);}
  if(select == 6){
  if(down){ctx.fillStyle = "red";}
  ctx.fillText("NO", 20, 800-365);
  ctx.fillStyle = "white";

  if(up){ctx.fillStyle = "red";}
  ctx.fillText("YES", 20, 800-390);
  ctx.fillStyle = "white";
}
  if(select == 7){
    if(down){noYoda = true; wave = true;ctx.fillText("Yoda: *Waves Hand*", 20, 800-390);ctx.fillText("Yoda: Want to know you I do.", 20, 800-365);}
    if(!down){ctx.fillText("You: I was Born at a young age.", 20, 800-390);}
  }
  if(select == 8){
    if(down){ctx.fillText("*You want to tell Yoda your life story.*", 20, 800-390);}
    if(!down){ctx.fillText("You: I was Born at a young age.", 20, 800-390);ctx.fillText("Yoda: Very interesting this is.", 20, 800-365);}
  }
  if(select == 9){
    if(!down){ctx.fillText("Yoda: Very interesting this is.", 20, 800-365);}
    if(down){down = false; select = 7;}
  }
  if(select == 10){ctx.fillText("Yoda: How old you are?", 20, 800-390);}
  if(select == 11){ctx.fillText("You: Oh shit!", 20, 800-390);}
  if(select == 12){ctx.fillText("You: Oh shit!", 20, 800-390);ctx.fillText("You: I might be too young.", 20, 800-365);}
  if(select == 13){ctx.fillText("You: Oh shit!", 20, 800-390);ctx.fillText("You: I might be too young.", 20, 800-365);ctx.fillText("You: Should I lie?.", 20, 800-340);}
  if(select == 14){
    if(down){ctx.fillStyle = "red";}
    ctx.fillText("LIE", 20, 800-365);
    ctx.fillStyle = "white";

    if(up){ctx.fillStyle = "red";}
    ctx.fillText("TELL THE TRUTH", 20, 800-390);
    ctx.fillStyle = "white";
  }
  if(select == 15){if(down){ctx.fillText("You: I uhmm... I am... I am 19!", 20, 800-390);}if(!down){ctx.fillText("You: I am 17, I am sorry.", 20, 800-390);}}
  if(select == 16){if(down){ctx.fillText("Yoda: Very Good this is, of age you are.", 20, 800-390);}if(!down){ctx.fillText("Yoda: ... Very dissappointed I am.", 20, 800-390);}}
  if(select == 17){if(down){ctx.fillText("Yoda: Take you to my place I will", 20, 800-390);}if(!down){ctx.fillText("Yoda:*Waves Hand*", 20, 800-390);}}
  if(select == 18){if(down){ctx.fillText("Yoda: Take you to my place I will.", 20, 800-390);ctx.fillText("Yoda: Down the road it is.", 20, 800-365);}if(!down){ctx.fillText("Yoda:*Waves Hand*", 20, 800-390);ctx.fillText("Yoda: Are you sure you're not of age?", 20, 800-365);}}
  if(select == 19){if(down){ctx.fillText("Yoda: Take you to my place I will", 20, 800-390);ctx.fillText("Yoda: Down the road it is.", 20, 800-365);ctx.fillText("Yoda: Go we must.", 20, 800-340);}if(!down){select++;}}
  if(select == 20){if(down){ctx.fillText("*You leave with Yoda*", 20, 800-390);}if(!down){ctx.fillText("*You feel like you're 21*", 20, 800-390);ctx.fillText("*You leave with Yoda*", 20, 800-365);}}
  if(select == 21){select = 0; curLevel = 3;}
}

function level3(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("frntd");
  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-170,800,600);
  ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 75,canvas.height/2 - 100, 300, 175);
  ctx.drawImage(img1, 0, 800-425, 800, 225);
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 1){ctx.fillText("Yoda: To my crib I welcome you.", 20, 800-390);}
  if(select == 2){ctx.fillText("Yoda: To my crib I welcome you.", 20, 800-390);ctx.fillText("Yoda: My friends whole fortune it cost me.", 20, 800-365);}
  if(select == 3){ctx.fillText("Yoda: To my crib I welcome you.", 20, 800-390);ctx.fillText("Yoda: My friends whole fortune it cost me.", 20, 800-365);ctx.fillText("Yoda: Inside let's head.", 20, 800-340);}
  if(select == 4){ctx.fillText("*You go inside*", 20, 800-390);}
  if(select == 5){select = 0; curLevel = 4;}
}

function level4(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("setup");
  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-170,800,600);
  ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 75,canvas.height/2 - 100, 400, 250);
  ctx.drawImage(img1, 0, 800-425, 800, 225);
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 1){ctx.fillText("Yoda: My gaming setup this is.", 20, 800-390);}
  if(select == 2){ctx.fillText("Yoda: My gaming setup this is.", 20, 800-390);ctx.fillText("Yoda: Two RTX 3090's it has.", 20, 800-365);}
  if(select == 3){ctx.fillText("*You are immediately turned on*", 20, 800-390);}
  if(select == 4){ctx.fillText("Yoda: Interested in the bedroom you might be?", 20, 800-390);}
  if(select == 5){
    if(down){ctx.fillStyle = "red";}
    ctx.fillText("NO", 20, 800-365);
    ctx.fillStyle = "white";

    if(up){ctx.fillStyle = "red";}
    ctx.fillText("YES", 20, 800-390);
    ctx.fillStyle = "white";
  }
  if(select == 6){
    if(!down){ctx.fillText("Yoda: Then go there we will.", 20, 800-390);}
    if(down){ctx.fillText("Yoda: *Waves Hand*", 20, 800-390);}
  }
  if(select == 7){
    if(!down){up = false; select = 0; curLevel = 5;}
    if(down){ctx.fillText("Yoda: *Waves Hand*", 20, 800-390);
    ctx.fillText("Yoda: Interested in the bedroom you are.", 20, 800-365);}
  }
  if(select == 8){ctx.fillText("*You feel as if you want to go into the bedroom*", 20, 800-390);}
  if(select == 9){ctx.fillText("*You go into the room*", 20, 800-390);}
  if(select == 10){down = false; select = 0; curLevel = 5;}
}

function level5(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("bdrm");
  var img3 = document.getElementById("stronk");
  strnk = false;
  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-170,800,600);
  ctx.drawImage(img1, 0, 800-425, 800, 225);
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 1){ctx.fillText("Yoda: My bed this is.", 20, 800-390);}
  if(select == 2){ctx.fillText("Yoda: Take My clothes off I must.", 20, 800-390);}
  if(select == 3){strnk = true;ctx.fillText("*Takes off Clothes*", 20, 800-390);}
  if(select == 4){strnk = true;ctx.fillText("Yoda: Get in the bed you will!", 20, 800-390);}
  if(select == 5){curLevel = 6; select = 0;}
  if(!strnk){ctx.drawImage(img,(canvas.width / 2)-(img.width/2) - 75,canvas.height/2 - 150, 350, 175);}
  if(strnk){ctx.drawImage(img3,(canvas.width / 2)-(img.width/2) - 75,canvas.height/2 - 150, 200, 200);}
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
}

function level6(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("fbi");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("bdrm");
  var img3 = document.getElementById("stronk");
  var img4 = document.getElementById("fbiHeadless");
  var img5 = document.getElementById("fbiHead");
  var sound = new Audio("./audio/fbi_1.mp3");
  var soundt = new Audio("./audio/time1.mp3");
  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-170,800,600);
  ctx.drawImage(img1, 0, 800-425, 800, 225);
  ctx.drawImage(img3,((canvas.width / 2)-(img.width/2) - 75),canvas.height/2 - 150, 200, 200);
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 0){officers = true; headless = true; ctx.fillText("Yoda: Feel their presence I can.", 20, 800-390);}
  if(select == 1){officers = true; headless = true; ctx.fillText("Yoda: Feel their presence I can.", 20, 800-390);ctx.fillText("You: Whose presence?", 20, 800-365);}
  if(select == 2){officers = true; headless = true; ctx.fillText("Yoda: Theirs.", 20, 800-390);}
  if(select == 3){officers = true; headless = true; if(!ew){sound.play(); ew = true;}}
  if(!officers){ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 300,canvas.height/2 - 150, -200, 300);ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 360,canvas.height/2 - 150, -200, 300);ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 420,canvas.height/2 - 150, -200, 300);ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 480,canvas.height/2 - 150, -200, 300);ctx.drawImage(img1, 0, 800-425, 800, 225);}
  officers = false;
  if(select == 4){headless = true; ctx.fillText("FBI: Stop right there, we are lucky to have caught you now.", 20, 800-390);}
  if(select == 5){headless = true; ctx.fillText("Yoda: Ho, made a grave mistake you have officers.", 20, 800-390);}
  if(select == 6){headless = true; ctx.fillText("Yoda: Ho, made a grave mistake you have officers.", 20, 800-390);ctx.fillText("Yoda: For you not know what my powers are.", 20, 800-365);}
  if(select == 7){headless = true; ctx.fillText("Yoda: Lived this long without powers I couldn't", 20, 800-390);}
  if(select == 8){headless = true; ctx.fillText("Yoda: Lived this long without powers I couldn't", 20, 800-390);ctx.fillText("Yoda: End your life here does.", 20, 800-365);}
  if(select == 9){headless = true; if(!eww){soundt.play(); eww = true;}}
  if(select == 10){headless = false; officers = true; yes = 500;}
  if(select == 11){headless = true; officers = true;ctx.fillText("Yoda: Leave we must, on the way more are.", 20, 800-390);}
  if(!headless){ctx.drawImage(img4,(canvas.width / 2)-(img.width/2) + 300,canvas.height/2 - 150, -200, 300);ctx.drawImage(img4,(canvas.width / 2)-(img.width/2) + 360,canvas.height/2 - 150, -200, 300);ctx.drawImage(img4,(canvas.width / 2)-(img.width/2) + 420,canvas.height/2 - 150, -200, 300);ctx.drawImage(img4,(canvas.width / 2)-(img.width/2) + 480,canvas.height/2 - 150, -200, 300);ctx.drawImage(img1, 0, 800-425, 800, 225);}
  if(select == 12){headless = true; officers = true;ctx.fillText("Yoda: Leave we must, on the way more are.", 20, 800-390);ctx.fillText("Yoda: Quickly before they get here let's go .", 20, 800-365);}
  if(select == 13){headless = true; officers = true;ctx.fillText("Yoda: *Puts On Clothes*", 20, 800-390);}
  if(select == 14){headless = true; officers = true;select = 0; down = false; up = false; curLevel = 7;}
}

function level7(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("alleyway");
  var img3 = document.getElementById("fbi");
  var img4 = document.getElementById("fbiFlipped");
  var img5 = document.getElementById("fbiClose");
  strnk = false;
  var move = 0;
  var yoda = true;
  var close = false;
  var officers = false;
  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-170,800,600);
  if(select == 4){yoda = false;}
  if(select == 5){yoda = false;}
  if(select == 6){yoda = false;}
  if(select == 7){yoda = false;officers =  true;}
  if(select == 8){yoda = false;close = true;}
  if(select == 9){yoda = false;close = true;}
  if(select == 10){yoda = false;close = true;}
  if(select == 11){yoda = false;close = true;}
  if(select == 12){yoda = false;close = true;}
  if(select == 13){yoda = false;close = true;}
  if(select == 14){yoda = false;close = true;}
  if(officers){ctx.drawImage(img4,(canvas.width / 2)-(img.width/2),canvas.height/2 - 220, 100, 150);}
  if(close){ctx.drawImage(img5,(canvas.width / 2)-(img.width/2),canvas.height/2 - 220, 320, 377);}
  if(yoda){ctx.drawImage(img,(canvas.width / 2)-(img.width/2) + 275,(canvas.height/2 - 100) + move, 300, 175);}
  ctx.drawImage(img1, 0, 800-425, 800, 225);
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 1){ctx.fillText("Yoda: This way we must go.", 20, 800-390);}
  if(select == 2){ctx.fillText("Yoda: This way we must go.", 20, 800-390);ctx.fillText("Yoda: Limited my powers are, hold them off for longer I can't.", 20, 800-365);}
  if(select == 3){ctx.fillText("Yoda: This way we must go.", 20, 800-390);ctx.fillText("Yoda: Limited my powers are, hold them off for longer I can't.", 20, 800-365);ctx.fillText("Yoda: Vanish I must, find me they will.", 20, 800-340);}
  if(select == 4){ctx.fillText("*BLUP*", 20, 800-390);}
  if(select == 5){ctx.fillText("You: Where did he go?", 20, 800-390);}
  if(select == 6){ctx.fillText("FBI: She's over here!", 20, 800-390);}
  if(select == 7){ctx.fillText("FBI: She's over here!", 20, 800-390);}
  if(select == 8){ctx.fillText("Officer: Hello there.", 20, 800-390);}
  if(select == 9){ctx.fillText("Officer: Hello there.", 20, 800-390);ctx.fillText("Officer: Have you seen yoda?", 20, 800-365);}
  if(select == 10){ctx.fillText("Officer: Hello there.", 20, 800-390);ctx.fillText("Officer: Have you seen yoda?", 20, 800-365);ctx.fillText("Officer: He's about 2 feet tall.", 20, 800-340);}
  if(select == 11){ctx.fillText("Officer: Hello there.", 20, 800-390);ctx.fillText("Officer: Have you seen yoda?", 20, 800-365);ctx.fillText("Officer: He's about 2 feet tall.", 20, 800-340);ctx.fillText("You: Yeah he just vanished.", 20, 800-315);}
  if(select == 12){ctx.fillText('Officer: What to you mean "Vanished".', 20, 800-390);}
  if(select == 13){ctx.fillText('Officer: What to you mean "Vanished".', 20, 800-390);ctx.fillText("You: He just disappeared.", 20, 800-365);}
  if(select == 14){ctx.fillText("Officer: We have to take you into the police station.", 20, 800-390);}
  if(select == 15){yoda = false;close = false; select = 0; down = false; up = false; curLevel = 8;}
}

function level8(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("inter");
  var img3 = document.getElementById("stronk");
  strnk = false;
  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-170,800,600);
  //ctx.drawImage(img,(canvas.width / 2)-(img.width/2) - 75,canvas.height/2 - 150, 350, 175);
  ctx.drawImage(img1, 0, 800-425, 800, 225);
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 1){ctx.fillText("Officer: Do you know yoda?", 20, 800-390);}
  if(select == 2){ctx.fillText("Officer: Do you know yoda?", 20, 800-390);ctx.fillText("You: Yes, but not much. We went on a date and then went to his place.", 20, 800-365);}
  if(select == 3){ctx.fillText("Officer: Do you know yoda?", 20, 800-390);ctx.fillText("You: Yes, but not much. We went on a date and then went to his place.", 20, 800-365);ctx.fillText("Officer: How old are you?", 20, 800-340);}
  if(select == 4){ctx.fillText("Officer: Do you know yoda?", 20, 800-390);ctx.fillText("You: Yes, but not much. We went on a date and then went to his place.", 20, 800-365);ctx.fillText("Officer: How old are you?", 20, 800-340);ctx.fillText("You: I am 17.", 20, 800-315);}
  if(select == 5){ctx.fillText("Officer: Do you know yoda?", 20, 800-390);ctx.fillText("You: Yes, but not much. We went on a date and then went to his place.", 20, 800-365);ctx.fillText("Officer: How old are you?", 20, 800-340);ctx.fillText("You: I am 17.", 20, 800-315);ctx.fillText("Officer: Oh shit.", 20, 800-290);}
  if(select == 6){ctx.fillText("Officer: Would you like to help us catch yoda?", 20, 800-390);}
  if(select == 7){
    if(down){ctx.fillStyle = "red";}
    ctx.fillText("NO", 20, 800-365);
    ctx.fillStyle = "white";

    if(up){ctx.fillStyle = "red";}
    ctx.fillText("YES", 20, 800-390);
    ctx.fillStyle = "white";
  }
  if(select == 8){
    select = 0;
    if(down){ select = 0;lover = 1;}
    if(up){ select = 0;lover = 2;}
    if(!down && !up){}
  }
}

function loves(){
  curLevel = 101;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("inter");
  var img3 = document.getElementById("stronk");

  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-170,800,600);
  ctx.drawImage(img1, 0, 800-425, 800, 225);

  if(select == 0){ctx.fillText("Officer: So you won't help us catch yoda?", 20, 800-390);}
  if(select == 1){ctx.fillText("Officer: So you won't help us catch yoda?", 20, 800-390);ctx.fillText("You: No!", 20, 800-365);}
  if(select == 2){ctx.fillText("Officer: So you won't help us catch yoda?", 20, 800-390);ctx.fillText("You: No!", 20, 800-365);ctx.fillText("You: Then you will go to jail for a long time!", 20, 800-340);}
  if(select == 3){select = 0; jail = true;}
}

function jailed(){
  curLevel = 101;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("jail");
  var img3 = document.getElementById("first");

  ctx.fillStyle = "#000000";
  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,0,800,600);
  ctx.fillStyle = "#000000";
  if(select == 1){ctx.drawImage(img3,0,0,800,600);}
  if(select == 2){ jail = false;select = 0; lover = 0;curLevel = 1; }
}

function notLover(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("inter");
  var img3 = document.getElementById("fbiClose");

  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-170,800,600);
  ctx.drawImage(img1, 0, 800-425, 800, 225);

  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 0){ctx.fillText("Officer: So you're in.", 20, 800-390);}
  if(select == 1){ctx.fillText("Officer: So you're in.", 20, 800-390);ctx.fillText("Officer: Awesome.", 20, 800-365);}
  if(select == 2){ctx.fillText("Officer: So you're in.", 20, 800-390);ctx.fillText("Officer: Awesome.", 20, 800-365);ctx.fillText("Officer: We will catch that filthy 700y/o dissappointment.", 20, 800-340);}
  if(select == 3){ctx.fillText("Officer: Let's go.", 20, 800-390);}
  if(select == 4){ down = false; up = false;select = 0; curLevel = 9; lover = 0;}
}

function level9(){
  curLevel = 9;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("oldHome");
  var img3 = document.getElementById("agent");

  var sound = new Audio("./audio/obj.mp3");

  ctx.drawImage(img2,0,-200,800,600);
  ctx.drawImage(img3,(800-235)-70,50,235,326);
  ctx.drawImage(img1, 0, 800-425, 800, 225);

  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 0){ctx.fillText("Officer: We're here.", 20, 800-390);}
  if(select == 1){ctx.fillText("Officer: We're here.", 20, 800-390);ctx.fillText("You: what is this place?.", 20, 800-365);}
  if(select == 2){ctx.fillText("Officer: We're here.", 20, 800-390);ctx.fillText("You: what is this place?.", 20, 800-365);ctx.fillText("Officer: This is Yoda's old home.", 20, 800-340);}
  if(select == 3){ctx.fillText("Officer: We're here.", 20, 800-390);ctx.fillText("You: what is this place?.", 20, 800-365);ctx.fillText("Officer: This is Yoda's old home.", 20, 800-340);ctx.fillText("Officer: This could be his secret hide out.", 20, 800-315);}
  if(select == 4){if(!ewww){sound.volume = 0.2; sound.play(); ewww = true;}ctx.fillText("Officer: what was that sound?", 20, 800-390);}
  if(select == 5){ctx.fillText("Officer: what was that sound?", 20, 800-390);ctx.fillText("Officer: Could it be yoda?", 20, 800-365);}
  if(select == 6){curLevel = 10; select = 0;}
}

function level10(){
  curLevel = 10;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var img = document.getElementById("yoda1");
  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("kitchen");
  var img3 = document.getElementById("agentB");
  var img4 = document.getElementById("you");

  var sound = new Audio("./audio/s.mp3");
  var soundt = new Audio("./audio/time1.mp3");

  var you = true;

  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-200,800,600);
  ctx.drawImage(img3,(800-235)-170,50,329,456);
  if(select >= 15){you = false;}
  if(you){ctx.drawImage(img4,40,20,329,456);}
  ctx.drawImage(img1, 0, 800-425, 800, 225);

  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 0){ctx.fillText("Officer: What a disgusting mess.", 20, 800-390);}
  if(select == 1){ctx.fillText("Officer: What a disgusting mess.", 20, 800-390);ctx.fillText("Officer: Could yoda be here??.", 20, 800-365);}
  if(select == 2){ctx.fillText("Officer: What a disgusting mess.", 20, 800-390);ctx.fillText("Officer: Could yoda be here??.", 20, 800-365);ctx.fillText("Officer: Hiding maybe.", 20, 800-340);}
  if(select == 3){ctx.fillText("Yoda *Silently*: Where my watch could be?", 20, 800-390);}
  if(select == 4){if(!ewwww){sound.volume = 0.2; sound.play(); ewwww = true;}ctx.fillText("Officer: ...", 20, 800-390);}
  if(select == 5){ctx.fillText("Officer: HE'S HERE!!!!!", 20, 800-390);}
  if(select == 6){ctx.fillText("Officer: You can't hide Yoda.", 20, 800-390);}
  if(select == 7){ctx.fillText("Yoda: Oh shit.", 20, 800-390);}
  if(select == 8){ctx.fillText("Yoda: Oh shit.", 20, 800-390);ctx.fillText("Yoda: F'd up I have.", 20, 800-365);}
  if(select == 9){ctx.fillText("Officer: Come out you stupid little rat.", 20, 800-390);}
  if(select == 10){ctx.fillText("Officer: Come out you stupid little rat.", 20, 800-390);ctx.fillText("Yoda: Go I must.", 20, 800-365);}
  if(select == 11){ctx.fillText("Officer: Come out you stupid little rat.", 20, 800-390);ctx.fillText("Yoda: Go I must.", 20, 800-365);ctx.fillText("Yoda: Stay here I cannot.", 20, 800-340);}
  if(select == 12){ctx.fillText("Yoda: Smell her I can.", 20, 800-390);}
  if(select == 13){ctx.fillText("Yoda: Smell her I can.", 20, 800-390);ctx.fillText("Yoda: Take her with me I must.", 20, 800-365);}
  if(select == 14){ctx.fillText("Officer: You're going to jail for a long ti...", 20, 800-390);setInterval(function(){sec += 1;}, 100);if((!ed) && (sec >= 25)){sound.volume = 1; soundt.play(); ed = true; sec = 0;}}
  if(select == 15){ctx.fillText("Officer: ...me", 20, 800-390);}
  if(select == 16){ctx.fillText("Officer: HUHHH?", 20, 800-390);}
  if(select == 17){ctx.fillText("Officer: Where'd she go?", 20, 800-390);}
  if(select == 18){curLevel = 11; select = 0;}
}

function level11(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var img1 = document.getElementById("sp");
  var img2 = document.getElementById("dark");
  var img3 = document.getElementById("yoda1");

  var sound = new Audio("./audio/s.mp3");
  var soundt = new Audio("./audio/time1.mp3");

  ctx.clearRect(0, 0, 800, 600);
  ctx.drawImage(img2,0,-100,800,600);
  ctx.drawImage(img3,(800-235)-170,250,300,175);
  ctx.drawImage(img1, 0, 800-425, 800, 225);

  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  if(select == 0){ctx.fillText("Yoda: Why with the police you came?.", 20, 800-390);}
  if(select == 1){ctx.fillText("Yoda: Why with the police you came?.", 20, 800-390);ctx.fillText("You: Wha.., How did I get here?.", 20, 800-365);}
  if(select == 2){ctx.fillText("Yoda: Why with the police you came?.", 20, 800-390);ctx.fillText("You: Wha.., How did I get here?.", 20, 800-365);ctx.fillText("Yoda: A question ask you I did.", 20, 800-340);}
  if(select == 3){ctx.fillText("Yoda: Why with the police you came?.", 20, 800-390);ctx.fillText("You: Wha.., How did I get here?.", 20, 800-365);ctx.fillText("Yoda: A question ask you I did.", 20, 800-340);ctx.fillText("Yoda: Answer me you must.", 20, 800-315);}
  if(select == 4){ctx.fillText("You: I.. I.. I came.. I came to catch you.", 20, 800-390);}
  if(select == 5){ctx.fillText("Yoda: ...", 20, 800-390);}
  if(select == 6){ctx.fillText("Yoda: Love me you don't?", 20, 800-390);}
  if(select == 7){ctx.fillText("You: I'm sorry I just feel that...", 20, 800-390);setInterval(function(){sec += 1;}, 100); if(sec >= 40){ctx.fillText("Yoda: Shut up.", 20, 800-365);}}
  if(select == 8){ctx.fillText("Yoda: *Waves Hand*", 20, 800-390);}
  if(select == 9){ctx.fillText("Yoda: *Waves Hand*", 20, 800-390);ctx.fillText("Yoda: Love me you do.", 20, 800-365);}
  if(select == 10){ctx.fillText("*You fell in love with yoda instantly*", 20, 800-390);}
  if(select == 11){ctx.fillText("You: I love you yoda.", 20, 800-390);}
  if(select == 12){ctx.fillText("You: I love you yoda.", 20, 800-390);ctx.fillText("Yoda: Knew it in my heart I did.", 20, 800-365);}
  if(select == 13){ctx.fillText("You: Yoda.", 20, 800-390);}
  if(select == 14){ctx.fillText("You: Yoda.", 20, 800-390);ctx.fillText("Yoda: hmmm what honey.", 20, 800-365);}
  if(select == 15){ctx.fillText("You: How did you teleport me here?", 20, 800-390);}
  if(select == 16){ctx.fillText("You: How did you teleport me here?", 20, 800-390);ctx.fillText("You: And why did you live in that house?", 20, 800-365);}
  if(select == 17){ctx.fillText("Yoda: Bring back memories this does.", 20, 800-390);}
  if(select == 18){ctx.fillText("Yoda: Tell you about my old life I must.", 20, 800-390);}
  if(select == 19){select = 0; playAnim("anim1",".jpg",12,11,12,1,1);}
}

/*function loveAnim(){
  curLevel = 10000;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  fps = 30;
  var cor;
  curFrame = 1;
  img.src = "./img/yodanim/anim1/f00.jpg"

  if(select == 0){
    frameTime = setInterval(function(){
      ctx.drawImage(img, 0, 0, 800, 600);
      if(curFrame < 10){cor = "0";}else{cor = "";}
      img.src = './img/yodanim/Frames/f'+ cor + curFrame + ".jpg";
      if(curFrame >= 74){clearInterval(frameTime);select = 1; curLevel = 12;}
      curFrame++;
    },(1000/fps));

  }
}*/

function playAnim(location, format, framerate, stop, level,sel,lead,audio,yo,text,loc){
  curLevel = 10000;
  if(sound != " "){var sound = new Audio(audio);sound.play();}
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  fps = framerate;
  var cor;
  curFrame = 1;
  if(lead == 1){img = document.getElementById(location + "f00");}
  if(lead == 2){img = document.getElementById(location + "f000");}

    frameTime = setInterval(function(){
      console.log(img);
      ctx.drawImage(img, 0, 0, 800, 600);
      if(lead == 1){if(curFrame < 10){cor = "0";}else{cor = "";}}
      if(lead == 2){
        if(curFrame < 10){cor = "00";}
        if((curFrame >= 10)&&(curFrame < 100)){cor = "0";}
        if(curFrame >= 100){cor = "";}
      }

      img = document.getElementById(location + 'f'+ cor + curFrame);

      if(yo){ctx.fillText(text, 20, loc);}
      if(curFrame >= stop){clearInterval(frameTime);select = sel;curLevel = level; curFrame = 0;}

      curFrame++;
    },(1000/fps));
}

/*function playAnim(location, format, framerate, stop, level,sel,lead,audio,yo,text,loc){
  curLevel = 10000;
  if(sound != " "){var sound = new Audio(audio);sound.play();}
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  fps = framerate;
  var cor;
  curFrame = 1;
  if(lead == 1){img.src = location + "f00" + format;}
  if(lead == 2){img.src = location + "f000" + format;}

    frameTime = setInterval(function(){
      ctx.drawImage(img, 0, 0, 800, 600);
      if(lead == 1){if(curFrame < 10){cor = "0";}else{cor = "";}}
      if(lead == 2){
        if(curFrame < 10){cor = "00";}
        if((curFrame >= 10)&&(curFrame < 100)){cor = "0";}
        if(curFrame >= 100){cor = "";}
      }
      img.src = location + 'f'+ cor + curFrame + format;

      if(yo){ctx.fillText(text, 20, loc);}
      if(curFrame >= stop){clearInterval(frameTime);select = sel;curLevel = level; curFrame = 0;}

      curFrame++;
    },(1000/fps));
}*/


function level12(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img1 = document.getElementById("sBox");
  var img2 = document.getElementById("new");
  var img3 = document.getElementById("yonos");
  var img4 = document.getElementById("kid");
  var img5 = document.getElementById("wife");
  var img6 = document.getElementById("ket");
  var img7 = document.getElementById("flash");
  var img8 = document.getElementById("sec");
  ctx.clearRect(0, 0, 800, 600);
  if((select >= 4)&&(select <= 8)){change = true;}
  if(select >= 9){flash = true;}
  if(!change){
    ctx.drawImage(img2,0,0,800,600);
    ctx.drawImage(img3,0,0,800,600);
    ctx.drawImage(img1,0,0,800,600);
  }else if((change == true)&&(flash == false)){
    ctx.drawImage(img6,0,0,800,600);
    ctx.drawImage(img3,0,0,800,600);
    ctx.drawImage(img1,0,0,800,600);
  }

  if(flash == true){ctx.drawImage(img7,0,0,800,600);}
  if(select == 2){show = true;}
  if(select >= 4){show = false;}
  if(show){ctx.drawImage(img4,20,200,641/3,680/3);ctx.drawImage(img4,140,170,641/3,680/3);ctx.drawImage(img4,70,230,641/3,680/3);ctx.drawImage(img5,240,230,641/3,680/3);}

  if(select == 1){
    ctx.fillText("Yoda: Like this it always wasn't.", 20, 800-312);
  }

  if(select == 2){ ctx.fillText("Yoda: Like this it always wasn't.", 20, 800-312);ctx.fillText("Yoda: Used to have Wife and kids I did.", 20, 800-287);}
  if(select == 3){ ctx.fillText("Yoda: Like this it always wasn't.", 20, 800-312);ctx.fillText("Yoda: Used to have Wife and kids I did.", 20, 800-287);ctx.fillText("Yoda: Then...", 20, 800-(287-25));}
  if(select == 4){ ctx.fillText("Yoda: Addicted to Ketamine I got.", 20, 800-312);}
  if(select == 5){ ctx.fillText("Yoda: Addicted to Ketamine I got.", 20, 800-312);ctx.fillText("Yoda: Live without it I couldn't.", 20, 800-287);}
  if(select == 6){ ctx.fillText("Yoda: After that, take the kids Karen did.", 20, 800-312);}
  if(select == 7){ ctx.fillText("Yoda: After that, take the kids Karen did.", 20, 800-312);ctx.fillText("Yoda: Fell apart my life did.", 20, 800-287);}
  if(select == 8){playAnim("anim2",".jpg",12,11,12,9,1," ",true,"Yoda: Never recover I did.",800-312);}
  if(select == 9){ctx.fillText("Yoda: Never recover I did.", 20, 800-312);}
  if(select == 10){ctx.fillText("You: But what about those powers of yours?", 20, 800-312);}
  if(select == 11){ctx.fillText("Yoda: ...", 20, 800-312);}
  if(select == 12){ctx.fillText("Yoda: Stop time my powers can.", 20, 800-312);}
  if(select == 13){ctx.fillText("Yoda: In stopped time, gameended the police I did.", 20, 800-312);}
  if(select == 14){playAnim("anim3",".jpg",12,88,12,15,1,"./img/anim3/audio.mp3");}
  if(select == 15){ctx.fillText("Yoda: Then..", 20, 800-312);}
  if(select == 16){playAnim("anim4",".jpg",12,46,12,17,1,"./img/anim4/audio.mp3",true,"Yoda: Moved you out of the house in stopped time I did.", 800-390);}
  if(select == 17){ctx.fillText("Yoda: Know my powers now you do.", 20, 800-312);}
  if(select == 18){ctx.fillText("Yoda: To my bedroom we must go.", 20, 800-312);}
  if(select == 19){ctx.fillText("Yoda: To my bedroom we must go.", 20, 800-312);ctx.fillText("You: sure.", 20, 800-287);}
  if(select == 20){ctx.drawImage(img8,0,0,800,600);}
  if(select == 21){select = 0; lover = 0; curLevel = 1; }
}
function mobile(key){
  if(key == "cont"){select += 1;}
  if(key == "up"){up = true; down = false;}
  if(key == "down"){up = false; down = true;}
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 13:
            select += 1;
            break;
        case 32:
            select += 1;
            break;
        case 37:
            left = true;
            break;
        case 38:
            up = true;
            down = false;
            break;
        case 39:
            right = true;
            break;
        case 40:
            down = true;
            up = false;
            break;
    }
};
