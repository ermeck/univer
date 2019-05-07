/* Этот сценарий выводит на экран приветствие пользователю, основываяся на текущем времени */

var today = new Date();           // Создаем новый объект данных
var hourNow = today.getHours();   // Находим текущий час
var greeting;

if (hourNow > 18) {
    greeting = "Добрый вечер!";
} else if (hourNow > 12) {
    greeting = "Добрый день!";
} else if (hourNow > 0) {
    greeting = "Доброе утро!";
} else {
    greeting = "Приветствуем!";
}

document.write(greeting);