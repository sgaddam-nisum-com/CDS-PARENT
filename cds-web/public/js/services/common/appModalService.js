define(['services/serviceModule'], function (serviceModule) {

serviceModule.factory('appModalService', function($modal) {
 var templatePath = "views/modalTemplates/";
 return {
  setTemplatePath: function(path) {
   templatePath = path;
  },

  init: function(tempName, modalController, localScope, config) {    
    
    if(config && config.templatePath){
      templatePath = config.templatePath;
    }

   return function() {
    var modalInstance = $modal.open({
     templateUrl: templatePath + tempName,
     controller: modalController,
     resolve: {
      callerScope: function() {
       return localScope;
      }
     }
    });   

   }
  
 }
 };
});

});