class Library extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        // this.menuFactory = new MenuFactory();
    }

    // book1 : {
    //     path: "includes/library/The Hare and the Tortoise",
    //     bookName : "The Hare and the Tortoise",
    //     img : "includes/library/The Hare and the Tortoise.jpg",
    //     triggerCommand : "ספר ראשון"


    draw(){
        let options = eval(this.domElement.getAttribute("options"));

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class","custom-library-div");

        for(let propertyName in options) {
            let bookDiv = document.createElement("div");
            bookDiv.setAttribute("class","custom-library-bookDiv");
            let bookHeader = document.createElement("h5");
            let img = document.createElement("img");
            img.setAttribute("class","custom-library-img");
            let buttonStart = document.createElement("button");
            let buttonStop = document.createElement("button");

            img.setAttribute("src",options[propertyName]["img"]);
            bookHeader.innerHTML = options[propertyName]["bookName"];

            // buttonStart.setAttribute("background","url(includes/library/play icon.png)" );
            // buttonStop.style.backgroundImage = "url('includes/library/pause icon.png')";
            buttonStart.innerHTML = "start";
            buttonStop.innerHTML = "stop";

            buttonStop.onclick = function(){
                let speaker = new SpeechUtil();
                speaker.cancelSpeak();
                console.log("stop stop speaker");
            }


            bookDiv.appendChild(bookHeader);
            bookDiv.appendChild(img);
            bookDiv.appendChild(buttonStart);
            bookDiv.appendChild(buttonStop);
            mainDiv.appendChild(bookDiv)
        }
        this.domElement.appendChild(mainDiv);
    }
}