goog.provide('crowdy.Game');

goog.require('lime.Scene');
goog.require('crowdy.TF');
goog.require('crowdy.DNA');


crowdy.Game = function(level) {
	lime.Scene.call(this);
	
	this.score = 150;
	this.TF_PADDING = 20;
	this.TF_LEFT_MARGIN = 200;
	
	this.dnas = []
	this.initDNAs();

	this.tfs = [];
	this.initTFs(this.dnas);
	
	this.layer = new lime.Layer();
    //if(crowdy.isBrokenChrome()) this.layer.setRenderer(lime.Renderer.CANVAS);
    this.appendChild(this.layer);
	
	this.lblScore = new lime.Label().setText('SCORE: ' + this.score).setPosition(760, 15)
        .setAnchorPoint(1, 0)
        .setFontSize(70);
    this.appendChild(this.lblScore);
	
	var btn = new crowdy.Button('Back to menu').setSize(270, 70).setPosition(150, 945);
    this.appendChild(btn);
    goog.events.listen(btn, 'click', function() {crowdy.loadMenuScene(lime.transitions.MoveInUp);});
};
goog.inherits(crowdy.Game, lime.Scene);

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












