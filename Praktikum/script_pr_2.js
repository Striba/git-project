
//Практика: Урок 8: Как сделать слайдер (Carousel)

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n );// значит плюс+ или равно = эн
	}

function currentSlide(n) {
	showSlides(slideIndex = n);
	}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length ){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	//Прячем неактивные слайды:
	for(i=0; i < slides.length; i++){
		slides[i].style.display = "none";
		
	}
	
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
		
	}
	
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active"; 
	
}

//Практика: Урок 9:Как сделать фильтрацию на сайт.

function myFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase(); //получаем значение из переменной input и переводим его в верхний регистр.
	ul = document.getElementById("myUl");
	li = ul.getElementsByTagName("li");
	
	for(i=0; i<li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1){  /*Свойство innerHTML устанавливает или получает всю разметку и содержание внутри данного элемента.

Например,
var contents = elem.innerHTML
elem.innerHTML = '<p>test!</p>'*/
			/*indexOf

Синтаксис

str.indexOf(searchValue[, fromIndex])
Аргументы

searchValue
искомая подстрока
fromIndex
позиция, с которой начинать поиск: от 0 до длины строки-1
Описание, примеры

Поиск осуществляется слева направо. Метод чувствителен к регистру символов.

1
"Привет, мир".indexOf("Привет")    // вернет 0
2
"Привет, мир".indexOf("Корова")    // вернет -1
3
"Привет, мир".indexOf("мир")    // вернет 8
4
"Привет, мир".indexOf("Мир") // вернет -1
*/
		li[i].style.display = "";	
		}
		else{
			li[i].style.display = "none";
			
		}
		
	}
}


//Lesson 10: Делаем калькулятор.

function plus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;//получить значение вводимое в элемент с идентификатором n1 и присвоить переменной num1
	num1 = parseInt(num1);//ф-я parseInt - преобразовывает строку в число
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 + num2;
	
	document.getElementById('out').innerHTML = result; //при помощи команды innerHTML меняем ХТМЛ свойства элемента (вставляя значение переменной result) который выбрали в соответсвии с его айди.
	
}

function minus() {
	var num1, num2, result;
	num1 = document.getElementById('n1').value;
	num2 = document.getElementById('n2').value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	
	result = num1 - num2;
	
	document.getElementById('out').innerHTML = result; 
	
}


//Lesson 11: Как работать с API.

function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          //center: {lat: -34.397, lng: 150.644},
		  center: {lat: 34.1034187, lng: -118.43270302},
		  scrollwheel: true,// false - деактивировать колесико масштабирования
          zoom: 8 //цифра зума указывает какой по умолчанию будет показан масшаб заданного местоположения
        });
      }

// Lesson 12: Модальные изображения.
/*
var modalka = document.getElementById('myModalka');
var img = document.getElementById('myImg');
var modalkaImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

img.onclick = function () {
	modalka.style.display = 'block';
	modalkaImg.src = this.src;//подставить значение src  элемента var img = document.getElementById('myImg'); в значение var modalkaImg = document.getElementById('img01');  
	captionText.innerHTML = this.alt;//подставит значение alt элемента var img = document.getElementById('myImg'); в значение  var captionText = document.getElementById('caption');
}

var span = document.getElementsByClassName('close')[0];// в span у нас заносится массив с элементами определенного имени класса, и мы выбераем его первый, точнее нулевой элемент
//Фунцкия для крестика отключение модального окна:
span.onclick = dunction () {
	midalka.style.display = 'none';
	
	
}


*/

















