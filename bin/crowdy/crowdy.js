//set main namespace
goog.provide('crowdy');


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
goog.require('lime.transitions.MoveInUp');
goog.require('crowdy.Button');
goog.require('crowdy.Game')

crowdy.WIDTH = 768;
crowdy.HEIGHT = 1004;

// entrypoint
crowdy.start = function(){
	
	crowdy.director = new lime.Director(document.body, crowdy.WIDTH, crowdy.HEIGHT);
    crowdy.director.makeMobileWebAppCapable();

	lime.Label.defaultFont = 'Impact';
    lime.Label.installFont('Impact', 'assets/impact.ttf');
    crowdy.loadMenuScene();
}

crowdy.loadMenuScene = function(opt_transition){
	var scene = new lime.Scene();
    crowdy.director.replaceScene(scene, opt_transition ? lime.transitions.MoveInDown : undefined);

    var layer = new lime.Layer().setPosition(crowdy.WIDTH * .5, 0);
    scene.appendChild(layer);

    var title = new lime.Sprite().setFill('assets/main_title.png').setPosition(0, 250);
    layer.appendChild(title);

	var contents = new lime.Layer().setPosition(0, 280);
	layer.appendChild(contents);
	
	var btn_play = new crowdy.Button('PLAY NOW').setPosition(0, 330).setSize(250, 100);
    contents.appendChild(btn_play);
    goog.events.listen(btn_play, lime.Button.Event.CLICK, function() {
      crowdy.loadGame(1);
    });

    var btn_tutorial = new crowdy.Button('TUTORIAL').setPosition(0, 480).setSize(250, 100);
    contents.appendChild(btn_tutorial);
    goog.events.listen(btn_tutorial, lime.Button.Event.CLICK, function() {
       crowdy.loadTutorial(1);
    });	
}

crowdy.loadGame = function(level){
	crowdy.activeGame = new crowdy.Game(level);
	crowdy.director.replaceScene(crowdy.activeGame, lime.transitions.MoveInUp);	
}

crowdy.loadTutorial = function(level) {
	
}

crowdy.isBrokenChrome = function(){
   return (/Chrome\/9\.0\.597/).test(goog.userAgent.getUserAgentString());
}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('crowdy.start', crowdy.start);
