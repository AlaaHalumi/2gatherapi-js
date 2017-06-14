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
                button.setAttribute(attribute,this.options.buttonAttribute[attribute]);
            }
        }
        if(this.options.buttonValue) {
            button.innerHTML = this.options.buttonValue;
        }
        if(this.options.onClickFunc) {
            button.onclick = this.options.onClickFunc.func;
        }
        else if(this.options.commands){
            button.onclick = this.options.commands.submit.func;
        }

        if( sessionStorage.getItem("device") == "tobi"){
            button.classList.add("btn-lg");
        }
        return button;
    }
}