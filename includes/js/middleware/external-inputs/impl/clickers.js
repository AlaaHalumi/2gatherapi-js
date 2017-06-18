let clickersInstance = null;

class Clickers extends ExternalInput{

    constructor(){
        super();
        if(!clickersInstance){
            clickersInstance = this;
        }
        this.i = 0;
        return clickersInstance;
    }

    connectExternalInput(){
        this.connected = true;
        myElement = document.querySelector('body');
        myElement.onmousedown = this.doubleclick;
        var blockContextMenu, myElement;
        blockContextMenu = function (evt) {
            evt.preventDefault();
        };

        myElement.addEventListener('contextmenu', blockContextMenu);
    }

    doubleclick(event) {
        console.log(event);
        var self = this;
        var el = document.querySelector('body');
        if (el.getAttribute("data-dblclick") == null) {
            el.setAttribute("data-dblclick", 1);
            setTimeout(function () {
                if (el.getAttribute("data-dblclick") == 1) {
                    if(event.button == 0) {
                        clickersInstance.rightClickFunction();
                    }else{
                        clickersInstance.leftClickFunction();
                    }
                }
                el.removeAttribute("data-dblclick");
            }, 300);
        } else {
            el.removeAttribute("data-dblclick");
            clickersInstance.chooseFunction();
        }
    }

    leftClickFunction() {
        var markables = document.querySelectorAll("input,a,select,button,textarea,.tg-library-img");
        if(this.i == 1){
            this.i = markables.length - 1;
        }
        var mark = markables[this.i];
        mark.style.border = "none";
        this.i--;
        mark = markables[this.i];
        console.log(mark);
        if(mark.tagName == "IMG"){
            mark.style.border = "5px solid blue";
        }else{
            mark.focus();
        }
    }

    rightClickFunction() {
        var markables = document.querySelectorAll("input,a,select,button,textarea,.tg-library-img");
        if(this.i == markables.length - 1){
            this.i = -1;
        }
        var mark = markables[this.i];
        mark.style.border = "none";
        this.i = this.i + 1;
        mark = markables[this.i];
        console.log(mark);
        console.log(mark.tagName);
        if(mark.tagName == "IMG"){
            mark.style.border = "5px solid blue";
        }else{
            mark.focus();
        }
    }

    chooseFunction() {
        var markables = document.querySelectorAll("input,a,select,button,textarea,.tg-library-img");
        markables[this.i].click();
    }
}