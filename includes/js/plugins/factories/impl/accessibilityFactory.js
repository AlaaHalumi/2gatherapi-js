let accessibilityFactoryInstance = null;

class AccessibilityFactory extends PluginFactory{

    constructor(){
        super();
        if(!accessibilityFactoryInstance){
            accessibilityFactoryInstance = this;
        }
        return accessibilityFactoryInstance;
    }

    createPlugin(domElement){
        let accessibility = new Accessibility(domElement);
        this.options = eval(domElement.getAttribute("options"));
        accessibility.draw();
        return accessibility;
    }

}