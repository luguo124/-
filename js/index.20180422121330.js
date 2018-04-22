(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=768){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/cloud-460.png' : 'images/cloud-230.png');
$('.js-2').attr('src', (dpi>1) ? 'images/group-copy-2-384.png' : 'images/group-copy-2-192.png');
$('.js-3').attr('src', (dpi>1) ? 'images/cloud-256.png' : 'images/cloud-128.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zi-qian-232.png' : 'images/zi-qian-116.png');
$('.js-5').attr('src', (dpi>1) ? 'images/group-3-copy-600.png' : 'images/group-3-copy-300.png');
$('.js-6').attr('src', (dpi>1) ? 'images/qrcode_for_gh_4a0aed45fc83_258-144-1.jpg' : 'images/qrcode_for_gh_4a0aed45fc83_258-72-1.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/group-274.png' : 'images/group-137.png');
$('.js-8').attr('src', (dpi>1) ? 'images/path-copy-6-548.png' : 'images/path-copy-6-274.png');}else if($(window).width()>=768){$('.js').attr('src', (dpi>1) ? 'images/cloud-368.png' : 'images/cloud-184.png');
$('.js-2').attr('src', (dpi>1) ? 'images/group-copy-2-308.png' : 'images/group-copy-2-154.png');
$('.js-3').attr('src', (dpi>1) ? 'images/cloud-204.png' : 'images/cloud-102.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zi-qian-184.png' : 'images/zi-qian-92.png');
$('.js-5').attr('src', (dpi>1) ? 'images/group-3-copy-480.png' : 'images/group-3-copy-240.png');
$('.js-6').attr('src', (dpi>1) ? 'images/qrcode_for_gh_4a0aed45fc83_258-114.jpg' : 'images/qrcode_for_gh_4a0aed45fc83_258-57.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/group-214.png' : 'images/group-107.png');
$('.js-8').attr('src', (dpi>1) ? 'images/path-copy-6-438.png' : 'images/path-copy-6-219.png');}else{$('.js').attr('src', (dpi>1) ? 'images/cloud-352.png' : 'images/cloud-176.png');
$('.js-2').attr('src', (dpi>1) ? 'images/group-copy-2-298.png' : 'images/group-copy-2-149.png');
$('.js-3').attr('src', (dpi>1) ? 'images/cloud-186.png' : 'images/cloud-93.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zi-qian-170.png' : 'images/zi-qian-85.png');
$('.js-5').attr('src', (dpi>1) ? 'images/group-3-copy-466.png' : 'images/group-3-copy-233.png');
$('.js-6').attr('src', (dpi>1) ? 'images/qrcode_for_gh_4a0aed45fc83_258-110.jpg' : 'images/qrcode_for_gh_4a0aed45fc83_258-55.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/group-216.png' : 'images/group-108.png');
$('.js-8').attr('src', (dpi>1) ? 'images/path-copy-6-426.png' : 'images/path-copy-6-213.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});