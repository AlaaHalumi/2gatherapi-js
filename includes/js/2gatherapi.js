'use strict'

class Gatherapi {
    constructor(options) {

        if(options.middlewareDevices) {
            this.middleware = new Middleware(options.middlewareDevices);
            this.middleware.init();
        }

        this.objectToObjectFactoryMap = {inputFactory :"tg-input",buttonFactory : "tg-button",linkFactory : "tg-a",
                                         paragraphFactory : "tg-paragraph",imgFactory : "tg-img", buttonReaderStartFactory : "tg-buttonreaderStart",
                                         buttonReaderStopFactory : "tg-buttonreaderStop", };

        this.pluginToPluginFactoryMap = {loginFactory:"tg-login",menuFactory:"tg-menu",accessibilityFactory : "tg-accessibility",
                                         chatFactory : "tg-chat",libraryFactory : "tg-library"};

        this.utils = {
            annyangUtil : new AnnyangUtil(),
            chatUtil  : new ChatUtil(),
            textToVoice : new SpeechUtil(),
            boxModal : new BoxModelUtil(),
            // circleObject : new CircleObjectUtil()
        };

        this.objectFactories = {inputFactory : new InputFactory() ,imgFactory : new ImgFactory() , buttonFactory: new ButtonFactory ,linkFactory : new LinkFactory()
                                ,paragraphFactory : new ParagraphFactory() , buttonReaderStartFactory : new ButtonReaderStartFactory()
                                , buttonReaderStopFactory : new ButtonReaderStopFactory()};

        this.pluginFactories = {loginFactory: new LoginFactory(), chatFactory: new ChatFactory(),
             menuFactory: new MenuFactory(), libraryFactory: new LibraryFactory(),
            accessibilityFactory : new AccessibilityFactory() };

        // this.utilsConfiguration(options);
        this.scanForPluginsOrObjects();
    }

    utilsConfiguration(options){
        // this.utils.annyangUtil.setLanguage(options["voiceToTextLanguage"]);
        // this.utils.textToVoice.setLanguage(options["textToVoice"]);
        // this.utils.circleObject.initCircleObject();
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