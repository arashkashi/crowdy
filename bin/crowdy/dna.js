goog.provide('crowdy.DNA');

goog.require('lime.Sprite');
goog.require('lime.Layer');
goog.require('crowdy.BindingSite');

crowdy.DNA = function(specieName){
	lime.Sprite.call(this);
	
	this.WIDTH = 1000
	this.HEIGHT = 50
	
	this.LINE_LEFT_PADDING = 100
	this.LINE_TOP_PADDING = 10
	
	this.bindingSites = []
	
	this.name = specieName
	
	var line = new lime.Sprite().setFill('assets/DNAline.png').setAnchorPoint(0,0).setPosition(this.LINE_LEFT_PADDING,this.LINE_TOP_PADDING).setScale(0.73);
	var label = new lime.Label().setText(this.name).setAnchorPoint(0,0).setPosition(0, 0).setFontSize(30);
	
	this.setSize(this.WIDTH, this.HEIGHT)
	this.layer = new lime.Layer();
	this.layer.appendChild(label);
	this.layer.appendChild(line);
	
	for (var i=0;i<100; i++){
		// var circle = new lime.Circle().setSize(10, 10).setAnchorPoint(0,0)
		// circle.setFill('#c00').setPosition(110 + i * this.WIDTH / 100, this.LINE_TOP_PADDING)
		var bindingSite = new crowdy.BindingSite(this.name, i)
		this.bindingSites.push(circle)
		this.layer.appendChild(circle)
		goog.events.listen(this.bindingSites[i],['mouseover'],function(e){
			alert('mouseover')
			// 
			// e.startDrag();
			// e.swallow(['mouseup', 'touchend'], function (ee){
			// 	crowdy.TF.prototype.onDragMouseup(ee, instance)
			// });
		}, true, this.bindingSites[i]);
	}
	
	this.appendChild(this.layer);
	
	goog.events.listen(line,['mousedown','touchstart'],function(e){
	});
	
};
goog.inherits(crowdy.DNA, lime.Sprite);

crowdy.DNA.prototype.getLinePosition = function() {
	return new goog.math.Vec2(170,15)
};


