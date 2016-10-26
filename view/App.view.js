sap.ui.jsview("sap.hcm.view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf sap.hcm.view.App
	 */
	getControllerName: function() {
		return "sap.hcm.controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf sap.hcm.view.App
	 */
	createContent: function(oController) {
		
		var data = {
		    firstName: "John",
		    lastName: "Doe",
		    birthday: {day:"01",month:"05",year:"1982"},
		    address:[{city:"Heidelberg"}],
		    enabled: true
		};

		// create JSON model instance
		var oModel = new sap.ui.model.json.JSONModel();
		// set the data for the model
		oModel.setData(data);
		// set the model to the core
		sap.ui.getCore().setModel(oModel);

		// create your controls        
		var oTextView = new sap.m.Input({
			// bind text property of textview to firstName property in the model
			text: "{/firstName}",
			tooltip: "First Name"
		});

		var oPage = new sap.m.Page({
			title: "{i18n>appTitle}",
			content: [new sap.m.IconTabBar({
				selectedKey: "db",
				items: [
					new sap.m.IconTabFilter({
						text: "{i18n>dataBindingFilter}",
						key: "db",
						content: [
							// new sap.m.List({
							// 	items: [
							// 		new sap.m.ObjectListItem({
							// 			title: "List1",
							// 			number: "List1"
							// 		})
							// 	]
							// })
							oTextView
						]
					})
				]
			})]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});