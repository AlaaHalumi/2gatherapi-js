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
        console.log("inside startSpeak");
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
    readChunk(element){
        console.log("before========================");
        console.log(element);
        let content = element.trim();
        // console.log(content);
        let u = new SpeechSynthesisUtterance(content);
        u.lang = 'en-US';
        let speaker = new SpeechUtil();
        speaker.startSpeak(u);
        console.log("after========================");
    }

    read(path){

        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", path, false);
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
                    var i = 0;
                    // readChunk(arr[i]);
                    // arr.forEach(function (element) {

                    console.log("before========================");
                    // console.log(element);
                    // let content = element.trim();
                    let content = arr[i].trim()
                    // console.log(content);
                    let u = new SpeechSynthesisUtterance(content);
                    u.lang = 'en-US';
                    let speaker = new SpeechUtil();
                    speaker.startSpeak(u);
                    console.log("after========================");
                    // });
                }
            }
        }
        rawFile.send(null);
    }
}