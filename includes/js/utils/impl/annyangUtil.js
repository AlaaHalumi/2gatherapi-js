'use strict'

let annyangUtilInstance = null;
class AnnyangUtil extends Util{
    constructor() {
        super();
        if(!annyangUtilInstance){
            this.languages = {hebrew:'he'};
            annyangUtilInstance = this;
        }
        return annyangUtilInstance;
    }

    setLanguage(language){
        annyang.setLanguage(this.languages[language]);
    }

    addAnnyangCommands(options){
        if (annyang) {
            annyang.addCommands(options.commands);
            annyang.start();
        }
    }
}