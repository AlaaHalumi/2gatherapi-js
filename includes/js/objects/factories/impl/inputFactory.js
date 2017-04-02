let inputFactoryInstance = null;

class InputFactory extends ObjectFactory{

    constructor(){
        super();
        if(!inputFactoryInstance){
            inputFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
            this.initUtils();
        }
        return inputFactoryInstance;
    }
    
    createObject(domElement){
        let inputText = new InputText(domElement);
        inputText.draw();
        return inputText;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){
        let commands = {
            'מחק הכל': function(){
                document.activeElement.value = "";
            }
        };
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}