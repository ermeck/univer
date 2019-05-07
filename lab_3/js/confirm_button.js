function confirm_button() {
    var result = confirm("Если 2 * 2 = 4 нажмите ОК," + "\n" + " в противном случае нажмите Отмена");
    if (result) {
        alert("Молодец!");
    } else {
        alert("Учи таблицу умножения");
    }
}