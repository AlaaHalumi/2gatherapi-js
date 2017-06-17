class Library extends Plugin{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.imgFactory = new ImgFactory();

    }

    draw(){
        try{
            let options = eval(this.domElement.getAttribute("options"));
            if (this.options == undefined) {
                throw "Exception: Can't init tg-library, option attribute is undefined"
            }

            let libraryContainer = document.createElement("div");
            //our class for this divContainer plugin
            libraryContainer.setAttribute("class","tg-library-books");

            for(let propertyName in options) {

                let divStory = document.createElement("div");
                //our class for this divStory plugin
                divStory.setAttribute("class", "tg-library-story");

                //our class for this header
                let bookHeader = document.createElement("h5");
                bookHeader.setAttribute("class", "tg-library-header");

                let tgImg = document.createElement("tg-img");

                let libraryImg = {
                    imgAttribute : {

                    },
                    path: "",
                    img : "",
                    voiceCommand : ""
                }

                for(let propertyAtrr in options[propertyName]["imgAttribute"]) {
                    libraryImg.imgAttribute[propertyAtrr] = options[propertyName]["imgAttribute"][propertyAtrr];
                }

                libraryImg.path = options[propertyName]["path"];
                libraryImg.img = options[propertyName]["img"];
                libraryImg.voiceCommand = options[propertyName]["voiceCommand"];
                bookHeader.innerHTML += options[propertyName]["voiceCommand"];

                this.imgFactory.createObject(tgImg,libraryImg);

                divStory.appendChild(bookHeader);
                divStory.appendChild(tgImg);
                libraryContainer.appendChild(divStory)
            }

            this.domElement.appendChild(libraryContainer);

        }
        catch (e){
            console.log(e);
        }



    }

}