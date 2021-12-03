$(function()
{
	$('img.image1').data('ad-desc', 'Whoa! This description is set through elm.data("ad-desc") instead of using the longdesc attribute.<br>And it contains <strong>H</strong>ow <strong>T</strong>o <strong>M</strong>eet <strong>L</strong>adies... <em>What?</em> That aint what HTML stands for? Man...');
	$('img.image1').data('ad-title', 'Title through $.data');
	$('img.image4').data('ad-desc', 'This image is wider than the wrapper, so it has been scaled down');
	$('img.image5').data('ad-desc', 'This image is higher than the wrapper, so it has been scaled down');
    
	var galleries = $('.ad-gallery').adGallery();
	$('#switch-effect').change(
		function() {
			galleries[0].settings.effect = $(this).val();
			return false;
		}
	);

	$('#toggle-slideshow').click(
		function() {
			galleries[0].slideshow.toggle();
			return false;
		}
	);
});

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
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}


$(document).ready(
	function()
	{
		$("ul.menu > li").hover
		(
			function()
			{
				$(this).children("a").css('color','#4DABE1');
				$(this).find("ul.submenu").show(); 
			},
			function()
			{
				$(this).children("a").css('color','#fff');
				$(this).find("ul.submenu").hide();
			}
		);
	}
);