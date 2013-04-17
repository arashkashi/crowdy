goog.provide('crowdy.Game');

goog.require('lime.Scene');
goog.require('crowdy.TF');
goog.require('crowdy.DNA');


crowdy.Game = function(level) {
	lime.Scene.call(this);
	
	this.TF_PADDING = 20;
	this.TF_LEFT_MARGIN = 200;
	
    this.TFs = [];
	this.DNAs = [];
	
	this.initGame();
	

	// this.initDNAs();


	// this.initTFs(this.dnas);
	
	this.lblScore = new lime.Label().setText('SCORE: ' + 0).setPosition(700, 15)
        .setAnchorPoint(1, 0)
        .setFontSize(70);
    this.appendChild(this.lblScore);
	
	var btn = new crowdy.Button('Back to menu').setSize(270, 70).setPosition(150, 945);
    this.appendChild(btn);
    goog.events.listen(btn, 'click', function() {crowdy.loadMenuScene(lime.transitions.MoveInUp);});

};
goog.inherits(crowdy.Game, lime.Scene);

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
	
	this.arrangeDNA()
	
	for (var i=0; i < obj['TFs'].length; i++) {
		// Create TFs on DNA (to be removed)
		var tf = new crowdy.TF(obj['TFs'][i]['name'], obj['TFs'][i]['location'], obj['TFs'][i]['specie'])
		this.TFs.push(tf)
		this.appendChild(tf)
	}
	
	// position TFs on the DNA
};

crowdy.Game.prototype.arrangeDNA = function() {
	var DNA_PADDING_TOP = 300
	var DNA_PADDING_LEFT = 30
	var GAP_BETWEEN_DNA = 100
	
	for (var i=0; i<this.DNAs.length; i++) {
		this.DNAs[i].setPosition(DNA_PADDING_LEFT, DNA_PADDING_TOP + GAP_BETWEEN_DNA * i)
	}
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


crowdy.Game.prototype.initTFs = function(setOfDNAs) {
	//TODO: a  function call is needed to make a call to server and ask for a set of TFs
	// currently a set of fictitious TFs are created
	var setOfBindingSites = [];
	for (var i = 0; i < setOfDNAs.length; i++) {
		for (var j = 0; j < setOfDNAs[i].bindingSites.length; j++) { 
			setOfBindingSites.push(setOfDNAs[i].bindingSites[j]);
		}
	}
	
	var tf_1 = new crowdy.TF('A', setOfBindingSites);
	this.tfs.push(tf_1);
	
	var tf_2 = new crowdy.TF('A', setOfBindingSites);
	this.tfs.push(tf_2);
	
	var tf_3 = new crowdy.TF('A', setOfBindingSites);
	this.tfs.push(tf_3);
	
	var tf_4 = new crowdy.TF('A', setOfBindingSites);
	this.tfs.push(tf_4);
	
	var tf_5 = new crowdy.TF('A', setOfBindingSites);
	this.tfs.push(tf_5);
	
	var tf_6 = new crowdy.TF('A', setOfBindingSites);
	this.tfs.push(tf_6);
	
	for (var i = 0; i < this.tfs.length; i++){
		this.tfs[i].setPosition(this.TF_LEFT_MARGIN + i * (this.tfs[i].WIDTH + this.TF_PADDING), 700);
		this.appendChild(this.tfs[i]);
	}
	
	lime.scheduleManager.callAfter(this.updateTFs, this, 100);	
};

crowdy.Game.prototype.initDNAs = function() {
		var dna_1 = new crowdy.DNA('human');
		dna_1.setPosition(50, 250);
		this.dnas.push(dna_1);
		
		this.appendChild(this.dnas[0]);
		
		var dna_2 = new crowdy.DNA('mice');
		dna_2.setPosition(50, 350);
		this.dnas.push(dna_2);
		
		this.appendChild(this.dnas[1]);
};

crowdy.Game.prototype.updateTFs = function(dt) {
	// TODO: here we update the TF locations.
	
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













