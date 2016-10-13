function mvCart(gcode){
        var form = document.moveToForm;
        form.gcd.value=gcode;
        form.submit();
    }
	function mvCart1(gcode){
        var form = document.moveToForm;
        form.gcd.value=gcode;
		form.gcnt.value=eval("document.cartUpForm.qty_link_"+gcode+".value");
		
        form.submit();
    }
	function mvCart11(gcode){
        var form = document.moveToForm;
        form.gcd.value=gcode;
		form.gcnt.value="";
		
        form.submit();
    }
function mvCart9(gcode,gcntall){
        var form2 = document.moveToForm2;
        form2.gcd2.value=gcode;
		form2.gcnt2.value=gcntall;
        form2.submit();
    }
	function mvCart2(gcode){
        var form = document.moveToForm;
		if(eval("document.cartUpForm.goods_color_"+gcode+".value")==''){
			alert('«Î—°‘Ò—’…´');
		}else{
			form.gcd.value=eval("document.cartUpForm.goods_color_"+gcode+".value");
			form.gcnt.value=eval("document.cartUpForm.qty_link_"+gcode+".value");
			form.submit();
		}
 }
    function chkGift(){
        var form = document.giftcheckform;
        form.submit(); 
    }
    function delCtlg(caGCode){
        location.href="/ord/cart.jsp?ccd="+caGCode;        
    }

	  function modCart(command,gid){
        document.cartUpForm.command.value        = command;
        document.cartUpForm.goodsSessionId.value = gid;                  
        document.cartUpForm.goodsCount.value     = eval("document.cartUpForm.QTYVAL"+gid+".value");       
        document.cartUpForm.submit();
    }
	
	  function modCart(command,gid,goodcd){
        document.cartUpForm.command.value        = command;
        document.cartUpForm.goodsSessionId.value = gid;                  
        document.cartUpForm.goodsCount.value     = eval("document.cartUpForm.QTYVAL"+gid+".value");   
        document.cartUpForm.goodcd.value = goodcd;		
        document.cartUpForm.submit();
    }



	function chkLogin(isLogin,url){    
    
        if( isLogin ){
    
        	document.loginchkForm.action=url+"/ord/custinfo.jsp";
            document.loginchkForm.submit();
    
        }else{
    
    	    document.loginchkForm.submit();
    
        }
    
    }