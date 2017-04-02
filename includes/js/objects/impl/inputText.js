class InputText extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
    }

    draw(){
        this.domElement.innerHTML += "<input type='text'>";
    }
}