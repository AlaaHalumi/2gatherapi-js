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
        return library;
    }
}