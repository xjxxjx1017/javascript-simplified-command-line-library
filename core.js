
// * Create CommandLine namespace
var CommandLine = CommandLine || {};

// * Add it to CommandLine class
CommandLine._Core = function ( _anotherDefaultHandler ) {

    // * Constructor
    var handlerList = {};
    var defaultHandler = _anotherDefaultHandler || _defaultHandler;

    // * Public methods
    return {
        runCommand:runCommand,
        setHandler:setHandler
    };

    // * ================================= Command =======================================

    function runCommand( str ) {
        var cmdObj = _parseCommand( str );
        var handler = _getHandler( cmdObj.cmd );
        _executeCommand( handler, cmdObj.paramList );
    }

    function _parseCommand( str ) {
        // * Split original input
        var strList = str.split( /[\s,]+/ );  // # Regular expression: split with ' ' and ','
        // * Filter out possible useless junk
        strList = strList.filter( function( v ){
            return v != null && v != " " && v != ' ' && v != ",";
        });
        // * Give the first thing to command, others to params
        return {
            cmd:strList.shift(),
            paramList:strList
        }
    }

    function _executeCommand( handler, paramList ) {
        // TODO: parse paramList according to type
        // * Pass on to handler
        handler.apply( this, paramList );
    }

    // * ================================= Handler =======================================

    function setHandler( str, handler ) {
        handlerList[str] = handler;
    }

    function _getHandler( str ) {
        return handlerList[str] || defaultHandler;
    }

    function _defaultHandler() {
        console.log( "Command not found: running default handler" );
    }
};

/*// Test:

var commandLine = new CommandLine._Core();
// * out: default
commandLine.runCommand( "xxxx" );
// * out: customized
function printLine( str ) {
    console.log( str );
}
commandLine.setHandler( "print", printLine );
commandLine.runCommand( "print xxxxxxxx" );
    */