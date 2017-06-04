'use strict'

let annyangUtilInstance = null;
class AnnyangUtil extends Util{

    constructor() {
        super();

        if(!annyangUtilInstance){
            this.languages = {hebrew:'he',english:'en-US',arabic :'ar'};
            this.jsonData = '{'+
                   ' "lang" : ['+
                        '{ "he" : ['+
                         '   {"link" : "עבור"},'+
                         '   {"button" : "לחץ על"},'+
                         '   {"buttonReaderStop" : "עצור הקראה"},'+
                         '   {"buttonReaderStart" : "הקראה"},'+
                         '   {"imgCloseModal" : "סגור חלון"},'+
                         '   {"imgScrollModalDown" : "למטה"},'+
                         '   {"imgScrollModalUp" : "למעלה"},'+
                         '   {"exit" : "יציאה"}'+
                              '],'+
                         '   "en-US" : ['+
                          '   {"link" : "go to"},'+
                          '   {"button" : "click on"},'+
                          '   {"buttonReaderStop" : "stop read"},'+
                          '   {"buttonReaderStart" : "start read"},'+
                          '   {"imgCloseModal" : "close window"},'+
                          '   {"exit" : "exit"}'+
                           ' ]'+
                        '}'+
                    ']'+
                '}';

            annyangUtilInstance = this;
        }
        return annyangUtilInstance;
    }

    initAnnyang(){
        if(annyang){
            if(sessionStorage.hasOwnProperty("lang")) {
                annyang.setLanguage(this.languages[sessionStorage.getItem("lang")]);
            }
            else{
                annyang.setLanguage('he');
            }
            annyang.start();
            annyang.debug();
        }
    }

    addAnnyangCommands(options){

            annyang.addCommands(options.commands);
    }

    initLangObj(){

    }

    getLangObj(){
        let jsonObject = JSON.parse(this.jsonData);
        if(sessionStorage.getItem(("lang"))){
            let lang = sessionStorage.getItem("lang");
            // console.log(jsonObject["lang"][0][this.languages[sessionStorage.getItem("lang")]]);
            return jsonObject["lang"][0][this.languages[sessionStorage.getItem("lang")]];
        }
        else{
            return jsonObject["lang"][0]["he"];
        }


    }

    addExitCommand(){

        let commands = {};

        let langObj = this.getLangObj();
        for(let langCommand in langObj){
            // console.log("langCommand: " + langObj[langCommand]);
            if(langObj[langCommand].hasOwnProperty("exit")){
                commands[langObj[langCommand]["exit"]] = function(){
                    window.location.replace("index.html");
                }
            }
        }

        let annyangOptions = {commands: commands};
        this.addAnnyangCommands(annyangOptions);

    }
}