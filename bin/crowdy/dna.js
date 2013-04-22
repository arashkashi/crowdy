goog.provide('crowdy.DNA');

goog.require('lime.Sprite');
goog.require('lime.Layer');
goog.require('crowdy.BindingSite');

crowdy.DNA = function(specieName){
	lime.Sprite.call(this);
	
	this.WIDTH = 1000
	this.HEIGHT = 50
	this.NUMBER_OF_BINDING_SITE_IN_DNA = 10
	
	this.LINE_LEFT_PADDING = 100
	this.LINE_TOP_PADDING = 10
	
	this.bindingSites = []
	this.highlightedSiteIndexes = []
	
	this.name = specieName
	
	var line = new lime.Sprite().setFill('assets/DNAline.png').setAnchorPoint(0,0).setPosition(this.LINE_LEFT_PADDING,this.LINE_TOP_PADDING).setScale(0.73);
	var label = new lime.Label().setText(this.name).setAnchorPoint(0,0).setPosition(0, 0).setFontSize(30);
	
	this.setSize(this.WIDTH, this.HEIGHT)
	this.layer = new lime.Layer();
	this.layer.appendChild(label);
	this.layer.appendChild(line);
	
	for (var i=0;i<this.NUMBER_OF_BINDING_SITE_IN_DNA; i++){
		var bindingSite = new crowdy.BindingSite(this.name, i)
		bindingSite.setPosition(110 + i * this.WIDTH / this.NUMBER_OF_BINDING_SITE_IN_DNA, this.LINE_TOP_PADDING)
		this.bindingSites.push(bindingSite)
		this.layer.appendChild(bindingSite)
	}
	
	this.appendChild(this.layer);
	
};
goog.inherits(crowdy.DNA, lime.Sprite);

crowdy.DNA.prototype.getLinePosition = function() {
	return new goog.math.Vec2(170,15)
};

crowdy.DNA.prototype.highlightBindingSite = function(locationIndex) {
	if (this.highlightedSiteIndexes.indexOf(locationIndex) != -1) {
		return 
	}
	
	// de-highligh all others
	for (var i=0;i<this.highlightedSiteIndexes.length; i++) {
		this.dehighlightBindingSites(this.highlightedSiteIndexes[i]);
	}
	
	// High light the new one
	this.highlightedSiteIndexes.push(locationIndex);
	this.bindingSites[locationIndex].setHighlight();	
	
};

crowdy.DNA.prototype.dehighlightBindingSites = function(locationIndex) {
	if (this.highlightedSiteIndexes.indexOf(locationIndex) == -1) {
		return
	} else {
		this.bindingSites[locationIndex].setDeHighlight();
		var _index = this.highlightedSiteIndexes.indexOf(locationIndex);
		this.highlightedSiteIndexes.splice(_index, 1);
	}
};

