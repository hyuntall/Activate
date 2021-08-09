    $('#logo').on('click',clickHome);
    $('#home').on('click', clickHome);
    $('#safety').on('click', clickSafety);
    $('#environment').on('click', clickEnvironment);
    $('#contact').on('click', clickContact);
    $('#photo').on('mouseenter',mouseEnterPhoto);
    $('#photo').on('mouseleave',mouseLeavePhoto);
    $(document).on('keydown',processKeyEvent);

    function clickHome() {
   	  
      $('#home').css('font-weight','bold');
      $('#safety').css('font-weight','normal');
      $('#environment').css('font-weight','normal');
      $('#contact').css('font-weight','normal');
       }    

    function clickSafety() {
      
      $('#safety').css('font-weight','bold');
      $('#home').css('font-weight','normal');
      $('#environment').css('font-weight','normal');
      $('#contact').css('font-weight','normal');
       }    

    function clickEnvironment() {      
      
      $('#environment').css('font-weight','bold');
      $('#home').css('font-weight','normal');
      $('#safety').css('font-weight','normal');
      $('#contact').css('font-weight','normal');
       }    
    
    function clickContact() {
      
      $('#contact').css('font-weight','bold');
      $('#home').css('font-weight','normal');
      $('#environment').css('font-weight','normal');
      $('#safety').css('font-weight','normal');
       }    


    //마우스 이벤트 핸들링
    function mouseEnterPhoto(){
    	$('#photo').css('box-shadow','5px 10px');
    }

    function mouseLeavePhoto(){
    	$('#photo').css('box-shadow','none');
    }
    //키보드 이벤트 핸들링
    function processKeyEvent(event){
    	if (event['key']=== '1'){
    		clickHome();
    	} else if (event['key'] === '2')
    	{
    		clickSeoul();
    	} else if (event['key'] === '3')
    		{
    			clickTokyo();
    	} else if (event['key'] === '4')
    	{
    		clickParis();
    	}
    }
