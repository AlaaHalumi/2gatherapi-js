'use strict'

let annyangUtilInstance = null;
class AnnyangUtil extends Util{
    constructor() {
        super();
        if(!annyangUtilInstance){
            this.languages = {hebrew:'he',english:'en-US'};
            annyangUtilInstance = this;
        }
        return annyangUtilInstance;
    }

    setLanguage(language){
        annyang.setLanguage(this.languages[language]);
    }

    addAnnyangCommands(options){
        if (annyang) {
            annyang.debug();
            annyang.addCommands(options.commands);
            annyang.start();
        }
    }
}