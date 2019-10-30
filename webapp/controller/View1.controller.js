sap.ui.define([
	"sap/ui/core/mvc/Controller",
		
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("month.Monthclick.controller.View1", {
	
	 onPress : function (evt) {
      // jQuery.sap.require("sap.m.MessageToast");
    sap.m.MessageToast.show(evt.getSource().getId() );
  
      },
      	handleConfirmationMessageBoxPress: function(oEvent) {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
		sap.m.MessageBox.confirm(
				"Approve purchase order 12345?", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		}

		
		
	});

});