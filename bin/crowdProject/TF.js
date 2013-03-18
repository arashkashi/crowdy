goog.provide('crowdProject.TF');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Circle');
goog.require('lime.Label');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');


crowdProject.TF = function(name) {
    lime.Sprite.call(this);

	this.height = 70;
	this.width = 70;

    this.circle = new lime.Sprite().setFill('assets/bubble_back.png').setSize(70, 70);
    this.appendChild(this.circle);

    this.lbl = new lime.Label().setText(name).setFontSize(34).setFontColor('#fff').setFontWeight(700).setFontFamily('Impact');
    this.appendChild(this.lbl);

    this.setAnchorPoint(0, 0);
    this.setScale(1.2);
};
goog.inherits(crowdProject.TF, lime.Sprite);
