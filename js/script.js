
    function ViewDegicata(ViewPage){
        newWin=window.open(ViewPage,"degicata","width=1012, height=680, status=0, scrollbars=0, resizable=0");
        if (navigator.appName.charAt(0) == "N" && navigator.appVersion.charAt(0) >= 3){
            newWin.focus();
        }
    }

    function widthresize(maxWidth, img) {
        if(img.width > maxWidth) img.width = maxWidth;
    }

    function trim(inputStr){
    	var tempStr = "";
    	for ( var i = 0; i < inputStr.length; i++){
    		var oneChar = inputStr.substring(i,i+1)
    		if (oneChar == " ")
    			oneChar = "";
    		tempStr += oneChar
    	}
    	return (tempStr);
    }

    function isAllSpace(inputStr){
    	for (var i = 0; i < inputStr.length; i++){
        	var oneChar = inputStr.substring(i, i+1);
            if (oneChar != " "){
            	return (false)
            }
        }
        return (true);
    }
    function isNum(s) {
    	for(i=0; i<s.length; i++) {
    		c = s.charAt(i);
    		if( c<'0' || c>'9' ) return false;
    	}
    	return true;
    }

	function MM_swapImgRestore() { //v3.0
		var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
	}

	function MM_preloadImages() { //v3.0
		var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
			var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
			if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
	}

	function MM_findObj(n, d) { //v4.01
		var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
			d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
		if(!x && d.getElementById) x=d.getElementById(n); return x;
	}

	function MM_swapImage() { //v3.0
		var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
		 if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
	}

    function MM_openBrWindow(theURL,winName,features) { //v2.0
        window.open(theURL,winName,features);
    }

    function MM_showHideLayers() { //v6.0
        var i,p,v,obj,args=MM_showHideLayers.arguments;
        for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
            if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
            obj.visibility=v;
        }
    }

    // LEFT CATEORY MENU SCRIPT START -----
	var old_menu	= '';	//sub menu
	var old_menu2	= '';	//third menu

	// control sub menu
	function controlSub(obj, submenu) {
		// change image
		//chgImage(obj,'sub');

		submenu = document.getElementById(submenu).style;

		// folder control
		if( old_menu != submenu ) {
			if( old_menu !='' ) {
				old_menu.display = 'none';
			}
			submenu.display = 'block';
			old_menu = submenu;
		} else {
			submenu.display = 'none';
			old_menu = '';
		}
	}

	// control third menu
	function controlThird(obj, submenu2) {
		// change image
		//chgImage(obj,'third');

		submenu2 = document.getElementById(submenu2).style;

		// folder control
		if( old_menu2 != submenu2 ) {
			if( old_menu2 !='' ) {
				old_menu2.display = 'none';
			}
			submenu2.display = 'block';
			old_menu2 = submenu2;
		} else {
			submenu2.display = 'none';
			old_menu2 = '';
		}
	}

	// change arrow image
	function chgImage(obj,flag) {
		var dot			= obj.src.lastIndexOf(".");
		var img_num		= obj.src.substring(dot - 1,dot);
		var imgSrc		= '';
		var	subLen		= document.imgMenu.length;
		var	thirdLen	= document.arrow.length;

		// submenu arrow image change
		if(flag	== 'sub'){
			for(var i=0;i < subLen;i++){
				imgSrc	= document.imgMenu[i].src;
				document.imgMenu[i].src	= imgSrc.substring(0,imgSrc.lastIndexOf(".") - 1)
											+ '1'
											+ imgSrc.substring(imgSrc.lastIndexOf("."));
			}
		// thirdmenu arrow image change
		}else if(flag == 'third'){
			for(var i=0;i < thirdLen;i++){
				imgSrc	= document.arrow[i].src;
				document.arrow[i].src	= imgSrc.substring(0,imgSrc.lastIndexOf(".") - 1)
											+ '1'
											+ imgSrc.substring(imgSrc.lastIndexOf("."));
			}
		}

		// selected menu arrow image change
		if(img_num == 1){
			obj.src = obj.src.substring(0,dot - 1)
					+ '2'
					+ obj.src.substring(dot);
		}else {
			obj.src = obj.src.substring(0,dot - 1)
					+ '1'
					+ obj.src.substring(dot);
		}
	}
    // LEFT CATEORY MENU SCRIPT END -----

    // FULL:TRUE / HALF:FALSE RETURN
    function isFullWord(strTarget){
        var intHalfKanaA = 65378;
        var intHalfKanaN = 65439;
        var intHalf = 256;
        var intStringCount;
        var intASCII = 0;

        for(intStringCount = strTarget.length -1 ; intStringCount >= 0; intStringCount--){
            intASCII = strTarget.charCodeAt(intStringCount);
            if( ( intASCII < intHalf ) || (intASCII >= intHalfKanaA && intASCII <= intHalfKanaN)){
                return false;
            }
        }
        return true;
    }

    // FULL:FALSE / HALF:TRUE RETURN
    function isHalfWord(strTarget){
        var intHalfKanaA = 65378;
        var intHalfKanaN = 65439;
        var intHalf = 256;
        var intStringCount;
        var intASCII = 0;
        for(intStringCount = strTarget.length -1 ; intStringCount >= 0; intStringCount--){
            intASCII = strTarget.charCodeAt(intStringCount);
            if( (intASCII >= intHalf ) && (intASCII < intHalfKanaA || intASCII > intHalfKanaN)){
                return false;
            }
        }
        return true;
    }

    // ONE CHAR HALF -> FULL CHANGE
    function gf_Convert2ByteChar(x_char) {
        var x_2byteChar = "";
        var c = x_char.charCodeAt(0);
        if(32 <= c && c <= 126) {
            if(c == 32) { // if space then ascii : 32
                x_2byteChar = unescape("%uFFFC");
            } else {
                x_2byteChar = unescape("%u"+(c+65248).toString(16));
            }
        }
        return  x_2byteChar;
    }

    function openebook(strUrl,winName) {
      var leftPos = (screen.width) ? (screen.width - 1014) / 2 - 5 : 0;
      var topPos = (screen.height) ? (screen.height - 711) / 2 - 28 : 0;
      var features = 'left='+leftPos+',top='+topPos+',toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=1014,height=711';
      winName = window.open(strUrl,winName,features);
      winName.focus();
    }    

    Date.prototype.toY4MDString = function(delim) {
    	if (delim == undefined) delim = "";
    	var year = this.getFullYear().toString();
    	var month = this.getMonth() + 1;
    	var day = this.getDate();
    	month = (month < 10 ? "0" : "") + month;
    	day = (day < 10 ? "0" : "") + day;
    	return year + delim + month + delim + day;
    }

    function toZenkaku(motoText) {
        var iCount;
        var iCode;
        for (iCount=0 ; iCount<motoText.length ; iCount++){
            iCode = motoText.charCodeAt(iCount);
              if ((65378 <= iCode && iCode <= 65439)){
                return false;
            }
        }

        var txt = "222222";
        for (i=0; i<motoText.length; i++){
           c = motoText.charAt(i);
           n = txt.indexOf(c,0);
          if (n >= 0) return false;
        }
        return true;
    }

    function isOkYear(Year) {
      if ( Year < '1900' || Year > '2003' ){
          return false;
      }
      return true;
    }

