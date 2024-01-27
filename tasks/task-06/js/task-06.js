let total = 0;
let input;

while (true) {
    input = prompt("Введіть число");

    if (input === null) {
        alert("Ви ввели некоректні дані або скасували дію");
        break;
    }

    let userParseNumber = parseFloat(input);

// використав !isNaN для того, щоб по дефолту давало буль true, тим самим роблю перевірку на число

    if (!isNaN(userParseNumber)) {
        total += userParseNumber;
        alert(`Поточна сума: ${total}`);
    } else {
        alert("Введено нечислове або некоретне значення, спробуй ще раз");
    }
}

alert(`Загальна сума введених вами чисел: ${total}`);