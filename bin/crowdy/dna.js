goog.provide('crowdy.DNA');

goog.require('lime.Sprite');
goog.require('lime.Layer');
goog.require('crowdy.BindingSite');

crowdy.DNA = function(specieName){
	lime.Sprite.call(this);
	
	this.name = specieName
	
	var line = new lime.Sprite().setFill('assets/DNAline.png').setAnchorPoint(0,0).setPosition(100,10).setScale(0.55);
	var label = new lime.Label().setText(this.name).setAnchorPoint(0,0).setPosition(0, 0).setFontSize(30);
	
	this.setSize(738, 50)
	this.layer = new lime.Layer();
	this.layer.appendChild(label);
	this.layer.appendChild(line);
	this.appendChild(this.layer);
	
	goog.events.listen(line,['mousedown','touchstart'],function(e){
		alert(e.screenPosition)
	});
	
};
goog.inherits(crowdy.DNA, lime.Sprite);

crowdy.DNA.prototype.getLinePosition = function() {
	return new goog.math.Vec2(170,15)
};


