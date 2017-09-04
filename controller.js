

matcherController = {
	view: matcherView,
	model: matcherModel,
	selecting: false,

	init: function( size ) {
		this.model.init(size);
		this.view.init();
	},

	selectCard: function( id ) {
		if( this.selecting ) return;
		if( this.model.sameCard(id) ) return;

		this.selecting = true;
		this.view.revealCard(id);

		if( this.model.selectedCard ){
			var selectedId = this.model.selectedCard.id;
			var correct = this.model.checkGuess(id);
			this.view.updateGameView();
			var that = this;
			if( correct ){
				setTimeout( function(){
					that.view.setCorrect(id);
					that.view.setCorrect(selectedId);
					that.selecting = false;
				}, 500);
			} else {
				setTimeout( function(){
					that.view.hideCards();
					that.selecting = false;
				}, 1500);
			}
		} else {
			this.model.setSelectCard(id);
			this.selecting = false;
		}

	},

};


