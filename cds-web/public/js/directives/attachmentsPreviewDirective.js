 define(['directives/directiveModule', 'messageHandler'], function(directiveModule, messageHandler) {
     directiveModule.directive('attachmentsPreviewDirective', ["registerService", "appUrlService", "$timeout","$stateParams",
             function(registerService, appUrls, $timeout, $stateParams) {
                 return {
                     restrict: "A",
                     link: function(scope, elem, attrs) {

                         var acceptedFormats = ['jpg', 'jpeg', 'png'],
                         attsArray = [];

                         scope.initiateUpload = false;

                         scope.browseAttachments = function() {
                             $("#fileAttachField").trigger("click");
                         };


                         /*Attachments test data*/
                      

                         

                         scope.setAttachments = function(e) {
                             
                            console.log(e.files);

                             for (var key in e.files) {
                                 if (e.files[key] instanceof File) {
                                     e.files[key].originalName = e.files[key].name;
                                     e.files[key].nonLinked = true;                                     
                                     attsArray.push(e.files[key]);
                                     scope.existingAttachments.push(e.files[key]);
                                 }
                             }
                             scope.$apply(function() {                                
                             });
                             
                             scope.initiateUpload = true;
                             
                         };


                         $(document).on("click",".non-linked",function(e){
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
                                 console.log(fileObj);
                                formFileObj.append("attachmentName", fileObj);
                             }
                             if (scope.initiateUpload) {                                                                  
                                    $(".attachment-progress").show(); 
                                    $.ajax({
                                     xhr: function() {
                                         var xhr = new window.XMLHttpRequest();

                                         xhr.upload.addEventListener("progress", function(evt) {
                                             console.log(evt.loaded);
                                             if (evt.lengthComputable) {
                                                 scope.$apply(function() {
                                                     var percentComplete = (evt.loaded / evt.total) * 100;
                                                     scope.uploadPercentage = scope.uploadStatusMsg = percentComplete + "%";
                                                     console.log(scope.uploadPercentage);
                                                 });
                                             }
                                         }, false);

                                         xhr.upload.addEventListener("load", function(evt) {
                                             $timeout(function() {
                                                 scope.uploadStatusMsg = "Updation completed."

                                                 attsArray

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
                                     
                                        var fileData = resp.data.attachments;
                                     
                                     for(var i=0; i<scope.existingAttachments.length; i++){

                                        if($.type(fileData.attachmentName) ==="array"){

                                           for(var j = 0; j< fileData.attachmentName.length; j++){
        
                                              if(scope.existingAttachments[i].name == fileData.attachmentName[j].originalname){
                                                    console.log("mached");
                                                    scope.$apply(function(){
                                                    scope.existingAttachments[i]['nonLinked'] = false;
                                                    scope.existingAttachments[i]['filePath']  = scope.attachmentViewPath+ fileData.attachmentName[j].name; 
                                              });
                                            }
                                        }
                                    }

                                        else{

                                            if(scope.existingAttachments[i].name == fileData.attachmentName.originalname){
                                                console.log("mached");
                                            scope.$apply(function(){
                                                scope.existingAttachments[i]['nonLinked'] = false;
                                                scope.existingAttachments[i]['filePath']  = scope.attachmentViewPath+ fileData.attachmentName.name; 
                                            });
                                            
                                        
                                        }



                                            }







                                     }




                                     scope.initiateUpload = false;
                                     attsArray = [];
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

















                     }
                 }
             }
         ]

     );


 });