//Hi GIT

//Ф-я выводит выбранный элемент оптиона.
function fun3(){
	var sel = document.getElementById('mySelect').selectedIndex;//Выбирает индекс заданного элемента
	var options = document.getElementById('mySelect').options;//Выбирает содержимое отприона заданного элемента
	alert('Выбрана опция : ' + options[sel].text);//Выводит текст отпитона заданного элемента
}


//Ф-я выводит изменения значения ползунка:
function fun4(){
	var rng = document.getElementById('r1');
	var p = document.getElementById('two');
	p.innerHTML = rng.value; //Передаем ткущие значения переменной rng в параграф p
}

//Ф-я выводит изменения значения ползунка в input:
function fun5(){
	var rng = document.getElementById('r2');
	var i1 = document.getElementById('three');
	i1.value = rng.value; //Передаем ткущие значения переменной rng в параграф текущее значение инпута: i1
}

//Ф-я выводит изменения значения ширины блока div в зависимости от значения ползунка:
function fun6(){
	var rng = document.getElementById('r3');
	var div = document.getElementById('test');
	div.style.width = rng.value + 'px'; //Передаем ткущие значения переменной rng значению параметра width переменной div
}


//Ф-я генератор значений ЦСС:
function fun_generetor(){
	var rtl = document.getElementById('rtl').value;
	var ttl = document.getElementById('ttl');// input type="text" идет без value!!! т.к. мы это значение будем присваивать ниже от инпута type="range"
	var rtr = document.getElementById('rtr').value;
	var ttr = document.getElementById('ttr');
	var rbr = document.getElementById('rbr').value;
	var tbr = document.getElementById('tbr');
	var rbl = document.getElementById('rbl').value;
	var tbl = document.getElementById('tbl');

	var block = document.getElementById('block');
	
	//Передаем на прямую в значение value элемента ДОМ input с идентификатором  id="ttl" значение переменной: rtl
	ttl.value = rtl;
	ttr.value = rtr;
	tbr.value = rbr;
	tbl.value = rbl;
	
	//Задаем скуругление блоку с помощью записи:
	block.style.borderRadius = rtl + "px " + rtr + "px " + rbr + "px " + rbl + "px ";

}

 
//Lesson 4: Пишем выпадающее меню.
//Событие mouseover происходит, когда мышь появляется над элементом, а mouseout – когда уходит из него
//Например, в обработчике события mouseover:

//event.target – элемент, на который пришла мышь, то есть на котором возникло событие.
//event.relatedTarget – элемент, с которого пришла мышь.

document.getElementById('nav').onmouseover = function(event){
	var target = event.target; //Заносим в переменную текущий элемент на котором произошло событие, т.е. будем отслеживать где был клик
	if(target.className == "menu-item"){
		var s = target.getElementsByClassName('submenu')
		closeMenu();//закрываем меню
		s[0].style.display = 'block';// в переменной s будет находится массив из одного элемента, который содержит вложенное меню. Обращаться  к нему можно с помощью идентификатора s[0]
		
	}
}

//ф-я отслеживает положение мыши и проверяет элементы под курсором. Если эти элементы не являются меню menu-item или submenu, то будет закрывать все скрытые меню:
document.onmouseover= function (event) {
	var target = event.target;
	//console.log(event.target);//Можно и заэкранить, это нужно только для отладки, т.к. в консоле будет постоянно сообщать где сейчас мышь.
	if (target.className != 'menu-item' && target.className != 'submenu'){
		closeMenu();
	}
}

//ф-я  скрывает все блоки подменю:
function closeMenu(){
	var menu = document.getElementById('nav');
	var subm = document.getElementsByClassName('submenu');
	for (var i=0; i<subm.length; i++){
		subm[i].style.display = 'none';//скрывает отображение текущего номера меню из массива
	}
}


//Lesson 5: Делаем вкладки - табы.
var tab;
var tabContent;

window.onload = function () {
	tabContent = document.getElementsByClassName('tabContent');//Получаем массив с элементами данного класса
	tab = document.getElementsByClassName('tab');//Получаем массив с элементами данного класса
	hideTabsContent(1);  
}

//Ф-я скрытия вкладок (при клике на содержании т.е. на tabContent):
function hideTabsContent(a){ 
	for (var i = a; i < tabContent.length; i++){ //Запускает цикл от заданного параметра до окончания массива tabContent 
	tabContent[i].classList.remove('show');//Каждому элемнту tabContent удаляется класс show
	//В JavaScript свойство classList получает доступ к атрибуту class добавленного к элементу HTML. Манипуляции со строками позволяют добавлять, изменять и удалять классы современным способом.
//	Методы classList:
//
//  classList.add( String [,String] ) — добавляет элементу класс.
//  classList.remove( String [,String] ) — удаляет у элемента класс.

	tabContent[i].classList.add('hide');//добавляет подкласс в этом случае
	tab[i].classList.remove('whiteborder');// удаляет подкласс в этом случае
	}
}

//Ф-я скрытия вкладок (при клике на заголовке вкладки т.е. на tab):
//Ф-я отслеживает все клики в области где есть идентификатор tabs: 
document.getElementById('tabs').onclick = function (event){
	var target = event.target;
	if (target.className == 'tab'){
		for (var i = 0; i<tab.length; i++){
			if (target == tab[i]){
				showTabContent(i);
				break;
			}
		}
	}
}

//Ф-я отображающая содержимое Tab:
function showTabContent(b){
	if(tabContent[b].classList.contains('hide')){ //classList.contains ( String ) Проверяет, есть ли указанный класс для элемента (вернет true или false).
		hideTabsContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}


//Практика: Урок 6: Создаем модальные окна:

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];//значение первого (нулевого элемента) этого массива отбираем в переменную

//При клике на кнопку должно создаваться наше модальное окно:
btn.onclick = function () {
	modal.style.display = "block";// задаем значение показывать элемент как блочный
}

//Ф-я закрытия модального окна:
span.onclick = function () {
	modal.style.display = 'none';// скрываем окно
}

//Ф-я если пользователь кликает вокруг нашего окна, а не только по кнопке:
window.onclik = function (event) {
	if (event.target){
		modal.style.display = "none";
	}
}

//Практика: Урок 7: Анимация

function myMove() {
	var elem = document.getElementById('myAnimation');
	var pos = 0;
	var id = setInterval(frame, 10);//Установили, что каждые 10 мс будет выполняться ф-я frame пока не сработает ф-я пририывания: clearInterval();
  function frame() {
	  if (pos == 350) {
		  claerInterval(id);
	  }else{
		  pos++;
		  elem.style.top = pos + 'px';//Т.е. пока не сработает граничное условие, пиксельные координаты будут меняться каждые 10мс!!!
		  elem.style.left = pos + 'px';
	  }
	}
}
/*
//Практика: Урок 8: Как сделать слайдер (Carousel)

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex +=n );// значит плюс+ или равно = эн
	}

function currentSlide(n) {
	showSlides(slideIndex =n);
	}

function showSlides() {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length ){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	//Прячем неактивные слайды:
	for(i=0; i < slides.length; i++){
		slides[i].style.display = 'none';
		
	}
	
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
		
	}
	
	slide[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += "active"; 
	
}

*/