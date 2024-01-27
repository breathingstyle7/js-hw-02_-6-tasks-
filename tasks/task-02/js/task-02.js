
alert("На складі доступно лише 100 товарів!");

const productQuantity = 100;
let orderedProducts = prompt("Введіть к-ть товару, яку бажаєте замовити");
orderedProducts = parseFloat(orderedProducts);


if (orderedProducts === null) {
    console.log("Покупець відхилив замовлення");
} else if (isNaN(orderedProducts)) {
    alert("Ви ввели недійсні числа або символи, спробуйте ввести числа без знаків");
} else if (orderedProducts = productQuantity) {
    alert("На складі недостатня к-ть товару!");
} else if (orderedProducts <= productQuantity) {
    alert(`Вітаємо! Ви замовили товару на таку к-ть - ${orderedProducts}. Замовлення оформлено, очікуйте на повідомлення з номером ТТН`);
}