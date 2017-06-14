let imgFactoryInstance = null;

class ImgFactory extends ObjectFactory{

    constructor(gatherApiObject){
        super();
        this.gatherApiObject = gatherApiObject;
        if(!imgFactoryInstance){
            imgFactoryInstance = this;
            this.annyangUtil = new AnnyangUtil();

        }
        return imgFactoryInstance;
    }

    createObject(domElement,options){

        let img;
        if(options == null || options == undefined ){
            this.options = eval(domElement.getAttribute("options"));
            img = new Img(domElement);
            img.draw();
        }
        else{
            this.options = options;
            img = new Img(domElement);
            img.draw(this.options);
        }
        this.gatherApiObject.objects.push(img);
        return img;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

    }
}