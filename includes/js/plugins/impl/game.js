class Game extends Plugin {

    constructor(domElement) {
        super();
        console.log("it's game");
        this.questionCounter = 0;
        this.selections = [];
        this.questions;
        $(domElement).append("<div id='quiz'></div>");
        this.quiz = $('#quiz');
    }

    draw() {
        this.checkUser();
        var self = this;
        $('#next').on('click', function (e) {
            e.preventDefault();

            if (self.quiz.is(':animated')) {
                return false;
            }
            self.choose();

            if (isNaN(self.selections[self.questionCounter])) {
                alert('Please make a selection!');
            } else {
                self.questionCounter++;
                self.displayNext();
            }
        });

        $('#prev').on('click', function (e) {
            e.preventDefault();

            if (self.quiz.is(':animated')) {
                return false;
            }
            self.choose();
            self.questionCounter--;
            self.displayNext();
        });

        $('#start').on('click', function (e) {
            e.preventDefault();

            if (self.quiz.is(':animated')) {
                return false;
            }
            self.questionCounter = 0;
            self.selections = [];
            self.displayNext();
            $('#start').hide();
        });

        $('.buttonGame').on('mouseenter', function () {
            $(this).addClass('active');
        });
        $('.buttonGame').on('mouseleave', function () {
            $(this).removeClass('active');
        });
    }

    checkUser() {
        console.log("inside checkUser");
        var url = 'tsconfig.json';
        var jsonData;
        var xhttp = new XMLHttpRequest();
        var self = this;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                jsonData = JSON.parse(this.responseText);
                console.log(jsonData);
                console.log(jsonData["questions"].length);
                console.log(jsonData["questions"]);
                self.questions = jsonData["questions"];
                self.displayNext();
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };

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

    createRadios(index) {

        var radioList = $('<div>', {
            class: 'row'
        });
        var input = '';
        // var item = '';
        for (var i = 0; i < this.questions[index].choices.length; i++) {
            input = '<label class="cell"><input type="radio" name="answer" value=' + i + ' /> ' + (i + 1) + "." + "   " + '<img src="images/quez/' + this.questions[index].choices[i] + "." + "jpg" + '" width="40%" alt=' + this.questions[index].choices[i] + ' /></label>';
            radioList.append(input);
        }
        return radioList;
    }

    choose() {
        this.selections[this.questionCounter] = +$('input[name="answer"]:checked').val();
    }

    displayNext() {
        var self = this;
        this.quiz.fadeOut(function () {
            $('#question').remove();

            if (self.questionCounter < self.questions.length) {
                var nextQuestion = self.createQuestionElement(self.questionCounter);
                self.quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(self.selections[self.questionCounter]))) {
                    $('input[value=' + self.selections[self.questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (self.questionCounter === 1) {
                    $('#prev').show();
                } else if (self.questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = self.displayScore();
                self.quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

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
}