

class Card{
	constructor( incomingOptions ){
		var defaultOptions = {
			type: 'attack',
			frontGraphic: 'images/catattack.jpg',
			backGraphic: 'images/back.png',
			'class': 'catCard',
			visible: false,
			parentClickHandler: function(){}
		}
		this.options = {};
		for(var key in defaultOptions){
			if( incomingOptions.hasOwnProperty(key)){
				this.options[key] = incomingOptions[key];
			} else {
				this.options[key] = defaultOptions[key];
			}
		}
		this.domElements = {
			container: null,
			front: null,
			back: null
		};
		this.handleClick = this.handleClick.bind(this);
	}
	hide(){
		this.options.visible = false;
		this.domElements.container.removeClass('hidden');
	}
	show(){
		this.options.visible = true;
		this.domElements.container.addClass('hidden');
	}
	handleClick(){
		debugger;
		this.options.parentClickHandler( this );
	}
	render(){
		if( this.options.visible){
			var additionalContainerClass = ' hidden';
		} else {
			additionalContainerClass = '';
		}
		this.domElements.container = $("<div>",{
			'class': this.options['class'] + additionalContainerClass,
			on: {
				click: this.handleClick
			}
		});

		this.domElements.front = $("<div>",{
			'class': 'front',
			css: {
				backgroundImage: `url(${this.options.frontGraphic})`
			}
		});
		this.domElements.back = $("<div>",{
			'class': 'back',
			css: {
				backgroundImage: `url(${this.options.backGraphic})`
			}
		});
		this.domElements.container.append(this.domElements.front, this.domElements.back);
		return this.domElements.container;
	}

}










