// form specific.


//To map validation functions[public] to validate-key which in return 
//generates additional function with name of Validate-key  on methods object in validation module.

define(['validation'], function(validation) {

    return {
        voterId: {
            required: false,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true
        },
        addressLine1: {
            required: true,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true
        },
        addressLine2: {
            required: false,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true
        },
        pincode: {
            required: false,
            minCharacters: 5,
            maxCharacters: 16,
            key_error_msgs: true
        }

    }

});
