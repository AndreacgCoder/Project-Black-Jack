/**
Juego de cartas BlackJack
 **/
import Card from './cards.js';

main();


function main(){
    document.getElementById("restart").addEventListener("click", restart);
    document.getElementById("stay").addEventListener("click", stay);
    document.getElementById("hit").addEventListener("click", hit);
    var cardslist = newdeck();
    const firsthand = firstcards(cardslist);
    console.log('firstcards = ' + firsthand);
    console.log(document.getElementById("hand"));
    document.getElementById("hand").innerHTML = document.getElementById("hand").innerHTML + firsthand[0].text + " " + firsthand[1].text;
    
}

function hit(cardsHand){
    cardsHand.push(newCard());
    updateHand(card);
    
}

function stay(){
    
    updateTable(card);
}

function updateTable(card){
    document.getElementById("table").innerHTML = document.getElementById("table").innerHTML + card.text;
}

function updateHand(card){
    document.getElementById("hand").innerHTML = document.getElementById("hand").innerHTML + card.text;
}

function firstcards (cardslist){
    let cardsHand = [newCard(cardslist), newCard(cardslist)];
    console.log(cardsHand[0], cardsHand[1]);
    return cardsHand;
}

function newCard (cardslist){
    const a = Math.floor(Math.random()*51);
    console.log(cardslist)
    console.log(a);
    var card = cardslist[a];
    return card;
}


function newdeck (){

    var cardslist = [new Card ("heart", "red", "A", 1, 0),
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