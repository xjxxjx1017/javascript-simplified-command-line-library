# javascript-simplified-command-line-library
A command line library. Can be used to create web or mobile command line based application. 

### Features
* Read commands from input field,
* Display out put on text field
* Define and bind new commands

### Sample
##### .html
________
```
<script type="text/javascript" src="js/utils/commandline/core.js"></script>
<script type="text/javascript" src="js/utils/commandline/input.js"></script>
<script type="text/javascript" src="js/utils/commandline/display.js"></script>
<script type="text/javascript" src="js/utils/commandline/manager.js"></script>
```

##### .js
________
```
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
