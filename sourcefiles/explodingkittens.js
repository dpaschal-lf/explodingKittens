

class ExplodingKittens{
	constructor(){
		this.deck = new Deck(true);
		this.deck.add( {type: 'attack', frontImg: 'images/catattack.jpg'});
		this.deck.add( {type: 'skip', frontImg: 'images/skip.jpg'});
		this.deck.add( {type: 'future', frontImg: 'images/fortuneteller.jpg'});
		var deckDom = this.deck.render();
		$("#gameArea").append(deckDom);
	}
}