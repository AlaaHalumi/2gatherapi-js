class Game extends Object {

    constructor(domElement) {
        super();
        this.domElement = domElement;
        this.linkFactory = new LinkFactory();
        this.questions = {
            "questions": [
                {
                    "question": "Which picture shows Shrek?",
                    "choices": ["shrek", "pooh", "dog", "thing"],
                    "correctAnswer": 0
                },
                {
                    "question": "Which picture shows an Owl?",
                    "choices": ["Penguin", "Flamingo", "Owl", "Quetzal"],
                    "correctAnswer": 2
                },
                {
                    "question": "Which picture shows a fruit?",
                    "choices": ["Brocoli", "Carrots", "Apple", "Paprika"],
                    "correctAnswer": 2
                },
                {
                    "question": "Which picture shows the answer of 2+2?",
                    "choices": ["8", "4", "6", "5"],
                    "correctAnswer": 1
                },
                {
                    "question": "Which picture shows a Quetzal?",
                    "choices": ["8", "4", "6", "5"],
                    "correctAnswer": 2
                }
            ]
        }

        this.questionCounter = 0; //Tracks question number
        this.selections = []; //Array containing user choices
        // var quiz = document.getElementById("quiz"); //Quiz div object
        this.questions;
        this.quiz = $('#quiz');

    }

    draw() {

        //main container
        var divQuiz = document.createElement("div");
        divQuiz.setAttribute("id", "quiz");
        this.domElement.appendChild(divQuiz);


        var divNext = document.createElement("div");
        divNext.setAttribute("class", "buttonGame");
        divNext.setAttribute("id", "next");
        this.domElement.appendChild(divNext);


        var divPrev = document.createElement("div");
        divPrev.setAttribute("class", "buttonGame");
        divPrev.setAttribute("id", "prev");
        this.domElement.appendChild(divPrev);

        var divStart = document.createElement("div");
        divStart.setAttribute("class", "buttonGame");
        divStart.setAttribute("id", "start");
        this.domElement.appendChild(divStart);

        let aNext = document.createElement("tg-a");
        divNext.appendChild(aNext);
        let nextLink = {
            link: {
                href: "#",
                text: "Next"
            }
        }
        this.linkFactory.createObject(aNext, nextLink);

        let aPrev = document.createElement("tg-a")
        divPrev.appendChild(aPrev);
        let prevLink = {
            link: {
                href: "#",
                text: "Prev"
            }
        }
        this.linkFactory.createObject(aPrev, prevLink);

        let aStart = document.createElement("tg-a")
        divStart.appendChild(aStart);
        let startLink = {
            link: {
                href: "#",
                text: "Start Over"
            }
        }
        this.linkFactory.createObject(aStart, startLink);

        this.displayNext();

        // Click handler for the 'next' button
        $('#next').on('click', function (e) {
            e.preventDefault();

            // Suspend click listener during fade animation
            if (this.quiz.is(':animated')) {
                return false;
            }
            this.choose();

            // If no user selection, progress is stopped
            if (isNaN(this.selections[this.questionCounter])) {
                alert('Please make a selection!');
            } else {
                this.questionCounter++;
                this.displayNext();
            }
        });

        // Click handler for the 'prev' button
        $('#prev').on('click', function (e) {
            e.preventDefault();

            if (this.quiz.is(':animated')) {
                return false;
            }
            this.choose();
            this.questionCounter--;
            this.displayNext();
        });

        // Click handler for the 'Start Over' button
        $('#start').on('click', function (e) {
            e.preventDefault();

            if (this.quiz.is(':animated')) {
                return false;
            }
            this.questionCounter = 0;
            this.selections = [];
            this.displayNext();
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
    }

    createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });
        var header = $('<h4>Question ' + (index + 1) + '</h4>');
        qElement.append(header);

        var question = $('<h3>').append(this.questions[index].question);
        qElement.append(question);

        var radioButtons = this.createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // // Creates a list of the answer choices as radio inputs
    createRadios(index) {

        var radioList = $('<div>', {
            class: 'row'
        });

        var input = '';
        // var item = '';
        for (var i = 0; i < this.questions[index].choices.length; i++) {

            input = '<label class="cell"><input type="radio" name="answer" value=' + i + ' /> ' + (i + 1) + "." + "   " + '<img src="images/quez/' + this.questions[index].choices[i] + "." + "jpg" + '" width="40%" alt=' + this.questions[index].choices[i] + ' /></label>';
            // item = '<img src="images/quez/'+questions[index].choices[i]+"."+"jpg"+'" width="40%" alt='+questions[index].choices[i]+' />';
            // // input += item;
            // input.append(item);
            radioList.append(input);
        }

        return radioList;
    }

    //
    // // Reads the user selection and pushes the value to an array
    choose() {
        this.selections[this.questionCounter] = +$('input[name="answer"]:checked').val();
    }


    // Computes score and returns a paragraph element to be displayed
    displayScore() {
        var score = $('<p>', {class: 'score'});

        var numCorrect = 0;
        for (var i = 0; i < this.selections.length; i++) {
            if (this.selections[i] === this.questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        score.append('You got ' + numCorrect + ' questions out of ' +
            this.questions.length + ' right!!!');
        return score;
    }

    displayNext() {
        this.quiz.fadeOut(function () {
            $('#question').remove();

            if (this.questionCounter < this.questions.length) {
                var nextQuestion = this.createQuestionElement(questionCounter);
                this.quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(this.selections[this.questionCounter]))) {
                    $('input[value=' + this.selections[this.questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (this.questionCounter === 1) {
                    $('#prev').show();
                } else if (this.questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = this.displayScore();
                this.quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

}