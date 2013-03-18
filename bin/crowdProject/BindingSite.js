goog.provide('crowdProject.BindingSite');

crowdProject.BindingSite = function(position) {
	
	// Visual drawing
	lime.Sprite.call(this);
	
	this.bindingSiteVE = new lime.Sprite().setFill('assets/bubble_back.png').setSize(70, 70);
	this.appendChild(this.bindingSiteVE);
	
	// Properties
	this.position = position;	
};
goog.inherits(crowdProject, lime.sprite);