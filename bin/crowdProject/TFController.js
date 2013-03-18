goog.provide('crowdProject.TFController');

goog.require('crowdProject.TF');

crowdProject.TFController = function() {
	
	// "Set" of transcription factors that have not been assined
	this.notAssignedTFs = new Array();
	
	// "List" of transcritopn factors that have been assined.
	this.assignedTFs = new Array();
};

// Obtains a "set" of of transcription factors to be played with.
crowdProject.TFController.getTFs = function(tf) {
	
	// TODO: for now the transcription factor is hardcoded
	this.notAssignedTFs.push(new TF('TF_1'));
	this.notAssignedTFs.push(new TF('TF_2'));
	this.notAssignedTFs.push(new TF('TF_3'));	
};

// Processes the entire logic of TF view
crowdProject.TFController.proc() = function(){
	
	// TODO: Update the positioning of not assgined list.
	
	// TODO: Check if any not assigned TFs is going to be assigned.
	
	// TODO: listen to the assignment event and update the list and 
	//			positioning accordingly. 
	
	// TODO: Update assigned and not assigned list when a TF is assined
	
}

// This method is called when a not assigned TF is going to be assigned
crowProject.TFController.drawNotAssgined = function () {
	for (tf in this.notAssigned) {
		
	}
};

