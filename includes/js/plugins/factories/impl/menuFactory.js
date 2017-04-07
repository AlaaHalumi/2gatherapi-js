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
        for(let command in this.options.commands){
            commands[this.options.commands[command].name] = this.options.commands[command].func;
        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}