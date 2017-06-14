let buttonReaderStartFactoryInstance = null;

class ButtonReaderStartFactory extends ObjectFactory{

    constructor(gatherApiObject){
        super();
        this.gatherApiObject = gatherApiObject;
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
            if( !sessionStorage.hasOwnProperty("disability") ||  sessionStorage.getItem("disability").indexOf("hearing") == -1 ){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            buttonReader = new ButtonReaderStart(domElement);
            buttonReader.draw(this.options);
            if( !sessionStorage.hasOwnProperty("disability") ||  sessionStorage.getItem("disability").indexOf("hearing") == -1 ){
                this.initUtils();
            }
        }
        this.gatherApiObject.objects.push(buttonReader);
        return buttonReader;

    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){
        let commands = {};

        if(this.options["triggerCommand"]){
            let dataCommand = this.options["triggerCommand"];
            commands[this.options["triggerCommand"]] = function () {
                let button = document.querySelector("[data-command='"+dataCommand+"']");
                button.click();
            };
        }
        else if(this.options["header"]){
            let dataCommand = this.options["header"];
            let langObj = this.annyangUtil.getLangObj();
            for (let langCommand in langObj) {
                if (langObj[langCommand].hasOwnProperty("buttonReaderStart")) {
                    commands[langObj[langCommand]["buttonReaderStart"] + " " + dataCommand] = function () {
                        let button = document.querySelector("[data-command='"+dataCommand+"']");
                        button.click();
                    }
                }
            }
        }

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}