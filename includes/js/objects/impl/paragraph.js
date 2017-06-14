class Paragraph extends TGObject{

    constructor(domElement){
        super();
        this.domElement = domElement;
    }

    draw(options) {

        let paragraph;
        if(options == null || options == undefined ){
            this.options = eval(this.domElement.getAttribute("options"));
            paragraph = this.initpPragraph()
        }
        else{
            this.options = options;
            paragraph = this.initpPragraph()
        }
        this.domElement.appendChild(paragraph);
    }

    initpPragraph(){
        let paragraph = document.createElement("p");
        paragraph.innerHTML = this.options.commands.content;
        return paragraph;
    }

    enableTobii(){

    }

    enablejoystick(){

    }
}