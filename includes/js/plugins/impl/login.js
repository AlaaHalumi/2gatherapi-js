class Login extends Plugin{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.inputFactory = new InputFactory();
    }

    draw(){
        this.domElement.innerHTML += "<tg-input class='username'></tg-input><br><tg-input class='password'></tg-input>";
        let inputs = this.domElement.getElementsByTagName("tg-input");
        for(let i = 0; i < inputs.length; i++){
            this.inputFactory.createObject(inputs[i]);
        }
    }
}