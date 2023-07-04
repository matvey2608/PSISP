//Внешний файл JS

//номер варианта
var n =12;

function formula(a,b,c) {  //4 задание : считаем формулу. библиотека Math
    let otvet = (Math.sqrt(c+2*Math.PI)/Math.abs(b-c))
    - 7*(Math.pow(a,2)-Math.PI)
    return otvet;
  }



  

  var s1= "Я люблю Беларусь";
  var s2="Я учусь в Политехническом колледже";

  var len = s1.length;//длина строки
  var asciiCode = s2[n-1].charCodeAt(0);//получаем код симвоола

var news1 = s1.replace(/Беларусь/g, "Минск");//меняем в строке беларусь на минск

setInterval(function() { //устанавливаем интервал в котором будет что-то происходить
  var browserInfo = "Название браузера: " + navigator.appName + "\nВерсия браузера: " + navigator.appVersion;
  window.open("", "_blank").document.write(browserInfo); //открываем новое окно с названием и версией
}, 3000); //Браузеры по умолчанию это блокируют !!! Чтобы не блокировали нужно поставить в всплывающих настройках не блокировать всплывающие окна
