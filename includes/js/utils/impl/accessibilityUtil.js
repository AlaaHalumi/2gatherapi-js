'use strict'

let accessibilityUtilInstance = null;
class AccessibilityUtil extends Util {
    constructor() {
        super();
        if (!accessibilityUtilInstance) {
            accessibilityUtilInstance = this;
        }
        return accessibilityUtilInstance;
    }

    initAccessibility(){

        document.getElementById("acc_logo").onclick = function(){
            document.getElementById("acc_logo").style.display = 'block';
        };
        document.getElementById("hide_panel").onclick = function(){
            document.getElementById("hide_panel").style.display = 'none';
        };

        // var divtxt = $("body:not(div:acc_panel)"); //"p:not(.intro)"
        var divtxt = $("body:not(#acc_panel)");
        // Increase Font Size
        $('#bigger_font').click(function() {
            var curSize = divtxt.css('fontSize');
            var newSize = parseInt(curSize.replace("px", "")) + 1;
            $(divtxt).css("fontSize", newSize + "px");
        });
        // Decrease Font Size
        $('#smaller_font').click(function() {
            var curSize = divtxt.css('fontSize');
            var newSize = parseInt(curSize.replace("px", "")) - 1;
            if (newSize <= 10) {
                newSize = 10+ "px" ;
            }
            $(divtxt).css("fontSize", newSize + "px");
        })
        // Black Cursor
        $("#blackCursor").click(function() {
            $('body').toggleClass("black_cursor");
        });
        // White Cursor
        $("#whiteCursor").click(function() {
            $('body').toggleClass("white_cursor");
        });
        // Hightlish titles
        $("#hightlightTitles").click(function() {
            $('h1,h2,h3,h4,h5,h6').toggleClass("hightlight_titles");
            console.log("Alaa1");
        });
        // Monocrom
        $('#impared').click(function (){
            // $('link[href="include/style.css"]').attr('href','include/style2.css');
            $('body,main,nav,header,section,article,footer,div').toggleClass("vi_whitefont");
            $('h1,h2,h3,h4,h5,h6,span,label,button').toggleClass("vi_yellowfont");
            $('a').toggleClass("vi_link");
            $('img').toggleClass("vi_image");

        });
        // Color Blind
        $("#color_blind").click(function() {
            $('body,img').toggleClass("cb_grayscale");
            $('body,main').toggleClass("cb_bodyWhite");
        });

    }

    initLang() {

        // Some variables for later
        let dictionary, set_lang;

        // Object literal behaving as multi-dictionary
        dictionary = {
            "english": {
                "_bigfont": "Bigger Font",
                "_smallfont": "Smaller Font",
                "_deffont": "Normal Size",
                "_bCursor": "Black Cursor",
                "_wCursor": "White Cursor",
                "_bTitles": "Highlight Titles",
                "_imagesDes": "images Descriptions",
                "_vi": "Visually Impared",
                "_cb": "Color Blind"
            },
            "ألعربيه": {
                "_bigfont": "تكبير ألخط",
                "_smallfont": "تصغير ألخط",
                "_deffont": "حجم عادي",
                "_bCursor": "مؤشر أسود",
                "_wCursor": "مؤشر أبيض",
                "_bTitles": "تحديد العناوين",
                "_imagesDes": "وصف للصور",
                "_vi": "ملائمه لضعاف ألبصر",
                "_cb": "ملائمه لعمى ألالوان"
            },
            "русский": {
                "_bigfont": "Увеличить шрифт",
                "_smallfont": "Уменьшить шрифт",
                "_deffont": "Оригинальный размер",
                "_bCursor": "Черный курсор",
                "_wCursor": "Белый курсор",
                "_bTitles": "Выделение заголовков",
                "_imagesDes": "Описание Изображения",
                "_vi": "Cлабовидящиe",
                "_cb": "дальтонизм"
            },
            "עברית": {
                "_bigfont": "הגדלת גופן",
                "_smallfont": "הקטנת גופן",
                "_deffont": "גודל מקורי",
                "_bCursor": "סמן שחור",
                "_wCursor": "סמן לבן",
                "_bTitles": "הדגשת כותרות",
                "_imagesDes": "תיאור לתמונות",
                "_vi": "התאמה לכבדי ראיה",
                "_cb": "התאמה לעיוורי צבעים"
            }
        };

        // Function for swapping dictionaries
        set_lang = function (dictionary) {
            document.querySelectorAll('[data-translate]').value = function () {
                let key = this.data("translate");
                if (dictionary.hasOwnProperty(key)) {
                    return dictionary[key];
                }
            };
        };

        // Swap languages when menu changes

        document.getElementById("lang").onchange = function () {
            let language = document.getElementById("lang").value.toLowerCase();
            console.log(language);
            if (dictionary.hasOwnProperty(language)) {
                set_lang(dictionary[language]);
            }
        };

        // Set initial language to English
        set_lang(dictionary.english);

    }

}