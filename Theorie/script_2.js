// JavaScript Document

//prompt("Was schaust du mich so blöd an?",23);

//meinWunsch = prompt("Was schaust du mich so blöd an?","Will dich einfach in den Arsch tretten!!!:-)");

//alert('Mein Wunsch ist:' + meinWunsch);
//"Will dich einfach in den Arsch tretten!!!:-)"
//"Was schaust du mich so blöd an?"

//result = confirm('Frage?');

//var year = prompt('Какой сейчас год?','');

//if(year != 2017) alert ('FALSCH!!! BITCH!');//Если хотим выдать одно сообщение можно просто без фигурных скобок

//if(year != 2017)                //Если несколько сообщений, то уже нужны фигурные скобки
//{
//alert ('FALSCH!!! BITCH!');
//alert ('Wie kann man denn so dumm sein?');
//
//}
//else
//{
//alert('Ja wohl kleiner!!! Ganz genau und richtig!!!:-)');
//}
//
//if(year > 2017)
//{
//alert('Шлишком поздно дубина!');
//}
//else if(year < 2017)
//{
//alert('Шлишком рано, мляха муха!');
//}
//else
//{
//alert('Умница, то шо нада!:-)');
//}


//Исспользование вопросительного знака: условие ? значение1 : значение2
//Пример:
//var company = prompt('Какая компания создала JS?', '');
//(company == 'Netscape') ?
//alert('You are right BABY!!!') : alert('WRONG! BITCH!');


//var i = 0;
//while(i<3)
//{
//alert('Iterration number is:: ' + i);
//i++;
//}

//var z;
////for(начало;условие;шаг) {тело цикла}
//for(z=0;z<3;z++)
//{
//alert('Iterration through FOR LOOP for Z is::' + z);
//}

////Так же переменную можно объявить и в цикле:
//for(var z=0;z<3;z++)
//{
//alert('Iterration through FOR LOOP for Z is::' + z);
//}


////Так же так же можно пропускать части в цикле for:
//var z=0
//for(;z<3;z++)
//{
//alert('Iterration through FOR LOOP for Z (пропущена часть) is::' + z);
//}

//Так же существует специальная конструкция for...in для перебора объектов, но это будет рассмотренно в разделе с объектами


//// break прерывает весь цикл и передает управлению дальнейшим нижестоящим командам.
//var sum = 0;
//while(true)
//{
////var value=+prompt('Enter a number here quickly!:','');//Будет складывать как числа введенные значения
//var value=prompt('Enter a number here quickly UP!:','');//Будет складывать как строки введенные значения
//if (!value) break;
//sum += value;
//
//}
//
//alert('Summary is::' + sum);


////continue - прерывает только текущую итерацию цикла
//for(var i = 0; i<10; i++)
//{
//if(i % 2 == 0 ) continue;
//alert('Current i iterration is ::' + i);//Если делится на 2 без остатка, то показывает значение, в противном случае пропускает итерацию.
//
//}

////Можно было и обернуть в фигурные скобки условие, но тогда ухудшается читаемость кода!
//for(var i = 0; i<10; i++)
//{
//  if(i % 2 )
//	{
//	alert('Current i iterration IS ::' + i);//Если делится на 2 без остатка, то показывает значение, в противном случае пропускает итерацию.
//	}
//}

//ARRAYS

//var arr = [];
//arr = ['Arsch','Matthias','Chisto','John','Bastian'];
//
//alert('Dein Vorname jetzt ist:: ' + arr[1]);
//
//arr[1] = 'Muhambe :-)';
//
//alert('Aber jetzt dein Vorname ist nun:: ' + arr[1]);
//
//alert('Die laenge des folgendenArrays ist:: ' + arr.length);
//
//
//alert(arr);

//var arr = [];
////arr = [1,'Matthias',{name: Chisto},'John',true];
//arr = ['Arsch','Matthias','Chisto','John','Bastian'];

//var y;
//y = arr.pop();//Выберает и удаляет последний элемент массива
//alert(arr);
//alert(y);
//
//arr.push('Bin wieder DA!');//ф-я добавляет элемент в конец массива
//
//alert(arr);
//
//arr.shift();//ф-я выбирает первый элемент массива и удаляет его
//
//alert(arr);
//
//arr.unshift('Bin DAZUZUGELEGT!');//ф-я добавляет элемент в начало массива
//
//alert(arr);


//function eat(arr)
//{
//arr.pop();
//}
//
//alert('Die actuelle Arrays Laenge betraegt:  ' + arr.length);
//eat(arr);
//eat(arr);
//alert('Die actuelle Arrays Laenge betraegt nun:  ' + arr.length + '  elemene sind:  ' + arr);


//var names = "Suka!, Bidlo!, Ham, Murlo";
//alert(names);
//
//var arri = names.split(", ");
//
//for (var i = 0; i<arri.length; i++){
//alert('Listen to me! You are full ' + arri[i]);
//}

//var buchstaben = "Michael";
//alert(buchstaben.split(''));
//
//var arr = ['Misha', 'Pasha', 'Sasha', "Masha"];
//alert(arr);
//alert(arr.join('-'));
//
//alert(new Array(4).join("Fiki? "));

//var arr = ['Ich','gehe','nach','Hause'];
//alert(arr);
//delete arr[1];
//alert(arr);
//alert(arr[1]);// undefined выведет потому что удалена была только пара ключ-элемент, а промежуток пустой остался. Поэтому для полного удаления с начала и конца применяются ранее рассмотренные методы shift() , pop() соответственно

//var arr = ['Ich','gehe','nach','Hause'];
//alert(arr);
////arr.splice(1,1);//начиная с позиции первой один удалить элемент - удалить полностью, т.е. и пустое место тоже, сдвинув элементы справа на лево
//arr.splice(1,2);//начиная с позиции первой два элемента удалить (т.е. в нашем случае элементы arr[1], arr[2]) - удалить полностью, т.е. и пустое место тоже, сдвинув элементы справа на лево
//alert(arr);
//alert(arr[1]);

//var arr = ['Ich','gehe','nach','Hause'];
//alert(arr);
//arr.splice(1,2, 'gehen','zu');//удалит и заменит на заданные 2 элемента начиная с первого
//alert(arr);

//var arr = ['Ich','gehe','nach','Hause'];
//alert(arr);
//arr.splice(1,0, 'gehen','zu');//вставит с первого места те элемены которые мы задали, а остальные просто подвинет вправо! ничего при этом не удалив
//alert(arr);

//var arr = [1, 2];
//var newArr = arr.concat(3, 4);
//
//alert( newArr ); // 1,2,3,4

//var arr = [1, 2, 3];
//arr.reverse();
//alert( arr ); // 3,2,1

//var arr = [1, 2];
//var newArr = arr.concat([3, 4], 5); // то же самое, что arr.concat(3,4,5)
//alert( newArr ); // 1,2,3,4,5

//function showMessage(){
//	alert("Hallochen!");
//}
//
//showMessage();
//showMessage();


////Создаем наш первый объект с заданными свойствами:
//var myFriend = {
//	"name" 		: "John",
//	"legs" 		: 2,
//	"friends" 	: 50,
//	"the drink" : 'Wiski'
//	};
//
////Есть 2 способа доступа к свойствам данного объекта:
//// 1- с помощью точки (если простое название св-ва):
//var nameOfFriend = myFriend.name;
//alert('Mein Colleges Name ist: ' + nameOfFriend);
////2 - квадратными скобками (если название содержит пробелы и другие сиволы не выводимые в рамках кода):
//var getraenkVonCollege = myFriend["the drink"];
//alert("Er trinkt immer nur : " + getraenkVonCollege);
////Так же квадратные скобки применяются для доступа переменной к самому св-ву. Может быть полезным для перебора списка св-в объекта или для реализации поиска.
//var testObj = {
//	12	: "Rate",
//	23	: "Schwein",
//	35	: "Arschloch",
//	71	: "Wasserpferd"
//	};
//	
//var teilnehmerNummer = 35;
//var teilnehmer = testObj[teilnehmerNummer];//Оч хорошо, значит сюда можно переменные вставлять!!!
//alert('Der Teilnehmer Nummer : ' + teilnehmerNummer + ' ist ' + teilnehmer);
//
////замена значений свойств:
//myFriend.name = 'Robbert';
//nameOfFriend = myFriend.name;
//alert('Nun mein Colleges Neme hat sich geaendert und lautet: ' + nameOfFriend );
//
////добавить свойство:
//myFriend["hobby"] = 'faulenzen';
//var hobbyOfFriend = myFriend.hobby;
//alert('Mein Collegen Hobby ist : ' + hobbyOfFriend);
//
////удаление свойств:
//delete myFriend.hobby;
//var hobbyOfFriend = myFriend.hobby;
//alert('Mein Collegen Hobby ist vielleich : ' + hobbyOfFriend);
//
////так же в качестве значения можно задать и другой объект (Пример объект вложен в объект и содержит еще 2 объекта:):
//var myStorage = {
//	"car"	:{
//			inside	:{
//						"glove box" 		: "maps",
//						"passenger seat"	: "crumbs"
//				},
//			outside	:{
//				
//						"trunk" 			: "Jack"
//				}
//		}
//	};
//var gloveBoxContent = myStorage.car.inside["glove box"];
//alert(gloveBoxContent);

//Перебор св-в объекта. 
////Последовательно переберается каждое свойство объекта "obj" и имя каждого св-ва будет занесено в "key" и вызванно тело цикла	
//for (key in obj){
//	
//	
//	}
////Так же в цикле может быть объявлена и сама переменная:
//for (var key in obj){
//	
//	
//	}
//	
//for (var propName in obj){
//  
//  
//  }

////Example for menu creation:
//var menu = {
//		"width"	: 400,
//		"height": 200,
//		"title"	: "Menu"
//	};
////for (var key in menu){
////	alert('Unser Schluessel ist: ' + key + ' und unser Wert ist: ' + menu[key]);
////	};
//
////Узнать сколько свойств хранит наш объект:
//var counter = 0;
//for (var key in menu){
//	counter++;
//	};
//alert(counter);
//
//
//var user = {
//	name	: "Roma",
//	surname	: "Petrov"
//	};
//user.age = 25;
//for (var prop in user){
//	alert(prop);
//	};//Порядок выводит такой как и у нас задан в объекте
//
//
//var codes = {
//	"5"		: "Poland",
//	"73"	: "Ukraine",
//	"37"	: "USA"
//	};
////user.age = 25;
//for (var prop in codes){
//	alert(prop);
//	};//Порядок выводит по возрастанию чисел!!!!
//	
//var codes = {
//	"-5"		: "Poland",
//	"-73"	: "Ukraine",
//	"-37"	: "USA"
//	};
////user.age = 25;
//for (var prop in codes){
//	alert(prop);
//	};//Порядок выводит такой как и у нас задан в объекте!!!!


//

//var now = new Date();
//alert('Данные времени и даты на сегодня на сейчас: ' + now);//выдасть полную информацию: Данные времени и даты на сегодня на сейчас: Fri Nov 24 2017 12:19:21 GMT+0200 (Eastern Europe Standard Time)
//
////Можем задать интересующий нас формат и заданными константами. Пример:(год, месяц, день, время(часы, минуты, секунды, милисекунды))
//var now = new Date(2007, 0,1,0,0,0,0);
//alert('Данные времени и даты на сегодня на сейчас в заданном нами формате: ' + now);//Данные времени и даты на сегодня на сейчас в заданном нами формате: Mon Jan 01 2007 00:00:00 GMT+0200 (Eastern Europe Standard Time)
//
////Так же можем исспользовать компоненты нашей даты:
////Вывести тлько год:
//alert(now.getFullYear());//2007
////Вывести только месяц:
//alert(now.getMonth());//0 - январь нулевой месяц. Отсчет месяцев ведется как в массиве с нуля
////Вывести только дату(день месяца):
//alert(now.getDate());
////Вывести часы:
//alert(now.getHours());
////Вывести минуты:
//alert(now.getMinutes());
//alert(now.getSeconds());
//alert(now.getMilliseconds());
////День недели:
//alert(now.getDay());//неделя в JS начинается с воскресенье, т.е. это ноль и суббота соответственно 6
//
////Все вышеуказанные методы предназначены для местной временной зоны. Зону можно специальными командами тоже менять.

//Встроен автоматический корректировщик тады:
//var now = new Date(2009, 4 ,46);//типа 46ое мая 2009го
//alert('Дата 46 мая 2009 в корректном исполнении : ' + now);// Mon Jun 15 2009 00:00:00 GMT+0300 (Eastern Europe Daylight Time)
//
////Получение даты к примеру добавленной с каким-то заданным колличеством дней. Мол на высокостный год плевать, она сама все знает.
//var d = new Date(2012,1,28);
//d.setDate(d.getDate() + 2);
//alert("Incteased day of 2 looks like: " + d);

////Так же можно получить дату к примеру опережающую заданную на 70 секунд:
//var d = new Date();
//d.setSeconds(d.getSeconds() + 70);
//alert("Incteased date of 70 sec looks like: " + d);
//
////Так же можно установить нулевые и даже отрицательные компоненты. Пример:
//d.setDate(1);
//alert('Changed Date: ' + d);//Changed Date: Wed Nov 01 2017 13:17:05 GMT+0200 (Eastern Europe Standard Time)
//d.setDate(0);
//alert('Zero Date is: ' + d);//Zero Date is: Tue Oct 31 2017 13:17:05 GMT+0200 (Eastern Europe Standard Time)
//// Т.е. просто вывело последнее число предидущего месяца :-)
//
////Основные способы доступа к объектам элемнта вебдокумента:
////Для получения доступа к элементу по айди, нужно воспользоваться методом getElementById('идентификатор нашего элемента'):
//var element = document.getElementById('header');
//console.log(element);


//Получение доступа к элементу по названию ТЭГа:
var divs = document.getElementsByTagName('div');
//Получение доступа к элементу по названию Class:
var links = document.getElementsByClassName('my-link');	
//Выводим полученные значения в консоль:
console.log('collection of TAG name: ' + divs);
console.log('collection of CLASS name: ' + links);
	