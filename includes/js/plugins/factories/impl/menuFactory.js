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
        if(sessionStorage.getItem("disability").indexOf("hearing") == -1){
            this.initUtils();
        }

        menu.draw();
        return menu;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){
        let commands = {};

        for(let propertyName in this.options) {

            for(let attribute in this.options[propertyName]) {
                if (attribute == "commandTrigger") {
                    let webPage =  this.options[propertyName].href;
                    commands[this.options[propertyName][attribute]] = function () {   window.location.replace(webPage);};

                }
            }
        }

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}1