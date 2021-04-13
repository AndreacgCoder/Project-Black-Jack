/* Definimos la classe de naipes, donde cada objecto representa una carta*/

export default class Card {
    constructor (card_type, card_color,card_text, card_value, number_pack) {
        this.type = card_type;
        this.color = card_color;
        this.text = card_text;
        this.value = card_value;
        this.number = number_pack;
    }
} 


