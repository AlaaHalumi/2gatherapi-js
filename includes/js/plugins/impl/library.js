class Library extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;

    }

    draw(){
        let options = eval(this.domElement.getAttribute("options"));

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class","tg-library-books");

        for(let propertyName in options) {
            let bookDiv = document.createElement("div");
            bookDiv.setAttribute("class", "tg-library-story");
            let bookHeader = document.createElement("h5");
            let img = document.createElement("img");
            img.setAttribute("class", "tg-library-img");
            let buttonStart = document.createElement("button");
            buttonStart.setAttribute("class", "tg-library-startButton");
            let buttonStop = document.createElement("button");
            buttonStop.setAttribute("class", "tg-library-stopButton");

            img.setAttribute("src", options[propertyName]["img"]);
            bookHeader.innerHTML = options[propertyName]["bookName"];

            buttonStart.setAttribute("data-command", options[propertyName]["triggerCommand"])
            buttonStart.innerHTML = "start";
            buttonStop.innerHTML = "stop";
            buttonStart.style.cursor = "pointer";
            buttonStop.style.cursor = "pointer";


            // When the user clicks the button, open the modal
            img.onclick = function () {

                let path = options[propertyName]["path"];
                console.log("path " + path);
                let rawFile = new XMLHttpRequest();
                rawFile.open("GET", path, false);
                rawFile.onreadystatechange = function () {
                    if (rawFile.readyState === 4) {
                        if (rawFile.status === 200 || rawFile.status == 0) {
                            let allText = rawFile.responseText;
                            let boxModal = new BoxModelUtil();
                            boxModal.setText(allText)

                        }

                    }
                }
                rawFile.send(null);
            }

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

                            let chunkLength = 150;
                            let pattRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
                            let arr = [];
                            let txt = allText;
                            while (txt.length > 0) {
                                arr.push(txt.match(pattRegex)[0]);
                                txt = txt.substring(arr[arr.length - 1].length);
                            }
                            arr.forEach(function(element) {
                                // window.setTimeout(textToVoice(element),150000);
                                console.log("before========================");
                                console.log(element);
                                let content = element.trim();
                                // console.log(content);
                                let u = new SpeechSynthesisUtterance(content);
                                u.lang = 'en-US';
                                let speaker = new SpeechUtil();
                                setTimeout(speaker.startSpeak(u),150000);
                                console.log("after========================");
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

        var textToVoice= function(element){

        }
    }


    readText(text)
    {

    }
}