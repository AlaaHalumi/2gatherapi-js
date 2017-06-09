let chatFactoryInstance = null;

class ChatFactory extends PluginFactory{

    constructor(){
        super();
        if(!chatFactoryInstance){
            chatFactoryInstance = this;
        }
        return chatFactoryInstance;
    }

    createPlugin(domElement){
        let chat = new Chat(domElement);
        this.options = eval(domElement.getAttribute("options"));
        chat.draw(this.options.wsURL);
        return chat;
    }

}