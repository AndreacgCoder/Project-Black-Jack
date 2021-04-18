/**
Juego de cartas BlackJack
 **/
import Card from './cards.js';

var cardslist = [];
var handplayer = [];
var handbank = [];
var valueplayer = 0;
var valuebank = 0;


document.getElementById("restart").addEventListener("click", restart);
document.getElementById("stay").addEventListener("click", stay);
document.getElementById("hit").addEventListener("click", hit);
startgame();
updateValue('player');
updateValue('bank');



function startgame(){
    cardslist = newdeck();
    handplayer = firstcards(cardslist);
    handbank = firstcards(cardslist);
    calculateValues();
    document.getElementById("player").innerHTML = document.getElementById("player").innerHTML + newCardPrint(handplayer[0]);
    document.getElementById("player").innerHTML = document.getElementById("player").innerHTML + newCardPrint(handplayer[1]); 
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + newCardPrint(handbank[0]);
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + '<img src="reverso.png" class="reverso"> </img>';
    if(handplayer[0].text =='A' && handplayer[1].text == 'A'){
        handbank[0].value = 11;
        handbank[1].value = 1;
    }
}

function mostrar(){
    document.querySelector("#bank > img.reverso").remove();
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + newCardPrint(handbank[1]);
}

function hit(){
    var card = newCard();
    handplayer.forEach(cardInHand => valueplayer = valueplayer + cardInHand.value);
    if (card.number === 0 || card.number === 26 || card.number===39 || card.number === 13) {
        if (valueplayer+11 > 21 ){
            card.value = 1;
        }
    }
    handplayer.push(card);
    var i;
    valueplayer=0;
    handplayer.forEach(cardInHand => valueplayer = valueplayer + cardInHand.value);
    for( i=0; i<handplayer.length - 1; i++) {
        if (handplayer[i].text == 'A') {
            if (valueplayer > 21){
                handplayer[i].value = 1;
            }
        }
    }
    updateHand(card); 
    updateValue('player');
    if (valueplayer>21) {
        stay();
    }
}

function calculateValues(){
    valueplayer = 0;
    handplayer.forEach(cardInHand => valueplayer = valueplayer + cardInHand.value);
    valuebank = 0;
    handbank.forEach(cardInHand => valuebank = valuebank + cardInHand.value);
    console.log('calculaValues HANDBANK' + handbank);
}

function updateValue(player){
    calculateValues();
    if (player == 'player'){
        document.getElementById("playerValue").innerHTML = "<h2>" + valueplayer + "</h2>";
    } else {
        document.getElementById("bankValue").innerHTML = "<h2>" + valuebank + "</h2>";
    }
}

function stay() {
    var valuebank = 0;
    handbank.forEach(cardInHand => valuebank = valuebank + cardInHand.value);
    mostrar();
    if(handbank[0].text =='A' && handbank[1].text == 'A'){
        handbank[0].value = 11;
        handbank[1].value = 1;
    }
    valuebank = handbank[0].value + handbank[1].value;
    while (valuebank < 17){
        var card = newCard();
        if (card.number === 0 || card.number === 26 || card.number===39 || card.number === 13) {
            if (valuebank + 11 > 21 ){
                card.value = 1;
            }
        }
        handbank.push(card);
        valuebank = 0;
        var i = 0;
        handbank.forEach(cardInHand => valuebank = valuebank + cardInHand.value);
        for( i=0; i<handbank.length - 1; i++) {
            if (handbank[i].text == 'A') {
                if (valuebank > 21){
                    handbank[i].value = 1;
                }
            }
        }
        valuebank=0;
        updateHandBank(card);
        handbank.forEach(cardInHand => valuebank = valuebank + cardInHand.value);
    }
    updateValue('bank');
    result();
}
function result(){
    if((valueplayer > 21 && valuebank > 21) || (valueplayer === valuebank)){
        document.getElementById("resum").innerHTML = "♠ IT'S A DRAW ♠";
    } else if ((valuebank < 21 && valueplayer > 21) || (valuebank <= 21 && valueplayer < valuebank)){
        document.getElementById("resum").innerHTML = "♠ DEALER'S WIN ♠";
    } else if ((handplayer[0].value == 10 && handplayer[1].text=='A') || (handplayer[1].value == 10 && handplayer[0].text=='A')) {
            document.getElementById("resum").innerHTML = "♠ YOU WIN: BLACKJACK ♠";
    } else {
            document.getElementById("resum").innerHTML = "♠ YOU WIN! ♠";
    }
    document.getElementById("stay").disabled = true;
    document.getElementById("hit").disabled = true;
}

function updateHand(card){
    document.getElementById("player").innerHTML = document.getElementById("player").innerHTML + newCardPrint(card);
}

function updateHandBank(card){
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + newCardPrint(card);
}

function newCardPrint(card){
    return "<img class=\"card\" src=\"" + "./imagenes/" + card.number + ".png" + "\"></img>";
}

function firstcards (){
    let cardsHand = [newCard(), newCard()];
    return cardsHand;
}

function newCard (){
    var cardsListSize = cardslist.length - 1;
    var a = Math.floor(Math.random()*cardsListSize);
    var card = cardslist[a];
    if (card.number === 0 || card.number === 26 || card.number===39 || card.number === 13) {
        card.value = 11;
    }
    cardslist.splice(a, 1);
    return card;
}

function restart(){
    handplayer = [];
    handbank = [];
    valuebank = 0;
    valueplayer = 0;
    document.getElementById("player").innerHTML = "";
    document.getElementById("bank").innerHTML = " ";
    document.getElementById("stay").disabled = false;
    document.getElementById("hit").disabled = false;
    startgame();
    updateValue('player');
    document.getElementById("bankValue").innerHTML = "";
    document.getElementById("resum").innerHTML = "";
}

function newdeck (){

    var cardslist = [new Card ("heart", "red", "A", [1,11], 0),
    new Card ("heart", "red", "2", 2, 1),
    new Card ("heart", "red", "3", 3, 2),
    new Card ("heart", "red", "4", 4, 3),
    new Card ("heart", "red", "5", 5, 4),
    new Card ("heart", "red", "6", 6, 5),
    new Card ("heart", "red", "7", 7, 6),
    new Card ("heart", "red", "8", 8, 7),
    new Card ("heart", "red", "9", 9, 8),
    new Card ("heart", "red", "10", 10, 9),
    new Card ("heart", "red", "J", 10, 10),
    new Card ("heart", "red", "Q", 10, 11),
    new Card ("heart", "red", "K", 10, 12),
    new Card ("diamonds", "red", "A", [1,11], 13),
    new Card ("diamonds", "red", "2", 2, 14),
    new Card ("diamonds", "red", "3", 3, 15),
    new Card ("diamonds", "red", "4", 4, 16),
    new Card ("diamonds", "red", "5", 5, 17),
    new Card ("diamonds", "red", "6", 6, 18),
    new Card ("diamonds", "red", "7", 7, 19),
    new Card ("diamonds", "red", "8", 8, 20),
    new Card ("diamonds", "red", "9", 9, 21),
    new Card ("diamonds", "red", "10", 10, 22),
    new Card ("diamonds", "red", "J", 10, 23),
    new Card ("diamonds", "red", "Q", 10, 24),
    new Card ("diamonds", "red", "K", 10, 25),
    new Card ("spades", "black", "A", [1,11], 26),
    new Card ("spades", "black", "2", 2, 27),
    new Card ("spades", "black", "3", 3, 28),
    new Card ("spades", "black", "4", 4, 29),
    new Card ("spades", "black", "5", 5, 30),
    new Card ("spades", "black", "6", 6, 31),
    new Card ("spades", "black", "7", 7, 32),
    new Card ("spades", "black", "8", 8, 33),
    new Card ("spades", "black", "9", 9, 34),
    new Card ("spades", "black", "10", 10, 35),
    new Card ("spades", "black", "J", 10, 36),
    new Card ("spades", "black", "Q", 10, 37),
    new Card ("spades", "black", "K", 10, 38),
    new Card ("clubs", "black", "A", [1,11], 39),
    new Card ("clubs", "black", "2", 2, 40),
    new Card ("clubs", "black", "3", 3, 41),
    new Card ("clubs", "black", "4", 4, 42),
    new Card ("clubs", "black", "5", 5, 43),
    new Card ("clubs", "black", "6", 6, 44),
    new Card ("clubs", "black", "7", 7, 45),
    new Card ("clubs", "black", "8", 8, 46),
    new Card ("clubs", "black", "9", 9, 47),
    new Card ("clubs", "black", "10", 10, 48),
    new Card ("clubs", "black", "J", 10, 49),
    new Card ("clubs", "black", "Q", 10, 50),
    new Card ("clubs", "black", "K", 10, 51)];
    return cardslist;
}
