class Button extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
    }

    draw(){

        let options = eval(this.domElement.getAttribute("options"));
        let button = document.createElement("button");

        if(options.buttonValue) {
            console.log("button-object: there is button value");
            button.innerHTML = options.buttonValue;
        }

        if(options.commands){
            console.log("button-object: there is button command");
            button.onclick = options.commands.click.func;
        }

        let attributes = this.domElement.attributes;
        while(this.domElement.attributes.length > 0){
            let attributeName = attributes[0].nodeName;
            button.setAttribute(attributeName, attributes[0].nodeValue);
            this.domElement.removeAttribute(attributeName);
        }
        this.domElement.appendChild(button);
    }
}