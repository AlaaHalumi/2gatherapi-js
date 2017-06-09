class Menu extends Plugin{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.linkFactory = new LinkFactory();
    }


    draw(){
        try{
            this.options = eval(this.domElement.getAttribute("options"));

            if (this.options == undefined) {
                throw "Exception: Can't init tg-menu, option attribute is undefined"
            }

            let nav = document.createElement("nav");
            let ul = document.createElement("ul");
            ul.setAttribute("class","tg-ul");

            for(let propertyName in this.options) {
                let li = document.createElement("li");
                li.setAttribute("class","tg-li");
                let a = document.createElement("tg-a")

                let menuOptions = {
                    link : {

                    }
                }

                for(let propertyAtrr in this.options[propertyName]) {
                    menuOptions.link[propertyAtrr] = this.options[propertyName][propertyAtrr];
                }

                this.linkFactory.createObject(a,menuOptions);
                li.appendChild(a);
                ul.appendChild(li);
            }
            nav.appendChild(ul);
            this.domElement.appendChild(nav);
        }
        catch (e){
            console.log(e)
        }
    }
}