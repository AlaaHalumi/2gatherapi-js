'use strict'

let boxModalUtilInstance = null;
class BoxModelUtil extends Util {
    constructor() {

        super();
        if (!boxModalUtilInstance) {
            this.annyangUtil = new AnnyangUtil();
            this.divModel = document.createElement("div");
            this.divContent = document.createElement("div");
            this.spanClose = document.createElement("span");
            this.pararpghText = document.createElement("p");
            this.initModal();
            boxModalUtilInstance = this;
        }
        return boxModalUtilInstance;
    }


    initModal() {
        // let divModel = document.createElement("div");
        this.divModel.setAttribute("id", "myModal");
        this.divModel.setAttribute("class", "modal");
        // let divContent = document.createElement("div");
        this.divContent.setAttribute("class", "modal-content");
        // let spanClose = document.createElement("span");
        this.spanClose.setAttribute("class", "close");
        this.spanClose.innerHTML = "&times";
        // let pararpghText = document.createElement("p");
        this.pararpghText.setAttribute("class", "content-paragraph modal-scroll");
        this.pararpghText.innerHTML = "";
        this.divContent.appendChild(this.spanClose);
        this.divContent.appendChild(this.pararpghText);
        this.divModel.appendChild(this.divContent)
        document.body.appendChild(this.divModel);


        // Get the modal
        let modal = document.getElementById('myModal');
        // modal.style.display = "block";


        // When the user clicks on <span> (x), close the modal
        this.spanClose.onclick = function () {
            let modal = document.getElementById('myModal');
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            let modal = document.getElementById('myModal');
            if (event.target == modal) {
                sessionStorage.scrollPosition = 0;
                console.log("insied modal close " + sessionStorage.getItem("scrollPosition"))
                $(".modal-content").scrollTop(0);
                modal.style.display = "none";
            }
        }

    }

    setText(allText)
    {

        this.pararpghText.innerHTML = "";
        // By lines
        var lines = allText.split('\n');
        for (var line = 0; line < lines.length; line++) {
            this.pararpghText.innerHTML += lines[line];
            this.pararpghText.innerHTML += "<br>";
        }
        this.divModel.style.display = "block";
    }

}

