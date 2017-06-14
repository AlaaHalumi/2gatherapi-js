(function() {

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    // var quiz = document.getElementById("quiz"); //Quiz div object
    var questions;
    var quiz = $('#quiz');

    var checkUser = function(){
        console.log("inside checkUser");
        var url = 'tsconfig.json';
        var jsonData;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                jsonData = JSON.parse(this.responseText);
                console.log(jsonData);
                console.log(jsonData["questions"].length);

                questions = jsonData["questions"];
                // // Display initial question
                displayNext();


                // for(var index = 0 ; index < jsonData["questions"].length ; index++){
                //
                //     // console.log(jsonData["questions"][index]["question"]);
                //     questionHeader.innerHTML += jsonData["questions"][index]["question"]
                //
                //     // console.log(jsonData["questions"][index]["correctAnswer"]);
                //     // console.log(jsonData["questions"][index]["choices"]);
                //
                //     for(var index2 = 0 ; index2 < jsonData["questions"][index]["choices"].length ; index2++){
                //             console.log(jsonData["questions"][index]["choices"][index2]);
                //     }
                //
                // }

            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

    };

    checkUser();

    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if(quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('Please make a selection!');
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
        e.preventDefault();

        if(quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
        e.preventDefault();

        if(quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.buttonGame').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.buttonGame').on('mouseleave', function () {
        $(this).removeClass('active');
    });


    // // Creates and returns the div that contains the questions and
    // // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });
        var header = $('<h4>Question ' + (index + 1) + '</h4>');
        qElement.append(header);

        var question = $('<h3>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);


        return qElement;
    }

    // // Creates a list of the answer choices as radio inputs
    function createRadios(index) {

        var radioList = $('<div>', {
            class: 'row'
        });

        var input = '';
        // var item = '';
        for (var i = 0; i < questions[index].choices.length; i++) {

            input =  '<label class="cell"><input type="radio" name="answer" value=' + i + ' /> '+(i+1)+"."+"   "+'<img src="images/quez/'+questions[index].choices[i]+"."+"jpg"+'" width="40%" alt='+questions[index].choices[i]+' /></label>';
            // item = '<img src="images/quez/'+questions[index].choices[i]+"."+"jpg"+'" width="40%" alt='+questions[index].choices[i]+' />';
            // // input += item;
            // input.append(item);
            radioList.append(input);
        }

        return radioList;
    }
    //
    // // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();

            if(questionCounter < questions.length){
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value='+selections[questionCounter]+']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if(questionCounter === 1){
                    $('#prev').show();
                } else if(questionCounter === 0){

                    $('#prev').hide();
                    $('#next').show();
                }
            }else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>',{class: 'score'});

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        score.append('You got ' + numCorrect + ' questions out of ' +
            questions.length + ' right!!!');
        return score;
    }
})();