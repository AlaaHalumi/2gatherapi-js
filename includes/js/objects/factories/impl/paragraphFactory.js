let paragraphFactoryInstance = null;

class ParagraphFactory extends ObjectFactory {

    constructor() {
        super();
        if (!paragraphFactoryInstance) {
            paragraphFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
            this.SpeechUtils = new SpeechUtil();
        }
        return paragraphFactoryInstance;
    }

    createObject(domElement,options) {

        let paragraph;

        if(options == null || options == undefined ){
            this.options = eval(domElement.getAttribute("options"));
            paragraph = new Paragraph(domElement);
            paragraph.draw(null);
            if(sessionStorage.getItem("disability").indexOf("hearing") == -1){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            paragraph = new Paragraph(domElement);
            paragraph.draw(this.options);
        }

        return paragraph;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang() {

        let commands = {};
        let text = this.options.commands.content;

        commands[this.options.commands.commandTrigger] = function () {
            let speaker = new SpeechUtil();
            speaker.chunkContents(text);

        };
        // commands['הפסק'] = function(){
        //     speechSynthesisInstance.cancel();
        //     console.log("stop");
        // };
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}