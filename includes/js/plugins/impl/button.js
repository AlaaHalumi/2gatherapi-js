class Button extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.inputFactory = new InputFactory();
    }

    draw(){
        let options = eval(this.domElement.getAttribute("options"));

        if(options.buttonValue) {
            var button = document.createElement("button");
            button.innerHTML = options.buttonValue;
            button.onclick = options.commands.click.func;

            let attributes = this.domElement.attributes;
            while(this.domElement.attributes.length > 0){
                let attributeName = attributes[0].nodeName;
                button.setAttribute(attributeName, attributes[0].nodeValue);
                this.domElement.removeAttribute(attributeName);
            }
            this.domElement.appendChild(button);
        }
        // let inputs = this.domElement.getElementsByTagName("tg-input");
        // for(let i = 0; i < inputs.length; i++){
        //     this.inputFactory.createObject(inputs[i]);
        // }
    }
}