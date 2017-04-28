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
        }
        else {
            this.domElement.innerHTML += "<tg-input></tg-input>" +
                "<tg-input></tg-input>";
        }

        let textInput = {
            inputAttribute: {
                type: "text",
                min: "1"
            }
        }

        let passInput = {
            inputAttribute: {
                type: "password",
                max: "6"
            }
        }

        let inputs = this.domElement.getElementsByTagName("tg-input");
        for (let i = 0; i < inputs.length; i++) {
            if (i == 0) {
                this.inputFactory.createObject(inputs[i], textInput);
            }
            else {
                this.inputFactory.createObject(inputs[i], passInput);
            }
        }

        if (this.options.buttonValue) {

            let buttonTG = document.createElement("tg-button");
            let button = document.createElement("button");
            button.onclick = this.options.commands.submit.func;
            button.innerHTML = this.options.buttonValue;
            buttonTG.appendChild(button);
            this.domElement.appendChild(buttonTG);

            // let options = {
            //     buttonValue: this.options.buttonValue,
            //     commands: {
            //         'submit': {
            //             func: function () {
            //                 this.options.commands.submit.func;
            //             }
            //         }
            //     }
            // }

            this.buttonFactory.createObject(button, options);

        }
    }
}