class Img extends TGObject {

    constructor(domElement) {
        super();
        this.domElement = domElement;
        this.annyangUtil = new AnnyangUtil();
        this.speechUtil = new SpeechUtil();
        this.boxModal = new BoxModelUtil();

    }

    draw(options) {

        let img

        if (options == null || options == undefined) {
            this.options = eval(this.domElement.getAttribute("options"));
            img = this.initImage()
        }
        else {
            this.options = options;
            img = this.initImage()
        }

        this.domElement.appendChild(img);
    }

    initImage() {

        this.img = document.createElement("img");

        if (this.options.imgAttribute) {
            for (let attribute in this.options.imgAttribute) {
                this.img.setAttribute(attribute, this.options.imgAttribute[attribute]);
            }
        }
        if (this.options.img) {
            this.img.setAttribute("src", this.options["img"]);
        }
        if(this.options.path) {

            let path = this.options["path"];
            // When the user clicks the button, open the modal
            var self = this
            this.img.onclick = function () {

                document.getElementsByClassName("content-paragraph").innerHTML += "";
                let rawFile = new XMLHttpRequest();
                rawFile.open("GET", path, false);
                rawFile.onreadystatechange = function () {
                    if (rawFile.readyState === 4) {
                        if (rawFile.status === 200 || rawFile.status == 0) {
                            let allText = rawFile.responseText;
                            // let boxModal = new BoxModelUtil();
                            self.boxModal.setText(allText)
                        }
                    }
                }
                rawFile.send(null);
            }

        }
        //init voice command
        let commands = {};
        if( sessionStorage.getItem("utils").indexOf("voice command") != -1 ){

            //first check if there is file path exist for voice command
            if (this.options.path) {
                sessionStorage.scrollPosition = 0;
                if (this.options.voiceCommand) {
                    let dataCommand = this.options.voiceCommand;
                    commands[this.options.voiceCommand] = function () {
                        this.img.click();
                    };
                }
                let langObj = this.annyangUtil.getLangObj();
                for (let langCommand in langObj) {
                    if (langObj[langCommand].hasOwnProperty("imgCloseModal")) {
                        commands[langObj[langCommand]["imgCloseModal"]] = function () {
                            let modal = document.getElementById('myModal');
                            modal.style.display = "none";
                        };
                    }
                    else if(langObj[langCommand].hasOwnProperty("imgScrollModalDown")){
                        commands[langObj[langCommand]["imgScrollModalDown"]] = function () {
                            // var modal = document.getElementsByClassName('modal-content');
                            // modal.scrollTop = 100;
                            let position = sessionStorage.getItem("scrollPosition");
                            console.log(position + " before");
                            position = position + 50;
                            sessionStorage.scrollPosition = position;
                            console.log(position + " after");
                            $(".modal-content").scrollTop(position);
                        };
                    }
                }
            }
        }
        //the user is blind
        else{
            var self = this;
            let path = this.options["path"];
            if (this.options.path) {
                if (this.options.voiceCommand) {
                    let dataCommand = this.options.voiceCommand;
                    commands[this.options.voiceCommand] = function () {
                        self.speechUtil.read(path);
                    };
                }
            }
        }

        let annyangOptions = {commands: commands};
        this.annyangUtil.addAnnyangCommands(annyangOptions);

        return this.img;
    }

    enableTobii(){
        this.img.style.transform = "scale(2)"
        console.log("img tobi");
    }

    enablejoystick(){

    }

}
