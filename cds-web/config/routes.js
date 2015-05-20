/** 
 * Routes
 * Module dependencies.
 */
var userController = require('../app/controllers/user'),
    citizenController = require('../app/controllers/citizen'),
    volunteerController = require('../app/controllers/volunteer'),
    officeController = require('../app/controllers/office'),
    cadreController = require('../app/controllers/cadre'),
    dashboardController = require('../app/controllers/dashboard'),
    index = require('../app/controllers/index');

var multer = require('multer');
var cdsConfig = require('cds-config');

exports.init = function(app, passport, auth) {
    console.log('Initializing Routes');

    app.all('/auth/*', auth.requiresLogin, auth.user.hasAuthorization);

    // User Routes    
    app.get('/signin', userController.signin);
    app.get('/signout', userController.signout);
    app.get('/auth/success', function(req, res) {
        index.home(req, res);
    });

    app.get('/auth/user/getuserfromsession', userController.getUserFromSession);
    app.get('/user/isuserexist', userController.isUserExist);
    app.get('/user/ismobileexist', userController.isMobileExist);
    app.get('/user/isemailexist', userController.isMailExist);

    app.get('/auth/user/userslist', userController.usersList, auth.filterResponse);
    app.get('/user/usertypes', userController.userTypes);

    app.get('/auth/user/myprofile', userController.myProfile, auth.filterResponse);
    app.put('/auth/user/updateprofile', userController.updateProfile, auth.filterResponse);

    app.get('/auth/user/view', userController.viewUser, auth.filterResponse);
    app.get('/auth/user/resetpassword', userController.resetPassword, auth.filterResponse);

    app.get('/auth/user/viewuserinfo', userController.viewUserInfo, auth.filterResponse);

    app.post('/auth/user/createtask', userController.createTask, auth.filterResponse);
    app.put('/auth/user/edittask', userController.editTask, auth.filterResponse);
    app.delete('/auth/user/deletetask', userController.deleteTask, auth.filterResponse);

    var multerAttachments = multer({
        dest: cdsConfig.attachments.rootPath + cdsConfig.attachments.path
    });

    app.post('/auth/user/addattachmenttotask', multerAttachments, userController.addAttachmentToTask, auth.filterResponse);

    app.delete('/auth/user/deleteattachmentfromtask', userController.deleteAttachmentFromTask, auth.filterResponse);
    app.post('/auth/user/addcommenttotask', userController.addCommentToTask, auth.filterResponse);
    app.put('/auth/user/updatecommenttotask', userController.updateCommentToTask, auth.filterResponse);
    app.delete('/auth/user/deletecommenttotask', userController.deleteCommentToTask, auth.filterResponse);
    app.get('/auth/user/statuses', userController.getStatuses, auth.filterResponse);
    app.get('/auth/user/taskdetails', userController.getTaskDetails, auth.filterResponse);
    app.get('/auth/user/updatetasksstatus', userController.updateTasksStatus, auth.filterResponse);

    app.get('/user/requesttypes', userController.requestTypes);
    app.get('/user/taskcategories', userController.taskCategories);
    app.get('/user/taskpriority', userController.taskPriority);

    app.get('/auth/user/teamtasks', userController.getTeamTasks, auth.filterResponse);
    app.get('/auth/user/tasks', userController.getTasks, auth.filterResponse);
    app.get('/auth/user/assignedtasks', userController.getAssignedTasks, auth.filterResponse);
    app.get('/auth/user/tasksforsupervisor', userController.getSupervisorTasks, auth.filterResponse);

    app.post('/auth/user/viewrole', userController.getRole, auth.filterResponse);
    app.delete('/auth/user/deactivaterole', userController.deactivateRole, auth.filterResponse);
    app.delete('/auth/user/saverole', userController.saveRole, auth.filterResponse);
    app.put('/auth/user/updaterole', userController.updateRole, auth.filterResponse);
    app.get('/auth/user/viewroles', userController.getRoles, auth.filterResponse);
    app.get('/auth/user/privileges', userController.getPrivileges, auth.filterResponse);

    //dashboard
    app.get('/auth/dashboard/viewMessage', dashboardController.viewMessage, auth.filterResponse);
    app.get('/auth/dashboard/notifications', dashboardController.notifications, auth.filterResponse);
    app.get('/auth/dashboard/messageCount', dashboardController.messageCount, auth.filterResponse);
    app.get('/auth/dashboard/tasksByAge', dashboardController.tasksByAge, auth.filterResponse);
    app.get('/auth/dashboard/tasksTrendRPerMonth', dashboardController.tasksTrendRPerMonth, auth.filterResponse);
    app.get('/auth/dashboard/cadresTrendRPerMonth', dashboardController.cadresTrendRPerMonth, auth.filterResponse);


    //citizen routes   
    app.get('/citizen/qualifications', citizenController.getQualifications);
    app.get('/citizen/address', citizenController.getAddressByPincode);
    app.get('/citizen/occupations', citizenController.getOccupations);

    app.post('/auth/citizen/savepersonalinf', citizenController.savePersonalInf, auth.filterResponse);
    app.put('/auth/citizen/editpersonalinf', citizenController.editPersonalInf, auth.filterResponse);
    app.get('/auth/citizen/getpersonalinf', citizenController.getPersonalInf, auth.filterResponse);
    app.delete('/auth/citizen/deletepersonalinf', citizenController.deletePersonalinf, auth.filterResponse);

    app.post('/auth/citizen/saveworkinf', citizenController.saveWorkInf, auth.filterResponse);
    app.put('/auth/citizen/editworkinf', citizenController.editWorkInf, auth.filterResponse);
    app.get('/auth/citizen/getworkinf', citizenController.getWorkInf, auth.filterResponse);

    app.post('auth/citizen/savevoterinf', citizenController.saveVoterInf, auth.filterResponse);
    app.put('/auth/citizen/editvoterinf', citizenController.editVoterInf, auth.filterResponse);
    app.get('/auth/citizen/getvoterinf', citizenController.getVoterInf, auth.filterResponse);
    app.delete('/auth/citizen/deletevoterinf', citizenController.deleteVoterInf, auth.filterResponse);

    app.post('/auth/citizen/saveresidentialaddress', citizenController.saveResidentialAddress, auth.filterResponse);
    app.put('/auth/citizen/editresidentialaddress', citizenController.editResidentialAddress, auth.filterResponse);
    app.get('/auth/citizen/getresidentialaddress', citizenController.getResidentialAddress, auth.filterResponse);

    app.post('/auth/citizen/savefamily', citizenController.saveFamily, auth.filterResponse);
    app.put('/auth/citizen/editfamily', citizenController.editFamily, auth.filterResponse);
    app.get('/auth/citizen/getfamily', citizenController.getFamily, auth.filterResponse);
    app.delete('/auth/citizen/deletefamily', citizenController.deleteFamily, auth.filterResponse);

    app.delete('/auth/citizen/delete', citizenController.delete, auth.filterResponse);

    app.get('/auth/citizen/viewcitizen', citizenController.viewCitizen, auth.filterResponse);
    app.get('/auth/citizen/getvoterinfbytext', citizenController.getVoterInfByText);
    app.get('/citizen/careeraspirations', citizenController.careerAspirations);
    app.get('/auth/citizen/skillgaps', citizenController.skillGaps);

    //volunteer routes
    app.get('/volunteer/interestedareastovolunteer', volunteerController.areasIntrestedToVolunteer);
    app.get('/volunteer/volunteercategory', volunteerController.volunteerCategory);
    app.get('/volunteer/volunteerleads', volunteerController.volunteerLeads);

    app.post('/auth/volunteer/save', volunteerController.save);
    app.put('/auth/volunteer/edit', volunteerController.edit, auth.filterResponse);
    app.get('/auth/volunteer/get', volunteerController.get, auth.filterResponse);
    app.delete('/auth/volunteer/delete', volunteerController.delete, auth.filterResponse);

    app.get('/volunteer/isvolunteeridexist', volunteerController.isVolunteerIdExist);
    app.get('/volunteer/performancegrades', volunteerController.performanceGrades);
    app.get('/auth/volunteer/volunteersheet', volunteerController.volunteerSheet, auth.filterResponse);

    //cadre routes    
    app.get('/cadre/partypositions', cadreController.partyPositions);
    app.get('/cadre/bloodgroups', cadreController.bloodGroups);

    app.post('/auth/cadre/save', cadreController.save);
    app.put('/auth/cadre/edit', cadreController.edit, auth.filterResponse);
    app.get('/auth/cadre/get', cadreController.get, auth.filterResponse);
    app.delete('/auth/cadre/delete', cadreController.delete, auth.filterResponse);

    app.get('/auth/cadre/cadreWorksheet', cadreController.getCadreWorksheet, auth.filterResponse);
    app.get('/cadre/ispartymembershipidexist', cadreController.isPartyMemberShipIdExist);
    app.get('/auth/cadre/cadreleads', cadreController.getCadreLeads, auth.filterResponse);
    app.get('/auth/cadre/cadres', cadreController.getCadresList, auth.filterResponse);

    //office executive routes    
    app.put('/auth/office/vnc/verify', officeController.verifyVnC, auth.filterResponse);
    app.put('/auth/office/vnc/reject', officeController.rejectVnC, auth.filterResponse);
    app.put('/auth/office/vnc/verificationlist', officeController.VnCVerificationList, auth.filterResponse);
    app.put('/auth/office/vnc/assigncadreforapproval', officeController.assignCadreForApproval, auth.filterResponse);

    app.put('/auth/office/servicecentredetails', officeController.getServiceCentreDetails, auth.filterResponse);
    app.put('/auth/office/servicecentreempdetails', officeController.getServiceCentreEmployeeDetails, auth.filterResponse);

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
                req.resp = resp;
                next();
            }
        });
    }, passport.authenticate('signup', {
        successRedirect: '/auth/success',
        failureRedirect: '/',
        failureFlash: 'failure message...'
    }));

    // Home route
    app.get('/', index.render);
    app.get('/register', index.register);
    app.get('/calendar', auth.requiresLoginForPage, index.calendar);
    app.get('/inbox', auth.requiresLoginForPage, index.inbox);
    app.get('/tasks', auth.requiresLoginForPage, index.tasks);
    app.get('/dashboard', auth.requiresLoginForPage, index.dashboard);
    app.get('/profile', auth.requiresLoginForPage, index.profile);
    app.get('/editprofile', auth.requiresLoginForPage, index.editprofile);

    app.get('/setlocale/:locale', function(req, res) {
        res.cookie('locale', req.params.locale);
        req.i18n.setLocaleFromCookie();
        res.redirect('/');
    });
};
