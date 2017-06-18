# What is 2gatherAPI:

<p>
2GatherAPI is a simple API, which will allow different developers around the world to use it by embedding the suitable features to their own application to turn it to be more accessible for people with disabilities. 
</p>
<p>
Why we made it?
We think it necessary for most application to be accessible, since 20% of our society is people with different disabilities, like deaf, blind or people with motor disabilities which can't move any part of their bodies. We want them to be part of this community, so they could feel it, watch it, heart it and navigate independently in every website.
</p>

<h2>What we give:</h2>
Different objects and plugins for different useage.<br> 
# Reference API<br>

Objects Elements:<br>
tg-button<br> 
tg-li<br>
tg-img<br>
tg-input<br>
tg-a<br>
tg-paragraph<br>

Plugins Elements:

tg-login<br>
tg-chat<br>
tg-library<br>
tg-menu<br>
tg-accessibilitytool<br>

<h2> How to use it? </h2>
<p> All our elements needs to be set up with "options" attribute, and the value attribute is an object you can rename which will initial the element.</p>
<h3>Example:</h3>
<p> tg-button options="loginOptions" /tg-button</p>

<h1>How to init middleware?></h1>
<p> need to init the fowlloing attribute: <br>
var options = {<br>
    language: sessionStorage.getItem("lang"),<br>
    middlewareDevices: {},<br>
    requiredUtills: sessionStorage.getItem("utils").split(",")<br>
};<br>
options.middlewareDevices[sessionStorage.getItem("device")] = {<br>
    vendorId: sessionStorage.getItem("vendorId"),<br>
    productId: sessionStorage.getItem("productId")<br>
};<br>

<h1>2GatherAPI objects:</h1>
<div>
<h2>tg-button: </h2>
<p>Button element with voice command option </p>
<p>for button voice command there is option to use 2gatherAPI keyword for get it you need to add onClickFunc attribute and remove "submit" from command attribute like:</p>
<p> onClickFunc  : {
&nbsp&nbsp&nbsp&nbsp func: function () {
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp//doSomething
&nbsp&nbsp&nbsp&nbsp }
}, </p>
<h3>Object Property:</h3>
<h4>buttonAttribute - initial button attribute</h4>
<h4>buttonValue - initial the text value of the button</h4>
<h4>commands - initial voice coomand</h4>

<h3>Example:</h3>
<p> 
&nbsp var buttonChat = { <br>
&nbsp&nbsp&nbsp&nbsp buttonAttribute : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp id : "send-btn", <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp class : "send" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp&nbsp&nbsp buttonValue : "send", <br>
&nbsp&nbsp&nbsp&nbsp commands: { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 'submit': { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp name: 'שלח', func: function () { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp document.getElementById('send-btn').click(); <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp } <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp } <br>
&nbsp&nbsp &nbsp&nbsp} <br>
&nbsp} <br>
</p>

</div>

<div>

<div>
<h2>tg-img: </h2>
<p>This element is an image for a book, after you click on it it'll open a modal with the text for this spicific book. this object support voice command </p>
<h3>Object Property:</h3>
<h4>imgAttribute - initial img attribute</h4>
<h4>path - path of the text that display in box modal</h4>
<h4>img - img location</h4>
<h4>voiceCommand - for open the modal box for read the book and for init the name of the book header</h4>

<h3>Example:</h3>
<p> 
&nbsp var imgModal = { <br>
&nbsp&nbsp&nbsp&nbsp imgAttribute : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp id : "imgReader", <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp class : "img" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp width : 150 <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp&nbsp&nbsp path : includes/library/The Hare and the Tortoise.txt <br>
&nbsp&nbsp&nbsp&nbsp img : includes/library/The Hare and the Tortoise.jpg <br>
&nbsp&nbsp&nbsp&nbsp voiceCommand: "The Hare and the Tortoise" <br>
&nbsp&nbsp &nbsp&nbsp} <br>
&nbsp} <br>
</p>

</div>

<div>
<h2>tg-input: </h2>
<p>input element with voice command options</p>
<h3>Object Property:</h3>
<h4>inputAttribute - initial input attribute</h4>
<h4>commands - initial voice coomand need to contain name for the object like message and 2 attribute name for voice command and func for the function</h4>

<h3>Example:</h3>
<p> 
&nbsp var imgModal = { <br>
&nbsp&nbsp&nbsp&nbsp inputAttribute : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp type : "text" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp&nbsp&nbsp commands: { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 'message': { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp name: 'message', func: function () { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp document.querySelector("#message").value = contents; <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp } <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp } <br>
&nbsp&nbsp} <br>
</p>

</div>

<div>
<h2>tg-a: </h2>
<p>link element with voice command options</p>
<h3>Object Property:</h3>
<h4>linkAttribute - initial input attribute</h4>
<h4>text - initial string value for a element</h4>
<h4>commandTrigger - initial voice coomand</h4>
<h4>for use 2GatherAPI keyword don't init commandTriger and the voice command will init by text attribute</h4>
<h3>Example:</h3>
<p> 
&nbsp var linkHomePage = { <br>
&nbsp&nbsp&nbsp&nbsp homePageLink : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp href : "homePage.html" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp text : "homePage" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp commandTrigger : "go to home page" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp} <br>
</p>

</div>

<div>
<h2>tg-paragraph: </h2>
<p>paragraph element with text reader option</p>
<h3>Object Property:</h3>
<h4>content - paragraph text</h4>
<h4>commandTrigger - initial voice coomand for start speach the text</h4>

<h3>Example:</h3>
<p> 
&nbsp var myParagraph = { <br>
&nbsp&nbsp&nbsp&nbsp commands : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp content : "This is a beautiful day" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp commandTrigger : "start read paragraph" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp} <br>
</p>

</div>

<h1>2GatherAPI plugins:</h1>
<p> Our Plugins are made of different objects together in one place. </p>
<div>
<h2>tg-login: </h2>
<p>login plugin contain two inputs one of type text, and the second is of type password. In addition the plugin contains one button to login.<br> This plugin supports voice command option</p><br>
<p>for button voice command there is option to use 2gatherAPI keyword for get it you need to add onClickFunc attribute and remove "submit" from command attribute like:</p>
<p> onClickFunc  : {
&nbsp&nbsp&nbsp&nbsp func: function () {
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp//doSomething
&nbsp&nbsp&nbsp&nbsp }
}, </p>
<p>How to use it? The developer needs to initial sessionStorage with 2 properties:<br>
1.sessionStorage.utils<br>
2.sessionStorage.device<br>
3.sessionStorage.lang<br>
4.sessionStorage.vendorId<br>
5sessionStorage.productId<br>
</p>

<h3>Plugin Property:</h3>
<h4>labels - initial the input lables</h4>
<h4>buttonValue - initial the button text value</h4>
<h4>commands - initial voice coomand for start speach the text. command need to init with "name" and "func"</h4>

<h3>Example:</h3>
<p> 
&nbsp var loginOptions = { <br>
&nbsp&nbsp&nbsp&nbsp labels: {
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp nickname: "Nick Name",<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp password: "Password",<br>
&nbsp&nbsp&nbsp&nbsp&nbsp }, <br>
&nbsp&nbsp&nbsp&nbsp buttonValue:"Sigin in",
&nbsp&nbsp&nbsp&nbsp commands: { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 'submit': { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp name: 'התחבר', func: function () {<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp checkUser(); <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp } <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp }, <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 'username': { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp name: 'שם *search', func: function (contents) {<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp document.querySelector("[type='text']").value = contents; <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp } <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp }, <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 'password': { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp name: 'סיסמא *search', func: function (contents) { {<br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp document.querySelector("[type='password']").value = contents; <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp } <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp }, <br>
&nbsp&nbsp &nbsp&nbsp} <br>
&nbsp} <br>
</p>

</div>

<h2>tg-chat: </h2>
<p>Chat plugin contains 2 labels with 2 inputs one is with "name" this is the id and the class for name input and the second is with "message" this is the id and the class.In addition this is also the names that chat server supposed to recive, and a button init with "btn-send id" and have "send" class. This plugin supports voice command option </p><br>
<h3>Plugin Property:</h3>
<h4>wsURL - initial the url of chat ws</h4>
<h4>onClickFunc - define func for button event</h4>
<h4>commands - initial voice coomand. init with 2 object attrubute name and message each of them contain two property name and func</h4>

An alternative, is to create the chat from two different inputs seperately one is with "message" id and name attribute and the second is with "name" id and attribute, and button with "btn-send id".
In addition, you need to create chatUtil instance and call initChat with "chat ws" as a paramater.

<h3>Example:</h3>
<p> 
var chatUtil = new ChatUtil();<br>
chatUtil.initChat("ws://ec2-34-209-72-126.us-west-2.compute.amazonaws.com:8080/index.php");
</p>

<div>
<h2>tg-library: </h2>
<p>With library plugin you can create many books in one place, all you need is: the plugin create img that contains modal box to show the text, this plugin support voice command for disply books</p>
<h3>Object Property:</h3>
<h4>imgAttribute for img attribute</h4>
<h4>path - book path for read the text</h4>
<h4>img - book image</h4>
<h4>voiceCommand - initial voice coomand and book header</h4>

            book1: {
                imgAttribute : {
                    id : 'img11',
                    class : "tg-library-img",
                    height : "150",
                    width : "150"
                },
                path: "includes/new-library/שני אחים.txt",
                img: "includes/new-library/שני אחים.png",
                voiceCommand: "The Milkmaid",

<h4>class</h4>
<p> tg-library-books for contain all books in library</p>
<p> tg-library-story for each book contain header and img</p>
<p>tg-library-header for header style <p>


<h3>Example:</h3>
<p> 
&nbsp var libraryOption = { <br>
&nbsp&nbsp&nbsp&nbsp book1 : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp imgAttribute : {
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     id : 'img11',
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     class : "tg-library-img",
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     height : "150",
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     width : "150"
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp },
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp path : "includes/library/The Hare and the Tortoise" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp img : "includes/library/The Hare and the Tortoise.jpg"
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp voiceCommand :"The Hare and the Tortoise" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp} <br>
</p>


<div>
<h2>tg-menu: </h2>
<p>Menu plugin contains elements to navigate with different links, this plugin supports voice command, each link can be init with any attributes for use 2GatherAPI keyword don't init commandTriger and the voice command will init by text attribute</p>
<h3>Object Property:</h3>
<h4>text - link name</h4>
<h4>commandTrigger - initial voice coomand</h4>
<h4> for add class to a element we just need craete class attribute with the desired value</h4>
<h4>embedded class:</h4>
<p>tg-ul</p>
<p>tg-il</p>



<h3>Example:</h3>
<p> 
&nbsp var menuOption = { <br>
&nbsp&nbsp&nbsp&nbsp link1 : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp href : "homePage.html" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp text : "Homepage" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp commandTrigger :"homePage" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp} <br>
</p>


<p> 
In each html page you need firsttable init 2GatherAPI object
</p>

<div>
<h2>tg-accessibility: </h2>
<p> Accessibility tool is a unique solution, was build to provide ubiquitous access in order to assist as many as disabled people to navigate websites easily and automatically.</p>
<p>It can make any site accessible, even if the site has no build-in Accessibility features.</p>
<h3>Object Property:</h3>
<h4>option - the name of the function/h4>
<h4>text - initial voice coomand</h4>
<h4>image - path to the image that display in the tool

<h3>Example:</h3>
<p> 
&nbsp var accessibility = { <br>
&nbsp&nbsp&nbsp&nbsp func1 : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp option : "bigger_font" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp text : "הגדל פונט" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp image :"images/accessibility/bigFont.png" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp&nbsp&nbsp func2 : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp option : "smaller_font" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp text : "הקטן פונט" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp image :"images/accessibility/smallFont.png" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp} <br>
</p>
<p> Objects are: <br>
Option 1: <br> Bigger font: Every single click increases the font size with 1px. <br>
Option 2: <br> Smaller font: Every single click decreases the font size with 1px. <br>
Option 3: <br> Legible font: With one click you can change the font-style to an easy readable font. <br>
Option 4: <br> Bright Contrast: With one click you can change web page to be with bright colors, mostly white. <br>
Option 5: <br> Dark Contrast: With one click you can change web page to be with darker, mostly black and yellow for hybertext. <br>
Option 6: <br> Color Blind: With one click you can change web page to be grayscaled (Black and White, but mostly Gray). Helpful for color blind people.<br>
Option 7: <br> Black Cursor: With one click you can change the cursor to a bigger black one. <br>
Option 8: <br> White Cursor: With one click you can change the cursor to a bigger white one. <br>
Option 9: <br> Magnifiger: With one click you can make the web page bigger, and more readable. <br>
Option 10: <br> Images Descreption: With one click you can see the images descreption, which means you can read what is happening in the pictures. <br>
Option 11: <br> Hightlight Titles: With one click you can see black border underline all titles. <br>
Option 12: <br> Hightlight Links: With one click you can see red border underline all links. <br>
</p>

<p> 
In each html page you need firsttable init 2GatherAPI object
</p>
