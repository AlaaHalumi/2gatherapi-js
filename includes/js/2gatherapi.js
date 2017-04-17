'use strict'

class Gatherapi {
    constructor(options) {
        this.middleware = new Middleware();
        this.utils = {
            annyangUtil : new AnnyangUtil(),
            chatUtil  : new ChatUtil(),
            textToVoice : new SpeechUtil()
        };
        this.utilsConfiguration(options);
        this.objectFactories = {inputFactory : new InputFactory()};
        this.pluginFactories = {loginFactory: new LoginFactory(), chatFactory: new ChatFactory(), buttonFactory: new ButtonFactory(),
             menuFactory: new MenuFactory(), paragraphFactory: new ParagraphFactory(), libraryFactory: new LibraryFactory(),
            accessibilityFactory : new AccessibilityFactory};
    }

    utilsConfiguration(options){
        this.utils.annyangUtil.setLanguage(options["voiceToTextLanguage"]);
        // this.utils.textToVoice.setLanguage(options["textToVoice"]);
    }
}