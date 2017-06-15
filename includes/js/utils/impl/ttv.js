'use strict'

let SpeechUtilInstance = null;
class SpeechUtil extends Util{
    constructor() {
        super();
        if(!SpeechUtilInstance){
            this.languages = {english:'en-US',france:'fr-FR'};
            this.SpeechUtilInstance = this;
            this.utterance = new SpeechSynthesisUtterance();
            this.annyangUtil = new AnnyangUtil();
            this.initAnnyang()
        }
        return this.SpeechUtilInstance;
    }

    initSpeech(languages){
        if(languages != null || languages != undefined) {
            this.utterance.lang  = this.languages[this.languages[languages]];
        }
        else{
            this.utterance.lang = 'english';
        }
    }

    startSpeak(utterance){
        console.log("inside startSpeak");
        window.speechSynthesis.speak(utterance);
    }
    cancelSpeak(){
        window.speechSynthesis.cancel();
    }
    chunkContents(text) {
        let speaker = new SpeechUtil();
        let chunkLength = 120;
        let pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
        let arr = [];
        let txt = text;
        while (txt.length > 0) {
            arr.push(txt.match(pattRegex)[0]);
            txt = txt.substring(arr[arr.length - 1].length);
        }
        let self = this.utterance
        arr.forEach(function (element) {
            let content = element.trim();
            console.log(content);
            self.text = content
            speaker.startSpeak(self);
        });
    }

    read(path){
        let speaker = new SpeechUtil();
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", path, false);
        let self = this.utterance
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    let allText = rawFile.responseText;

                    let chunkLength = 150;
                    let pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
                    let arr = [];
                    let txt = allText;
                    while (txt.length > 0) {
                        arr.push(txt.match(pattRegex)[0]);
                        txt = txt.substring(arr[arr.length - 1].length);
                    }
                    arr.forEach(function(element) {
                        let content = element.trim();
                        console.log(content);
                        self.text = content
                        speaker.startSpeak(self);
                    });

                };
            }
        }
        rawFile.send(null);
    }
    initAnnyang() {

        let commands = {};
        commands['stop'] = function(){
            // speechSynthesisInstance.cancel();
            window.speechSynthesis.cancel();
            console.log("stop");
        };
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}