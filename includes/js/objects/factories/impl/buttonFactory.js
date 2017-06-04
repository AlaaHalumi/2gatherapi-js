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
            if( !sessionStorage.hasOwnProperty("utils") || sessionStorage.getItem("utils").indexOf("voice command")!= -1 ){
                this.initUtils();
            }

        }
        else{
            this.options = options;
            button = new Button(domElement);
            button.draw(this.options);
            if( !sessionStorage.hasOwnProperty("utils") || sessionStorage.getItem("utils").indexOf("voice command")!= -1 ){
                this.initUtils();
            }
        }

        return button;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

        let commands = {};

        console.log("inside button factory annyang " );

        if(this.options.commands){
            console.log("there is a button command");
            for(let command in this.options.commands){
                commands[this.options.commands[command].name] = this.options.commands[command].func;
            }
        }
        else{
            if(this.options.onClickFunc){
                console.log("there is no a button command");

                let langObj = this.annyangUtil.getLangObj();
                for(let langCommand in langObj){
                    console.log("langCommand: " + langObj[langCommand]);
                    if(langObj[langCommand].hasOwnProperty("button")){
                        commands[langObj[langCommand]["button"]+ " " + this.options["buttonValue"]] = this.options.onClickFunc.func;
                    }
                }

            }

        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}