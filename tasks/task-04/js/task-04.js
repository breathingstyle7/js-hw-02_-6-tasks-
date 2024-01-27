

const userCredits = 23580
const pricePerDroid = 3000
let totalPrice
let currentBalance
let messageProductQuantity = prompt("Введіть к-ть телевізорів, яку хочете замовити");
messageProductQuantity = parseFloat(messageProductQuantity);


if (messageProductQuantity === null) {
    alert("Операцію скасовано!")
} else {
    totalPrice = (pricePerDroid * messageProductQuantity);
    if (userCredits < totalPrice) {
        alert("Недостатньо коштів на рахунку!")
    } else {
        currentBalance = (userCredits - totalPrice)
        alert(`Ви купили таку к-ть телевізорів -  ${messageProductQuantity}, на рахунку залишилось ${currentBalance}`);
    }
} 