'use strict';

define(['services/serviceModule'], function(serviceModule) {
    serviceModule.factory('roleService', ['$http',
        function($http) {


            var roleStateMap = {
                "Admin": [],
                "Citizen": ["Requests"],
                "Cadre" : ["Dashboard", "Tasks","Calendar"],                
                "Office Executive" : ["Dashboard","Tasks","Calendar" ,"Requests","Registrants"],
                "Office Manager" : ["Dashboard","Tasks", "Calendar","Requests","Registrants"]
            }


            var navItemsMaps = {

                                Dashboard : {name : "Dashboard" , url : "/dashboard"}, 
                                Tasks : {name : "Tasks" , url : "/tasks"},
                                Calendar :  {name : "Calendar" , url : "#"},
                                Requests : {name : "Requests" , url : "#"}
                            }
                            



            var privilegeMap = {

                "Home": "auth.dashboard",

                "Post Request": "auth.postRequest",

                "View Requests": "auth.viewRequest",

                "Citizen Detailed Sheet": "auth.citizenWorkSheet",

                "View Profile": "auth.viewProfile",

                "Edit/Update Profile": "auth.updateProfile",

                "Inbox": "auth.inbox",

                "Assigned tasks/Work Sheet": "auth.workSheet",

                "Manage Tasks": "auth.manageTasks",

                "View Calender": "auth.viewCalendar",

                "User List": "auth.list",

                "Create Task": "auth.createTask",

                "Allocate Task/Work": "auth.allocateTask",

                "Create Calander": "auth.createCalendar",

                "Create User": "auth.createUser",

                "Approve Volunteer/Cadre": "auth.approveCadreVolunteer",

                "Cadre Work Sheet": "auth.cadreWorksheet",

                "Tasks List": "auth.tasksList",

                "Update User": "auth.updateUser",

                "Delete User": "auth.deleteUser",

                "View User": "auth.viewUser",

                "Volunteer List": "auth.volunteerList",

                "Manage volunteers": "auth.manageVolunteers"
            };

            return {

                getInitialState: function(role) {

                    switch (role) {
                        case "citizen":
                            return "citizen";
                            break;
                        default :
                            return "default";    
                    }
                },

                checkValidModule: function(state, privilegeStateArray) {

                    for (var i = 0; i < privilegeStateArray.length; i++) {

                        if (privilegeStateArray[i] == state) {
                            return true;
                            break;
                        }
                    }

                    return;
                },


                getPrivilegeStateArray : function(privilegeArray){
                		var privilegeStateArray = [];
                		for(var i=0; i< privilegeArray.length; i++){

                			if(privilegeMap[privilegeArray[i].privilegeName]){
                				privilegeStateArray.push(privilegeMap[privilegeArray[i].privilegeName]);
                			}

	               		}
	               		return privilegeStateArray;
                },

                getTopRole : function(appRoles){
                    
                    var topRole, rolesArray=[];                   
                    appRoles = appRoles || [];
                    
                    for(var i=0; i<appRoles.length; i++){
                        rolesArray.push(appRoles[i].roleName);
                    }

                    if(rolesArray.indexOf("Office Manager") > -1){
                        topRole = "Office Manager";
                    }else if(rolesArray.indexOf("Office Executive") > -1){
                        topRole = "Office Executive";
                    }else if(rolesArray.indexOf("Cadre") > -1){
                        topRole = "Cadre";   
                    }else if(appRoles.roleName === "Volunteer"){
                        topRole = "Volunteer";   
                    }else{
                        topRole = "Citizen";
                    }
                    return topRole;
                },

                getNavArray : function(role){
                    
                    console.log(role);
                    var navArray = [];
                    var roleStateArray = roleStateMap[role];

                    for(var i=0; i<roleStateArray.length; i++){
                        navArray.push(navItemsMaps[roleStateArray[i]]);
                    }

                    console.log(navArray);
                    return navArray;
                }

            };
        }
    ]);
});