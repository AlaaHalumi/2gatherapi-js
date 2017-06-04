class Login extends Plugin {

    constructor(domElement) {
        super();
        this.domElement = domElement;
        this.inputFactory = new InputFactory();
        this.buttonFactory = new ButtonFactory();
    }

    draw() {
        this.options = eval(this.domElement.getAttribute("options"));

        //if user define label in login options
        if (this.options.labels) {

            this.domElement.innerHTML += "<label> </label>" +
                "<label> </label>";

            let labels = this.domElement.getElementsByTagName("label");
            let labelChild = 0;
            for (let label in this.options.labels) {
                labels[labelChild].innerHTML += this.options.labels[label];
                labels[labelChild++].innerHTML += "<tg-input></tg-input>"
            }
            this.domElement.innerHTML += "<tg-button></tg-button>"
        }
        else {
            this.domElement.innerHTML += "<tg-input></tg-input>" +
                "<tg-input></tg-input>"+
                "<tg-button></tg-button>";
        }

        let textInput = {
            inputAttribute: {
                type: "text",
                min: "1"
            },
            commands: {
                name : {

                }

            }
        }

        let passInput = {
            inputAttribute: {
                type: "password",
                max: "6"
            },
            commands: {
                name : {

                }

            }
        }

        let inputs = this.domElement.getElementsByTagName("tg-input");
        for (let i = 0; i < inputs.length; i++) {
            if (i == 0) {

                textInput.commands["name"]["name"] = this.options.commands.username.name;
                textInput.commands["name"]["func"] = this.options.commands.username.func;
                this.inputFactory.createObject(inputs[i], textInput);
            }
            else {
                passInput.commands["name"]["name"] = this.options.commands.password.name;
                passInput.commands["name"]["func"] = this.options.commands.password.func;
                this.inputFactory.createObject(inputs[i], passInput);
            }
        }

        let tgButton = this.domElement.getElementsByTagName("tg-button");

        //if user define own voice command by submit property inside commands
        if (this.options.commands.submit) {

            var buttonLogin = {
                buttonAttribute : {

                },
                buttonValue : this.options.buttonValue,
                commands : {
                    submit : {

                    }
                }
            }

            buttonLogin["commands"]["submit"]["name"] = this.options.commands.submit.name;
            buttonLogin["commands"]["submit"]["func"] = this.options.commands.submit.func;

        }
        //we use 2gather button keyword
        else{

            var buttonLogin = {
                buttonAttribute : {

                },
                buttonValue : this.options.buttonValue,
                onClickFunc : {

                }
            }

            buttonLogin["onClickFunc"]["func"] = this.options.onClickFunc.func;
        }
        this.buttonFactory.createObject(tgButton[0], buttonLogin);
    }
}