class Link extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
    }

    draw(options){

        let link;
        if(options == null || options == undefined ){
            this.options = eval(this.domElement.getAttribute("options"));
            link = this.initLink()
        }
        else{
            this.options = options;
            link = this.initLink()
        }
        this.domElement.appendChild(link);
    }

    initLink(){
        let link = document.createElement("a");
        for(let propertyName in this.options) {
            for(let attribute in this.options[propertyName]) {
                if(attribute == "text"){
                    link.innerHTML = this.options[propertyName][attribute];
                }
                else if(attribute == "commandTrigger"){

                }
                else{
                    link.setAttribute(attribute,this.options[propertyName][attribute]);
                }
            }
        }
        return link;
    }

}