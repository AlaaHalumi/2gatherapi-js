'use strict'

let circleObjectUtilInstance = null;
class CircleObjectUtil extends Util {
    constructor() {
        super();
        if (!circleObjectUtilInstance) {
            if(sessionStorage.hasOwnProperty("device")){
                this.device = sessionStorage.getItem("device")
            }
            this.initMouse();
            circleObjectUtilInstance = this;
        }
        return circleObjectUtilInstance;
    }

    blink(element,selector) {
    if(selector == "a"){
        if(mouseDown==1){
            console.log("down");
            window.location.replace(element);
        }
        else{
            element.style.border = "";
        }

    }
    else {
        if (mouseDown == 1) {
            console.log("down");
            mouseDown--;
            element.click();
            element.style.border = "";
            console.log(mouseDown);
        }
        else{
            element.style.border = "";
        }
    }
}

    myBlink(element,selector){

    console.log("inside blink: " + element);
    if(selector=="a"){

        var link = document.querySelector('[href="'+element+'"]');
        link.style.border = "thick solid #0000FF";
        setTimeout(this.blink,5000,link,"a");
    }
    else{
        element.style.border = "thick solid #0000FF";
        setTimeout(this.blink,5000,element,"button");
    }

}

    some_3secs_function(param1,callback){
    var buttons = document.getElementsByTagName("button");
    var i = 0;
    console.log("buttons" + buttons.length);
    (function loop(){
        console.log("buttons");
        if (i++ > buttons.length) return 1;
        setTimeout(function(){
            this.myBlink(buttons[i],"button");
            loop();
        }, 8000);
    })();
    callback();
    }

    some_5secs_function(patam1,callback){

    var links = document.getElementsByTagName("a");
    console.log("links" + links.length);
    var i = 0;
    (function loop(){
        console.log("link");
        if (i++ > links.length) return;
        setTimeout(function(){
            this.myBlink(links[i].getAttribute("href"),"a");
            loop();
        }, 8000);
    })();
    callback();
    }


    run(){
        this.some_3secs_function(null,function() {
            this.some_5secs_function(null,function() {
            });
        });

    }

    initCircleObject()
    {
        if(this.device == "clicker"){
            console.log("clicker");
            setTimeout(this.run,5000);
        }
    }

    initMouse(){
        var mouseDown = 0;
        document.body.onmousedown = function() {
            mouseDown++;
            console.log(mouseDown);
        }
    }
}

