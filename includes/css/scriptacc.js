$(document).ready(function(){
    $("#acc_logo").click(function(){
        $("#acc_panel").toggle();
    });
    $('#hide_panel').click(function(){
        $('#acc_panel').hide();
    });

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
});




