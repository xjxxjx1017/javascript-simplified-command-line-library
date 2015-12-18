# javascript-simplified-command-line-library
A command line library. Can be used to create web or mobile command line based application. 

### Features
* Read commands from input field
* Display out put on text field
* Define and bind new commands

### User experience flow
* Assume there is a `<input>` field and a `<div>` tag to display some output
* Type something in a <input> field and press ENTER
* Things in the `<input>` field will be treated as a command and executed
* The output will be displayed in the `<div>` tag

### Developer flow
* `.html:` Add dependency to the file
* `.html:` Has a `<input>` tag and a `<div>` tag
* `.js:` create an instance
* `.js:` define and bind some command `( can be skipped )`
* ready to go

### Sample
##### .html
```html
<script type="text/javascript" src="js/utils/commandline/core.js"></script>
<script type="text/javascript" src="js/utils/commandline/input.js"></script>
<script type="text/javascript" src="js/utils/commandline/display.js"></script>
<script type="text/javascript" src="js/utils/commandline/manager.js"></script>
```

##### .js
```javascript
var cmd = new CommandLine.Manager( "#xjx_input", "#xjx_display" );

// * define print
function printLine( str ) {
cmd.log( str );
}
cmd.define( "print", printLine );

// * define clear
cmd.define( "clear", function () {
cmd.clear();
} );
```
