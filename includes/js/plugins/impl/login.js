class Login extends Plugin{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.inputFactory = new InputFactory();
    }

    draw(){
        let options = eval(this.domElement.getAttribute("options"));
        this.domElement.innerHTML += "<tg-input class='login-username'><label>Nickname:</label></tg-input><tg-input class='login-password'><label>Password:</label></tg-input><br>";
        if(options.buttonValue) {
            var button = document.createElement("button");
            button.setAttribute('class','login-signinButton');
            button.innerHTML = options.buttonValue;
            button.onclick = options.commands.submit.func;
            this.domElement.appendChild(button);
        }
        let inputs = this.domElement.querySelectorAll("tg-input > label");
        for(let i = 0; i < inputs.length; i++){
            this.inputFactory.createObject(inputs[i]);
        }
    }
}