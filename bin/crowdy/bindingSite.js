goog.provide('crowdy.BindingSite');

goog.require('lime.Sprite');

crowdy.BindingSite = function(dnaLayer, numberOfBindingSites){
	lime.Sprite.call(this);
	
	this.WIDTH = 35;
	this.HEIGHT = 35;
	
	this.distanceInBetween = 100;
	this.marginFromLogo = 120;
	
	this.bindingSites = []
	
	for (var i = 0; i < numberOfBindingSites; i++) {
		var _bindingSite = new lime.Circle().setSize(this.WIDTH, this.HEIGHT).setFill('#c40').setPosition(this.marginFromLogo + i*(this.distanceInBetween) , 0);
		this.bindingSites.push(_bindingSite);
		dnaLayer.appendChild(_bindingSite);
	}
	
	return this.bindingSites;
};
goog.inherits(crowdy.BindingSite, lime.Sprite);

