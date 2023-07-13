var USD = 10900;
var EURO = 12272.64;

var visitAbroad = 500;
var fullTour = 250;
var muzeum = 120;

var fullCost =(visitAbroad * USD + fullTour * USD + muzeum * EURO);


var amountMoney = prompt("Qancha pul sarf qilolasiz sayohat uchun? (USD da tasvirlasangiz, iltimos)") * USD;

if (amountMoney >= fullCost) {
    alert("Siz sayohatga chiqa olasiz, umid qilamizki bizning kompaniya bilan shartnoma qilasiz");
} else {
    alert("Uzr sizda sayohat uchun yetarli mablag' mavjud emas")
};