'use strict'

let SpeechUtilInstance = null;
class SpeechUtil extends Util{
    constructor() {
        super();
        if(!SpeechUtilInstance){
            // this.SpeechUtilInstance = window.speechSynthesis;
            // SpeechUtilInstance =  new SpeechSynthesisUtterance();
            // this.languages = {english:'en-US'};
            // SpeechUtilInstance.lang('en-US');
            this.SpeechUtilInstance = this;
        }
        return this.SpeechUtilInstance;
    }

    startSpeak(utterance){
        window.speechSynthesis.speak(utterance);
    }
    cancelSpeak(){
        window.speechSynthesis.cancel();
    }
}