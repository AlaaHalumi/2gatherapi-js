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
            if( sessionStorage.getItem("utils").indexOf("voice command") != -1 ){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            link = new Link(domElement);
            link.draw(this.options);
            if( sessionStorage.getItem("utils").indexOf("voice command") != -1 ){
                this.initUtils();
            }
        }

        return link;

    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang() {


        let commands = {};

        for(let propertyName in this.options) {

            if(this.options[propertyName]["commandTrigger"]){
                let webPage =  this.options[propertyName].href;
                commands[this.options[propertyName]["commandTrigger"]] = function () {   window.location.replace(webPage);};
            }
            else{
                if(this.options[propertyName]["href"]){
                    let langObj = this.annyangUtil.getLangObj();
                    for(let langCommand in langObj){
                        if(langObj[langCommand].hasOwnProperty("link")){
                            let webPage = this.options[propertyName]["href"];
                            commands[langObj[langCommand]["link"] + " " + this.options[propertyName]["text"]] = function () {
                                window.location.replace(webPage);
                            };
                        }

                    }

                }

            }

        }
        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}