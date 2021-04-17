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
/*var card = new Card ("heart", "red", "A", [1,11], 0);*/
/*updateHand(card);*/
startgame();
updateBothValues();


function startgame(){
    cardslist = newdeck();
    handplayer = firstcards(cardslist);
    handbank = firstcards(cardslist);
    calculateValues();
    console.log(document.getElementById("bank"));
    console.log(document.getElementById("player"));
    document.getElementById("player").innerHTML = document.getElementById("player").innerHTML + handplayer[0].text + " " + handplayer[1].text;
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + handbank[0].text + " " + handbank[1].text;
    document.getElementById("player").innerHTML = document.getElementById("player").innerHTML + newCardPrint(handplayer[0]);
    document.getElementById("player").innerHTML = document.getElementById("player").innerHTML + newCardPrint(handplayer[1]); 
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + newCardPrint(handbank[0]);
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + newCardPrint(handbank[1]);   
}

function calculateValues(){
    valueplayer = 0;
    handplayer.forEach(cardInHand => valueplayer = valueplayer + cardInHand.value);
    valuebank = 0;
    handbank.forEach(cardInHand => valuebank = valuebank + cardInHand.value);
}

function hit(){
    var card = newCard();
    if (card.number === 0 || card.number === 26 || card.number===39 || card.number === 13) {
        card.value = 11;
        calculateValues();
        if (valueplayer > 21 ){
            card.value = 1;
        }
    }
    handplayer.push(card);
    updateHand(card); 
    updateValue('player');
    if (valueplayer>21) {
        stay();
    }
}

function updateValue(player){
    calculateValues();
    if (player == 'player'){
        document.getElementById("playerValue").innerHTML = "<h2>" + valueplayer + "</h2>";
    } else {
        document.getElementById("bankValue").innerHTML = "<h2>" + valuebank + "</h2>";
    }
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
    updateBothValues();
    document.getElementById("resum").innerHTML = "";
}

function stay() {
    var valuebank = 0;
    handbank.forEach(cardInHand => valuebank = valuebank + cardInHand.value);
    while (valuebank < 17){
        var card = newCard();
        if (card.number === 0 || card.number === 26 || card.number===39 || card.number === 13) {
            card.value = 11;
            if (valueplayer > 21 ){
                card.value = 1;
            }
        }
        handbank.push(card);
        handbank.forEach(cardInHand => valuebank = valuebank + cardInHand.value);
            updateHandBank(card);
            updateValue('bank');
    }
    result();
}
function result(){
    document.getElementById("stay").disabled = true;
    document.getElementById("hit").disabled = true;
    if(valueplayer > 21 && valuebank > 21){
        document.getElementById("resum").innerHTML = "It's a draw";
    } else if ((valuebank < 21 && valueplayer > 21) || (valuebank < 21 && valueplayer < valuebank)){
        document.getElementById("resum").innerHTML = "Has perdido!";
    } else {
        document.getElementById("resum").innerHTML = "Has ganado!";
    }
}

function updateHand(card){
    console.log(card);
    //document.getElementById("player").innerHTML = document.getElementById("player").innerHTML + " " + card.text;

    document.getElementById("player").innerHTML = document.getElementById("player").innerHTML + newCardPrint(card);
}

function newCardPrint(card){
    return "<img src=\"" + "./imagenes/" + card.number + ".png" + "\" ></img>";
    /*" + card.text + "\" ></img>";*/
}

function updateHandBank(card){
    console.log(card);
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + " " + card.text;
    document.getElementById("bank").innerHTML = document.getElementById("bank").innerHTML + newCardPrint(card);
}

function updateBothValues(){
    updateValue('player');
    updateValue('bank');
}

function firstcards (){
    let cardsHand = [newCard(), newCard()];
    console.log(cardsHand[0], cardsHand[1]);
    return cardsHand;
}

function newCard (){
    var cardsListSize = cardslist.length - 1;
    console.log('size '+ cardsListSize);
    var a = Math.floor(Math.random()*cardsListSize);
    console.log('cardsList in newCard is ' + cardslist);
    console.log(a);
    var card = cardslist[a];
    console.log(card);
    if (card.number === 0 || card.number === 26 || card.number===39 || card.number === 13) {
        card.value = 11;
    }
    cardslist.splice(a, 1);
    printDECK();
    return card;
}

function printDECK() {
    console.log('DECK');
    cardslist.forEach(element => console.log(element));
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
    console.log('hola' + cardslist.length);
    console.log(typeof cardslist);
    return cardslist;
}