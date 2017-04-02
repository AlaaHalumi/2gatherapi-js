'use strict'

class Gatherapi {
    constructor(options) {
        this.middleware = new Middleware();
        this.utils = {
            annyangUtil : new AnnyangUtil()
        };
        this.utilsConfiguration(options);
        this.inputsInitializations();
    }

    utilsConfiguration(options){
        this.utils.annyangUtil.setLanguage(options["voiceToTextLanguage"]);
    }

    inputsInitializations(){
        this.listOfObjects = {};
        this.listOfObjects["chat"] = new Chat();
        this.listOfObjects["login"] = new Login();
    }
}