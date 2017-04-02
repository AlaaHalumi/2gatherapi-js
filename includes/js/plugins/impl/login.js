class Login extends Plugin{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.inputFactory = new InputFactory();
    }

    draw(){
        let options = eval(this.domElement.getAttribute("options"));
        this.domElement.innerHTML += "<tg-input class='username'></tg-input><tg-input class='password'></tg-input>";
        if(options.buttonValue) {
            var button = document.createElement("button");
            button.innerHTML = options.buttonValue;
            button.onclick = options.commands.submit.func;
            this.domElement.appendChild(button);
        }
        let inputs = this.domElement.getElementsByTagName("tg-input");
        for(let i = 0; i < inputs.length; i++){
            this.inputFactory.createObject(inputs[i]);
        }
    }
}