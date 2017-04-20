let accessibilityFactoryInstance = null;

class AccessibilityFactory extends PluginFactory{

    constructor(){
        super();
        if(!accessibilityFactoryInstance){
            accessibilityFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return accessibilityFactoryInstance;
    }

    createPlugin(domElement){
        let accessibility = new Accessibility(domElement);
        this.options = eval(domElement.getAttribute("options"));
        accessibility.draw();
        // this.initUtils();
        return accessibility;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

        let commands = {};

        for(let propertyName in this.options) {

            let dataCommand = this.options[propertyName]["triggerCommand"];

            commands[this.options[propertyName]["triggerCommand"]] = function () {
                let button = document.querySelector("[data-command='"+dataCommand+"']");
                button.click();
            };

        }

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}