'use strict'

class Gatherapi {
    constructor(options) {
        this.middleware = new Middleware();
        this.utils = {
            annyangUtil : new AnnyangUtil()
        };
        this.utilsConfiguration(options);
        this.objectFactories = {inputFactory : new InputFactory()};
        this.pluginFactories = {loginFactory: new LoginFactory()};
    }

    utilsConfiguration(options){
        this.utils.annyangUtil.setLanguage(options["voiceToTextLanguage"]);
    }
}