
function win_pop(path,win_name,wi,he,scroll){window.open(path,win_name,'width='+wi+',height='+he+',resizable=no,scrollbars='+scroll+', status=no,toolbar=no');}
function win_pop(p_url,win_name,p_width,p_height,scroll_yn,p_left,p_top)
{window.open(p_url,win_name,"width="+p_width+",height="+p_height+",scrollbars="+scroll_yn+",left="+p_left+",top="+p_top);}
function win_pop_cookie(path,win_name,wi,he,scroll,cookie_name){if(getCookie(cookie_name)==""){window.open(path,win_name,'width='+wi+',height='+he+',resizable=no,scrollbars='+scroll+', status=no,toolbar=no');}}
function win_pop_cookie(p_url,win_name,p_width,p_height,scroll_yn,cookie_name,p_left,p_top)
{if(getCookie(cookie_name)=="")
{window.open(p_url,win_name,"width="+p_width+",height="+p_height+",scrollbars="+scroll_yn+",left="+p_left+",top="+p_top);}}
function setCookie(name,value,expiredays)
{var endDate=new Date();endDate.setDate(endDate.getDate()+expiredays);document.cookie=name+"="+escape(value)+"; path=/; expires="+endDate.toGMTString()+";"}
function MM_swapImgRestore(){var i,x,a=document.MM_sr;for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)x.src=x.oSrc;}
function MM_preloadImages(){var d=document;if(d.images){if(!d.MM_p)d.MM_p=new Array();var i,j=d.MM_p.length,a=MM_preloadImages.arguments;for(i=0;i<a.length;i++)
if(a[i].indexOf("#")!=0){d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];}}}
function MM_findObj(n,d){var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);if(!x&&document.getElementById)x=document.getElementById(n);return x;}
function MM_swapImage(){var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;for(i=0;i<(a.length-2);i+=3)
if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc)x.oSrc=x.src;x.src=a[i+2];}}
function MM_reloadPage(init){if(init==true)with(navigator){if((appName=="Netscape")&&(parseInt(appVersion)==4)){document.MM_pgW=innerWidth;document.MM_pgH=innerHeight;onresize=MM_reloadPage;}}
else if(innerWidth!=document.MM_pgW||innerHeight!=document.MM_pgH)location.reload();}
MM_reloadPage(true);function HANA_findObj(n,d)
{var p,i,x;if(!d)d=document;if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p);}
if(!(x=d[n])&&d.all)x=d.all[n];for(i=0;!x&&i<d.forms.length;i++)x=d.forms[i][n];for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=HANA_findObj(n,d.layers[i].document);if(!x&&document.getElementById)x=document.getElementById(n);return x;}
function HANA_showHideLayers()
{var i,p,v,obj,args=HANA_showHideLayers.arguments;for(i=0;i<(args.length-2);i+=3)if((obj=HANA_findObj(args[i]))!=null){v=args[i+2];if(obj.style){obj=obj.style;v=(v=='show')?'visible':(v='hide')?'hidden':v;}
obj.visibility=v;}}
function MM_dragLayer(objName,x,hL,hT,hW,hH,toFront,dropBack,cU,cD,cL,cR,targL,targT,tol,dropJS,et,dragJS){var i,j,aLayer,retVal,curDrag=null,NS=(navigator.appName=='Netscape'),curLeft,curTop;if(!document.all&&!document.layers)return false;retVal=true;if(!NS&&event)event.returnValue=true;if(MM_dragLayer.arguments.length>1){curDrag=MM_findObj(objName);if(!curDrag)return false;if(!document.allLayers){document.allLayers=new Array();with(document)if(NS){for(i=0;i<layers.length;i++)allLayers[i]=layers[i];for(i=0;i<allLayers.length;i++)if(allLayers[i].document&&allLayers[i].document.layers)
with(allLayers[i].document)for(j=0;j<layers.length;j++)allLayers[allLayers.length]=layers[j];}else for(i=0;i<all.length;i++)if(all[i].style&&all[i].style.position)allLayers[allLayers.length]=all[i];}
curDrag.MM_dragOk=true;curDrag.MM_targL=targL;curDrag.MM_targT=targT;curDrag.MM_tol=Math.pow(tol,2);curDrag.MM_hLeft=hL;curDrag.MM_hTop=hT;curDrag.MM_hWidth=hW;curDrag.MM_hHeight=hH;curDrag.MM_toFront=toFront;curDrag.MM_dropBack=dropBack;curDrag.MM_dropJS=dropJS;curDrag.MM_everyTime=et;curDrag.MM_dragJS=dragJS;curDrag.MM_oldZ=(NS)?curDrag.zIndex:curDrag.style.zIndex;curLeft=(NS)?curDrag.left:curDrag.style.pixelLeft;curDrag.MM_startL=curLeft;curTop=(NS)?curDrag.top:curDrag.style.pixelTop;curDrag.MM_startT=curTop;curDrag.MM_bL=(cL<0)?null:curLeft-cL;curDrag.MM_bT=(cU<0)?null:curTop-cU;curDrag.MM_bR=(cR<0)?null:curLeft+cR;curDrag.MM_bB=(cD<0)?null:curTop+cD;curDrag.MM_LEFTRIGHT=0;curDrag.MM_UPDOWN=0;curDrag.MM_SNAPPED=false;document.onmousedown=MM_dragLayer;document.onmouseup=MM_dragLayer;if(NS)document.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP);}else{var theEvent=((NS)?objName.type:event.type);if(theEvent=='mousedown'){var mouseX=(NS)?objName.pageX:event.clientX+document.body.scrollLeft;var mouseY=(NS)?objName.pageY:event.clientY+document.body.scrollTop;var maxDragZ=null;document.MM_maxZ=0;for(i=0;i<document.allLayers.length;i++){aLayer=document.allLayers[i];var aLayerZ=(NS)?aLayer.zIndex:aLayer.style.zIndex;if(aLayerZ>document.MM_maxZ)document.MM_maxZ=aLayerZ;var isVisible=(((NS)?aLayer.visibility:aLayer.style.visibility).indexOf('hid')==-1);if(aLayer.MM_dragOk!=null&&isVisible)with(aLayer){var parentL=0;var parentT=0;if(!NS){parentLayer=aLayer.parentElement;while(parentLayer!=null&&parentLayer.style.position){parentL+=parentLayer.offsetLeft;parentT+=parentLayer.offsetTop;parentLayer=parentLayer.parentElement;}}
var tmpX=mouseX-(((NS)?pageX:style.pixelLeft+parentL)+MM_hLeft);var tmpY=mouseY-(((NS)?pageY:style.pixelTop+parentT)+MM_hTop);var tmpW=MM_hWidth;if(tmpW<=0)tmpW+=((NS)?clip.width:offsetWidth);var tmpH=MM_hHeight;if(tmpH<=0)tmpH+=((NS)?clip.height:offsetHeight);if((0<=tmpX&&tmpX<tmpW&&0<=tmpY&&tmpY<tmpH)&&(maxDragZ==null||maxDragZ<=aLayerZ)){curDrag=aLayer;maxDragZ=aLayerZ;}}}
if(curDrag){document.onmousemove=MM_dragLayer;if(NS)document.captureEvents(Event.MOUSEMOVE);curLeft=(NS)?curDrag.left:curDrag.style.pixelLeft;curTop=(NS)?curDrag.top:curDrag.style.pixelTop;MM_oldX=mouseX-curLeft;MM_oldY=mouseY-curTop;document.MM_curDrag=curDrag;curDrag.MM_SNAPPED=false;if(curDrag.MM_toFront){eval('curDrag.'+((NS)?'':'style.')+'zIndex=document.MM_maxZ+1');if(!curDrag.MM_dropBack)document.MM_maxZ++;}
retVal=false;if(!NS)event.returnValue=false;}}else if(theEvent=='mousemove'){if(document.MM_curDrag)with(document.MM_curDrag){var mouseX=(NS)?objName.pageX:event.clientX+document.body.scrollLeft;var mouseY=(NS)?objName.pageY:event.clientY+document.body.scrollTop;newLeft=mouseX-MM_oldX;newTop=mouseY-MM_oldY;if(MM_bL!=null)newLeft=Math.max(newLeft,MM_bL);if(MM_bR!=null)newLeft=Math.min(newLeft,MM_bR);if(MM_bT!=null)newTop=Math.max(newTop,MM_bT);if(MM_bB!=null)newTop=Math.min(newTop,MM_bB);MM_LEFTRIGHT=newLeft-MM_startL;MM_UPDOWN=newTop-MM_startT;if(NS){left=newLeft;top=newTop;}
else{style.pixelLeft=newLeft;style.pixelTop=newTop;}
if(MM_dragJS)eval(MM_dragJS);retVal=false;if(!NS)event.returnValue=false;}}else if(theEvent=='mouseup'){document.onmousemove=null;if(NS)document.releaseEvents(Event.MOUSEMOVE);if(NS)document.captureEvents(Event.MOUSEDOWN);if(document.MM_curDrag)with(document.MM_curDrag){if(typeof MM_targL=='number'&&typeof MM_targT=='number'&&(Math.pow(MM_targL-((NS)?left:style.pixelLeft),2)+
Math.pow(MM_targT-((NS)?top:style.pixelTop),2))<=MM_tol){if(NS){left=MM_targL;top=MM_targT;}
else{style.pixelLeft=MM_targL;style.pixelTop=MM_targT;}
MM_SNAPPED=true;MM_LEFTRIGHT=MM_startL-MM_targL;MM_UPDOWN=MM_startT-MM_targT;}
if(MM_everyTime||MM_SNAPPED)eval(MM_dropJS);if(MM_dropBack){if(NS)zIndex=MM_oldZ;else style.zIndex=MM_oldZ;}
retVal=false;if(!NS)event.returnValue=false;}
document.MM_curDrag=null;}
if(NS)document.routeEvent(objName);}return retVal;}
function CheckValid(String,space)
{var retvalue=false;for(var i=0;i<String.length;i++)
{if(space==true)
{if(String.charAt(i)==' ')
{retvalue=true;break;}}else{if(String.charAt(i)!=' ')
{retvalue=true;break;}}}
return retvalue;}
function isEmpty(field,error_msg)
{if(error_msg==""){if(!CheckValid(field.value,false)){return true;}else{return false;}}else{if(!CheckValid(field.value,false)){alert(error_msg);field.focus();return true;}else{return false;}}}
function isNotSet(field,error_msg)
{if(field.value=="")
{alert(error_msg);return true;}else
{return false;}}
function haveSpace(field,error_msg)
{if(CheckValid(field.value,true))
{alert(error_msg);field.focus();field.select();return true;}
return false;}
function isNotNumber(field,error_msg)
{var val=field.value;if(isNaN(val)){if(error_msg.length>0){alert(error_msg);field.focus();field.select();}
return true;}else{return false;}}
function isNotNumberOrEmpty(field,error_msg)
{var val=field.value;if(val.length==0||isNaN(val)){if(error_msg.length>0){alert(error_msg);field.focus();field.select();}
return true;}else{return false;}}
function alertAndFocus(field,error_msg)
{alert(error_msg);field.focus();field.select();}
function isNotAlphaNumeric(field,error_msg)
{for(var i=0;i<field.value.length;i++)
{if(((field.value.charAt(i)<"0")||(field.value.charAt(i)>"9"))&&(((field.value.charAt(i)<"A")||(field.value.charAt(i)>"Z"))&&((field.value.charAt(i)<"a")||(field.value.charAt(i)>"z"))))
{alert(error_msg);field.focus();field.select();return true;}}
return false;}
function strLength(field)
{var Length=0;var Nav=navigator.appName;var Ver=navigator.appVersion;var IsExplorer=false;var ch;if((Nav=='Microsoft Internet Explorer')&&(Ver.charAt(0)>=4))
{IsExplorer=true;}
if(IsExplorer)
{for(var i=0;i<field.value.length;i++)
{ch=field.value.charAt(i);if((ch=="\n")||((ch>="��")&&(ch<="��"))||((ch>="��")&&(ch<="��")))
{Length+=2;}else
{Length+=1;}}}else{Length=field.value.length;}
return Length;}
function isOutOfRange(field,min,max,error_msg)
{if(strLength(field)<min||strLength(field)>max)
{alert(error_msg);field.focus();field.select();return true;}
return false;}
function isNotExactLength(field,len,error_msg){if(strLength(field)!=len){alert(error_msg);field.focus();field.select();return true;}
return false;}
function isOutOfNumericRange(field,min,max,error_msg){if(field.value<min||field.value>max){alert(error_msg);field.focus();field.select();return true;}
return false;}
function isNotSelected(field,error_msg){if(field.selectedIndex==0){alert(error_msg);field.focus();return true;}else{return false;}}
function isNotCheckedRadio(field,error_msg){if(field==null){alert(error_msg);return true;}
if(field.length==null){if(field.checked==true){return false;}else{alert(error_msg);return true;}}
for(i=0;i<field.length;i++){if(field[i].checked==true){return false;}}
alert(error_msg);return true;}
function uncheckRadio(field){for(i=0;i<field.length;i++){field[i].checked=false;}}
function getRadioVal(field){for(i=0;i<field.length;i++){if(field[i].checked==true)
return field[i].value;}
return"";}
function checkDupID(id)
{if(isEmpty(id,"ID�� ������ �ּ���!"))return true;if(isNotAlphaNumeric(id,"ID�� 4~10�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;}
function checkName(name)
{if(isEmpty(name,"����ڸ��� ������ �ּ���!"))return true;}
function isNotValidPassword(form){if(isEmpty(form.password,"�н����带 �Է��� �ּ���!"))return true;if(isEmpty(form.password2,"�н����带 ���Է��� �ּ���!"))return true;if(isNotAlphaNumeric(form.password,"��й�ȣ�� 4~10�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;if(isNotAlphaNumeric(form.password2,"��й�ȣ�� 4~10�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;if(isOutOfRange(form.password,4,10,"��й�ȣ�� 4~10�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;if(isOutOfRange(form.password2,4,10,"��й�ȣ�� 4~10�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;if(form.password.value!=form.password2.value){alert("��й�ȣ�� ���� ��ġ���� �ʽ��ϴ�.\n �ٽ� �Է��� �ּ���!");form.password.value="";form.password2.value="";form.password.focus();form.password.select();return true;}
return false;}
function isCheckPassword(form){if(isEmpty(form.password,"�н����带 �Է��� �ּ���!"))return true;if(isEmpty(form.password2,"�н����带 ���Է��� �ּ���!"))return true;if(isNotAlphaNumeric(form.password,"��й�ȣ�� 6~13�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;if(isNotAlphaNumeric(form.password2,"��й�ȣ�� 6~13�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;if(isOutOfRange(form.password,6,13,"��й�ȣ�� 6~13�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;if(isOutOfRange(form.password2,6,13,"��й�ȣ�� 6~13�� ������ ���� �� ���� ��ҹ��ڷθ� ������ �ּ���!"))return true;if(form.password.value!=form.password2.value){alert("��й�ȣ�� ���� ��ġ���� �ʽ��ϴ�.\n �ٽ� �Է��� �ּ���!");form.password.value="";form.password2.value="";form.password.focus();form.password.select();return true;}
return false;}
function isNotValidPID(form){if(isEmpty(form.pid1,"�ֹε�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isEmpty(form.pid2,"�ֹε�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isNotNumber(form.pid1,"�ֹε�Ϲ�ȣ ���ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotNumber(form.pid2,"�ֹε�Ϲ�ȣ ���ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotExactLength(form.pid1,6,"�ֹε�Ϲ�ȣ ���ڸ��� 6�ڸ��Դϴ�!"))return true;if(isNotExactLength(form.pid2,7,"�ֹε�Ϲ�ȣ ���ڸ��� 7�ڸ��Դϴ�!"))return true;strchr=form.pid1.value.concat(form.pid2.value);if(strchr.length==13){nlength=strchr.length;num1=strchr.charAt(0);num2=strchr.charAt(1);num3=strchr.charAt(2);num4=strchr.charAt(3);num5=strchr.charAt(4);num6=strchr.charAt(5);num7=strchr.charAt(6);num8=strchr.charAt(7);num9=strchr.charAt(8);num10=strchr.charAt(9);num11=strchr.charAt(10);num12=strchr.charAt(11);var total=(num1*2)+(num2*3)+(num3*4)+(num4*5)+(num5*6)+(num6*7)+(num7*8)+(num8*9)+(num9*2)+(num10*3)+(num11*4)+(num12*5);total=(11-(total%11))%10;if(total!=strchr.charAt(12)){alert("�ֹε�Ϲ�ȣ�� �ùٸ��� �ʽ��ϴ�. \n�ٽ� �Է��� �ּ���!");form.pid1.value="";form.pid2.value="";form.pid1.focus();return true;}
return false;}else
alert("�ֹε�Ϲ�ȣ�� �ùٸ��� �ʽ��ϴ�. \n�ٽ� �Է��� �ּ���!");form.pid1.value="";form.pid2.value="";form.pid1.focus();return true;}
function isNotValidBID(form){if(isEmpty(form.bid1,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isEmpty(form.bid2,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isEmpty(form.bid3,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isNotNumber(form.bid1,"����ڵ�Ϲ�ȣ ���ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotNumber(form.bid2,"����ڵ�Ϲ�ȣ ����ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotNumber(form.bid3,"����ڵ�Ϲ�ȣ ���ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotExactLength(form.bid1,3,"����ڵ�Ϲ�ȣ ���ڸ��� 3�ڸ��Դϴ�!"))return true;if(isNotExactLength(form.bid2,2,"����ڵ�Ϲ�ȣ ���ڸ��� 2�ڸ��Դϴ�!"))return true;if(isNotExactLength(form.bid3,5,"����ڵ�Ϲ�ȣ ���ڸ��� 5�ڸ��Դϴ�!"))return true;strchr=form.bid1.value.concat(form.bid2.value.concat(form.bid3.value));num1=strchr.charAt(0);num2=strchr.charAt(1);num3=strchr.charAt(2);num4=strchr.charAt(3);num5=strchr.charAt(4);num6=strchr.charAt(5);num7=strchr.charAt(6);num8=strchr.charAt(7);num9=strchr.charAt(8);num10=strchr.charAt(9);var total=(num1*1)+(num2*3)+(num3*7)+(num4*1)+(num5*3)+(num6*7)+(num7*1)+(num8*3)+(num9*5);total=total+((num9*5)/10);var tmp=total%10;if(tmp==0){var num_chk=0;}else{var num_chk=10-tmp;}
if(num_chk!=num10){alert("����ڵ�Ϲ�ȣ�� �ùٸ��� �ʽ��ϴ�. \n�ٽ� �Է��� �ּ���!");form.bid1.value="";form.bid2.value="";form.bid3.value="";form.bid1.focus();return true;}
return false;}
function isNotValidEmail(field)
{var checkflag=true;var retvalue;if(field.value==""){retvalue=true;}else{if(window.RegExp){var tempstring="a";var exam=new RegExp(tempstring);if(tempstring.match(exam)){var ret1=new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");var ret2=new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");retvalue=(!ret1.test(field.value)&&ret2.test(field.value));}else{checkflag=false;}}else{checkflag=false;}
if(!checkflag){retvalue=((field.value!="")&&(field.value.indexOf("@"))>0&&(field.value.index.Of(".")>0));}}
if(retvalue){return false;}else{alert("�̸��� �ּҰ� ��Ȯ���� �ʽ��ϴ�. \n�ٽ� �Է��� �ּ���!");field.focus();field.select();return true;}}
function isNotValidTel(field){var Count;var PermitChar="0123456789-";for(var i=0;i<field.value.length;i++){Count=0;for(var j=0;j<PermitChar.length;j++){if(field.value.charAt(i)==PermitChar.charAt(j)){Count++;break;}}
if(Count==0){alert("��ȭ��ȣ�� ��Ȯ���� �ʽ��ϴ�. \n�ٽ� �Է��� �ּ���!")
field.focus();field.select();return true;break;}}
return false;}
function isNotValidChar(field,error_msg){var Count;var PermitChar="0123456789-";for(var i=0;i<field.value.length;i++){Count=0;for(var j=0;j<PermitChar.length;j++){if(field.value.charAt(i)==PermitChar.charAt(j)){Count++;break;}}
if(Count==0){alert(error_msg);field.focus();field.select();return true;break;}}
return false;}
function isNotValidChar2(field,error_msg){var NotPermitChar="\"";if(field.value=="")return false;for(var i=0;i<field.value.length;i++){for(var j=0;j<NotPermitChar.length;j++){if(field.value.charAt(i)==NotPermitChar.charAt(j)){ans=confirm(error_msg);if(ans==true){return false;}else{field.focus();field.select();return true;}}}}
return false;}
function auto_fill_birth(pid1){var year=pid1.value.substr(0,2);var month=pid1.value.substr(2,2);var date=pid1.value.substr(4,2);document.forms[0].year.value=year;document.forms[0].month.value=month;document.forms[0].date.value=date;}
function hide_in(field){if(field.value==field.defaultValue)field.value="";}
function show_out(field){if(field.value=="")field.value=field.defaultValue;}
function checkNumber(objname)
{var intErr=1;var strValue=objname.value;var retCode=0;for(i=0;i<strValue.length;i++)
{var retCode=strValue.charCodeAt(i);var retChar=strValue.substr(i,1).toUpperCase();retCode=parseInt(retCode);if(!((retChar>="0"&&retChar<="9")||retChar=="."))
{intErr=0;}}
var periodCnt=0;while(strValue.indexOf(".")!=-1)
{periodCnt++;strValue=strValue.substr(strValue.indexOf(".")+1,strValue.length-(strValue.indexOf(".")+1));}
if(periodCnt>1)
intErr=0;if(intErr!=1)
{return true;}
else return false;}
function openNoScrollWin(theURL,winName,winTitle,width,height,param)
{var win=window.open(theURL+"?popupTitle="+winTitle+"&tableWidth="+width+param,winName,"menubar=no, scrollbars=no, resizable=no, width="+width+", height="+height);}
function openScrollWin(theURL,winName,winTitle,width,height,param)
{var win=window.open(theURL+"?popupTitle="+winTitle+"&tableWidth="+width+param,winName,"menubar=no, scrollbars=yes, resizable=no, width="+width+", height="+height);}
function openFlexWin(theURL,winName,winTitle,width,features,param)
{var win=window.open(theURL+"?popupTitle="+winTitle+"&tableWidth="+width+param,winName,features);}
function showDateCalendar(dateField)
{var wid=(screen.width)/2-560/2;var hei=(screen.height)/2-480/2;window.open("/common/calendar/PopCalendar.jsp?popupTitle=�޷�&type=date&dateField="+dateField,"Calendar","width=560,height=480,status=no,resizable=no,top="+hei+",left="+wid+"");}
function showDateCalendarGrid(dateField)
{var wid=(screen.width)/2-560/2;var hei=(screen.height)/2-480/2;window.open("/common/calendar/PopCalendar.jsp?type=date&subType=grid&dateField="+dateField,"Calendar","width=560,height=480,status=no,resizable=no,top="+hei+",left="+wid+"");}
function showDateTimeCalendar(dateField,timeField)
{var wid=(screen.width)/2-560/2;var hei=(screen.height)/2-480/2;window.open("/common/calendar/PopCalendar.jsp?type=datetime&dateField="+dateField+"&timeField="+timeField,"Calendar","width=560,height=480,status=no,resizable=no,top="+hei+",left="+wid+"");}
function editStop(objectName){objectName.blur();}
function formatCurrency(amount)
{amount=new String(amount);var amountLength=amount.length;var modulus=amountLength%3;var currencyString=amount.substr(0,modulus);for(i=modulus;i<amountLength;i=i+3){if(currencyString!="")
currencyString+=",";currencyString+=amount.substr(i,3);}
return currencyString;}
function calcDiscountPrice(arrDiscount,qty,defaultSellPrice)
{var discountPrice=defaultSellPrice;var prevQty=0;for(i=0;i<arrDiscount.length;i++){if(qty>=prevQty&&qty<arrDiscount[i][0]){break;}else{discountPrice=arrDiscount[i][1];prevQty=arrDiscount[i][0];}}
return discountPrice;}
function calcSellPrice(arrDiscount,qty,defaultSellPrice,addedPrice)
{return(calcDiscountPrice(arrDiscount,qty,defaultSellPrice)+addedPrice)*qty;}
function calcPrimeCost(defaultPrimeCost,addedPrice)
{return defaultPrimeCost+addedPrice;}
function isNotValidBIZ(form){if(isEmpty(form.bizregno1,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isEmpty(form.bizregno2,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isEmpty(form.bizregno3,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isNotNumber(form.bizregno1,"����ڵ�Ϲ�ȣ ���ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotNumber(form.bizregno2,"����ڵ�Ϲ�ȣ ����ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotNumber(form.bizregno3,"����ڵ�Ϲ�ȣ ���ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotExactLength(form.bizregno1,3,"����ڵ�Ϲ�ȣ ���ڸ��� 3�ڸ��Դϴ�!"))return true;if(isNotExactLength(form.bizregno2,2,"����ڵ�Ϲ�ȣ ���ڸ��� 2�ڸ��Դϴ�!"))return true;if(isNotExactLength(form.bizregno3,5,"����ڵ�Ϲ�ȣ ���ڸ��� 5�ڸ��Դϴ�!"))return true;strchr=form.bizregno1.value.concat(form.bizregno2.value.concat(form.bizregno3.value));num1=strchr.charAt(0);num2=strchr.charAt(1);num3=strchr.charAt(2);num4=strchr.charAt(3);num5=strchr.charAt(4);num6=strchr.charAt(5);num7=strchr.charAt(6);num8=strchr.charAt(7);num9=strchr.charAt(8);num10=strchr.charAt(9);var total=(num1*1)+(num2*3)+(num3*7)+(num4*1)+(num5*3)+(num6*7)+(num7*1)+(num8*3)+(num9*5);total=total+((num9*5)/10);var tmp=total%10;if(tmp==0){var num_chk=0;}else{var num_chk=10-tmp;}
if(num_chk!=num10){alert("����ڵ�Ϲ�ȣ�� �ùٸ��� �ʽ��ϴ�. \n�ٽ� �Է��� �ּ���!");form.bizregno1.value="";form.bizregno2.value="";form.bizregno3.value="";form.bizregno1.focus();return true;}
return false;}
function didNotConfirm(question){return!confirm(question);}
function doInit(frm)
{for(i=0;i<frm.elements.length;i++)
{frm.elements[i].value="";}}
function isNotPositiveNumber(field,error_msg)
{for(var i=0;i<field.value.length;i++)
{if(field.value.charAt(i)<"1"||field.value.charAt(i)>"9")
{alert(error_msg);field.focus();field.select();return true;}}}
function enterKeyDown(func)
{enter=event.keyCode;if(enter==13)
{eval(func);}}
function keyDown(func)
{enter=event.keyCode;if(enter==13)
{eval(func);}}
function dateFormat(source,format)
{ret="";delimiter="";if(format.indexOf("-")!=-1)
delimiter="-";else if(format.indexOf("/")!=-1)
delimiter="/";else
{alert("�Էµ� ��¥������ �߸�Ǿ���ϴ�.");return;}
if(source.length==8)
{ret=source.substring(0,4)+delimiter+source.substring(4,6)+delimiter+source.substring(6,8);}else if(source.length==10)
{ret=source.substring(0,4)+delimiter+source.substring(5,7)+delimiter+source.substring(8,10);}else
{alert("�Էµ� ��¥����� �߸�Ǿ���ϴ�.");return;}
return ret;}
function blnOkDate(astrValue,astrNotNull)
{var arrDate;if(astrValue=='')
{if(astrNotNull=="nn")
return false;else
return true;}else{if(astrValue.indexOf("-")!=-1)
arrDate=astrValue.split("-");else if(astrValue.indexOf("/")!=-1)
arrDate=astrValue.split("/");else
{if(astrValue.length!=8)return false;astrValue=astrValue.substring(0,4)+"/"+astrValue.substring(4,6)+"/"+astrValue.substring(6,8);arrDate=astrValue.split("/");}
if(arrDate.length!=3)return false;var chkDate=new Date(arrDate[0]+"/"+arrDate[1]+"/"+arrDate[2]);if(isNaN(chkDate)==true||(arrDate[1]!=chkDate.getMonth()+1||arrDate[2]!=chkDate.getDate()))
{return false;}}
return true;}
function openCalendarInGrid(fgName,row,col)
{var fg=document.all(fgName);if(!blnOkDate(fg.TextMatrix(row,col),"nn"))
{fg.TextMatrix(row,col)="";showDateCalendarGrid(fgName+", "+row+", "+col);}
else
fg.TextMatrix(row,col)=dateFormat(fg.TextMatrix(row,col),"YYYY-MM-DD");}
function openCalendar(dateField)
{var obj=eval("document."+dateField);if(!blnOkDate(obj.value,"nn"))
{obj.value="";showDateCalendar(dateField);}
else
obj.value=dateFormat(obj.value,"YYYY-MM-DD");}
function toValidStr(str)
{re1=/\'/gi;re2=/\"/gi;str=str.replace(re1,"\\\'");str=str.replace(re2,"\\\"");return str;}
function encChar(str)
{var temp1="@@@@@";re1=/\'/g;re2=/\"/g;str=str.replace(re1,temp1);return str;}
function decChar(str)
{re3=/@@@@@/g;str=str.replace(re3,"'");return str;}
function strGetToDay()
{var today=new Date();var strToDay=today.getYear();if(today.getMonth()+1<10)
strToDay+="-0"+(today.getMonth()+1);else
strToDay+="-"+today.getMonth()+1;if(today.getDate()<10)
strToDay+="-0"+today.getDate();else
strToDay+="-"+today.getDate();return strToDay;}
function round(val,num)
{val=val*Math.pow(10,num-1);val=Math.round(val);val=val/Math.pow(10,num-1);return val;}
function isVaildMail(email)
{var result=false;if(email.indexOf("@")!=-1)
{result=true;if(email.indexOf(".")!=-1)
{result=true;}
else
{result=false;}}
return result;}
function isLoginname(obj){len=obj.value.length;ret=true;if(len<4)
return false;if(!((obj.value.charAt(0)>="0"&&obj.value.charAt(0)<="9")||(obj.value.charAt(0)>="a"&&obj.value.charAt(0)<="z")||(obj.value.charAt(0)>="A"&&obj.value.charAt(0)<="Z")))
ret=false;for(i=1;i<len;i++){if((obj.value.charAt(i)>="0"&&obj.value.charAt(i)<="9")||(obj.value.charAt(i)>="a"&&obj.value.charAt(i)<="z")||(obj.value.charAt(i)>="A"&&obj.value.charAt(i)<="Z"));else
ret=false;}
return ret;}
function roundValue(field){field.value=Math.round(eval(field.value)/10)*10}
function isNotValidBIZNo(form){if(isEmpty(form.site_serial1,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isEmpty(form.site_serial2,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isEmpty(form.site_serial3,"����ڵ�Ϲ�ȣ�� �Է��� �ּ���!"))return true;if(isNotNumber(form.site_serial1,"����ڵ�Ϲ�ȣ ���ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotNumber(form.site_serial2,"����ڵ�Ϲ�ȣ ����ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotNumber(form.site_serial3,"����ڵ�Ϲ�ȣ ���ڸ��� ���ڷθ� ������ �ּ���!"))return true;if(isNotExactLength(form.site_serial1,3,"����ڵ�Ϲ�ȣ ���ڸ��� 3�ڸ��Դϴ�!"))return true;if(isNotExactLength(form.site_serial2,2,"����ڵ�Ϲ�ȣ ���ڸ��� 2�ڸ��Դϴ�!"))return true;if(isNotExactLength(form.site_serial3,5,"����ڵ�Ϲ�ȣ ���ڸ��� 5�ڸ��Դϴ�!"))return true;strchr=form.site_serial1.value.concat(form.site_serial2.value.concat(form.site_serial3.value));num1=strchr.charAt(0);num2=strchr.charAt(1);num3=strchr.charAt(2);num4=strchr.charAt(3);num5=strchr.charAt(4);num6=strchr.charAt(5);num7=strchr.charAt(6);num8=strchr.charAt(7);num9=strchr.charAt(8);num10=strchr.charAt(9);var total=(num1*1)+(num2*3)+(num3*7)+(num4*1)+(num5*3)+(num6*7)+(num7*1)+(num8*3)+(num9*5);total=total+parseInt((num9*5)/10);var tmp=total%10;if(tmp==0){var num_chk=0;}else{var num_chk=10-tmp;}
if(num_chk!=num10){alert("����ڵ�Ϲ�ȣ�� �ùٸ��� �ʽ��ϴ�. \n�ٽ� �Է��� �ּ���!");form.site_serial1.value="";form.site_serial2.value="";form.site_serial3.value="";form.site_serial1.focus();return true;}
return false;}
function getMainDateViewStr(){view_today=new Date();var count_day=view_today.getDay();var view_week;if(count_day==0)view_week="��";else if(count_day==1)view_week="��";else if(count_day==2)view_week="ȭ";else if(count_day==3)view_week="��";else if(count_day==4)view_week="��";else if(count_day==5)view_week="��";else if(count_day==6)view_week="��";return view_today.getYear()+"�� "+(view_today.getMonth()+1)+"�� "+view_today.getDate()+"�� ("+view_week+"����)";}
function swfView(width,height,url){document.write("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' ");document.write("  codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' ");document.write("  width='"+width+"' height='"+height+"' align='middle'>");document.write(" <param name='allowScriptAccess' value='always' /> ");document.write(" <param name='movie'    value='"+url+"' /> ");document.write(" <param name='quality'   value='high' /> ");document.write(" <param name='wmode'    value='transparent'> ");document.write(" <embed src='"+url+"' quality='high' width='"+width+"' height='"+height+"' align='middle' ");document.write("  allowScriptAccess='always' type='application/x-shockwave-flash' ");document.write("  pluginspage='http://www.macromedia.com/go/getflashplayer' />");document.write("</object>");}
function swfView3(width,height,url,fvalues){document.write("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' ");document.write("  codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' ");document.write("  width='"+width+"' height='"+height+"' align='middle'>");document.write(" <param name='allowScriptAccess' value='always' /> ");document.write(" <param name='movie'    value='"+url+"' /> ");document.write(" <param name='quality'   value='high' /> ");document.write(" <param name='wmode'    value='transparent'> ");document.write(" <param name='flashVars'   value='"+fvalues+"'/> ");document.write(" <embed src='"+url+"' quality='high' width='"+width+"' height='"+height+"' align='middle' ");document.write("  allowScriptAccess='always' type='application/x-shockwave-flash' ");document.write("  pluginspage='http://www.macromedia.com/go/getflashplayer' />");document.write("</object>");}
function swfView4(width,height,url,fvalues,idname){document.write("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' ");document.write("  codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' ");if(idname!=""){document.write("  id='"+idname+"' ");}
document.write("  width='"+width+"' height='"+height+"' align='middle'>");document.write(" <param name='allowScriptAccess' value='always' /> ");document.write(" <param name='movie'    value='"+url+"' /> ");document.write(" <param name='quality'   value='high' /> ");document.write(" <param name='wmode'    value='transparent'> ");document.write(" <param name='flashVars'   value='"+fvalues+"'/> ");document.write(" <embed src='"+url+"' quality='high' width='"+width+"' height='"+height+"' align='middle' ");if(idname!=""){document.write("   id     ='"+idname+"' ");}
document.write("  allowScriptAccess='always' swfLiveConnect=true type='application/x-shockwave-flash' ");document.write("  pluginspage='http://www.macromedia.com/go/getflashplayer' />");document.write("</object>");}
function flexView(id,width,height,url){document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' ");document.write("  codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' ");document.write("  width='"+width+"' height='"+height+"' id='"+id+"'> ");document.write("   <param name='src' value='"+url+"'> ");document.write("   <param name='wmode' value='transparent'> ");document.write("   <embed pluginspage='http://www.macromedia.com/go/getflashplayer' ");document.write("    width='"+width+"' height='"+height+"' src='"+url+"'/> ");document.write("</object>");}
function swfView2(width,height,idname,obname,allowscriptaccess,quality,wmode,scale,bgcolor,swLiveConnect,fvalues,base,url){document.write("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' ");document.write("  codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' ");if(idname!=""){document.write("  id='"+idname+"' ");}
document.write("  width='"+width+"' ");document.write("  height='"+height+"'>");document.write(" <param name='movie'    value='"+url+"'/>");document.write(" <param name='quality'   value='"+quality+"'/>");if(wmode!=""){document.write(" <param name='wmode'    value='"+wmode+"'/>");}
if(allowscriptaccess!=""){document.write(" <param name='allowscriptaccess' value='"+allowscriptaccess+"'/>");}
if(base!=""){document.write(" <param name='base'   value='"+base+"'/>");}
if(bgcolor!=""){document.write(" <param name='bgcolor'  value='"+bgcolor+"' /> ");}
if(fvalues!=""){document.write(" <param name='flashVars'  value='"+fvalues+"'/> ");}
document.write(" <param name='scale'    value='"+scale+"' />");document.write(" <embed src     ='"+url+"'");document.write("   base    ='"+base+"' ");document.write("   scale    ='"+scale+"' ");document.write("   swLiveConnect  ='"+swLiveConnect+"' ");if(idname!=""){document.write("   id     ='"+idname+"' ");}
if(obname!=""){document.write("   name    ='"+obname+"' ");}
if(allowscriptaccess!=""){document.write("   allowScriptAccess ='"+allowscriptaccess+"' ");}
document.write("   quality    ='"+quality+"' ");if(wmode!=""){document.write("   wmode    ='"+wmode+"' ");}
document.write("   width    ='"+width+"' ");document.write("   height    ='"+height+"' ");document.write("   type='application/x-shockwave-flash' ");document.write("   pluginspage='http://www.macromedia.com/go/getflashplayer'></embed>");document.write("</object>");}
function seeLiveView(id,name,width,height,serverIP,basePort,useUniPort,channel,noTicket,autoPlay,startDelay,wheelVolumeControl,customLogo,customLogoOnWhite){document.write("<object id='"+id+"' name='"+name+"' width='"+width+"' height='"+height+"' ");document.write("  CLASSID='CLSID:8eeb54d5-cc70-40e4-b015-ac478c02ecc8' codebase='http://image.cjmall.com/etv/SLViewer.cab#version=1,2,28,172'>");document.write(" <param name='ServerIP'    value='"+serverIP+"'> ");document.write(" <param name='BasePort'    value='"+basePort+"'> ");document.write(" <param name='UseUniPort'   value='"+useUniPort+"'>");document.write(" <param name='Channel'    value='"+channel+"'> ");document.write(" <param name='NoTicket'    value='"+noTicket+"'> ");document.write(" <param name='AutoPlay'    value='"+autoPlay+"'>");document.write(" <PARAM NAME='StartDelay'   VALUE='"+startDelay+"'> ");document.write(" <PARAM NAME='WheelVolumeControl' VALUE='"+wheelVolumeControl+"'> ");document.write(" <PARAM NAME='CustomLogo'   VALUE='"+customLogo+"'>");document.write(" <PARAM NAME='CustomLogoOnWhite'  VALUE='"+customLogoOnWhite+"'>");document.write("</object>");}
function mediaPlayerView(id,name,width,height,showcontrols,autostart,autorewind,autosize,autoresize,transparentatstart,loop,url){document.write("<object id='"+id+"' codeBase='http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701' ");document.write("  type='application/x-oleobject' standby='Loading Microsoft Windows Media Player components...' ");document.write("  width='"+width+"' height='"+height+"' classid='clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95' name='"+name+"'> ");document.write(" <param name='ShowControls' value='"+showcontrols+"'> ");document.write(" <param name='AutoStart' value='"+autostart+"'> ");document.write(" <param name='AutoRewind' value='"+autorewind+"'> ");document.write(" <param name='Autosize' value='"+autosize+"'> ");document.write(" <param name='AutoResize' value='"+autoresize+"'> ");document.write(" <param name='TransparentAtStart' value='"+transparentatstart+"'> ");document.write(" <param name='loop' value='"+loop+"'> ");document.write(" <param name='Filename' value='"+url+"'> ");document.write(" <embed type='application/x-mplayer2' pluginspage='http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/' ");document.write("  id='"+id+"' name='"+name+"' showpositioncontrols='0' showcontrols='0' autosize='0' autostart='1' showdisplay='0' ");document.write("  showstatusbar='0' showtracker='1' loop='1' width='"+width+"'  height='"+height+"' src='"+url+"'> ");document.write(" </embed> ");document.write("</object> ");}
function objAll(objString){document.write(objString);}
function isPasswordCheck(form){var alpabet_B="ABCDEFGHIJKLMNOPQRSTUVWXYZ";var alpabet_S="abcdefghijklmnopqrstuvwxyz";var num="01234567890";var pwd=form.password.value;if(lenCheck(pwd)<6||lenCheck(pwd)>13){ERR_MSG="��й�ȣ�� �ݵ�� 6~13�� �����Ǵ� ���ڷ� �Է��ϼž� �մϴ�.\n��й�ȣ�� �ٽ� �Է��� �ֽʽÿ�.";form.password.value="";form.password2.value="";form.password.focus();return false;}
if(isNumCheck(pwd)){ERR_MSG="��й�ȣ�� �ݵ�� ���ĺ��� �ϳ� �̻� �����ؾ� �մϴ�.";form.password.value="";form.password2.value="";form.password.focus();return false;}
if(isAlphaCheck(pwd)){ERR_MSG="��й�ȣ�� �ݵ�� ������ �ϳ� �̻� �����ؾ� �մϴ�.";form.password.value="";form.password2.value="";form.password.focus();return false;}
for(i=0;i<alpabet_B.length;i++){var alpabet_1=alpabet_B.substring(i,i+3);for(k=0;k<pwd.length;k++){var alpabet_2=pwd.substring(k,k+3);if(alpabet_1.length==3){if(alpabet_1==alpabet_2){ERR_MSG="���ӵ� ���ڳ� ���ڸ� 3�ڸ��̻� ����Ͻ� �� ����ϴ�.\n��й�ȣ�� �ٽ��Է����ּ���.";form.password.value="";form.password2.value="";form.password.focus();return false;}}}}
for(i=0;i<alpabet_S.length;i++){var alpabet_1=alpabet_S.substring(i,i+3);for(k=0;k<pwd.length;k++){var alpabet_2=pwd.substring(k,k+3);if(alpabet_1.length==3){if(alpabet_1==alpabet_2){ERR_MSG="���ӵ� ���ڳ� ���ڸ� 3�ڸ��̻� ����Ͻ� �� ����ϴ�.\n��й�ȣ�� �ٽ��Է����ּ���.";form.password.value="";form.password2.value="";form.password.focus();return false;}}}}
for(i=0;i<num.length;i++){var alpabet_1=num.substring(i,i+3);for(k=0;k<pwd.length;k++){var alpabet_2=pwd.substring(k,k+3);if(alpabet_1.length==3){if(alpabet_1==alpabet_2){ERR_MSG="���ӵ� ���ڳ� ���ڸ� 3�ڸ��̻� ����Ͻ� �� ����ϴ�.\n��й�ȣ�� �ٽ��Է����ּ���.";form.password.value="";form.password2.value="";form.password.focus();return false;}}}}
if(pwd.indexOf(' ')>-1){ERR_MSG="����� �Է��� �� ����ϴ�.";return false;}
for(i=0;i<pwd.length;i++){if(pwd.substring(i,i+1)==pwd.substring(i+1,i+2)&&pwd.substring(i,i+1)==pwd.substring(i+2,i+3)){ERR_MSG="���� ���ڳ� ���ڸ� 3�ڸ��̻� �������� ����Ͻ� �� ����ϴ�.\n��й�ȣ�� �ٽ� �Է����ּ���.";form.password.value="";form.password2.value="";form.password.focus();return false;}}
return true;}
function lenCheck(s){var len=0;if(s==null)return 0;for(var i=0;i<s.length;i++){var c=escape(s.charAt(i));if(c.length==1)len++;else if(c.indexOf("%u")!=-1)len+=2;else if(c.indexOf("%")!=-1)len+=c.length/3;}
return len;}
function isNumCheck(str){for(var idx=0;idx<str.length;idx++){if(str.charAt(idx)<'0'||str.charAt(idx)>'9'){return false;}}
return true;}
function isAlphaCheck(str){for(var idx=0;idx<str.length;idx++){if(!((str.charAt(idx)>='a'&&str<='z')||(str.charAt(idx)>='A'&&str<='Z'))){return false;}}
return true;}
function scrollLayer(p_obj_name,p_gap_point)
{var start_point,end_point,timer;var obj_layer=document.getElementById(p_obj_name);start_point=parseInt(obj_layer.style.top,10);if(start_point<p_gap_point)start_point=p_gap_point;end_point=document.body.scrollTop+p_gap_point;limit_point=parseInt(window.document.body.scrollHeight)-parseInt(obj_layer.offsetHeight)-10;if(end_point>limit_point)end_point=limit_point;if(start_point!=end_point)
{scroll_amount=Math.ceil(Math.abs(end_point-start_point)/15);obj_layer.style.top=parseInt(start_point,10)+((end_point<start_point)?-scroll_amount:scroll_amount);}
timer=window.setTimeout("scrollLayer('"+p_obj_name+"', "+p_gap_point+");",1);}
function makeFlashObject(swfURL,w,h,id,flashVars){var swfHTML=('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+w+'" height="'+h+'" id="'+id+'" align="middle">');swfHTML+=('<param name="allowScriptAccess" value="always" />');swfHTML+=('<param name="FlashVars" value="'+flashVars+'"/>');swfHTML+=('<param name="menu" value="false"/>');swfHTML+=('<param name="wmode" value="transparent"/>');swfHTML+=('<param name="movie" value="'+swfURL+'" /><param name="quality" value="high" /><param name="salign" value="lt" />');swfHTML+=('<embed menu="false" src="'+swfURL+'"  quality="high" FlashVars="'+flashVars+'" bgcolor="#ffffff" width="'+w+'" height="'+h+'" name="'+id+'" align="middle" salign="lt" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');swfHTML+=('</object>');document.write(swfHTML);}
function dlfjsadflsdlfj(){alert(111);}
function setSize(id,h,w){var obj=document.getElementById(id);if(h)obj.height=h;if(w)obj.width=w;}
function setLayerSize(id,h,w){var obj=document.getElementById(id);if(h)obj.style.height=h;if(w)obj.style.width=w;}
function setDisp(id,flag){var obj=document.getElementById(id);if(flag=='show')obj.style.display="";else obj.style.display="none";}
function moveLayer(id,top,left){var obj=document.getElementById(id);if(top)obj.style.pixelTop=top;if(left)obj.style.pixelLeft=left;}
function moveLayerTop(id,top){moveLayer(id,top,'');}
function moveLayerLeft(id,left){moveLayer(id,'',left);}
function open_vision(vod_path,item_code,etv_item_status)
{var vod_length=vod_path.length;var vision_url="/etv/pop_inc_vision.jsp";if(vod_length>0)
vod_path=vod_path.substring(0,vod_path.length-6);openNoScrollWin(vision_url,"vision","�����󺸱�","400","400","&vod_path="+vod_path+"&item_code="+item_code+"&etv_item_status="+etv_item_status);}
function open_vision_for_search(flv_path)
{var flv_length=flv_path.length;if(flv_path=="")
{alert("������������ ����ϴ�.");return;}
if(flv_length>0)
flv_path=flv_path.substring(0,flv_path.length-6);var vision_url="/etv/pop_inc_vision.jsp";openNoScrollWin(vision_url,"vision","�����󺸱�","400","400","&flv_path="+flv_path);}
function MM_showHideLayers_widzet(){var i,p,v,obj;var args=MM_showHideLayers_widzet.arguments;var nozindex=document.all.zindexvalue;for(i=0;i<(args.length-2);i+=3)
if((obj=MM_findObj(args[i]))!=null){v=args[i+2];if(obj.style){obj=obj.style;v=(v=='show')?'visible':(v='hide')?'hidden':v;}
obj.zIndex=nozindex.value*1+1;obj.visibility=v;nozindex.value=obj.zIndex;}
var xMax=document.body.clientWidth;var yMax=document.body.clientHeight;var xOffset=(xMax-200)/2-145;var yOffset=(yMax-150)/2-130;MM_findObj(args[0]).style.left=xOffset;MM_findObj(args[0]).style.top=document.body.scrollTop+yOffset;}