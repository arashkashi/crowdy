//set main namespace
goog.provide('crowdProject');


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


crowdProject.start = function(){

	var director = new lime.Director(document.body,1024,768);
   
	gameScene = new lime.Scene();

	target = new lime.Layer().setPosition(512,384);
	circle = new lime.Circle().setSize(150,150).setFill(255,150,0).setPosition(0, 0);
	
	destinationTarget = new lime.Layer().setPosition(100,100);	
	destinationCircle = new lime.Circle().setSize(150,150.).setFill(150,150,0).setPosition(0, 0);
	
    //add circle and label to target object
    target.appendChild(circle);
	destinationTarget.appendChild(destinationCircle);

    //add target and title to the scene
    gameScene.appendChild(target);
	gameScene.appendChild(destinationTarget);

	director.makeMobileWebAppCapable();

    //add some interaction
	lime.scheduleManager.schedule(function(dt){
		lime.Director.FPS_INTERVAL = 100
		crowdProject.run();

	},target);
	

    goog.events.listen(target,['mousedown','touchstart'],function(e){
        e.startDrag();

		e.swallow(['mouseup', 'touchend'], function (){
			if (goog.math.Vec2.distance(target.getPosition(), destinationTarget.getPosition()) < 400)
			{
				//target.setPosition(destinationTarget.getPosition());

				
						target.runAction(new lime.animation.Spawn(
						                new lime.animation.FadeTo(1),
						                new lime.animation.ScaleTo(1),
						                new lime.animation.MoveTo(destinationTarget.getPosition())
						            ));
			}
		});
    });

	// set current scene active
	director.replaceScene(gameScene);

}

var  spawned = false;

crowdProject.processSpawningTFBindingSite = function(bindingSite) {
	if (goog.math.Vec2.distance(target.getPosition(), bindingSite.getPosition()) < 200 && !spawned)
	{
		spawned = true
		bindingSite.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(.5).setDuration(.2),
            new lime.animation.ScaleTo(1.5).setDuration(.8)
        ));
	}
	
	if (goog.math.Vec2.distance(target.getPosition(), bindingSite.getPosition()) > 200 && spawned)
	{
		spawned = false
		bindingSite.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(1).setDuration(.2),
            new lime.animation.ScaleTo(1).setDuration(.8)
        ));
	}
	
}
crowdProject.run = function() {
	crowdProject.processSpawningTFBindingSite(destinationTarget);	
}



//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('crowdProject.start', crowdProject.start);
