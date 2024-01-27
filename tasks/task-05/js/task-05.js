alert("Перелік країн в які можлива відправка товару: Китай, Чилі, Австралія, Індія, Ямайка, Україна, Польща")

let countryName = prompt("Введіть будь ласка назву країни в яку необхідно оформити доставку!")
countryName = countryName.toLowerCase();

alert(`Ви обрали країну: ${countryName}`)

// Оскільки масиви не вчили, хоч і сам до кінця не знаю як працюють, я знаю що таке є і прекрасно розумію,
// що з їхньою допомогою можна реалізувати краще, але не використовуватиму їх по першій причині.

const countryChina = "китай", chinaCost = 100;
const countryChile = "чилі", chileCost = 250;
const countryAustralia = "австралія", australiaCost = 170;
const countryIndia = "індія", indiaCost = 80;
const countryJamaica = "ямайка", jamaicaCost = 120;
const countryUkraine = "україна", ukraineCost = 50;
const countryPoland = "польща", polandCost = 150;

if (countryName === countryChina) {
    alert(`Доставка в країну ${countryChina} буде коштувати ${chinaCost} юань`)
} else if (countryName === countryChile) {
    alert(`Доставка в країну ${countryChile} буде коштувати ${chileCost} Чилійських песо`)
} else if (countryName === countryAustralia) {
    alert(`Доставка в країну ${countryAustralia} буде коштувати ${australiaCost} Австралійських долларів`)
} else if (countryName === countryIndia) {
    alert(`Доставка в країну ${countryIndia} буде коштувати ${indiaCost} Індійських рупій`)
} else if (countryName === countryJamaica) {
    alert(`Доставка в країну ${countryJamaica} буде коштувати ${jamaicaCost} Ямайських долларів`)
} else if (countryName === countryUkraine) {
    alert(`Доставка в країну ${countryUkraine} буде коштувати ${ukraineCost} Українських гривень`)
} else if (countryName === countryPoland) {
    alert(`Доставка в країну ${countryPoland} буде коштувати ${polandCost} Польських злотих`)
} else {
    alert("У вашій країні доставка не доступна")
}
