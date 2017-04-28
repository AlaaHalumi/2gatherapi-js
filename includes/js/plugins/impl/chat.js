class Chat extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.inputFactory = new InputFactory();
        this.chatUtil = new ChatUtil();
    }

    draw(wsChatServer){

        this.domElement.innerHTML +='<div class="chatmain">'+
                                        '<div class="messages">'+
                                            '<div class="above"  id="message_box">'+
                                                '<div class="bellow">'+
                                                    '<tg-input class="text" name="name" id="name" placeholder="Your Name" /></tg-input>'+
                                                    '<tg-input class="text" name="message" id="message" placeholder="Message" /></tg-input>'+
                                                    // '<section class="text"> </section>'+
                                                    '<button  id="send-btn" class="send">Send</button>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="loggedin">'+
                                            '<section class="me">'+
                                                '<img class="mypic" src="images/anyone.png">'+
                                                '<p class="name">Me me: </p>'+
                                                '<p class="status">Online</hp>'+
                                            '</section>'+
                                            '<section class="others">'+
                                            '</section>'+
                                        '</div>'+
                                        '<div class="clear"></div>'+
                                        '</div>';

        let inputOption = {
            inputAttribute : {

            }
        }

        let inputs = this.domElement.getElementsByTagName("tg-input");

        for(let i = 0; i < inputs.length; i++){
            let attributes = inputs[i].attributes;
            while(inputs[i].attributes.length > 0){
                let attributeName = attributes[0].nodeName;
                inputOption.inputAttribute[attributeName] = attributes[0].nodeValue;
                inputs[i].removeAttribute(attributeName);
            }
            this.inputFactory.createObject(inputs[i],inputOption);
        }
        this.chatUtil.initChat(wsChatServer);
    }
}