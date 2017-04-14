class Menu extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.menuFactory = new MenuFactory();
    }



    draw(){
        let options = eval(this.domElement.getAttribute("options"));

        let ul = document.createElement("ul");
        ul.setAttribute("class","custom-ul");

        for(let propertyName in options) {
            let li = document.createElement("li");
            li.setAttribute("class","custom-il");
            let a = document.createElement("a");

            for(let propertyValue in options[propertyName]) {
                let value = propertyValue;
                if(value == "text"){
                    a.innerHTML = options[propertyName][value];
                }
                else{
                    a.setAttribute(value,options[propertyName][value]);
                }
            }
            li.appendChild(a);
            ul.appendChild(li);
        }
        this.domElement.appendChild(ul);
    }
}