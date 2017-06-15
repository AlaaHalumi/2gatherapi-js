class InputText extends TGObject{

    constructor(domElement){
        super();
        this.domElement = domElement;
    }

    draw(options) {

        let input;
        if(options == null || options == undefined ){
            this.options = eval(this.domElement.getAttribute("options"));
            input = this.initInput()
        }
        else{
            this.options = options;
            input = this.initInput()
        }
        this.domElement.appendChild(input);
    }

    initInput(){
        let input = document.createElement("input");
        if(this.options.inputAttribute){
            for (let attribute in this.options.inputAttribute) {
                input.setAttribute(attribute,this.options.inputAttribute[attribute]);
            }
        }

        return input;
    }

    enableTobii(){

    }

    enablejoystick(lang){
        $('#' + this.options.inputAttribute.id).keyboard({
            layout: lang
        })
    }

    enableClickers(){

    }
}