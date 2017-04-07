class Menu extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.menuFactory = new MenuFactory();
    }

    draw(){
        let options = eval(this.domElement.getAttribute("options"));
        // this.domElement.innerHTML += "<ul></ul>";

        var ul = document.createElement("ul");

        for(var propertyName in options) {
            let li = document.createElement("li");
            li.setAttribute("class","yaniv");
            let a = document.createElement("a");

            for(var propertyValue in options[propertyName]) {
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
        // let link = this.domElement.getElementsByTagName("tg-ul");
        // for(let i = 0; i < inputs.length; i++){
        //     this.inputFactory.createObject(inputs[i]);
        // }
    }
}