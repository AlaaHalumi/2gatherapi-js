
class Accessibility extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.buttonFactory = new ButtonFactory();
        this.liFactory = new LiFactory();
        this.jsonData = {
            "objects" :
                [
                    {
                        "id" : "bigger_font",
                        "text" : "הגדל פונט",
                        "func" : "var divtxt = $('body').children(':not(#acc_panel)'); var curSize = divtxt.css('fontSize'); var newSize = parseInt(curSize.replace('px', '')) + 1; divtxt.css('fontSize', newSize + 'px');"

                    },
                    {
                        "id" : "smaller_font",
                        "text" : "הקטן פונט",
                        "func" : "var divtxt = $('body').children(':not(#acc_panel)'); var curSize = divtxt.css('fontSize');var newSize = parseInt(curSize.replace('px', '')) - 1;if (newSize <= 10) {newSize = 10+ 'px' ;}divtxt.css('fontSize', newSize + 'px');"
                    }

                ]
        }


    }

    draw(){

        var tgButtonElement = document.createElement("tg-button");
        this.domElement.appendChild(tgButtonElement);


        //main container
        var divAccPanel = document.createElement("div");
        divAccPanel.setAttribute("id","acc_panel");
        this.domElement.appendChild(divAccPanel);


        var divButtonPanel = document.createElement("div");
        divButtonPanel.setAttribute("class","buttons_panel");
        divAccPanel.appendChild(divButtonPanel);


        var div_row_panel;
        var row3_panel;
        var ul;

        for(var index = 0 ; index < this.jsonData.objects.length ; index++){

            var tgLi = document.createElement("tg-li");

            //create duc for put 3 li inside it
            if(index == 0 || index == 4 || index == 6){

                div_row_panel = document.createElement("div");
                div_row_panel.setAttribute("class","row_panel");
                divButtonPanel.appendChild(div_row_panel);

                row3_panel = document.createElement("div");
                row3_panel.setAttribute("class","row3_panel");
                div_row_panel.appendChild(row3_panel);

                ul = document.createElement("ul");
                row3_panel.appendChild(ul);
            }

            let li = {
                liAttribute : {
                    id : this.jsonData.objects[index]["id"],
                    text : this.jsonData.objects[index]["text"]
                },
                commands : {
                    submit : {

                    }
                }
            }

            let self =  this.jsonData.objects[index]["func"];
            li.commands["submit"]["name"] = this.jsonData.objects[index]["text"] ;
            li.commands["submit"]["func"] = function(){
                eval(self);
            };

            this.liFactory.createObject(tgLi, li);
            ul.appendChild(tgLi);
        }

        let tgButton = this.domElement.getElementsByTagName("tg-button");

            var buttonAccess = {
                buttonAttribute : {
                    id : "acc_logo"
                },
                // buttonValue : "Open Accessibility",
                commands : {
                    submit : {

                    }
                }
            }

        buttonAccess["commands"]["submit"]["name"] = "נגישות";
        buttonAccess["commands"]["submit"]["func"] = function() {
                $("#acc_panel").toggle();
        }

        this.buttonFactory.createObject(tgButton[0], buttonAccess);
    }
}