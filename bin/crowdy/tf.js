goog.provide('crowdy.TF');

goog.require('lime.Sprite');

crowdy.TF = function(_type, potentialBindingSites){
	lime.Sprite.call(this);
	
	this.WIDTH = 50;
	this.HEIGHT = 50;
	
	this.assigned = false;
	
	this.circle = new lime.Circle().setSize(this.WIDTH, this.HEIGHT).setFill('#c00');
	this.appendChild(this.circle);
	
	goog.events.listen(this.circle,['mousedown','touchstart'],function(e){
        e.startDrag();
		e.swallow(['mouseup', 'touchend'], function (){
			for (var i = 0; i < potentialBindingSites.length; i++) {
				if (goog.math.Vec2.distance(potentialBindingSites[i].getPosition(), this.getPosition()) < 50) {
					this.assigned = true;
					this.runAction(new lime.animation.MoveTo(potentialBindingSites[i].getPosition()));			
				}
			}
		});
    });
};
goog.inherits(crowdy.TF, lime.Sprite);

