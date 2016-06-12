import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'main.html';
import './routes.html'
Template.register.events({
    'submit .register-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        var firstname = event.target.firstname.value;
        var lastname = event.target.lastname.value;

        var user = {'email':email,password:password,profile:{name:firstname +" "+lastname}};

        Accounts.createUser(user,function(err){
            if(!err) {
                Router.go('/');
            }
        });
    }
});

Template.login.events({
    'submit .login-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email,password,function(err){
            if(!err) {
                Router.go('/');
            }
        });
    },
    'click .btn-facebook':function(event){
        event.preventDefault();
        Meteor.loginWithFacebook(function(err){
            if(!err) {
                Router.go('/');
            }
        });
    }
});


