
// * Create CommandLine namespace
var CommandLine = CommandLine || {};

// * Add input to CommandLine
CommandLine._Display = function ( _widgetId ) {

    // * Constructor
    var widget = $(_widgetId);
    var strList = [];
    var MAX_LINE = 30;
    var MAX_LETTER = 50;

    // * Public methods
    return {
        addString:addString,
        clear:clear
    };

    function addString( str ) {
        strList.push( str );
        widget.html( _getFullText() );
    }

    function clear() {
        strList = [];
        widget.html( "" );
    }

    function _getFullText() {
        var rlt = "";
        var count = 0;
        for ( var i = strList.length-1; i >= 0 && count < MAX_LINE; i--, count++ ) {
            var s = strList[i];
            if ( s && s.length > MAX_LETTER)
                s = s.substr( 0, MAX_LETTER ) + "...";
            rlt += "<p>" + s + "</p>";
        }
        return rlt;
    }
};

/*// Test:

var display = new CommandLine._Display( "#xjx_display" );
display.addString( "1000000" );
display.addString( "abcdesf" );
display.addString( "abcdesf" );
display.addString( "abcdesf" );
display.addString( "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm" +
    "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm" );
    */
