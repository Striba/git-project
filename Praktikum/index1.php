<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Практика ДжаваСкрипт</title>
<link rel="stylesheet" href="style.css">
</head>
<body >

<?php //Hi GIT?>

<?php //Lesson 12 Train Brain HTML?>

<input type="checkbox" id="one" onChange="fun1();">

<input type="radio" name="r1" value="5"> 0
<input type="radio" name="r1" value="53"> 1
<input type="radio" name="r1" value="535"> 2

<button onClick = "fun2()">Click me</button>


<select name="" id="mySelect" onChange="fun3()">
  <option value="">Яблоко</option>
  <option value="">Груша</option>
  <option value="">Апельсин</option>
  <option value="">Капуста</option>
</select>

<input type="range" min="0" max="100" step="1" oninput="fun4()" id="r1">
	<p id="two"></p>
    
<input type="range" min="0" max="100" step="2" oninput="fun5()" id="r2">
  <input type="text" id="three">
    
 <input type="range" min="0" max="100" step="2" oninput="fun6()" id="r3">
	<div id="test"></div>
    
    
<div class="block1">
	<p>Верхний левый угол:
    <input type="range" id="rtl" min="0" max="100" value="0" oninput="fun_generetor()">
    <input type="text" id="ttl" value="0">
    </p>
    <p>Верхний правый угол:
    <input type="range" id="rtr"  min="0" max="100" value="0" oninput="fun_generetor()">
    <input type="text" id="ttr" value="0">
    </p>
    <p>Нижний правый угол:
    <input type="range" id="rbr"  min="0" max="100" value="0" oninput="fun_generetor()">
    <input type="text" id="tbr" value="0">
    </p>
    <p>Нижний левый угол:
    <input type="range" id="rbl"  min="0" max="100" value="0" oninput="fun_generetor()">
    <input type="text" id="tbl" value="0">
    </p>
</div>
<div id="block"></div>



<!--Выпадающее меню: -->


<div id="nav">
  <div class="menu-item">
  Меню 1
    <div class="submenu"> 
    Подменю
    </div>
  </div>
  <div class="menu-item">
  Меню 2
    <div class="submenu">
    Подменю 
    </div>
  </div>
  <div class="menu-item">
  Меню 3
    <div class="submenu"> 
    Подменю
    </div>
  </div>
</div>



<!-- Практика: Урок 5: Делаем вкладки - табы.   -->
<div id = "tabs"><!-- Обертка -->
  <div class = "tab whiteborder">Tab 1</div><!--Заголовки вкладок по которым клик мышью--><!-- с пробелом, т.к. первый это надкласс подследующего класса котороый уже через пробел написан, и т.д.!!! -->
  <div class = "tab">Tab 2</div>
  <div class = "tab">Tab 3</div>
  <div class = "tabContent">1</div><!-- Содержимое вкладок -->
  <div class = "tabContent">2</div>
  <div class = "tabContent">3</div>
</div>

<!-- Практика: Урок 6: Создаем модальные окна: -->

<button id="myBtn">Modal Oeffnen</button>
<div id="myModal" class="modal">
	<div class="modal-content">
    <span class="close">&times;</span>
    <p>Modalfenster</p>
    </div>
</div>




<script src="script_pr.js"></script>
<script src="script_pr_1.js"></script>
</body>
</html>
