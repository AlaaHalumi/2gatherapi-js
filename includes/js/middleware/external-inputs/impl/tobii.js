let tobiiInstance = null;

class Tobii extends ExternalInput{

    constructor(){
        super();
        if(!tobiiInstance){
            tobiiInstance = this;
        }
        return tobiiInstance;
    }

    connectExternalInput(){
        this.connected = true;
    }
}