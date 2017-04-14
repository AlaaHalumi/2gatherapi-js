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
        this.initUtils();
        library.draw();
        return library;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

        let commands = {};

        // for(let propertyName in this.options) {
        //
        //     for(let propertyValue in this.options[propertyName]) {
        //         let value = propertyValue;
        //         if (value == "commandTrigger") {
        //             let webPage =  this.options[propertyName].href;
        //
        //             commands[this.options[propertyName][value]] = function () {   window.location.replace(webPage);};
        //
        //         }
        //     }
        // }

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}