$(()=>
    {
        const max = $(".aaa").length ; 
        let fz = 1 ; 
        let a = 1 ; 
        let b = 0 ; 
        //const c = setInterval( turningMachine , .001 ) ; 
        $(".click-left , .click-right , #BG").hide( 0 ) ; 
        $("#fz").on( 'input' , () => { fz = $("#fz").val() / 10 ;  console.log( fz ) ;  $(":root").css('font-size' , fz + 'em') ; } ) ; 
        $(".click-left").on( "click" , () => { a <= 1 ? a = 1 : a -- ;  console.log(a) ;  $( "#" + a ).css( 'display' , 'flex' ) ;  $( "#" + ( a + 1 ) ).css( 'display' , '' ) ; } ) ; 
        $(".click-right").on( "click" , () => { a >= max ? a = max : a ++ ;  console.log(a) ;  $( "#" + a ).css( 'display' , 'flex' ) ;  $( "#" + ( a - 1 ) ).css( 'display' , '' ) ; } ) ; 
        $("#flscrn span").on( "click" , () => { document.body.requestFullscreen() ;  $("#flscrn").hide(0) ;  $(".click-left , .click-right , #BG").show( 0 ) ;  $("#1").css("display","flex") ; } ) ; 
        function turningMachine()
        {
          //hi
        }
        $("#print").on( "click" , () => {
          var newWin=window.open('','列印視窗') ; 
          newWin.document.open() ; 
          newWin.document.write( '<html><head><script src="/js/adobeFont.js"></script><link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="css/print.css"></head><body onload="window.print()">' ) ; 
          for( count = 1 ; count <= max ; count++ ) 
          {
            newWin.document.write( $('#' + count ).prop( 'outerHTML' ) ) ; 
          }
          newWin.document.write( '</body></html>' ) ; 
          newWin.document.close();
          // setTimeout(function(){newWin.close();},10);
        }) ; 
    });
