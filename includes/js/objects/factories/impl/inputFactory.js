let inputFactoryInstance = null;

class InputFactory extends ObjectFactory{

    constructor(gatherApiObject){
        super();
        this.gatherApiObject = gatherApiObject;
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
            if( !sessionStorage.hasOwnProperty("utils") || sessionStorage.getItem("utils").indexOf("voice command")!= -1 ){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            inputText = new InputText(domElement);
            inputText.draw(this.options);
            if( !sessionStorage.hasOwnProperty("utils") || sessionStorage.getItem("utils").indexOf("voice command")!= -1 ){
                this.initUtils();
            }
        }
        this.gatherApiObject.objects.push(inputText);
        return inputText;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang() {

        let commands = {};

        for(let command in this.options.commands){
            commands[this.options.commands[command].name] = this.options.commands[command].func;
        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}