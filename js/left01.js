function mvSrch(){
	if(document.campaignSrh.searchValue.value==''){
		alert("请输入检索关键词。");
		return;
	}
	document.campaignSrh.submit();
}
function cleartxt()
{
	if(document.campaignSrh.searchValue.value=="商品编号或关键字")
	{
		document.campaignSrh.searchValue.value="";
	}
}
function addSpdCart()
{
	if(document.spdcart.goodsCode0.value=="")
	{
		alert("请输入商品号！");
	}else
	{
		document.spdcart.submit();
	}
}