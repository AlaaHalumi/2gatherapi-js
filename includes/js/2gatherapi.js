'use strict'

class Gatherapi {
    constructor(options) {

        this.options = options;
        this.requiredUtills = !options.requiredUtills ? ["voice command"] : options.requiredUtills;
        if(options.middlewareDevices) {
            this.middleware = new Middleware(options.middlewareDevices, this);
        }

        this.objects = [];
        this.plugins = [];
        this.objectToObjectFactoryMap = {inputFactory :"tg-input",buttonFactory : "tg-button",linkFactory : "tg-a",
            paragraphFactory : "tg-paragraph",imgFactory : "tg-img",liFactory : new LiFactory(this)};

        this.pluginToPluginFactoryMap = {loginFactory:"tg-login",menuFactory:"tg-menu",accessibilityFactory : "tg-accessibility",
            chatFactory : "tg-chat",libraryFactory : "tg-library" ,gameFactory : "tg-game" };


        this.utils = {
            annyangUtil : new AnnyangUtil(),
            chatUtil  : new ChatUtil(),
            textToVoice : new SpeechUtil(),
            boxModal : new BoxModelUtil(),
        };

        this.objectFactories = {inputFactory : new InputFactory(this) ,imgFactory : new ImgFactory(this) , buttonFactory: new ButtonFactory(this)
            ,paragraphFactory : new ParagraphFactory(this),linkFactory : new LinkFactory(this)};

        this.pluginFactories = {loginFactory: new LoginFactory(), chatFactory: new ChatFactory(),
            menuFactory: new MenuFactory(), libraryFactory: new LibraryFactory(),
            accessibilityFactory : new AccessibilityFactory(), gameFactory : new GameFactory() };

        this.utilsConfiguration();
        if(this.middleware){
            this.middleware.init();
        }
        this.scanForPluginsOrObjects();
    }

    utilsConfiguration(){
        this.utils.annyangUtil.initAnnyang(this.options.language);
        this.utils.annyangUtil.addExitCommand();
        this.utils.textToVoice.initSpeech(this.options.language)
    }

    scanForPluginsOrObjects(){
        this.scanObjects();
        this.scanPlugins();
    }

    scanObjects(){
        for (var objectToObjectFactoryKey in this.objectToObjectFactoryMap) {
            var elements = document.getElementsByTagName(this.objectToObjectFactoryMap[objectToObjectFactoryKey]);
            for (var index = 0; index < elements.length; index++) {
                this.objectFactories[objectToObjectFactoryKey].createObject(elements[index]);
            }
        }
    }

    enableExternalInputsHandlers(){
        var lang = this.options.virtualKeyboardLang;
        for(var ei in this.middleware.externalInputs){
            if(this.middleware.externalInputs[ei].connected){
                this.objects.forEach(function(object){
                    object["enable" + ei](lang);
                });
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