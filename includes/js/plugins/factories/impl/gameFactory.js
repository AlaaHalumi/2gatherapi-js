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
        return game;
    }
}