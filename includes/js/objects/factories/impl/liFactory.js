let liFactoryInstance = null;

class LiFactory extends ObjectFactory{

    constructor(gatherApiObject){
        super();
        this.gatherApiObject = gatherApiObject;
        if(!liFactoryInstance){
            liFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();

        }
        return liFactoryInstance;
    }

    createObject(domElement,options){

        let li;
        if(options == null || options == undefined ){
            this.options = eval(domElement.getAttribute("options"));
            li = new Li(domElement);
            li.draw();
            //if we dob't init sessionStorage like index page
            if(!sessionStorage.hasOwnProperty("utils")|| sessionStorage.getItem("utils").indexOf("voice command") != -1 ){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            li = new Li(domElement);
            li.draw(this.options);
            if(  !sessionStorage.hasOwnProperty("utils")|| sessionStorage.getItem("utils").indexOf("voice command") != -1 ){
                this.initUtils();
            }
        }
        this.gatherApiObject.objects.push(li);
        return li;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

        let commands = {};

        if(this.options.commands){
            for(let command in this.options.commands){
                commands[this.options.commands[command].name] = this.options.commands[command].func;
            }
        }

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);
    }
}