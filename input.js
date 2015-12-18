
// * Create CommandLine namespace
var CommandLine = CommandLine || {};

// * Add input to CommandLine
CommandLine._Input = function ( _inputWidgetId, _callback ) {

    // * Constructor
    var inputWidget = $(_inputWidgetId);
    var callback = _callback;
    inputWidget.keyup( _onKeyUp );

    // * Public methods
    return {};

    function _onKeyUp( e ) {
        if ( e.which == 13 ) {
            callback( inputWidget.val() );
            inputWidget.val("");
        }
    }
};

/*// Test:

function printXX() { console.log( "inputing..."); }
var input = new CommandLine._Input( "#xjx_input", printXX );
    */