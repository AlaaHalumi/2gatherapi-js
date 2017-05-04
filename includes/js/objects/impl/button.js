class Button extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
    }

    draw(options){

        let button

        if(options == null || options == undefined ){
            this.options = eval(this.domElement.getAttribute("options"));
            button = this.initButton()
        }
        else{
            this.options = options;
            button = this.initButton()
        }

        this.domElement.appendChild(button);
    }

    initButton(){

        let button = document.createElement("button");

        if(this.options.buttonAttribute){
            for (let attribute in this.options.buttonAttribute) {
                console.log("attribute: " + attribute + " " + this.options.buttonAttribute[attribute]);
                button.setAttribute(attribute,this.options.buttonAttribute[attribute]);
            }
        }
        if(this.options.buttonValue) {
            button.innerHTML = this.options.buttonValue;
        }
        if(this.options.commands) {
            if(this.options.hasOwnProperty("buttonAttribute")){
                if (this.options.buttonAttribute.hasOwnProperty("id")) {
                    if (this.options.buttonAttribute["id"] == 'send-btn') {

                    }
                    else{
                        button.onclick = this.options.commands.submit.func;
                    }
                }
                else{
                    button.onclick = this.options.commands.submit.func;
                }

            }
        }
        return button;
    }
}