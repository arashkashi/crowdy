goog.provide('crowdy.BindingSite');

goog.require('lime.Sprite');

crowdy.BindingSite = function(_specie, _location){
	// Location: A number between 0 - 100
	// Scpecie: e.g. 'human' or 'mice'
	lime.Sprite.call(this);
	
	this.WIDTH = 15;
	this.HEIGHT = 89;
	
	var isHighlighted = false;
	
	this.specieName = _specie;
	this.location = _location;
	
	this.circle = new lime.Sprite().setSize(this.WIDTH, this.HEIGHT)
	this.circle.setFill('#c60').setPosition(0, 0)
	var fade = new lime.animation.FadeTo(.2).setDuration(5)
	this.circle.runAction(fade)
	
	this.layer = new lime.Layer();
	this.layer.appendChild(this.circle)
	this.appendChild(this.layer)
	
	goog.events.listen(this.circle,['mousedown'],function(e){
	}, true, this);
	
};
goog.inherits(crowdy.BindingSite, lime.Sprite);

crowdy.BindingSite.prototype.setHighlight = function() {
	this.circle.runAction(new lime.animation.Spawn(
							                new lime.animation.FadeTo(1).setDuration(.2),
							                new lime.animation.ScaleTo(1.5).setDuration(.5)
							            ));
};

crowdy.BindingSite.prototype.setDeHighlight = function() {
	this.circle.runAction(new lime.animation.Spawn(
							                new lime.animation.FadeTo(0.2).setDuration(.2),
							                new lime.animation.ScaleTo(1).setDuration(.5)
							            ));
	
};


