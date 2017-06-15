class ButtonReaderStart extends TGObject {

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
        let path;

        button.style.cursor = "pointer";
        if(this.options.buttonAttribute){
            for (let attribute in this.options.buttonAttribute) {
                button.setAttribute(attribute,this.options.buttonAttribute[attribute]);
            }
        }
        if(this.options.buttonValue) {
            button.innerHTML = this.options.buttonValue;
        }
        if(this.options.triggerCommand) {
            button.setAttribute("data-command",this.options["triggerCommand"]);
        }
        //for keyWord vocie command
        if(this.options.header) {
            button.setAttribute("data-command",this.options["header"]);
        }
        if(this.options.path){
            path = this.options["path"];
        }

        //get the id of the button's img
        // let currentImg = document.getElementById(this.options["imgID"]);
        var self = this;

        button.onclick = function() {

            // currentImg.style.border = "thick solid red";
            let rawFile = new XMLHttpRequest();
            rawFile.open("GET", path, false);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        let allText = rawFile.responseText;

                        let chunkLength = 150;
                        let pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
                        let arr = [];
                        let txt = allText;
                        while (txt.length > 0) {
                            arr.push(txt.match(pattRegex)[0]);
                            txt = txt.substring(arr[arr.length - 1].length);
                        }
                        var i = 0;
                        self.readChunk(arr[i]);
                        // arr.forEach(function (element) {
                        //
                        //     console.log("before========================");
                        //     console.log(element);
                        //     let content = element.trim();
                        //     // console.log(content);
                        //     let u = new SpeechSynthesisUtterance(content);
                        //     u.lang = 'en-US';
                        //     let speaker = new SpeechUtil();
                        //     speaker.startSpeak(u);
                        //     console.log("after========================");
                        // });
                    }
                }
            }
            rawFile.send(null);
        }
        return button;
    }

    enableTobii(){

    }

    enablejoystick(){

    }

    enableClickers(){

    }
}