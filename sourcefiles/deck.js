

class Deck{
	constructor(startVisible){
		this.cards = [];
		this.visible = startVisible;
	}
	add( newCard ){
		if(newCard.constructor !== Card){
			console.error('can only add a Card object')
			return false;
		}
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
	render(){
		
	}
}