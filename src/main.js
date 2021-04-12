/**
Juego de cartas BlackJack
 **/

main()
const Cards = require('./Modulo_de_directorios/Cards');


function main(){
    document.getElementById("restart").addEventListener("click", restart);
    document.getElementById("stay").addEventListener("click", stay);
    document.getElementById("hit").addEventListener("click", hit);
    var cardList = JSON.parse(cards.json);
    var firstCards = FirstCards(cardList);
    console.log('firstCards = ' + firstCards);
    console.log(document.getElementById("hand"));
    document.getElementById("hand").innerHTML = document.getElementById("hand").innerHTML + firstCards[0].text;
    
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

function FirstCards (){
    let cardsHand = [newCard(), newCard()];
    console.log(cardsHand[0], cardsHand[1]);
    return cardsHand;
}

function newCard (){
    const a = Math.floor(Math.random()*51);
    let card = cardList[a];
    return card;
}


