goog.provide('crowdy.Game');

goog.require('lime.Scene');


crowdy.Game = function(level) {
	lime.Scene.call(this);
	
	var btn = new crowdy.Button('Back to menu').setSize(270, 70).setPosition(150, 945);
    this.appendChild(btn);
    goog.events.listen(btn, 'click', function() {crowdy.loadMenuScene(lime.transitions.MoveInUp);});
};
goog.inherits(crowdy.Game, lime.Scene);







