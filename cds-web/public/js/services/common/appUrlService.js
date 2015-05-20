
'use strict';

define(['services/serviceModule'], function (serviceModule) {

	serviceModule.factory('appUrlService', [function(){
			return {



				signin : "/signin",
				getUserSession: "/auth/user/getuserfromsession",

				//Create User module

				savePersonalInfo : '/citizen/savepersonalinf',
				saveWorkInfo : "/citizen/saveworkinf",
				saveVoterInfo : "/citizen/savevoterinf",
				saveresidentialaddress : "/citizen/saveresidentialaddress",
				saveVolunteer : "/volunteer/save",
				saveFamily : "/cadre/saveFamily",
				saveCadre : "/cadre/save",
				quickReg: "/citizen/quickregistration",

				//View & Edit & Retrieve member info

				getUserList : "/user/usersList",
				getUserTypes : "/user/userTypes",
				getUserView : "/user/view",
				getUserPersonalInfo : "/citizen/getpersonalinf",
				getUserWorkInfo : "/citizen/getworkinf",
				getUserVoterInfo : "/citizen/getvoterinf",
				getUserAddressInfo : "/citizen/getresidentialaddress",
				getUserVolunteerInfo : "/volunteer/get",
				getUserFamilyInfo : "/cadre/getfamily",
				getUserCadreInfo : "/cadre/get",

				getProfileInfo : "/auth/user/viewuserinfo",



				getUserAvailability : "/user/isuserexist",
				getMobileAvailability:"/user/ismobileexist",
				getEmailAvailability : "/user/isemailexist",
				

				
				getEducationInfo :"/citizen/qualifications",
				getOccupationInfo : "/citizen/occupations",
				
				getInterestedAreasInfo : "/volunteer/interestedAreasToVolunteer",
				 
				getPartyPositionsInfo : "/cadre/partyPositions",

				getAddress:"/citizen/address",
				getConstituencyInfo: "/citizen/getvoterinfbytext",
				
				getVolunteerCategoryInfo: "/volunteer/volunteercategory",
				getLeadInfo : "/volunteer/volunteerleads",
				getPerformanceGradeInfo : "/volunteer/performancegrades",
				getCareerAspirationInfo :"/citizen/careeraspirations",
				getSkillGapsInfo : "/citizen/skillgaps",
				
				getTaskCategories : "/user/taskcategories",
				saveTaskInfo : "/auth/user/createtask",
				getTasksList :"/auth/user/tasks",
				getCadreLeads : "/auth/cadre/cadreleads",
				getTaskPriorities :"/user/taskpriority",
				getCadreList :"/auth/cadre/cadres",



				deleteUser : "/volunteer/delete"

			};
		
	}]);

	

});

