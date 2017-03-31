class VoiceToTextUtil extends Util{
    constructor(langauge){
        super();
        this.recognition = new webkitSpeechRecognition();
        this.languages = {hebrew:'he_HE'};
        this.setLanguage(langauge);
        this.startToListen();
    }

    startToListen() {
        this.recognition.continuous = true;
        this.reset();
        this.recognition.onend = this.reset();
        this.recognition.onresult = function (event) {
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    document.activeElement.value += event.results[i][0].transcript;
                }
            }
        };
        this.start();
    }

    reset() {
        this.recognizing = false;
    }

    stop(){
        this.recognition.stop();
        this.reset();
    }

    start(){
        this.recognition.start();
        this.recognizing = true;
    }

    setLanguage(language){
        this.recognition.lang = this.languages[language];
    }

    toggleStartStop() {
        if (this.recognizing) {
            this.start()
        } else {
            this.stop();
        }
    }
}