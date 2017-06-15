class Li extends TGObject {

    constructor(domElement) {
        super();
        this.domElement = domElement;
        this.annyangUtil = new AnnyangUtil();

    }

    draw(options) {

        let li

        if (options == null || options == undefined) {
            this.options = eval(this.domElement.getAttribute("options"));
            li = this.initLi()
        }
        else {
            this.options = options;
            li = this.initLi()
        }

        this.domElement.appendChild(li);
    }

    initLi() {


        let li = document.createElement("li");

        if (this.options.liAttribute) {
            for (let attribute in this.options.liAttribute) {
                if(attribute == "text"){
                    li.innerHTML += this.options.liAttribute[attribute];
                }
                li.setAttribute(attribute, this.options.liAttribute[attribute]);
            }
        }
        if(this.options.commands){
            li.onclick = this.options.commands.submit.func;
        }

        return li;
    }

    enableTobii(){

    }

    enablejoystick(){

    }

    enableClickers(){

    }

}
