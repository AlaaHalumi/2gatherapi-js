'use strict'

class Gatherapi {
    constructor(options) {
        this.middleware = new Middleware();
        this.utils = {
            annyangUtil : new AnnyangUtil()
        };
        this.objectFactories = {inputFactory : new InputFactory()};
        this.pluginFactories = {loginFactory: new LoginFactory()};
        this.utilsConfiguration(options);
    }

    utilsConfiguration(options){
        this.utils.annyangUtil.setLanguage(options["voiceToTextLanguage"]);
    }
}