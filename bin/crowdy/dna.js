goog.provide('crowdy.DNA');

goog.require('lime.Sprite');
goog.require('lime.Layer');
goog.require('crowdy.BindingSite');

crowdy.DNA = function(type){
	lime.Sprite.call(this);
	
	if (type == 'human') {
		this.logoFileName = 'assets/man_logo.png';
	}
	if (type == 'mice') {
		this.logoFileName = 'assets/mouse_logo.png';
	}
	
	this.numberOfBindingSites = 5;
	this.bindingSites = [];
	
	this.layer = new lime.Layer();	
	
	// Specie logo
	var logo = new lime.Sprite().setFill(this.logoFileName).setScale(0.05);
    this.layer.appendChild(logo);
	
	
	// Line TODO
	
	// Binding sites
	this.bindingSites = new crowdy.BindingSite(this.layer, this.numberOfBindingSites);
	
	
	this.appendChild(this.layer);
};
goog.inherits(crowdy.DNA, lime.Sprite);

