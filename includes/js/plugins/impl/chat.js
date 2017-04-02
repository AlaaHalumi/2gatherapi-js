class Chat extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.inputFactory = new InputFactory();
    }

    draw(){

        this.domElement.innerHTML += '<div class="chat_wrapper">'+
            '<div class="message_box" id="message_box"></div>' +
            '<div class="panel">'+
            '<tg-input name="name" id="name" placeholder="Your Name" maxlength="15" /></tg-input>'+
            '<tg-input name="message" id="message" placeholder="Message" maxlength="80"/></tg-input>'+
                // '<input type="text" name="name" id="name" placeholder="Your Name" maxlength="15" />'+
                //  '<input type="text" name="message" id="message" placeholder="Message" maxlength="80" />'+
               // 'onkeydown = '+"if (event.keyCode == 13)document.getElementById("+"+'send-btn'+"+").click()"+
               // '/>
            '</div>'+
            '<button id="send-btn" class=button>Send</button>'+
            '</div>';

        let inputs = this.domElement.getElementsByTagName("tg-input");
        for(let i = 0; i < inputs.length; i++){
            this.inputFactory.createObject(inputs[i]);
        }
    }
}