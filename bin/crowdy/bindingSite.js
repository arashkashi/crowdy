goog.provide('crowdy.BindingSite');

goog.require('lime.Sprite');

crowdy.BindingSite = function(_specie, _location){
	// Location: A number between 0 - 100
	// Scpecie: e.g. 'human' or 'mice'
	lime.Sprite.call(this);
	
	this.WIDTH = 10;
	this.HEIGHT = 10;
	
	this.specieName = _specie;
	this.location = _location;
	
	this.circle = new lime.Circle().setSize(this.WIDTH, this.HEIGHT).setAnchorPoint(0,0)
	this.circle.setFill('#c00').setPosition(0, 0)
	
	this.layer = new lime.Layer();
	this.layer.appendChild(this.circle)
	this.appendChild(this.layer)
};
goog.inherits(crowdy.BindingSite, lime.Sprite);

