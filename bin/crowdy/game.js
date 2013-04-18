goog.provide('crowdy.Game');

goog.require('lime.Scene');
goog.require('crowdy.TF');
goog.require('crowdy.DNA');


var DNA_PADDING_TOP = 300
var DNA_PADDING_LEFT = 50
var GAP_BETWEEN_DNA = 100

crowdy.Game = function(level) {
	lime.Scene.call(this);
	
	this.TF_PADDING = 20;
	this.TF_LEFT_MARGIN = 200;
	
    this.TFs = [];
	this.DNAs = [];
	
	this.initGame();
	
	// lime.scheduleManager.schedule(function(dt){
	// 	lime.Director.FPS_INTERVAL = 100
	// 	crowdy.Game.run(this);
	// 
	// }, this);
	
	// Trash Logo
	this.trashLogo = new lime.Sprite().setFill('assets/trash.png').setScale(0.2).setPosition(500,700).setAnchorPoint(0,0);
	this.appendChild(this.trashLogo)
	
	// Score Label
	this.lblScore = new lime.Label().setText('SCORE: ' + 0).setPosition(700, 15)
        .setAnchorPoint(1, 0)
        .setFontSize(70);
    this.appendChild(this.lblScore);
	
	// Back button
	var btn = new crowdy.Button('Back to menu').setSize(270, 70).setPosition(150, 945);
    this.appendChild(btn);
    goog.events.listen(btn, 'click', function() {crowdy.loadMenuScene(lime.transitions.MoveInUp);});

};
goog.inherits(crowdy.Game, lime.Scene);

// crowdy.Game.run = function(obj) {
// 	alert(obj.TF_PADDING)
// 	
// };

crowdy.Game.prototype.initGame = function() {
	//"http://132.206.3.230:8080/getagame"
	json = this.getGameInJson()

	obj = JSON.parse(json)
	
	for (var i=0; i < obj['species'].length; i++) {
		// Create DNAs
		var dna = new crowdy.DNA(obj['species'][i])
		this.DNAs.push(dna)
		this.appendChild(dna)
	}
	
	this.arrangeDNAs()
	
	for (var i=0; i < obj['TFs'].length; i++) {
		// Create TFs on DNA (to be removed)
		var tf = new crowdy.TF(obj['TFs'][i]['name'], obj['TFs'][i]['location'], obj['TFs'][i]['specie'])
		this.TFs.push(tf)
		this.appendChild(tf)
	}
	
	for (var i=0; i < this.TFs.length; i++) {
		goog.events.listen(this.TFs[i],['mousedown','touchstart'],function(e){
			alert('s');
		});
	}
	
	this.arrangeTFs()
};

crowdy.Game.prototype.arrangeDNAs = function() {

	
	for (var i=0; i<this.DNAs.length; i++) {
		this.DNAs[i].setPosition(DNA_PADDING_LEFT, DNA_PADDING_TOP + GAP_BETWEEN_DNA * i)
	}
};

crowdy.Game.prototype.arrangeTFs = function() {
	for (var i = 0; i < this.TFs.length; i++) {
		
		var tf_x_position = null
		var tf_y_position = null
		
		for (var j = 0; j < this.DNAs.length; j++) {
			if (this.DNAs[j].name == this.TFs[i].specie) {
				tf_y_position = this.DNAs[j].getPosition().y + this.DNAs[j].getLinePosition().y
				tf_x_position = this.TFs[i].locationOnDNA * this.DNAs[0].getSize().width / 100.0 + this.DNAs[j].getLinePosition().x
				break
			}
		}
		this.TFs[i].setPosition(tf_x_position, tf_y_position)
	}	
};

crowdy.Game.prototype.onTFPositionUpdate = function(event, obj) {
	alert(obj.name)
};

crowdy.Game.prototype.getGameInJson = function() {
	var xhr = this.createCORSRequest('GET', "http://0.0.0.0:8080/getgame");
	var result
	
	xhr.onload = function() {
		result = xhr.responseText
	};
	
	try {
		xhr.send()
		return result
	} catch (err)
	{ 
		alert ("Cannot connect to the game server")
		throw new Exception
	}
};

crowdy.Game.prototype.createCORSRequest = function (method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, false);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url, false);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }

  return xhr;
};













