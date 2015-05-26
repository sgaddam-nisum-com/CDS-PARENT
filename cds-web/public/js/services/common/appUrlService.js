


define(['services/serviceModule'], function (serviceModule) {

	serviceModule.factory('appUrlService', [function(){
			return {



				signin : "/signin",
				getUserSession: "/auth/user/getuserfromsession",

				//Create User module

				savePersonalInfo : '/auth/citizen/savepersonalinf',
				saveWorkInfo : "/citizen/saveworkinf",
				saveVoterInfo : "/auth/citizen/savevoterinf",
				saveresidentialaddress : "/citizen/saveresidentialaddress",
				saveVolunteer : "/volunteer/save",
				saveFamily : "/cadre/saveFamily",
				saveCadre : "/auth/cadre/save",


				updatePersonalInfo : '/auth/citizen/editpersonalinf',
				updateWorkInfo : "/auth/citizen/editworkinf",
				updateVoterInfo : "/auth/citizen/editvoterinf",
				updateResidentialAddress : "/auth/citizen/editresidentialaddress",
				updateVolunteer : "/auth/volunteer/edit",
				updateFamily : "/auth/citizen/editfamily",
				updateCadre : "/auth/cadre/edit",



				quickReg: "/citizen/quickregistration",

				//View & Edit & Retrieve member info

				getUserList : "/user/usersList",
				getUserTypes : "/user/userTypes",
				getUserView : "/user/view",
				getUserPersonalInfo : "/auth/citizen/getpersonalinf",
				getUserWorkInfo : "/auth/citizen/getworkinf",
				getUserVoterInfo : "/auth/citizen/getvoterinf",
				getUserAddressInfo : "/auth/citizen/getresidentialaddress",
				getUserVolunteerInfo : "/auth/volunteer/get",
				getUserFamilyInfo : "/auth/citizen/getfamily",
				getUserCadreInfo : "/auth/cadre/get",

				getProfileInfo : "/auth/user/viewuserinfo",



				getUserAvailability : "/user/isuserexist",
				getMobileAvailability:"/user/ismobileexist",
				getEmailAvailability : "/user/isemailexist",
				

				
				getEducationOptions :"/citizen/qualifications",
				getOccupationOptions : "/citizen/occupations",
				
				getInterestedAreasInfo : "/volunteer/interestedAreasToVolunteer",
				 
				getPartyPositionsInfo : "/cadre/partyPositions",

				getAddress:"/citizen/address",
				getConstituencyInfo: "/citizen/getvoterinfbytext",
				
				getVolunteerCategoryInfo: "/volunteer/volunteercategory",
				getLeadInfo : "/volunteer/volunteerleads",
				getPerformanceGradeInfo : "/volunteer/performancegrades",
				getCareerAspirationOptions :"/citizen/careeraspirations",
				getSkillGapsOptions : "/citizen/skillgaps",
				
				getTaskCategories : "/user/taskcategories",
				saveTaskInfo : "/auth/user/createtask",
				getTasksList :"/auth/user/tasks",
				getCadreLeads : "/auth/cadre/cadreleads",
				getTaskPriorities :"/user/taskpriority",
				getCadreList :"/auth/cadre/cadres",

				getTasksByAge:"/auth/dashboard/tasksByAge",
				getTasksByTrend:"/auth/dashboard/tasksTrendRPerMonth",

				getTaskDetails : "/auth/user/taskdetails",
				getTeamTasks :"/auth/user/teamtasks",
				getAllTasks : "/auth/user/tasks",
				getTaskStatuses: "/user/statuses",
				getMyTasksList :"/auth/user/assignedtasks",
				deleteTask : "/auth/user/deletetask",
				updateTask : "/auth/user/updatetasksstatus",
				getTaskState:"/auth/dashboard/messageCount",

				deleteUser : "/volunteer/delete",

				/*Office executive*/

				getCadreVerifications : "/auth/office/vnc/verificationlist",




			};
		
	}]);

	

});

