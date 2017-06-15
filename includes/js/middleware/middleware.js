'use strict'

class Middleware {

    constructor(devices, gatherApiObject) {
        this.devices = devices;
        this.gatherApiObject = gatherApiObject;
        this.connectedDevices = {};
        this.externalInputs = {
            Clickers: new Clickers(),
            Tobii : new Tobii(),
            joystick : new Joystick()
        }
    }

    init(callback){
        var devicesToCheck = [];
        for(var key in this.devices){
            devicesToCheck.push({productId : this.devices[key].productId, vendorId: this.devices[key].vendorId});
        }
        this.checkForConnectedDevices(JSON.stringify(devicesToCheck),callback);
    }

    checkForConnectedDevices(data,callback){
        var xmlhttp = new XMLHttpRequest();
        var self = this;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                self.connectedDevices = JSON.parse(xmlhttp.responseText);
                var needExternalInit = false;
                for(var externalInput in self.externalInputs){
                    if(self.devices[externalInput]) {
                        var ei = self.externalInputs[externalInput];
                        for (var connectedDevice in self.connectedDevices) {
                            if (self.connectedDevices[connectedDevice].productId == self.devices[externalInput].productId &&
                                self.connectedDevices[connectedDevice].vendorId == self.devices[externalInput].vendorId) {
                                ei.connectExternalInput();
                                needExternalInit = true;
                                break;
                            }
                        }
                        if(needExternalInit){
                            self.gatherApiObject.enableExternalInputsHandlers();
                        }else if(self.devices.length != 0 && callback){
                            callback();
                        }
                        else if(self.devices.length != 0){
                            alert("one of the following required devices isn't connected: " + Object.keys(self.devices));
                        }
                    }
                }
            }
        };

        xmlhttp.open("POST", "http://localhost:8082/device-checker/get-user-active-devices", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.setRequestHeader('Accept', 'application/JSON');
        xmlhttp.send(data);
    }

    getConnectedDevices(){
        return this.connectedDevices;
    }

    showConnectedDevices(){
        console.log(this.connectedDevices);
    }

    enableTobii(){
        console.log("enabled Tobii");
    }

    enableKeyboard(){
        console.log("enbled Keyboard");
    }
}