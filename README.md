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
# Reference API

Objects Elements:
tg-button<br> 
tg-buttonreaderstart<br>
tg-buttonreaderstop<br>
tg-img<br>
tg-input<br>
tg-a<br>
tg-paragraph<br>

Plugins Elements:

tg-login<br>
tg-chat<br>
tg-library<br>
tg-menu<br>

<h2> How to use it? </h2>
<p> All our elements needs to be set up with "options" attribute, and the value attribute is an object you can rename which will initial the element.</p>
<h3>Example:</h3>
<p> tg-button options="loginOptions" /tg-button</p>

<h1>2GatherAPI objects:</h1>
<div>
<h2>tg-button: </h2>
<p>Button element with voice command option </p>
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
<h2>tg-buttonreaderstart: </h2>
<p>Button for converting text to voice</p>
<h3>Object Property:</h3>
<h4>buttonAttribute - initial button attribute</h4>
<h4>buttonValue - initial the text value of the button</h4>
<h4>triggerCommand - initial voice coomand</h4>
<h4>path - specify file location</h4>
<h4>imgID - specify the image id of the book for mark the choosen img </h4>

<h3>Example:</h3>
<p> 
&nbsp var buttonReadOne = { <br>
&nbsp&nbsp&nbsp&nbsp buttonAttribute : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp id : "startButton", <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp class : "button" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp&nbsp&nbsp buttonValue : "send", <br>
&nbsp&nbsp&nbsp&nbsp triggerCommand : "The Hare and the Tortoise", <br>
&nbsp&nbsp&nbsp&nbsp path : "includes/library/The Hare and the Tortoise", <br>
&nbsp&nbsp&nbsp&nbsp imgID : "imgReader", <br>
&nbsp&nbsp &nbsp&nbsp} <br>
&nbsp} <br>
</p>

</div>

<div>
<h2>tg-buttonreaderstop: </h2>
<p>Stop converting text to voice Button</p>
<h3>Object Property:</h3>
<h4>buttonAttribute - initial button attribute</h4>
<h4>buttonValue - initial the text value of the button</h4>
<h4>triggerCommand - initial voice coomand</h4>
<h4>imgID - specify the image id of the book for unmark the choosen img </h4>

<h3>Example:</h3>
<p> 
&nbsp var buttonReadOne = { <br>
&nbsp&nbsp&nbsp&nbsp buttonAttribute : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp id : "startButton", <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp class : "button" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp&nbsp&nbsp buttonValue : "send", <br>
&nbsp&nbsp&nbsp&nbsp triggerCommand : "The Hare and the Tortoise", <br>
&nbsp&nbsp&nbsp&nbsp imgID : "imgReader", <br>
&nbsp&nbsp &nbsp&nbsp} <br>
&nbsp} <br>
</p>

</div>

<div>
<h2>tg-img: </h2>
<p>This element is an image for a book, after you click on it it'll open a modal with the text for this spicific book. </p>
<h3>Object Property:</h3>
<h4>imgAttribute - initial img attribute</h4>
<h4>path - path of the text that display in box modal</h4>
<h4>img - img location</h4>

<h3>Example:</h3>
<p> 
&nbsp var imgModal = { <br>
&nbsp&nbsp&nbsp&nbsp imgAttribute : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp id : "imgReader", <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp class : "img" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp&nbsp&nbsp path : includes/library/The Hare and the Tortoise.txt <br>
&nbsp&nbsp&nbsp&nbsp img : includes/library/The Hare and the Tortoise.jpg <br>
&nbsp&nbsp &nbsp&nbsp} <br>
&nbsp} <br>
</p>

</div>

<div>
<h2>tg-input: </h2>
<p>input element with voice command options</p>
<h3>Object Property:</h3>
<h4>inputAttribute - initial input attribute</h4>
<h4>commands - initial voice coomand</h4>

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

<h3>Example:</h3>
<p> 
&nbsp var linkHomePage = { <br>
&nbsp&nbsp&nbsp&nbsp linkAttribute : { <br>
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
<p>How to use it? The developer needs to initial sessionStorage with 2 properties:<br>
1.sessionStorage.disability<br>
2.sessionStorage.device<br>
</p>

<h3>Plugin Property:</h3>
<h4>labels - initial the input lables</h4>
<h4>buttonValue - initial the button text value</h4>
<h4>commands - initial voice coomand for start speach the text</h4>

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
<p>Chat plugin contains 2 labels with 2 inputs one is with "name id" and the second is with "message id", and a button (Send message) init with "btn-send id". This plugin supports voice command option </p><br>
<h3>Plugin Property:</h3>
<h4>wsURL - initial the url of chat ws</h4>
<h4>commands - initial voice coomand.</h4>

An alternative, is to create the chat from two different inputs seperately one is with "message id" and the second is with "name id", and button with "btn-send id".
In addition, you need to create chatUtil instance and call initChat with "chat ws" as a paramater.

<h3>Example:</h3>
<p> 
var chatUtil = new ChatUtil();<br>
chatUtil.initChat("ws://ec2-34-209-72-126.us-west-2.compute.amazonaws.com:8080/index.php");
</p>

<div>
<h2>tg-library: </h2>
<p>With library plugin you can create many books in one place, all you need is: img contains modal box to show the text, and two different buttons one is to start reading the text and the second is to stop reading</p>
<h3>Object Property:</h3>
<h4>path - book path for read the text</h4>
<h4>bookName - the name of the book</h4>
<h4>img - book image</h4>
<h4>commandTrigger - initial voice coomand</h4>

<h3>Example:</h3>
<p> 
&nbsp var libraryOption = { <br>
&nbsp&nbsp&nbsp&nbsp book1 : { <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp path : "includes/library/The Hare and the Tortoise" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp bookName : "The Hare and the Tortoise" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp img : "includes/library/The Hare and the Tortoise.jpg"
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp commandTrigger :"The Hare and the Tortoise" <br>
&nbsp&nbsp&nbsp&nbsp&nbsp}, <br>
&nbsp&nbsp} <br>
</p>


<div>
<h2>tg-menu: </h2>
<p>Menu plugin contains elements to navigate with different links, this plugin supports voice command, each link can be init with any attributes</p>
<h3>Object Property:</h3>
<h4>text - link name</h4>
<h4>commandTrigger - initial voice coomand</h4>


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
