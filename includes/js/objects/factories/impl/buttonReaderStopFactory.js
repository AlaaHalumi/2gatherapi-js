let buttonReaderStopFactoryInstance = null;

class ButtonReaderStopFactory extends ObjectFactory{

    constructor(){
        super();
        if(!buttonReaderStopFactoryInstance){
            buttonReaderStopFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return buttonReaderStopFactoryInstance;
    }

    createObject(domElement,options){

        let buttonReader;

        if(options == null || options == undefined ){
            this.options = eval(domElement.getAttribute("options"));
            buttonReader = new ButtonReaderStop(domElement);
            buttonReader.draw();
            this.initUtils();
        }
        else{
            this.options = options;
            buttonReader = new ButtonReaderStop(domElement);
            buttonReader.draw(this.options);
        }
        return buttonReader;

    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){
        let commands = {};
        commands[this.options["triggerCommand"]] = function () {
            let speaker = new SpeechUtil();
            speaker.cancelSpeak();
            console.log("stop stop speaker");
        };

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}