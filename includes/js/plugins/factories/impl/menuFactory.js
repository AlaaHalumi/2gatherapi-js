let menuFactoryInstance = null;

class MenuFactory extends PluginFactory{

    constructor(){
        super();
        if(!menuFactoryInstance){
            menuFactoryInstance = this;
        }
        return menuFactoryInstance;
    }

    createPlugin(domElement){

        let menu = new Menu(domElement);
        this.options = eval(domElement.getAttribute("options"));
        menu.draw();
        return menu;
    }

    // initUtils(){
    //
    // }



}