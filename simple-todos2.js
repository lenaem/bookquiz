if (Meteor.isClient) {


    // set questions
    var questions = ["First question", "second question", "third question"]
    var answers = ["Good", "I will show you the answer then", "default"]
    Session.set("whichButton", 2)


    // This code only runs on the client
    Template.body.helpers({
        showQuestions: function() {
            return questions[0];
        },
        feedback: function() {
            whichAnswer = Session.get("whichButton")
            return answers[whichAnswer];
        }
    });

    Template.body.events({
        "click .yes": function() {
            Session.set("whichButton", 0);
        },
        "click .no": function() {
            Session.set("whichButton", 1);
        }
    });
}
