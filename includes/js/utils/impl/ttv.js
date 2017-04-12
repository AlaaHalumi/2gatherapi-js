'use strict'

let SpeechUtilInstance = null;
class SpeechUtil extends Util{
    constructor() {
        super();
        if(!SpeechUtilInstance){
            SpeechUtilInstance =  new SpeechSynthesisUtterance();
            // this.languages = {english:'en-US'};
            SpeechUtilInstance.lang('en-US');
            // SpeechUtilInstance = this;
        }
        return SpeechUtilInstance;
    }

    // setLanguageS(language){
    //     console.log("sss");
    //     SpeechUtilInstance.lang(this.languages[language]);
    // }
    //
    // setText(contents){
    //     this.text = contents;
    //     window.speechSynthesis.speak(this);
    // }
}