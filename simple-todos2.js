if (Meteor.isClient) {


    // creating array: questionnaire [column][row], Questions: column = 0, Answers: column = 1 
    var questionnaire = [
        ["Frage 1", "Frage 2", "Frage 3"],
        ["Antwort 1", "Antwort 2", "Antwort 3"]
    ]
    Session.set("Zeile", 0)




    // This code only runs on the client
    Template.body.helpers({
        showQuestions: function() {
            return questionnaire[0][Session.get("Zeile")];
        },

        // SOLVE: only run if .no event occured
        feedback: function() {
            return questionnaire[1][Session.get("Zeile")];
        }
    });


    Template.body.events({

        // "I know!" --> don't show answer, just continue to next question (later: decrease frequency)
        // SOLVE: if out of questions jump back to first question
        "click .yes": function() {
            if (Session.get("Zeile") <= questionnaire[0].length) {
                Session.set("Zeile", Session.get("Zeile") + 1);
            } else {
                Session.set("Zeile", 0)
            }
        },

        // "Show the answer, please!"
        // SOLVE: show the answer to the question only if no-Button is clicked! (later: increase frequency)
        "click .no": function() {
            feedback();
        },

        // SOLVE: add functionality: shows next question but no answer (later: no change in frequency)
        "click .next": function() {

        }
    });
}
