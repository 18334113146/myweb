function chkCnt(gipromono,gipromoCnt){     
	var form = document.cartForm;		    	
	eval("var selectQty = form.P"+gipromono+".value");	

    var checkCnt = 0;
    for( var i = 0 ; i < form.preGoodsInfo.length ; i++ ){ 
        if(form.preGoodsInfo[i].checked == true && (form.preGoodsInfo[i].value).indexOf(gipromono,0) == 0){
            checkCnt++;    
        }
    }
    if(checkCnt > selectQty){
        alert("可选择的数量为"+selectQty+"个。");
        form.preGoodsInfo[gipromoCnt-1].checked = false;
    }   
	
}  


 function rplcDate(strDate){
        var tempmon = new Number(strDate.substring(4,6));
        var tempday = new Number(strDate.substring(6,8));    
        document.write(tempmon+"月"+tempday+"日");
    }


	function openFav(url){
		window.open(url);
}


function mvCmnt(tag,str){
    if(!tag){
        document.location.href="https://www.dhc.net.cn/cust/login.jsp?url=/gds/rentry.jsp?gcd="+str;    }  
    else{
        document.location.href="https://www.dhc.net.cn/gds/rentry.jsp?gcd="+str;}
    
}