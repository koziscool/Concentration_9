
matcherModel = {
	size: 4,
	cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],
	currentId: 1,
	cards: [],

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
};

