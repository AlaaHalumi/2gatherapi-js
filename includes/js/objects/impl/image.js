class Img extends Object {

    constructor(domElement) {
        super();
        this.domElement = domElement;

    }

    draw(options) {

        let img

        if (options == null || options == undefined) {
            this.options = eval(this.domElement.getAttribute("options"));
            img = this.initImage()
        }
        else {
            this.options = options;
            img = this.initImage()
        }

        this.domElement.appendChild(img);
    }

    initImage() {

        let img = document.createElement("img");

        if (this.options.imgAttribute) {
            for (let attribute in this.options.imgAttribute) {
                console.log("attribute: " + attribute + " " + this.options.imgAttribute[attribute]);
                img.setAttribute(attribute, this.options.imgAttribute[attribute]);
            }
        }
        if (this.options.img) {
            img.setAttribute("src", this.options["img"]);
        }
        if (this.options.path) {

            let path = this.options["path"];
            // When the user clicks the button, open the modal
            img.onclick = function () {

                document.getElementsByClassName("content-paragraph").innerHTML += "";

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
            return img;
        }

    }
}
