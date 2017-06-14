let gameFactoryInstance = null;

class GameFactory extends PluginFactory{

    constructor(){
        super();
        if(!gameFactoryInstance){
            gameFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return gameFactoryInstance;
    }

    createPlugin(domElement){
        let game = new Game(domElement);
        this.options = eval(domElement.getAttribute("options"));
        game.draw();
        // this.initUtils();
        return game;
    }

    initUtils(){
        // this.initAnnyang();
    }

    initAnnyang(){

        // let commands = {};
        //
        // for(let propertyName in this.options) {
        //
        //     let dataCommand = this.options[propertyName]["triggerCommand"];
        //
        //     commands[this.options[propertyName]["triggerCommand"]] = function () {
        //         let button = document.querySelector("[data-command='"+dataCommand+"']");
        //         button.click();
        //     };
        //
        // }
        //
        // let annyangOptions = {commands: commands};
        // this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}