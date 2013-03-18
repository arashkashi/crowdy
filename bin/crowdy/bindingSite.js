goog.provide('crowdy.BindingSite');

goog.require('lime.Sprite');

crowdy.BindingSite = function(dnaLayer, numberOfBindingSites){
	lime.Sprite.call(this);
	
	this.WIDTH = 35;
	this.HEIGHT = 35;
	
	this.distanceInBetween = 100;
	this.marginFromLogo = 120;
	
	for (var i = 0; i < numberOfBindingSites; i++) {
		dnaLayer.appendChild(new lime.Circle().setSize(this.WIDTH, this.HEIGHT).setFill('#c40').setPosition(this.marginFromLogo + i*(this.distanceInBetween) , 0));
	}
};
goog.inherits(crowdy.BindingSite, lime.Sprite);

