
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
                        "text" : "הגדל ונט",
                        "img" : "images/accessibility/bigFont.png",
                        "func" : "var divtxt = document.querySelector('body > div:not(#acc_panel)');" +
                        "var curSize  = window.getComputedStyle(divtxt, null).getPropertyValue('font-size');" +
                        "var newSize = parseInt(curSize.replace('px', '')) + 1;" +
                        "divtxt.style.fontSize = newSize + 'px';"


                    },
                    {
                        "id" : "smaller_font",
                        "text" : "הקטן פונט",
                        "img" : "images/accessibility/smallFont.png",
                        "func" : "var divtxt = document.querySelector('body > div:not(#acc_panel)');" +
                        "var curSize  = window.getComputedStyle(divtxt, null).getPropertyValue('font-size');" +
                        "var newSize = parseInt(curSize.replace('px', '')) - 1;" +
                        "if (newSize <= 10) {"+
                        "newSize = 10+ 'px';}"+
                        "divtxt.style.fontSize = newSize + 'px';"
                    },
                    {
                        "id" : "legible_font",
                        "text" : "פונט קריא",
                        "img" : "images/accessibility/legibleFont.png",
                        "func" : "$('body').toggleClass('lfont');"
                    },
                    {
                        "id" : "bright_Contrast",
                        "text" : "בהירות בהירה",
                        "img" : "images/accessibility/brightContrast.png",
                        "func" : "$('body,nav,main,header,section,article,footer,div,button').toggleClass('bc_blocks');" +
                        "$('main,header,footer,div,button').toggleClass('bc_border');" +
                        "$('h1,h2,h3,h4,h5,h6,span,label').toggleClass('bc_headers');" +
                        "$('a').toggleClass('bc_links');" +
                        "$('img,svg').toggleClass('bc_image');"
                    },
                    {
                        "id" : "impared",
                        "text" : "בהירות כהה",
                        "img" : "images/accessibility/darkContrast.png",
                        "func" : "$('body,main,nav,header,section,article,footer,div').toggleClass('vi_whitefont');" +
                        "$('h1,h2,h3,h4,h5,h6,span,label,button').toggleClass('vi_yellowfont');" +
                        "$('a').toggleClass('vi_link');" +
                        "$('img,svg').toggleClass('vi_image');"
                    },
                    {
                        "id" : "color_blind",
                        "text" : "עוורי ראייה",
                        "img" : "images/accessibility/colorBlind.png",
                        "func" : "$('body,img').toggleClass('cb_grayscale');" +
                        "$('body,main').toggleClass('cb_bodyWhite');"
                    },
                    {
                        "id" : "blackCursor",
                        "text" : "סמן שחור",
                        "img" : "images/accessibility/blackCursor.png",
                        "func" : "$('body').toggleClass('black_cursor');"
                    },
                    {
                        "id" : "whiteCursor",
                        "text" : "סמן לבן",
                        "img" : "images/accessibility/whiteCursor.png",
                        "func" : "$('body').toggleClass('white_cursor');"
                    },
                    {
                        "id" : "magnifier",
                        "text" : "זכוכית מגדלת",
                        "img" : "images/accessibility/magni.png",
                        "func" : "$('.wrapper').toggleClass('largeBodyFonts');" +
                        "$('header,#question,.buttonGame').toggleClass('lfonts');" +
                        "$('.row_activity').toggleClass('largeB');" +
                        "$('.container').toggleClass('largef');" +
                        "$('.snow-globe').toggleClass('largeSnowGlobe');" +
                        "$('.bottom').toggleClass('largeSnowBottom');" +
                        "$('.cell img').toggleClass('largeimg');"
                    },
                    {
                        "id" : "imagesDescriptions",
                        "text" : "תיאור לתמונות",
                        "img" : "images/accessibility/imagesDes.png",
                        "func" : "if(flag ==0){iDescriptions();" +
                        "$('#text').css('display','block');}" +
                        "else{flag =0;" +
                        "$('#text').css('display','none');}"
                    },
                    {
                        "id" : "hightlightTitles",
                        "text" : "הדגשת כותרות",
                        "img" : "images/accessibility/hightlightTitles.png",
                        "func" : "$('h1,h2,h3,h4,h5,h6').toggleClass('hightlight_titles');"
                    },
                    {
                        "id" : "hightlightLinks",
                        "text" : "הדגשת קישורים",
                        "img" : "images/accessibility/links.png",
                        "func" : "$('a').toggleClass('hightlight_Links');"
                    }


                ]
        }


    }
    // Pictures Alt
    // var imgDes='<p id="text"></p>';
    // $('body').append(imgDes);
    //
    // function iDescriptions(){
    // var img = document.getElementsByTagName("img");
    // var text = document.getElementById("text");
    //
    // for (var i = 0; i < img.length; i++) {
    //     img[i].addEventListener("mouseover", function() {
    //         var alt = this.alt;
    //         text.textContent = alt;
    //     });
    // }
    // $(img).mousemove(function(e) {
    //     $('#text').offset({
    //         left: e.pageX,
    //         top: e.pageY
    //     });
    // });
    // flag = 1;
// }
    draw(){

        var tgButtonElement = document.createElement("tg-button");
        this.domElement.appendChild(tgButtonElement);


        //main container
        var divAccPanel = document.createElement("div");
        divAccPanel.setAttribute("id","acc_panel");
        this.domElement.appendChild(divAccPanel);


        //accessibility header
        var divHeader = document.createElement("div");
        divHeader.setAttribute("class","header_panel");

        var ulHeader = document.createElement("ul");
        divAccPanel.appendChild(divHeader);
        divHeader.appendChild(ulHeader);



        var tgLButtonClose = document.createElement("tg-button");
        ulHeader.appendChild(tgLButtonClose);
        let buttonClose = {
            liAttribute : {
                id : "hide_panel"
            },
            buttonValue : "Close",
            commands : {
                submit : {

                }
            }
        }

        buttonClose.commands["submit"]["name"] = "close accessibility" ;
        buttonClose.commands["submit"]["func"] = function(){
            $('#acc_panel').hide();
        };

        this.buttonFactory.createObject(tgLButtonClose, buttonClose);

        let headerAccess = document.createElement("h3")
        headerAccess.innerHTML += "Accessibility";
        divHeader.appendChild(headerAccess);

        let select = document.createElement("select")
        select.setAttribute("id","lang");
        divHeader.appendChild(select);

        let select1 = document.createElement("option")
        let select2 = document.createElement("option")
        let select3 = document.createElement("option")
        let select4 = document.createElement("option")

        select1.innerHTML += "English";
        select2.innerHTML += "ألعربيه";
        select3.innerHTML += "עברית";
        select4.innerHTML += "русский";

        select.appendChild(select1);
        select.appendChild(select2);
        select.appendChild(select3);
        select.appendChild(select4);

        //  <div class="header_panel">
        //
        //         <h3 data-translate="_acc">Accessibility</h3>
        //         <select id="lang">
        //         <option id="English">English</option>
        //         <option>ألعربيه</option>
        //         <option>עברית</option>
        //         <option>русский</option>
        //         </select>
        // </div>



        var divButtonPanel = document.createElement("div");
        divButtonPanel.setAttribute("class","buttons_panel");
        divAccPanel.appendChild(divButtonPanel);

        console.log(this.jsonData);
        console.log(this.jsonData.objects.length);

        var div_row_panel;
        var row3_panel;
        var ul;




        for(var index = 0 ; index < this.jsonData.objects.length ; index++){

            var tgLi = document.createElement("tg-li");

            //create duc for put 3 li inside it
            if(index ==0 || index == 3 || index == 6){

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
                    text : this.jsonData.objects[index]["text"],
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

            let img = document.createElement("img");
            img.setAttribute("src",this.jsonData.objects[index]["img"]);
            var liChild= tgLi.firstChild;
            liChild.appendChild(img);

            // let span = document.createElement("span");
            // span.innerHTML += this.jsonData.objects[index]["text"] ;
            // liChild.appendChild(span);

            ul.appendChild(tgLi);
        }

        var tgLi = document.createElement("tg-li");
        div_row_panel = document.createElement("div");
        div_row_panel.setAttribute("class","row_panel");
        divButtonPanel.appendChild(div_row_panel);

        row3_panel = document.createElement("div");
        row3_panel.setAttribute("class","row3_panel");
        div_row_panel.appendChild(row3_panel);

        // ul = document.createElement("ul");
        // row3_panel.appendChild(ul);
        // let li = {
        //     liAttribute : {
        //         id : "imagesDescriptions",
        //         text : "תיאור תמונה",
        //     },
        //     commands : {
        //         submit : {
        //
        //         }
        //     }
        // }
        //
        //
        // li.commands["submit"]["name"] = "תיאור תמונה" ;
        // li.commands["submit"]["func"] = function(){
        //     var flag = 0
        //     $("#imagesDescriptions").on('click', function(){
        //         console.log("ok1")
        //         if(flag ==0){
        //             iDescriptions();
        //             $("#text").css("display","block");
        //         }
        //         else{
        //             flag =0;
        //             $("#text").css("display","none");
        //         }
        //     });
        //     // Pictures Alt
        //     var imgDes='<p id="text"></p>';
        //     $('body').append(imgDes);
        //
        //     function iDescriptions() {
        //         console.log("call func")
        //         var img = document.getElementsByTagName("img");
        //         var text = document.getElementById("text");
        //
        //         for (var i = 0; i < img.length; i++) {
        //             img[i].addEventListener("mouseover", function () {
        //                 var alt = this.alt;
        //                 text.textContent = alt;
        //             });
        //         }
        //
        //         document.getElementById("img").addEventListener("mousemove", function(event) {
        //             myFunction(event);
        //         });
        //
        //         function myFunction(e) {
        //             $('#text').offset({
        //                 left: e.pageX,
        //                 top: e.pageY
        //             });
        //             var x = e.clientX;
        //             var y = e.clientY;
        //             var coor = "Coordinates: (" + x + "," + y + ")";
        //             document.getElementById("demo").innerHTML = coor;
        //         }
        //
        //         document.getElementsByTagName("img").addEventListener("mousemove", myFunction(e) )
        //
        //         myFunction(e){
        //             console.log("mouseOver");
        //             $('#text').offset({
        //                 left: e.pageX,
        //                 top: e.pageY
        //             });
        //         }
        //
        //
        //         flag = 1;
        //     }
        //
        //     console.log("ok2")
        // };
        //
        // this.liFactory.createObject(tgLi, li);
        // ul.appendChild(tgLi);


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
            console.log("tg-button");
        }

        this.buttonFactory.createObject(tgButton[0], buttonAccess);
    }
}