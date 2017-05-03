let buttonReaderStartFactoryInstance = null;

class ButtonReaderStartFactory extends ObjectFactory{

    constructor(){
        super();
        if(!buttonReaderStartFactoryInstance){
            buttonReaderStartFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return buttonReaderStartFactoryInstance;
    }

    createObject(domElement,options){

        let buttonReader;

        if(options == null || options == undefined ){
            this.options = eval(domElement.getAttribute("options"));
            buttonReader = new ButtonReaderStart(domElement);
            buttonReader.draw();
            if(sessionStorage.getItem("disability").indexOf("hearing") == -1){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            buttonReader = new ButtonReader(domElement);
            buttonReader.draw(this.options);
        }
        return buttonReader;

    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){
        let commands = {};

        let dataCommand = this.options["triggerCommand"];
        commands[this.options["triggerCommand"]] = function () {
            let button = document.querySelector("[data-command='"+dataCommand+"']");
            button.click();
        };

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}1