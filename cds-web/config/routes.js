/** 
 * Routes
 * Module dependencies.
 */
var userController = require('../app/controllers/user'),
    citizenController = require('../app/controllers/citizen'),
    volunteerController = require('../app/controllers/volunteer'),
    officeController = require('../app/controllers/office'),
    cadreController = require('../app/controllers/cadre'),
    index = require('../app/controllers/index');

exports.init = function(app, passport, auth) {
    console.log('Initializing Routes');

    app.all('/auth/*', auth.requiresLogin, auth.user.hasAuthorization);

    // User Routes    
    app.get('/signin', userController.signin);
    app.get('/signout', userController.signout);
    app.get('/auth/success', function(req, res) {
        index.officehome(req, res);
    });

    app.get('/auth/user/getuserfromsession', userController.getUserFromSession);
    app.get('/user/isuserexist', userController.isUserExist);
    app.get('/user/ismobileexist', userController.isMobileExist);
    app.get('/user/isemailexist', userController.isMailExist);

    app.get('/auth/user/userslist', userController.usersList, auth.filterResponse);
    app.get('/auth/user/usertypes', userController.userTypes);

    app.get('/auth/user/myprofile', userController.myProfile, auth.filterResponse);
    app.put('/auth/user/updateprofile', userController.updateProfile, auth.filterResponse);

    app.get('/auth/user/view', userController.viewUser, auth.filterResponse);
    app.get('/auth/user/resetpassword', userController.resetPassword, auth.filterResponse);

    app.post('/auth/user/createtask', userController.createTask);
    app.put('/auth/user/edittask', userController.editTask);
    app.delete('/auth/user/deletetask', userController.deleteTask);
    app.post('/auth/user/addattachmenttotask', userController.addAttachmentToTask);
    app.delete('/auth/user/deleteattachmentfromtask', userController.deleteAttachmentFromTask);
    app.post('/auth/user/addcommenttotask', userController.addCommentToTask);
    app.put('/auth/user/updatecommenttotask', userController.updateCommentToTask);
    app.delete('/auth/user/deletecommenttotask', userController.deleteCommentToTask);
    app.get('/auth/user/statuses', userController.getStatuses);
    app.get('/auth/user/taskdetails', userController.getTaskDetails);
    app.get('/auth/user/tasks', userController.getTasks);
    app.get('/auth/user/mytasks', userController.getMyTasks);
    app.get('/auth/user/requesttypes', userController.requestTypes);
    app.get('/auth/user/taskcategories', userController.taskCategories);
    app.get('/auth/user/taskpriority', userController.taskPriority);

    app.post('/auth/user/viewrole', userController.getRole, auth.filterResponse);
    app.delete('/auth/user/deactivaterole', userController.deactivateRole, auth.filterResponse);
    app.delete('/auth/user/saverole', userController.saveRole, auth.filterResponse);
    app.put('/auth/user/updaterole', userController.updateRole, auth.filterResponse);
    app.get('/auth/user/viewroles', userController.getRoles, auth.filterResponse);
    app.get('/auth/user/privileges', userController.getPrivileges, auth.filterResponse);

    //citizen routes   
    app.get('/citizen/qualifications', citizenController.getQualifications);
    app.get('/citizen/address', citizenController.getAddressByPincode);
    app.get('/citizen/occupations', citizenController.getOccupations);

    app.post('/auth/citizen/savepersonalinf', citizenController.savePersonalInf);
    app.put('/auth/citizen/editpersonalinf', citizenController.editPersonalInf, auth.filterResponse);
    app.get('/auth/citizen/getpersonalinf', citizenController.getPersonalInf, auth.filterResponse);
    app.delete('/auth/citizen/deletepersonalinf', citizenController.deletePersonalinf, auth.filterResponse);

    app.post('/auth/citizen/saveworkinf', citizenController.saveWorkInf);
    app.put('/auth/citizen/editworkinf', citizenController.editWorkInf, auth.filterResponse);
    app.get('/auth/citizen/getworkinf', citizenController.getWorkInf, auth.filterResponse);

    app.post('auth/citizen/savevoterinf', citizenController.saveVoterInf);
    app.put('/auth/citizen/editvoterinf', citizenController.editVoterInf, auth.filterResponse);
    app.get('/auth/citizen/getvoterinf', citizenController.getVoterInf, auth.filterResponse);
    app.delete('/auth/citizen/deletevoterinf', citizenController.deleteVoterInf, auth.filterResponse);

    app.post('/auth/citizen/saveresidentialaddress', citizenController.saveResidentialAddress);
    app.put('/auth/citizen/editresidentialaddress', citizenController.editResidentialAddress, auth.filterResponse);
    app.get('/auth/citizen/getresidentialaddress', citizenController.getResidentialAddress, auth.filterResponse);

    app.post('/auth/citizen/savefamily', citizenController.saveFamily);
    app.put('/auth/citizen/editfamily', citizenController.editFamily, auth.filterResponse);
    app.get('/auth/citizen/getfamily', citizenController.getFamily, auth.filterResponse);
    app.delete('/auth/citizen/deletefamily', citizenController.deleteFamily, auth.filterResponse);

    //app.post('/citizen/quickregistration', citizenController.quickRegistration);

    app.delete('/auth/citizen/delete', citizenController.delete, auth.filterResponse);

    app.get('/auth/citizen/viewcitizen', citizenController.viewCitizen, auth.filterResponse);
    app.get('/auth/citizen/getvoterinfbytext', citizenController.getVoterInfByText);
    app.get('/auth/citizen/careeraspirations', citizenController.careerAspirations);
    app.get('/auth/citizen/skillgaps', citizenController.skillGaps);

    //volunteer routes
    app.get('/volunteer/interestedareastovolunteer', volunteerController.areasIntrestedToVolunteer);
    app.get('/volunteer/volunteercategory', volunteerController.volunteerCategory);
    app.get('/volunteer/volunteerleads', volunteerController.volunteerLeads);

    app.post('/auth/volunteer/save', volunteerController.save);
    app.put('/auth/volunteer/edit', volunteerController.edit, auth.filterResponse);
    app.get('/auth/volunteer/get', volunteerController.get, auth.filterResponse);
    app.delete('/auth/volunteer/delete', volunteerController.delete, auth.filterResponse);

    app.get('/auth/volunteer/isvolunteeridexist', volunteerController.isVolunteerIdExist);
    app.get('/auth/volunteer/performancegrades', volunteerController.performanceGrades);
    app.get('/auth/volunteer/volunteersheet', volunteerController.volunteerSheet, auth.filterResponse);

    //cadre routes    
    app.get('/auth/cadre/partypositions', cadreController.partyPositions);
    app.get('/auth/cadre/bloodgroups', cadreController.bloodGroups);

    app.post('/auth/cadre/save', cadreController.save);
    app.put('/auth/cadre/edit', cadreController.edit, auth.filterResponse);
    app.get('/auth/cadre/get', cadreController.get, auth.filterResponse);
    app.delete('/auth/cadre/delete', cadreController.delete, auth.filterResponse);

    app.get('/auth/cadre/cadreWorksheet', cadreController.cadreWorksheet, auth.filterResponse);
    app.get('/auth/cadre/ispartymembershipidexist', cadreController.cadreWorksheet);
    app.get('/auth/cadre/cadres', cadreController.cadres);

    //office executive routes    
    app.put('/auth/office/manager/vnc/verify', officeController.verifyVnC, auth.filterResponse);
    app.put('/auth/office/manager/vnc/reject', officeController.rejectVnC, auth.filterResponse);
    app.put('/auth/office/manager/vnc/verificationlist', officeController.VnCVerificationList, auth.filterResponse);
    app.get('/auth/office/manager/viewuserinfo', officeController.viewUserInfo, auth.filterResponse);

    // Setting the local strategy route
    //LOGIN SERVICE
    app.post('/signin',
        passport.authenticate('local', {
            successRedirect: '/auth/success',
            failureRedirect: '/',
            failureFlash: 'failure message...'
        }));

    app.post('/citizen/quickregistration', function(req, res, next) {
        req.body.username = req.body.mobileNumber;
        citizenController.quickRegistration(req, res, next, function(resp) {
            console.log(resp)
            if (resp.status === "failure") {
                res.json(resp);
            } else {
                passport.authenticate('local', {
                    successRedirect: '/auth/success',
                    failureRedirect: '/',
                    failureFlash: 'failure message...'
                });

            }
        });
    });

    // Home route
    app.get('/', index.render);
    app.get('/register', index.register);
    app.get('/calendar', index.calendar);
    app.get('/inbox', index.inbox);
    app.get('/tasks', index.tasks);
    app.get('/dashboard', index.dashboard);
    app.get('/profile', index.profile);


    app.get('/setlocale/:locale', function(req, res) {
        res.cookie('locale', req.params.locale);
        req.i18n.setLocaleFromCookie();
        res.redirect('/');
    });
};
