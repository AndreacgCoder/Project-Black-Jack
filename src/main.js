import {Card} from './Modulo_de_directorios/Cards.js';
/**
Juego de cartas BlackJack
 **/

main()

function main(){
    document.getElementById("quit").addEventListener("click", quit);
    document.getElementById("hit").addEventListener("click", hit);
    let cardList = JSON.parse(cards.json);
    var firstCards = FirstCards(cardList);
    console.log('firstCards = ' + firstCards);
    console.log(document.getElementById("hand"));//.update(firstCards);
    document.getElementById("hand").innerHTML = document.getElementById("hand").innerHTML + firstCards[0].text;
    
}

function hit(cardsHand){
    updateHand(card);
    cardsHand.push(newCard());
    
}

function quit(){
    
    updateTable(card);
}

function updateTable(card){
    document.getElementById("table").innerHTML = document.getElementById("table").innerHTML + card.text;
}

function updateHand(card){
    document.getElementById("hand").innerHTML = document.getElementById("hand").innerHTML + card.text;
}

function FirstCards (){
    console.log(a, b);
    let cardsHand = [newCard(a), newCard(b)];
    return cardsHand;
}

function newCard (cardList){
    const a = Math.floor(Math.random()*51);
    let card = [cardList[a]];
    return card;
}


