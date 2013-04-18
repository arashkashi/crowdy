goog.provide('crowdy.DNA');

goog.require('lime.Sprite');
goog.require('lime.Layer');
goog.require('crowdy.BindingSite');

crowdy.DNA = function(specieName){
	lime.Sprite.call(this);
	
	this.WIDTH = 738
	this.HEIGHT = 50
	
	this.LINE_LEFT_PADDING = 100
	this.LINE_TOP_PADDING = 10
	
	this.name = specieName
	
	var line = new lime.Sprite().setFill('assets/DNAline.png').setAnchorPoint(0,0).setPosition(this.LINE_LEFT_PADDING,this.LINE_TOP_PADDING).setScale(0.55);
	var label = new lime.Label().setText(this.name).setAnchorPoint(0,0).setPosition(0, 0).setFontSize(30);
	
	this.setSize(this.WIDTH, this.HEIGHT)
	this.layer = new lime.Layer();
	this.layer.appendChild(label);
	this.layer.appendChild(line);
	
	for (var i=0;i<100; i++){
		var circle = new lime.Circle().setSize(20, 20).setFill('#c00').setPosition();
	}
	
	this.appendChild(this.layer);
	
	goog.events.listen(line,['mousedown','touchstart'],function(e){
	});
	
};
goog.inherits(crowdy.DNA, lime.Sprite);

crowdy.DNA.prototype.getLinePosition = function() {
	return new goog.math.Vec2(170,15)
};


