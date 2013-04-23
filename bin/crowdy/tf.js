goog.provide('crowdy.TF');

goog.require('lime.Sprite');

crowdy.TF = function(_TF_name, _locationOnDNA, _specieName){
	lime.Sprite.call(this);
	
	this.name = _TF_name
	this.locationOnDNA = _locationOnDNA;
	this.specie = _specieName;
	
	this.WIDTH = 50;
	this.HEIGHT = 50;
	
	this.circle = new lime.Circle().setSize(this.WIDTH, this.HEIGHT).setFill(crowdy.TF.getTFColor(this.name));
	
	this.layer = new lime.Layer();
	this.layer.appendChild(this.circle);
	this.appendChild(this.layer);
	
	this.prevPosition = null
	
	goog.events.listen(this.layer,['mousedown','touchstart'],function(e){
		var instance = this
		var event = e
		var initialScreenPosition = this.layer.localToScreen(new goog.math.Coordinate(0, 0))
		
		this.prevPosition = e.screenPosition;
		
		e.startDrag();
		
		e.swallow('mousemove', function(e) {
			crowdy.Game.onTFMove(e, instance);	
		});
		
		e.swallow('mouseup', function(e) {
			crowdy.Game.onTFRepositioned(e, instance, initialScreenPosition);
		});
	}, false, this);
};
goog.inherits(crowdy.TF, lime.Sprite);

crowdy.TF.getTFColor = function(name) {
	if (name == 'TF1') {
		return '#c00'
	}
	else if (name == 'TF2') {
		return '#f66'
	}
	else if (name == 'TF3') {
		return '#a33'
	}
	else if (name == 'TF4') {
		return '#bab'
	}
	else
	    return '#a50'
};

crowdy.TF.prototype.onDragMouseup = function(event, obj) {
	crowdy.Game.prototype.onTFPositionUpdate(event, obj)
};

