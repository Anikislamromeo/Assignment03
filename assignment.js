// https://github.com/Anikislamromeo/Assignment03


// problem 01: kilometerToMeter

function kilometerToMeter(kilometer) {
    var findMeter = kilometer * 1000;
    return findMeter;
}
var resultMeter = kilometerToMeter(5);
console.log(resultMeter);

//problem 02: budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}

var budgetResult = budgetCalculator(3, 2, 1);
console.log(budgetResult);

// problem 03: hotelCost

function hotelCost(staycount) {
    var totalPrice = 0;
    if (staycount <=10) {
        totalPrice = staycount * 100;
    } else if (staycount <= 20) {
        var firstStayPrice = 10 * 100;
        var secondStay = staycount - 10;
        var secondStayPrice = secondStay * 80;
        var totalPrice = firstStayPrice + secondStayPrice;

    }
    else{
        var firstStayPrice = 10 * 100;
        var secondStayPrice = 10 * 80;
        var thirdStay = staycount - 20;
        var thirdStayPrice = thirdStay * 50;
        var totalPrice = firstStayPrice + secondStayPrice + thirdStayPrice;
    }
    return totalPrice;
}
var totalHotelCost = hotelCost(25);
console.log(totalHotelCost);

// problem 04: megaFriend

function megaFriend(friendsName) {
    var longestName = '#';
    for( var i = 0; i < friendsName.length; i++){
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

var myMegaFriend = megaFriend(['Anik Islam Romeo', 'Abir raihan', 'Araf Ahmed']);
console.log(myMegaFriend);
