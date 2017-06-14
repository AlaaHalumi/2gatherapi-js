let buttonReaderStopFactoryInstance = null;

class ButtonReaderStopFactory extends ObjectFactory{

    constructor(gatherApiObject){
        super();
        this.gatherApiObject = gatherApiObject;
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
            if( !sessionStorage.hasOwnProperty("disability") ||  sessionStorage.getItem("disability").indexOf("hearing") == -1 ){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            buttonReader = new ButtonReaderStop(domElement);
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

    initAnnyang() {
        let commands = {};

        //if user define voice command
        if (this.options.triggerCommand) {
            commands[this.options["triggerCommand"]] = function () {
                let speaker = new SpeechUtil();
                speaker.cancelSpeak();
                console.log("stop stop speaker");
            }
        }
        //we define 2Gather keyWord for voice command
        else{
            let langObj = this.annyangUtil.getLangObj();
            for (let langCommand in langObj) {
                if (langObj[langCommand].hasOwnProperty("buttonReaderStop")) {
                    commands[langObj[langCommand]["buttonReaderStop"]] = function () {
                        let speaker = new SpeechUtil();
                        speaker.cancelSpeak();
                        console.log("stop stop speaker");
                    }
                }
            }
        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);

    }
}