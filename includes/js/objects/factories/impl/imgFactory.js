let imgFactoryInstance = null;

class ImgFactory extends ObjectFactory{

    constructor(){
        super();
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
            if( sessionStorage.getItem("utils").indexOf("voice command") != -1 ){
                this.initUtils();
            }
        }
        else{
            this.options = options;
            img = new Img(domElement);
            img.draw(this.options);
        }

        return img;
    }

    initUtils(){
        this.initAnnyang();
    }

    initAnnyang(){

    }
}