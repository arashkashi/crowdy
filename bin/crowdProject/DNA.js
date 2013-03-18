goog.provide('crowdProject.DNA');

goog.require('crowdProject.BindingSite');


crowdProject.DNA = function() {
	
	this.bindingSites = new Array();
	
};
goog.inherits(crowdProject.DNA, lime.Sprite);

crowdProject.addBindingSite = function(bindingSite) {
	this.bindingSites.push(bindingSite);
}

