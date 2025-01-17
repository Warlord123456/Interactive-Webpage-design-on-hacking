
document.addEventListener( "contextmenu", function( event ) {
    event.preventDefault();
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Right Click Disabled',
    })}, false );


document.onkeydown = function( e ) {
    if ( e.keyCode == 123 ) {
        return false;
    }
    if ( e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt( 0 ) ) {
        return false;
    }
    if ( e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt( 0 ) ) {
        return false;
    }
    if ( e.ctrlKey && e.keyCode == 'U'.charCodeAt( 0 ) ) {
        return false;
    }

    if ( e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt( 0 ) ) {
        return false;
    }
}
window.oncontextmenu = function() {
    return false;
};

document.addEventListener( "keydown", function( event ) {
    var key = event.key || event.keyCode;

    if ( key == 123 ) {
        return false;
    } else if ( ( event.ctrlKey && event.shiftKey && key == 73 ) || ( event.ctrlKey && event.shiftKey && key == 74 ) ) {
        return false;
    }
}, false );