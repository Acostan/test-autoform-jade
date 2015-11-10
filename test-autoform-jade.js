if (Meteor.isClient) {

  Template.test.helpers({

  });

  Template.test.events({
    'click button': function () {

    }
  });

  AutoForm.hooks({
    usersForm: {

      onSubmit: function() {
        console.log("submitting form...");

      },

      onSuccess: function(operation, result, template) {
        console.log('success');

      },

      onError: function(operation, error, template) {
        console.log('error');
      }
    }

  }, true);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
