class Chat extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.inputFactory = new InputFactory();
        this.chatUtil = new ChatUtil();
    }

    draw(){

        // this.domElement.innerHTML += '<div class="tg-chat-wrapper">'+
        //     '<div class="message_box" id="message_box"></div>' +
        //     '<div class="panel">'+
        //     '<tg-input name="name" id="name" placeholder="Your Name" maxlength="15"/></tg-input>'+
        //     '<tg-input name="message" id="message" placeholder="Message" maxlength="80" onkeydown="if (event.keyCode == 13)document.getElementById('+"'send-btn'"+').click()"/></tg-input>'+
        //        // 'onkeydown = '+"if (event.keyCode == 13)document.getElementById("+"+'send-btn'+"+").click()"+
        //        // '/>
        //     '</div>'+
        //     '<button id="send-btn" class=button>Send</button>'+
        //     '</div>';


        this.domElement.innerHTML +='<div class="chatmain">'+
                                        '<div class="messages">'+
                                            '<div class="above"  id="message_box">'+
                                                '<div class="bellow">'+
                                                    '<tg-input class="text" name="name" id="name" placeholder="Your Name" maxlength="15"/></tg-input>'+
                                                    '<tg-input class="text" name="message" id="message" placeholder="Message" maxlength="80" onkeydown="if (event.keyCode == 13)document.getElementById('+"'send-btn'"+').click()"/></tg-input>'+
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


        let inputs = this.domElement.getElementsByTagName("tg-input");
        for(let i = 0; i < inputs.length; i++){
            this.inputFactory.createObject(inputs[i]);
        }
        this.chatUtil.initChat();
    }
}