$(()=>
    {
        const max = $(".aaa").length ; 
        let fz = 1 ; 
        let a = 1 ; 
        let b = 0 ; 
        const c = setInterval( turningMachine , .001 ) ; 
        // const d = setInterval( will , 500 ) ; 
        $(".click-left , .click-right , #BG").hide( 0 ) ; 
        $("#fz").on( 'change' , () => { fz = $("#fz").val() / 10 ;  console.log( fz ) ;  $(":root").css('font-size' , fz + 'em') ; } ) ; 
        $(".click-left").on( "click" , () => { a <= 1 ? a = 1 : a -- ;  console.log(a) ;  $( "#" + a ).css( 'display' , 'flex' ) ;  $( "#" + ( a + 1 ) ).css( 'display' , '' ) ; } ) ; 
        $(".click-right").on( "click" , () => { a >= max ? a = max : a ++ ;  console.log(a) ;  $( "#" + a ).css( 'display' , 'flex' ) ;  $( "#" + ( a - 1 ) ).css( 'display' , '' ) ; } ) ; 
        $("#flscrn span").on( "click" , () => { document.body.requestFullscreen() ;  $("#flscrn").hide(0) ;  $(".click-left , .click-right , #BG").show( 0 ) ;  $("#1").css("display","flex") ; } ) ; 
        function turningMachine()
        {
            $("#BG-colour").hide(0) ; 
            a == 6 ? $("#BG-colour").show(0) : $("#BG-colour").hide(0) ; 
            b <= 360 ? b +=5 : b = 0 ; 
            $("#grad1").attr( "gradientTransform" , "rotate(" + b + ",.5,.5)" ) ; 
        }
        function will() 
        {
            $("#6 div svg").toggle() ; 
            $("#6 div img").toggle() ; 
        }
    });