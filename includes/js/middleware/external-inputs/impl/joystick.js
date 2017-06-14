let joystickInstance = null;

class Joystick extends ExternalInput{

    constructor(){
        super();
        if(!joystickInstance){
            joystickInstance = this;
        }
        return joystickInstance;
    }

    connectExternalInput(){
        this.connected = true;
    }
}