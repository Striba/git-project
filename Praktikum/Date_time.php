<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Date Js vs PHP</title>
<script>
var now = new Date();
document.write(now + '<br />');//Fri Dec 01 2017 09:59:12 GMT+0200 (Eastern Europe Standard Time)
//Показать строковый формат даты:
document.write(now.toLocaleDateString());//01.12.2017 

//Ф-я устанавливающая время после которого происходит событие:
setTimeout("timeIsOver()", 5000);//через 5000 милисекунд,или 5 сек выполнится действие ф-ции timeIsOver() ВАЖНО!!!: название ф-ции взяли в ковычки: "" иначе она сразу выолняется

function timeIsOver (){
	alert('Time Is Over!!! Bitch!');
	
}

</script>
</head>
<body >
<?php //Hi GIT?>

<?php 

//Datetime():
$now = new DateTime();
echo '<br />'.date_format($now, 'Y/m/d H:i:s').'<br />';// 2017/12/01 10:59:12
echo '<br />'.date_format($now, 'Y/m/d').'<br />';// 2017/12/01
echo '<br />'.date_format($now, 'H:i:s').'<br />';// 11:19:16


// Example 

   $strStart = '2013-06-19 18:25'; 
   $strEnd   = '06/19/13 21:47'; 

$dteStart = new DateTime($strStart); 
   $dteEnd   = new DateTime($strEnd);
    
$dteDiff  = $dteStart->diff($dteEnd);

   print $dteDiff->format("%H:%I:%S");
   echo '<br />';
   print $dteDiff->format("%H:%I"); 

?>




</body>
</html>
