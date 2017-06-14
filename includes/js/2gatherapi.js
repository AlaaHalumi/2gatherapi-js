'use strict'

class Gatherapi {
    constructor(options) {

        if(options.middlewareDevices) {
            this.middleware = new Middleware(options.middlewareDevices);
        }

        this.objectToObjectFactoryMap = {inputFactory :"tg-input",buttonFactory : "tg-button",linkFactory : "tg-a",
            paragraphFactory : "tg-paragraph",imgFactory : "tg-img", buttonReaderStartFactory : "tg-buttonreaderStart",
            buttonReaderStopFactory : "tg-buttonreaderStop", };

        this.pluginToPluginFactoryMap = {loginFactory:"tg-login",menuFactory:"tg-menu",accessibilityFactory : "tg-accessibility",
            chatFactory : "tg-chat",libraryFactory : "tg-library" ,gameFactory : "tg-game" };


        this.utils = {
            annyangUtil : new AnnyangUtil(),
            chatUtil  : new ChatUtil(),
            textToVoice : new SpeechUtil(),
            boxModal : new BoxModelUtil(),
        };

        this.objectFactories = {inputFactory : new InputFactory() ,imgFactory : new ImgFactory() , buttonFactory: new ButtonFactory
            ,paragraphFactory : new ParagraphFactory(),linkFactory : new LinkFactory(), buttonReaderStartFactory : new ButtonReaderStartFactory()
            , buttonReaderStopFactory : new ButtonReaderStopFactory()};

        this.pluginFactories = {loginFactory: new LoginFactory(), chatFactory: new ChatFactory(),
            menuFactory: new MenuFactory(), libraryFactory: new LibraryFactory(),
            accessibilityFactory : new AccessibilityFactory(), gameFactory : new GameFactory() };

        this.utilsConfiguration();
        this.scanForPluginsOrObjects();
        if(this.middleware){
            this.middleware.init();
        }
    }

    utilsConfiguration(){
        this.utils.annyangUtil.initAnnyang();
        this.utils.annyangUtil.addExitCommand();
        this.utils.textToVoice.initSpeech()
    }

    scanForPluginsOrObjects(){
        this.scanObjects();
        this.scanPlugins();

    }

    scanObjects(){
        for(var objectToObjectFactoryKey in this.objectToObjectFactoryMap){
            var elements = document.getElementsByTagName(this.objectToObjectFactoryMap[objectToObjectFactoryKey]);
            for(var index=0; index < elements.length ; index++){
                this.objectFactories[objectToObjectFactoryKey].createObject(elements[index]);
            }
        }
    }

    scanPlugins(){
        for(var pluginToPluginFactoryKey in this.pluginToPluginFactoryMap){
            var elements = document.getElementsByTagName(this.pluginToPluginFactoryMap[pluginToPluginFactoryKey]);
            for(var index=0; index < elements.length ; index++){
                this.pluginFactories[pluginToPluginFactoryKey].createPlugin(elements[index]);
            }
        }
    }
}