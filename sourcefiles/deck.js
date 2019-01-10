

class Deck{
	constructor(startVisible){
		this.cards = [];
		this.visible = startVisible;
		this.domElement = null;
	}
	add( details ){
		var newCard = new Card({ type: details.type, frontGraphic: details.frontImg });
		this.cards.push(newCard);
	}
	draw( cardCount ){
		// if( cardCount > this.cards.length){
		// 	var amountToDraw = this.cards.length;
		// } else {
		// 	amountToDraw = cardCount;
		// }
		var amountToDraw = cardCount > this.cards.length ? this.cards.length : cardCount;
		var startingPoint = this.cards.length-amountToDraw;
		return this.cards.splice( startingPoint, amountToDraw)
	}
	show(){
		this.visible = true;
	}
	hide(){
		this.visible = false;
	}
	renderChildren(){
		var cardDomElements = [];
		for( var cardI = 0; cardI < this.cards.length; cardI++){
			var cardDom = this.cards[cardI].render();
			cardDomElements.push( cardDom );
		}
		return cardDomElements;
	}
	render(){
		this.domElement = $("<div>",{
			'class': 'deck'
		});
		var childCards = this.renderChildren();
		this.domElement.append(childCards);
		return this.domElement;
	}
}














