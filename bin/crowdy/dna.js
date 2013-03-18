goog.provide('crowdy.DNA');

goog.require('lime.Sprite');

crowdy.DNA = function(lenght){
	lime.Sprite.call(this);
	
	// Specie logo
	
	// Line
	
	// Binding sites
	
	this.circle = new lime.Circle().setSize(this.WIDTH, this.HEIGHT).setFill('#c00');
	this.appendChild(this.circle);
};
goog.inherits(crowdy.DNA, lime.Sprite);

