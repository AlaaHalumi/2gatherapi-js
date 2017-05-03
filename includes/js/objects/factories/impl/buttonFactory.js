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

    createObject(domElement,options){

        let button;
        if(options == null || options == undefined ){
            this.options = eval(domElement.getAttribute("options"));
            button = new Button(domElement);
            button.draw();
            if(sessionStorage.getItem("disability").indexOf("hearing") == -1){
                this.initUtils();
            }

        }
        else{
            this.options = options;
            button = new Button(domElement);
            button.draw(this.options);
        }

        return button;
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