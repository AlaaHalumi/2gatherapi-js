class Paragraph extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.menuFactory = new MenuFactory();
    }

    draw(){
        let options = eval(this.domElement.getAttribute("options"));
        let p = document.createElement("p");
        p.setAttribute("class","custom-p");
        p.innerHTML = options.commands.content;
        this.domElement.appendChild(p);
    }
}