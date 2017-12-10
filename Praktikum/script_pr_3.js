//Hi GIT

// Lesson 12: Модальные изображения.

var modalka = document.getElementById('myModalka');
var img = document.getElementById('myImg');
var modalkaImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

img.onclick = function () {
	modalka.style.display = "block";
	modalkaImg.src = this.src;//подставить значение src  элемента var img = document.getElementById('myImg'); в значение var modalkaImg = document.getElementById('img01');  
	captionText.innerHTML = this.alt;//подставит значение alt элемента var img = document.getElementById('myImg'); в значение  var captionText = document.getElementById('caption');
}

var span = document.getElementsByClassName('close')[0];// в span у нас заносится массив с элементами определенного имени класса, и мы выбераем его первый, точнее нулевой элемент
//Фунцкия для крестика отключение модального окна:
span.onclick = function () {
	modalka.style.display = 'none';
	
}


//Lesson 13: Прогресс бар. Как управлять.

function move() {
	var elem = document.getElementById('myBar');
	var width = 10;
	var id = setInterval(frame, 10);
	function frame() {
		if (width>=100){
			clearInterval(id);
		}
		else{
			width++;
			elem.style.width = width + '%';
			document.getElementById('label').innerHTML = width + '%';
		}
	}
}

//Lesson 14: Как сделать Popup.

function myFunctionPop () {
	var popup = document.getElementById('myPopup');
	popup.classList.toggle('show');/*В JavaScript свойство classList получает доступ к атрибуту class добавленного к элементу HTML. Манипуляции со строками позволяют добавлять, изменять и удалять классы современным способом.*/
	/* 
	// переключить класс для элемента section
	  el.classList.toggle('old-class'); // старый класс
	  el.classList.toggle('new-class'); // новый класс
*/
//т.е. на сколько я понимаю в данной ситуации происходит переключение на класс .show
	
}











