( function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = ( el, all = false ) => {
    el = el.trim()
    if ( all ) {
      return [ ...document.querySelectorAll( el ) ]
    } else {
      return document.querySelector( el )
    }
  }

  /**
   * Easy event listener function
   */
  const on = ( type, el, listener, all = false ) => {
    let selectEl = select( el, all )
    if ( selectEl ) {
      if ( all ) {
        selectEl.forEach( e => e.addEventListener( type, listener ) )
      } else {
        selectEl.addEventListener( type, listener )
      }
    }
  }


  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener( 'load', () => {
    if ( window.location.hash ) {
      if ( select( window.location.hash ) ) {
        scrollto( window.location.hash )
      }
    }
  } );

  /**
   * Animation on scroll
   */
  window.addEventListener( 'load', () => {
    AOS.init( {
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    } )
  } );

} )()