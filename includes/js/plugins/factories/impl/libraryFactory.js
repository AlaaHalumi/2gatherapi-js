let libraryFactoryInstance = null;

class LibraryFactory extends PluginFactory{

    constructor(){
        super();
        if(!libraryFactoryInstance){
            libraryFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return libraryFactoryInstance;
    }

    createPlugin(domElement){
        let library = new Library(domElement);
        this.options = eval(domElement.getAttribute("options"));
        library.draw();
        if(sessionStorage.getItem("disability").indexOf("hearing") == -1){
            this.initUtils();
        }
        return library;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

        let commands = {};

        commands["עצור"] = function(){
            console.log("stop stop speaker");
            let speaker = new SpeechUtil();
            speaker.cancelSpeak();
        }
        for(let propertyName in this.options) {

            let dataCommand = this.options[propertyName]["triggerCommand"];

            commands[this.options[propertyName]["triggerCommand"]] = function () {
                let button = document.querySelector("[data-command='"+dataCommand+"']");
                button.click();
            };

        }

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}