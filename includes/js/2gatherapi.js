'use strict'

class Gatherapi {
    constructor(options) {

        // if(options.middlewareDevices) {
        //     this.middleware = new Middleware(options.middlewareDevices, options.middleInterval ? options.middleInterval : 10000);
        // }

        this.objectToObjectFactoryMap = {inputText:"inputFactory"};
        this.pluginToPluginFactoryMap = {loginFactory:"loginFactory"};

        this.utils = {
            annyangUtil : new AnnyangUtil(),
            chatUtil  : new ChatUtil(),
            textToVoice : new SpeechUtil(),
            boxModal : new BoxModelUtil(),
            // circleObject : new CircleObjectUtil()
        };

        this.objectFactories = {inputFactory : new InputFactory() , buttonFactory: new ButtonFactory ,linkFactory : new LinkFactory()
                                ,paragraphFactory : new ParagraphFactory() , buttonReaderStartFactory : new ButtonReaderStartFactory()
                                , buttonReaderStopFactory : new ButtonReaderStopFactory() , imgFactory : new ImgFactory()};
        this.pluginFactories = {loginFactory: new LoginFactory(), chatFactory: new ChatFactory(),
             menuFactory: new MenuFactory(), paragraphFactory: new ParagraphFactory(), libraryFactory: new LibraryFactory(),
            accessibilityFactory : new AccessibilityFactory() };
        this.utilsConfiguration(options);
        // this.scanForPluginsOrObjects();
    }

    utilsConfiguration(options){
        // this.utils.annyangUtil.setLanguage(options["voiceToTextLanguage"]);
        // this.utils.textToVoice.setLanguage(options["textToVoice"]);
        // this.utils.circleObject.initCircleObject();
    }

    scanForPluginsOrObjects(){
        this.scanPlugins();
        this.scanObjects();
    }

    scanObjects(){
        for(var objectToObjectFactoryKey in this.objectToObjectFactoryMap){
            var elements = document.getElementsByTagName(objectToObjectFactoryKey);
            for(var element in elements){
                this.objectFactories[this.objectToObjectFactoryMap[objectToObjectFactoryKey]].createObject(element);
            }
        }
    }

    scanPlugins(){
        for(var pluginToPluginFactoryKey in this.pluginToPluginFactoryMap){
            var elements = document.getElementsByTagName(pluginToPluginFactoryKey);
            for(var element in elements){
                this.pluginFactories[this.pluginToPluginFactoryMap[pluginToPluginFactoryKey]].createPlugin(element);
            }
        }
    }
}