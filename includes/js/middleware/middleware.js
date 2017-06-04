'use strict'

class Middleware {

    constructor(devices) {
        this.devices = devices;
        this.connectedDevices = {};
        this.externalInputs = {
            clickers: new Clickers()
        }
    }

    init(callback){
        this.checkForConnectedDevices(JSON.stringify(this.devices),callback);
    }

    checkForConnectedDevices(data,callback){
        var xmlhttp = new XMLHttpRequest();
        var self = this;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                try {
                    self.connectedDevices = JSON.parse(xmlhttp.responseText);
                    for(var externalInput in self.externalInputs){
                        var ei = self.externalInputs[externalInput];
                        for(var connectedDevice in self.connectedDevices){
                            if(self.connectedDevices[connectedDevice].productId == ei.deviceInfo.productId &&
                                self.connectedDevices[connectedDevice].vendorId == ei.deviceInfo.vendorId){
                                ei.connectExternalInput();
                                break;
                            }
                        }
                    }
                }catch(err) {
                    callback();
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