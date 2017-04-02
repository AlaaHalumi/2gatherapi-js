'use strict'

let annyangUtilInstance = null;
class AnnyangUtil extends Util{
    constructor() {
        super();
        this.languages = {hebrew:'he'};
        if(!annyangUtilInstance){
            annyangUtilInstance = this;
        }
        return annyangUtilInstance;
    }

    setLanguage(language){
        annyang.setLanguage(this.languages[language]);
    }

    initAnnyang(options){
        if (annyang) {
            annyang.addCommands(options.commands);
            annyang.start();
        }
    }
}