/* Definimos la classe de naipes, donde cada objecto representa una carta*/
var a;
var b;
export class Card {
    constructor (card_type, card_color,card_text, card_value) {
        this.type = card_type;
        this.color = card_color;
        this.text = card_text;
        this.value = card_value;
    }
}

var CardList = { 0: new Card("Heart", "Red", 'A', 1), 1: new Card("Heart", "Red", '2', 2)};

function FirstCards (){
    const a = Math.floor(Math.random()*1);
    console.log(a);
    let cards = [CardList[0],CardList[1]];
    return cards;
}
console.log(FirstCards());