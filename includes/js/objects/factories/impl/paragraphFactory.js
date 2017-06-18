let paragraphFactoryInstance = null;

class ParagraphFactory extends ObjectFactory {

    constructor(gatherApiObject) {
        super();
        this.gatherApiObject = gatherApiObject;
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
            if(this.gatherApiObject.requiredUtills.indexOf("voice commands") != -1 ){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            paragraph = new Paragraph(domElement);
            paragraph.draw(this.options);
            if(this.gatherApiObject.requiredUtills.indexOf("voice commands") != -1){
                this.initUtils();
            }
        }
        this.gatherApiObject.objects.push(paragraph);
        return paragraph;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang() {

        let commands = {};
        let text = this.options.commands.content;
        let self = this.SpeechUtils;
        commands[this.options.commands.commandTrigger] = function () {
            self.chunkContents(text)
        };
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}