'use strict'

class Middleware {

    constructor(devices, interval) {
        this.devices = devices;
        this.interval = interval;
        this.connectedDevices = {};
    }

    init(){
        var sleep = time => new Promise(resolve => setTimeout(resolve, time))
        var poll = (promiseFn, time) => promiseFn().then(sleep(time).then(() => poll(promiseFn, time)))
        poll(() => new Promise(() => this.checkForConnectedDevices(JSON.stringify(this.devices))), this.interval)
    }

    checkForConnectedDevices(data){
        var xmlhttp = new XMLHttpRequest();
        var self = this;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                self.connectedDevices = JSON.parse(xmlhttp.responseText);
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