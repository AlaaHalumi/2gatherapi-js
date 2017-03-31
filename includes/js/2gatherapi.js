'use strict'

class Gatherapi {
    constructor(options) {
        this.middleware = new Middleware();
        this.utils = {
            voiceToTextUtil : new VoiceToTextUtil(options["textToVoiceLanguage"])
        };
        this.listOfObjects = {};
        this.listOfObjects["chat"] = new Chat();
        this.listOfObjects["login"] = new Login();
    }
}