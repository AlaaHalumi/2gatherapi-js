# 2gatherAPI

2GatherAPI is a API that allwing developer to add a variety of 2GatherAPI
features to own application.
Use the API to connect your users with different disabilities,
give them the ability to watch, hear and navigate indepentently.


# refereance API

Our Objects Elements:

tg-button<br>
tg-buttonreaderstart<br>
tg-buttonreaderstop<br>
tg-img<br>
tg-input<br>
tg-link<br>
tg-paragraph<br>

Our Plugins Elements:

tg-login<br>
tg-chat<br>
tg-library<br>
tg-menu<br>

<p> all our elements needs to set with options attrubute</p>

<h1>2GatherAPI objects:</h1>
<div>
<h2>tg-button: </h2>
<p>button element with voice command option </p>
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

<h3>init object</h3>
<p>"2GatherAPI Instance".objectFactories.buttonFactory.createObject(document.getElementsByTagName("tg-button")[0]);</p>
</div>

<div>
<h2>tg-buttonreaderstart: </h2>
<p>when click on button text convert to voice</p>
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

<h3>init object</h3>
<p>"2GatherAPI Instance".objectFactories.buttonReaderStartFactory.createObject(document.getElementsByTagName("tg-buttonreaderStart")[0]);</p>
</div>

<div>
<h2>tg-buttonreaderstop: </h2>
<p>abort speach</p>
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

<h3>init object</h3>
<p>"2GatherAPI Instance".objectFactories.buttonReaderStartFactory.createObject(document.getElementsByTagName("tg-buttonreaderstop")[0]);</p>
</div>

<div>
<h2>tg-img: </h2>
<p>this element allowing create img with box modal that display specify text </p>
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

<h3>init object</h3>
<p>"2GatherAPI Instance".objectFactories.imgFactory.createObject(document.getElementsByTagName("tg-img")[0]);</p>
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

<h3>init object</h3>
<p>"2GatherAPI Instance".objectFactories.inputFactory.createObject(document.getElementsByTagName("tg-input")[0]);</p>
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

<h3>init object</h3>
<p>"2GatherAPI Instance".objectFactories.linkFactory.createObject(document.getElementsByTagName("tg-a")[0]);;</p>
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

<h3>init object</h3>
<p>"2GatherAPI Instance".objectFactories.paragraphFactory.createObject(document.getElementsByTagName("tg-paragraph")[0]);;</p>
</div>

<h1>2GatherAPI plugins:</h1>

<div>
<h2>tg-login: </h2>
<p>login plugin contain two inputs one in type text and the second in type password. in addition the plugin contain one button. this plugin support voice command</p><br>
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

<h3>init object</h3>
<p>"2GatherAPI Instance".pluginFactories.loginFactory.createPlugin(document.getElementsByTagName("tg-login")[0]);;</p>
</div>
