goog.provide('crowdy.DNA');

goog.require('lime.Sprite');
goog.require('lime.Layer');
goog.require('crowdy.BindingSite');

crowdy.DNA = function(specieName){
	lime.Sprite.call(this);
	
	this.name = specieName	
	this.layer = new lime.Layer();	

	var line = new lime.Sprite().setFill('assets/DNAline.png').setAnchorPoint(0,0).setPosition(100,10).setScale(1);
	
	var label = new lime.Label().setText(this.name).setAnchorPoint(0,0).setPosition(0, 0).setFontSize(30);
	
	this.layer.appendChild(label);
	this.layer.appendChild(line);
	this.appendChild(this.layer);
	
	goog.events.listen(line,['mousedown','touchstart'],function(e){
		alert(e.target)
    });
};
goog.inherits(crowdy.DNA, lime.Sprite);

