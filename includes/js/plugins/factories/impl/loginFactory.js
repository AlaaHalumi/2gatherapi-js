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
        login.draw();
        return login;
    }
}