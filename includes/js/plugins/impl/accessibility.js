class Accessibility extends Object{

    constructor(domElement){
        super();
        this.domElement = domElement;
        this.accessibilityUtil = new AccessibilityUtil();
    }

    draw(){

        this.domElement.innerHTML +='<button id="acc_logo"></button>'+
                                    '<div id="acc_panel">'+
                                       '<div class="row_panel">'+
                                            '<a id="hide_panel"> X </a>'+
                                            '<a id="refresh_panel" href="index.html"> % </a>'+
                                            '<select id="lang">'+
                                                '<option id="English">English</option>'+
                                                '<option>ألعربيه</option>'+
                                                '<option>עברית</option>'+
                                                '<option>русский</option>'+
                                             '</select>'+
                                         '</div>'+
                                        '<div class="row_panel">'+
                                             '<div class="row3_panel" class="pull-right inner">'+
                                                '<ul>'+
                                                    '<li id="bigger_font"><img src="images/bFont.png" alt="Bigger Font"><span data-translate="_bigfont">Bigger Font</span></li>'+
                                                    '<li id="smaller_font"><img src="images/sFont.png" alt="Bigger Font"><span data-translate="_smallfont">Smaller Font</span></li>'+
                                                    '<li id="default_font"><img src="images/nFont.png" alt="Bigger Font"><span data-translate="_deffont">Normal Size</span></li>'+
                                                '</ul>'+
                                                '<div class="clear"></div>'+
                                           '</div>'+
                                    '</div>'+
                                    '<div class="row_panel">'+
                                        '<div class="row3_panel">'+
                                            '<ul>'+
                                                '<li id="blackCursor"><img src="images/cursorBlack1.png" alt="Bigger Font"><span data-translate="_bCursor">Black Cursor</span></li>'+
                                                '<li id="whiteCursor"><img src="images/cursorWhite1.png" alt="Bigger Font"><span data-translate="_wCursor">White Cursor</span></li>'+
                                                '<li id="hightlightTitles"><img src="images/nFont.png" alt="Bigger Font"><span data-translate="_bTitles">Hightlig Titles</span></li>'+
                                            '</ul>'+
                                            '<div class="clear"></div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row_panel">'+
                                         '<div class="row3_panel">'+
                                            '<ul>'+
                                                '<li id="bigger_font"><img src="images/bFont.png" alt="Bigger Font"><span data-translate="_imagesDes">Images Descriptions</span></li>'+
                                                '<li id="impared"><img src="images/vi.png" alt="Bigger Font"><span data-translate="_vi">Visually Impared</span></li>'+
                                                '<li id="color_blind"><img src="images/cb.png" alt="Bigger Font"><span data-translate="_cb">Color Blind<</span></li>'+
                                            '</ul>'+
                                            '<div class="clear"></div>'+
                                         '</div>'+
                                    '</div>'+
                                '</div>'

        this.accessibilityUtil.initLang();
        this.accessibilityUtil.initAccessibility();
    }
}