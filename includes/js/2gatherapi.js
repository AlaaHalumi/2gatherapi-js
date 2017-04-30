'use strict'

class Gatherapi {
    constructor(options) {
        // if(options.middlewareDevices) {
        //     this.middleware = new Middleware(options.middlewareDevices, options.middleInterval ? options.middleInterval : 10000);
        // }
        this.utils = {
            annyangUtil : new AnnyangUtil(),
            chatUtil  : new ChatUtil(),
            textToVoice : new SpeechUtil(),
            boxModal : new BoxModelUtil(),
        };
        // this.utilsConfiguration(options);
        this.objectFactories = {inputFactory : new InputFactory() , buttonFactory: new ButtonFactory ,linkFactory : new LinkFactory()
                                ,paragraphFactory : new ParagraphFactory() , buttonReaderStartFactory : new ButtonReaderStartFactory()
                                , buttonReaderStopFactory : new ButtonReaderStopFactory() , imgFactory : new ImgFactory()};
        this.pluginFactories = {loginFactory: new LoginFactory(), chatFactory: new ChatFactory(),
             menuFactory: new MenuFactory(), paragraphFactory: new ParagraphFactory(), libraryFactory: new LibraryFactory(),
            accessibilityFactory : new AccessibilityFactory() };
    }

    utilsConfiguration(options){
        // this.utils.annyangUtil.setLanguage(options["voiceToTextLanguage"]);
        // this.utils.textToVoice.setLanguage(options["textToVoice"]);
    }
}