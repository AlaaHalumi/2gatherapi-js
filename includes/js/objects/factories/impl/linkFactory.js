let linkFactoryInstance = null;

class LinkFactory extends ObjectFactory {

    constructor() {
        super();
        if (!linkFactoryInstance) {
            linkFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();
        }
        return linkFactoryInstance;
    }

    createObject(domElement,options) {

        let link;

        if(options == null || options == undefined ){
            this.options = eval(domElement.getAttribute("options"));
            link = new Link(domElement);
            link.draw(null);
            if(sessionStorage.getItem("disability").indexOf("hearing") == -1){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            link = new Link(domElement);
            link.draw(this.options);
        }

        return link;

    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang() {

        let commands = {};
        console.log("inside link factory annyang");
        for(let propertyName in this.options) {
            console.log(propertyName);
            for(let attribute in this.options[propertyName]) {
                if (attribute == "commandTrigger") {
                    let webPage =  this.options[propertyName].href;
                    commands[this.options[propertyName][attribute]] = function () {   window.location.replace(webPage);};

                }
            }
        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}