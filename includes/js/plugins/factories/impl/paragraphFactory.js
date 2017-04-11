let paragraphFactoryInstance = null;

class ParagraphFactory extends PluginFactory{

    constructor(){
        super();
        if(!paragraphFactoryInstance){
            paragraphFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return paragraphFactoryInstance;
    }

    createPlugin(domElement){
        let paragraph = new Paragraph(domElement);
        this.options = eval(domElement.getAttribute("options"));
        this.initUtils();
        paragraph.draw();
        return paragraph;
    }

    initUtils(){
        this.initAnnyang();
    }

    // textToVoice(contents){
    //
    //
    //
    //
    //
    // }
    initAnnyang(){
        let commands = {};

        let text = this.options.commands.content;

        commands[this.options.commands.commandTrigger] = function(){
            let userInput = new SpeechSynthesisUtterance();
            console.log(text);
            console.log('inside textToSpeak');
            userInput.text = text;
            userInput.lang = 'en-US';
            window.speechSynthesis.speak(userInput);
        };

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}