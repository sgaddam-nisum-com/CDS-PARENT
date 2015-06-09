// form specific.


//To map validation functions[public] to validate-key which in return 
//generates additional function with name of Validate-key  on methods object in validation module.

define(['validation'], function(validation) {

    return {
        partyMembershipId: {
			required:true,
			minCharacters:5,
			maxCharacters:16,
			key_error_msgs:true
		},
		positionId : {
			required:true,
			key_error_msgs:true
		},
		partyResponsibility: {
			required:true,
			key_error_msgs:true
		},
		bloodGroupId: {
			required:true,
			key_error_msgs:true
		},
		performanceGradeId: {
			required:true,
			key_error_msgs:true
		}
    }

});