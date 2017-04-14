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
            buttonStart.setAttribute("data-command",options[propertyName]["triggerCommand"])
            buttonStart.innerHTML = "start";
            buttonStop.innerHTML = "stop";

            buttonStop.onclick = function(){
                let speaker = new SpeechUtil();
                speaker.cancelSpeak();
                console.log("stop stop speaker");
            }

            buttonStart.onclick = function(){
                let path = options[propertyName]["path"];
                console.log("path " + path);

                let rawFile = new XMLHttpRequest();
                rawFile.open("GET", path, false);
                rawFile.onreadystatechange = function ()
                {
                    if(rawFile.readyState === 4)
                    {
                        if(rawFile.status === 200 || rawFile.status == 0)
                        {
                            let allText = rawFile.responseText;

                            let chunkLength = 120;
                            let pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
                            let arr = [];
                            let txt = allText;
                            while (txt.length > 0) {
                                arr.push(txt.match(pattRegex)[0]);
                                txt = txt.substring(arr[arr.length - 1].length);
                            }
                            arr.forEach(function(element) {
                                let content = element.trim();
                                console.log(content);
                                let u = new SpeechSynthesisUtterance(content);
                                u.lang = 'en-US';
                                let speaker = new SpeechUtil();
                                speaker.startSpeak(u);
                                // window.speechSynthesis.speak(u);

                            });



                        }
                    }
                }
                rawFile.send(null);
            }

            bookDiv.appendChild(bookHeader);
            bookDiv.appendChild(img);
            bookDiv.appendChild(buttonStart);
            bookDiv.appendChild(buttonStop);
            mainDiv.appendChild(bookDiv)
        }
        this.domElement.appendChild(mainDiv);
    }

    readText(text)
    {

    }
}