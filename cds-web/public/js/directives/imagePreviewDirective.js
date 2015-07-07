 define(['directives/directiveModule','messageHandler'], function(directiveModule,messageHandler) {
     directiveModule.directive('imagePreviewDirective', ["registerService", "appUrlService", "$timeout",
             function(registerService, appUrls, $timeout) {
                 return {
                     restrict: "A",
                     link: function(scope, elem, attrs) {

                        var acceptedFormats = ['jpg','jpeg','png'];

                         scope.initiateUpload = false;
                         scope.showUploaderOverlay = false;

                         $(elem).find("#previewHolder,#uploaderOverlay").hover(function() {
                             scope.$apply(function() {
                                 scope.showUploaderOverlay = true;
                             });

                         }, function() {
                             scope.$apply(function() {
                                 scope.showUploaderOverlay = false;
                             });
                         });


                         $("#uploadImageBtn").click(function() {
                             $("#profileHandler").trigger("click");
                         });

                         var fileObj = {};

                         scope.setProfileImage = function(fileInput) {
                             fileObj = fileInput.files[0];
                            var fExt = fileObj.name.substr(fileObj.name.lastIndexOf('.')+1);
                             if(acceptedFormats.indexOf(fExt) == -1){
                               messageHandler.showErrorStatus("Please choose a valid format of images ('jpg', 'png')",".status-message-wrapper");
                                return;
                             }else{
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

                     

                         scope.submitProfileImageForm = function(e) {
                             e.preventDefault();
                             //$("#previewHolder").attr("src","images/cds-loader.gif").css({width : "20px", height:"20px"});

                             var formFileObj = new FormData();

                             formFileObj.append("photograph", fileObj);
                             console.log(formFileObj);

                             if (scope.initiateUpload) {
                                 scope.showUploaderOverlay = false;
                                 scope.showLoader = true;
                                 var imageUploadPromise = $.ajax({
                                     xhr: function() {
                                         var xhr = new window.XMLHttpRequest();

                                         xhr.upload.addEventListener("progress", function(evt) {
                                             console.log(evt.loaded);
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
                                                     scope.showLoader = false;
                                                 }, 3000);
                                             }, 2000);
                                         });
                                        return xhr;
                                     },
                                     type: "POST",
                                     url: appUrls.updateProfileImage,
                                     data: formFileObj,
                                     processData: false,
                                     contentType: false

                                 }).success(function(resp, status, headers, config) {
                                     scope.initiateUpload = false;

                                 }).error(function() {

                                 });

                             }else{
                                scope.showLoader = true;
                                scope.uploadPercentage = "100%";
                                scope.uploadStatusMsg = "Please choose new image";
                                $timeout(function(){
                                    scope.showLoader = false;
                                },2000);

                             }

                         }

                     }
                 }
             }
         ]

     );


 });