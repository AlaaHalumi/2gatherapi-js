# 2gatherAPI

2GatherAPI is a API that allwing developer to add a variety of 2GatherAPI
features to own application.
Use the API to connect your users with different disabilities,
give them the ability to watch, hear and navigate indepentently.


# refereance API

Our Objects Elements:

tg-button<br>
tg-buttonreaderStart<br>
tg-buttonreaderStop<br>
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

<div>
<h2>tg-button: </h2>
<h3>Object Property:</h3>
<h4>buttonAttribute - initial the button attribute</h4>
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
<h2>tg-buttonreaderStart: </h2>
<p>when click on button text convert to voice</p>
<h3>Object Property:</h3>
<h4>buttonAttribute - initial the button attribute</h4>
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
