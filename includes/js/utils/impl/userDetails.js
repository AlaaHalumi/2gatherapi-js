'use strict'

let userDetailsUtilInstance = null;
class UserDetailsUtil extends Util{
    constructor(options) {
        super();
        if(!userDetailsUtilInstance){
            console.log("inside class: " + options["device"])
            this.disability = options["disability"];
            this.device = options["device"];
            userDetailsUtilInstance = this;
        }
        return userDetailsUtilInstance;
    }

    setDevice(options){

    }
    getDevice(){
        return this.device;
    }

}