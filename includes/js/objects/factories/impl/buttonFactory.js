let buttonFactoryInstance = null;

class ButtonFactory extends ObjectFactory{

    constructor(){
        super();
        if(!buttonFactoryInstance){
            buttonFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();

        }
        return buttonFactoryInstance;
    }

    createObject(domElement){

        for(let child = 0 ; child < domElement.length ; child++){
            console.log(domElement[child]);
            let button = new Button(domElement[child]);
            this.options = eval(domElement[child].getAttribute("options"));
            this.initUtils();
            button.draw();
        }
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

        let commands = {};
        if(this.options.commands){
            console.log("there is a button command");
            for(let command in this.options.commands){
                commands[this.options.commands[command].name] = this.options.commands[command].func;
            }
        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}