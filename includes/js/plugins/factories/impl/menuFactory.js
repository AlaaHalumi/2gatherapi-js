let menuFactoryInstance = null;

class MenuFactory extends PluginFactory{

    constructor(){
        super();
        if(!menuFactoryInstance){
            menuFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return menuFactoryInstance;
    }

    createPlugin(domElement){
        let menu = new Menu(domElement);
        this.options = eval(domElement.getAttribute("options"));
        this.initUtils();
        menu.draw();
        return menu;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

        let commands = {};

        for(let propertyName in this.options) {

            for(let propertyValue in this.options[propertyName]) {
                let value = propertyValue;
                if (value == "commandTrigger") {
                    let webPage =  this.options[propertyName].href;

                    commands[this.options[propertyName][value]] = function () {   window.location.replace(webPage);};

                }
            }
        }

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}