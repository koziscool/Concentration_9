
matcherModel = {
	size: 4,
	cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],
	currentId: 1,
	cards: [],
	selectedCard: null,
	numGuesses: 0,
	matchedCards: 0,
	gameStateText = "You haven't won yet, pick a card.",


	init: function( size ) {
		this.size = size || this.size;
		var totalPairs = Math.pow( this.size, 2 ) / 2;
		for( var i = 0; i < totalPairs ; i++ ) {
			var value = this.cardValues[ Math.floor( Math.random() * this.cardValues.length )];
			this.cards.push( new this.Card( this.getId(), value ) );
			this.cards.push( new this.Card( this.getId(), value ) );
		}
		this.shuffle();
	},

	shuffle: function(  ) {
		var currentIndex = this.cards.length, rand, temp

		while( currentIndex > 0 ) {
			rand = Math.floor( Math.random() * currentIndex );
			currentIndex--;
			temp = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[rand];
			this.cards[rand] = temp;
		}
	},

	Card: function( id, value ) {
		this.id = id;
		this.value = value;
	},

	getId: function(  ) {
		var id = this.currentId;
		this.currentId++;
		return id;
	},

	sameCard: function( id ) {
		return this.selectedCard && this.selectedCard.id === id;
	},

	getCard: function( id ) {
		for(var index in this.cards){
			if( this.cards[index].id === id ) return this.cards[index];
		}
		return null;
	},

	setSelectCard: function( id ) {
		this.selectedCard = this.getCard(id);
	},

	checkGuess: function( id ) {
		this.numGuesses++;
		var correct = this.selectedCard.value === this.getCard(id).value;
		if( correct ) this.matchedCards += 2;
		this.selectedCard = null;

		if( this.matchedCards === this.cards.length ){
			this.gameStateText = "Congratulations, you win";
		}
		return correct;
	},
};

