goog.provide('crowdy.TF');

goog.require('lime.Sprite');

crowdy.TF = function(_type){
	lime.Sprite.call(this);
	
	this.WIDTH = 50;
	this.HEIGHT = 50;
	
	this.circle = new lime.Circle().setSize(this.WIDTH, this.HEIGHT).setFill('#c00');
	this.appendChild(this.circle);
	
};
goog.inherits(crowdy.TF, lime.Sprite);

