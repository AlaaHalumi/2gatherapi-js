class ButtonReaderStop extends Object {

    constructor(domElement) {
        super();
        this.domElement = domElement;
    }

    draw(options) {

        let buttonReader;
        if(options == null || options == undefined ){
            this.options = eval(this.domElement.getAttribute("options"));
            buttonReader = this.initButtonReader()
        }
        else{
            this.options = options;
            buttonReader = this.initButtonReader()
        }

        this.domElement.appendChild(buttonReader);
    }

    initButtonReader(){

        let button = document.createElement("button");
        if(this.options.buttonAttribute){
            for (let attribute in this.options.buttonAttribute) {
                console.log("attribute: " + attribute + " " + this.options.buttonAttribute[attribute]);
                button.setAttribute(attribute,this.options.buttonAttribute[attribute]);
            }
        }
        if(this.options.buttonValue) {
            console.log("button-object: there is button value");
            button.innerHTML = this.options.buttonValue;
        }

        //get the id of the button's img
        let currentImg = document.getElementById(this.options["imgID"]);

        button.onclick = function() {
            currentImg.style.border = "";
            let speaker = new SpeechUtil();
            speaker.cancelSpeak();
            console.log("stop stop speaker");
        }
        return button;
    }
}