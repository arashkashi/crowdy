goog.provide('crowdy.TF');

goog.require('lime.Sprite');

crowdy.TF = function(_type, potentialBindingSites){
	lime.Sprite.call(this);
	
	this.assignedBindingSite = null;
	this.tfScore = 0;
	
	this.mouseDownPosition = null;
	
	this.WIDTH = 50;
	this.HEIGHT = 50;
	this.circle = new lime.Circle().setSize(this.WIDTH, this.HEIGHT).setFill('#c00');
	this.appendChild(this.circle);
	
	goog.events.listen(this.circle,['mousedown','touchstart'],function(e){
		if (this.mouseDownPosition == null)
		{
			this.mouseDownPosition = this.getPosition();
		}
        e.startDrag();
		var isAssigned = false;
		e.swallow(['mouseup', 'touchend'], function (ee){
			for (var i = 0; i < potentialBindingSites.length; i++) {
				
				if (potentialBindingSites[i].hitTest(ee)) {
					isAssigned = true;
					//crowdy.TF.updateScore(potentialBindingSites[i], this);
					//this.runAction(new lime.animation.MoveTo(ee.screenPosition);			
				}
			}
			if (!isAssigned)
				this.runAction(new lime.animation.MoveTo(this.mouseDownPosition));
		});
    });
};
goog.inherits(crowdy.TF, lime.Sprite);

crowdy.TF.updateScore = function(bindingSite, tf) {
	crowdy.TF.tfScore = crowdy.TF.tfScore + 10;
	alert(crowdy.TF.tfScore);
};

