
require.config({
	"baseUrl" : "js",
	"paths": {

		"appHome" : "modules/home/app",
		"configHome" : "modules/home/config",
		
	
	},
	shim: {
		


	}
});


	require( ["appHome", "configHome" ], function () {
		//angular.bootstrap(document, ["CDSHOME"]);
	   
	} );




