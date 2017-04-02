class InputText extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
    }

    draw(){
        let input = document.createElement("input");
        let attributes = this.domElement.attributes;
        while(this.domElement.attributes.length > 0){
            let attributeName = attributes[0].nodeName;
            input.setAttribute(attributeName, attributes[0].nodeValue);
            this.domElement.removeAttribute(attributeName);
        }
        this.domElement.appendChild(input);
    }
}