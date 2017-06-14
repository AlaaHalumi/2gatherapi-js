'use strict'

let annyangUtilInstance = null;
class AnnyangUtil extends Util{

    constructor() {
        super();

        if(!annyangUtilInstance){
            this.languages = {hebrew:'he',english:'en-US',arabic :'ar'};
            this.jsonData = {
                "lang" : [
                    { "he" :
                        [
                            {"link" : "עבור"},
                            {"button" : "לחץ על"},
                            {"imgCloseModal" : "סגור חלון"},
                            {"imgScrollModalDown" : "למטה"},
                            {"imgScrollModalUp" : "למעלה"},
                            {"exit" : "יציאה"}
                        ],
                        "en-US" :
                            [
                                {"link" : "go to"},
                                {"button" : "click on"},
                                {"imgCloseModal" : "close window"},
                                {"imgScrollModalDown" : "down"},
                                {"imgScrollModalUp" : "up"},
                                {"exit" : "exit"}
                            ]
                    }
                ]
            }

            annyangUtilInstance = this;
        }
        return annyangUtilInstance;
    }

    //init annyang if the admin does not define lang the default lang will be hebrew
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

    //this function return keyword according the lang
    getLangObj(){
        // let jsonObject = JSON.parse(this.jsonData);
        if(sessionStorage.getItem(("lang"))){
            let lang = sessionStorage.getItem("lang");
            return this.jsonData["lang"][0][this.languages[sessionStorage.getItem("lang")]];
        }
        else{
            return this.jsonData["lang"][0]["he"];
        }
    }
    //init exit command
    addExitCommand(){

        let commands = {};

        let langObj = this.getLangObj();
        for(let langCommand in langObj){
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