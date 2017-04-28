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
    chunkContents(text){
        let speaker = new SpeechUtil();
        let chunkLength = 120;
        let pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
        let arr = [];
        let txt = text;
        while (txt.length > 0) {
            arr.push(txt.match(pattRegex)[0]);
            txt = txt.substring(arr[arr.length - 1].length);
        }
        arr.forEach(function(element) {
            let content = element.trim();
            console.log(content);
            let u = new SpeechSynthesisUtterance(content);
            u.lang = 'en-US';
            speaker.startSpeak(u);
            // window.speechSynthesis.speak(u);

        });
    }
}