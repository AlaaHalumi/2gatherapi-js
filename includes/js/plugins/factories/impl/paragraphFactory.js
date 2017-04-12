let paragraphFactoryInstance = null;

class ParagraphFactory extends PluginFactory {

    constructor() {
        super();
        if (!paragraphFactoryInstance) {
            paragraphFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return paragraphFactoryInstance;
    }

    createPlugin(domElement) {
        for (var child = 0; child < domElement.length; child++) {
            let paragraph = new Paragraph(domElement[child]);
            this.options = eval(domElement[child].getAttribute("options"));
            this.initUtils();
            paragraph.draw();
        }
        return domElement;
    }

    initUtils() {
        this.initAnnyang();
        // this.chunkMyText("There once was a speedy Hare who bragged about how fast he could run. Tired of hearing him boast, the Tortoise challenged him to a race. All the animals in the forest gathered to watch.The Hare ran down the road for a while and then paused to rest. He looked back at the tortoise and cried out, How do you expect to win this race when you are walking along at your slow, slow pace?");
    }

    initAnnyang() {
        let commands = {};

        let text = this.options.commands.content;

        commands[this.options.commands.commandTrigger] = function () {

            let chunkLength = 120;
            let pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
            let arr = [];
            let txt = text;
            while (txt.length > 0) {
                arr.push(txt.match(pattRegex)[0]);
                txt = txt.substring(arr[arr.length - 1].length);
            }
            arr.forEach(function(element) {
                let content = element.trim();
                console.log(content);
                let u = new SpeechSynthesisUtterance(content);
                u.lang = 'en-US';
                window.speechSynthesis.speak(u);

            });
        };
        // commands['הפסק'] = function(){
        //     speechSynthesisInstance.cancel();
        //     console.log("stop");
        // };
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }

}
