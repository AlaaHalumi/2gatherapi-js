let loginFactoryInstance = null;

class LoginFactory extends PluginFactory{

    constructor(){
        super();
        if(!loginFactoryInstance){
            loginFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return loginFactoryInstance;
    }
    
    createPlugin(domElement){
        let login = new Login(domElement);
        this.options = eval(domElement.getAttribute("options"));
        this.initUtils();
        login.draw();
        return login;
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