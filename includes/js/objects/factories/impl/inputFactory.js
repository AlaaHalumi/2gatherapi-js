let inputFactoryInstance = null;

class InputFactory extends ObjectFactory{

    constructor(){
        super();
        if(!inputFactoryInstance){
            inputFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();

        }
        return inputFactoryInstance;
    }

    createObject(domElement, options){

        let inputText;

        if(options == null || options == undefined ){
            this.options = eval(domElement.getAttribute("options"));
            inputText = new InputText(domElement);
            inputText.draw(null);
            this.initUtils();
        }
        else{
            this.options = options;
            inputText = new InputText(domElement);
            inputText.draw(this.options);
        }

        return inputText;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang() {
        console.log("inside annyang");
        let commands = {};
        for(let command in this.options.commands){
            commands[this.options.commands[command].name] = this.options.commands[command].func;
        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}