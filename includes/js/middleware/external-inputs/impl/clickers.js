let clickersInstance = null;

class Clickers extends ExternalInput{

    constructor(){
        super();
        this.deviceInfo = {
            vendorId:"07c1",
            productId:"08a1"
        };
        if(!clickersInstance){
            clickersInstance = this;
        }
        return clickersInstance;
    }

    connectExternalInput(){
        myElement = document.querySelector('body');
        myElement.onmousedown = doubleclick;
        var blockContextMenu, myElement;
        blockContextMenu = function (evt) {
            evt.preventDefault();
        };

        myElement.addEventListener('contextmenu', blockContextMenu);
    }
}