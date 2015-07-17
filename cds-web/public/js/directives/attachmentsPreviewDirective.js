 define(['directives/directiveModule', 'messageHandler','underscore'], function(directiveModule, messageHandler,_) {
     directiveModule.directive('attachmentsPreviewDirective', ["registerService", "appUrlService", "$timeout", "$stateParams",
             function(registerService, appUrls, $timeout, $stateParams) {
                 return {
                     restrict: "A",
                     link: function(scope, elem, attrs) {

                         var acceptedFormats = ['jpg', 'jpeg', 'png'],
                             attsArray = [],
                             attachmentsIdArray = [];

                         scope.initiateUpload = false;

                         scope.browseAttachments = function() {
                             $("#fileAttachField").trigger("click");
                         };

                         scope.setAttachments = function(e) {

                        

                             for (var key in e.files) {
                                 if (e.files[key] instanceof File) {
                                     e.files[key].originalName = e.files[key].name;
                                     e.files[key].nonLinked = true;
                                     attsArray.push(e.files[key]);
                                     scope.existingAttachments.push(e.files[key]);
                                 }
                             }
                             scope.$apply(function() {});

                             scope.initiateUpload = true;

                         };


                         $(document).on("click", ".non-linked", function(e) {
                             e.preventDefault();
                         });



                         var fileObj = {};

                         scope.setProfileImage = function(fileInput) {
                             fileObj = fileInput.files[0];
                             var fExt = fileObj.name.substr(fileObj.name.lastIndexOf('.') + 1);
                             if (acceptedFormats.indexOf(fExt) == -1) {
                                 messageHandler.showErrorStatus("Please choose a valid format of images ('jpg', 'png')", ".status-message-wrapper");
                                 return;
                             } else {
                                 messageHandler.clearMessageStatus(500);
                             }

                             var reader = new FileReader();
                             reader.onloadend = function(e) {
                                 showUploadedItem(e.target.result);
                                 scope.initiateUpload = true;
                             };
                             reader.readAsDataURL(fileObj);
                         }


                         function showUploadedItem(imgSrc) {
                             $("#previewHolder").attr("src", imgSrc);
                         }



                         scope.submitTaskAttachments = function(e) {
                             e.preventDefault();
                            var formFileObj = new FormData();
                             formFileObj.append("taskId", $stateParams.taskId);
                             for (var i = 0; i < attsArray.length; i++) {
                                 fileObj = attsArray[i];
                               
                                 formFileObj.append("attachmentName", fileObj);
                             }
                             if (scope.initiateUpload) {
                                 $(".attachment-progress").show();
                                 $.ajax({
                                     xhr: function() {
                                         var xhr = new window.XMLHttpRequest();
                                         xhr.upload.addEventListener("progress", function(evt) {
                                            
                                             if (evt.lengthComputable) {
                                                 scope.$apply(function() {
                                                     var percentComplete = (evt.loaded / evt.total) * 100;
                                                     scope.uploadPercentage = scope.uploadStatusMsg = percentComplete + "%";
                                                     
                                                 });
                                             }
                                         }, false);

                                         xhr.upload.addEventListener("load", function(evt) {
                                             $timeout(function() {
                                                 scope.uploadStatusMsg = "Updation completed."
                                                 $timeout(function() {
                                                     $(".attachment-progress").hide();
                                                     scope.uploadPercentage = 0;
                                                 }, 3000);
                                             }, 2000);
                                         });
                                         return xhr;
                                     },
                                     type: "POST",
                                     url: "/auth/user/addattachmenttotask",
                                     data: formFileObj,
                                     processData: false,
                                     contentType: false

                                 }).success(function(resp, status, headers, config) {
                                     var fileData = resp.data;
                                     if(fileData.length){

                                        for(var i=0; i<fileData.length; i++){
                                            fileData[i].nonLinked = false;                                            
                                            fileData[i].filePath = scope.attachmentViewPath + fileData[i].attachmentName;
                                        }
                                     }
                                      scope.$apply(function() {

                                         

                                            scope.existingAttachments = fileData;                                                         
                                        });

                                     scope.initiateUpload = false;
                                     attsArray = [];
                                     attachmentsIdArray = [];
                                     $timeout(function() {
                                         $(".attachment-progress").hide();
                                         scope.uploadPercentage = 0;
                                         scope.initiateUpload = false;
                                     }, 3000);

                                 }).error(function() {
                                     $timeout(function() {
                                         $(".attachment-progress").hide();
                                         scope.uploadPercentage = 0;
                                         scope.initiateUpload = false;
                                     }, 3000);
                                 });

                             } else {
                                 $(".attachment-status").show().html("Please choose new attachments.");
                                 $timeout(function() {
                                     $(".attachment-status").fadeOut();
                                 }, 3000);
                             }
                         }

                         scope.taskAttachmentInput = false;

                         scope.selectAttachment = function(attachmentId, isChecked){                                                                
                               if(isChecked){
                                    if(attachmentsIdArray.indexOf(attachmentId)== -1){
                                        attachmentsIdArray.push(attachmentId);
                                    }
                               }else{
                                    if(attachmentsIdArray.indexOf(attachmentId)>-1){                                        
                                        var iNdex = attachmentsIdArray.indexOf(attachmentId);
                                        attachmentsIdArray.splice(iNdex,1);    
                                    }
                               }
                         }

                         scope.deleteAttachment = function(){

                            if(attachmentsIdArray.length){

                                var attObj = [];

                              //  alert(attachmentsIdArray.length)


                                for(var i=0; i<attachmentsIdArray.length; i++){

                                   
                                    var currentFileObj = _.find(scope.existingAttachments, function(attachment){
                                        return attachment.taskAttachmentId == attachmentsIdArray[i];
                                    });

                                    attObj.push({
                                        "taskAttachmentId" :attachmentsIdArray[i],
                                        "taskAttachmentName" : currentFileObj.attachmentName 
                                    });
                                }
                                
                                $.ajax({
                                       url : "/auth/user/deleteattachmentfromtask",
                                     type: "DELETE",                                    
                                     data: {taskId : $stateParams.taskId,
                                             attachments : attObj   
                                            }

                                }).success(function(resp, status){
                                    
                                    
                                    for(var i=attachmentsIdArray.length-1; i > -1; i--){

                                        console.log("counter");

                                        for(var j =scope.existingAttachments.length-1; j>-1; j-- ){

                                                console.log("initialCounter");
                                                console.log(attachmentsIdArray[i],scope.existingAttachments[j].taskAttachmentId);
                                            if(attachmentsIdArray[i] == scope.existingAttachments[j].taskAttachmentId ){
                                                scope.$apply(function(){
                                                scope.existingAttachments.splice(j,1);
                                                attachmentsIdArray.splice(i,1);                                                    

                                                });
                                                break;
                                            }


                                        }



                                            
                                    }





                                






                                }).error(function(){


                                });


                                

                            }else{

                                alert("please select one or more attachments");

                            }

                         }


                     }
                 }
             }
         ]

     );


 });