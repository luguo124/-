(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/cloud-460.png' : 'images/cloud-230.png');
$('.js-2').attr('src', (dpi>1) ? 'images/group-copy-2-384.png' : 'images/group-copy-2-192.png');
$('.js-3').attr('src', (dpi>1) ? 'images/cloud-256.png' : 'images/cloud-128.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zi-qian-232.png' : 'images/zi-qian-116.png');
$('.js-5').attr('src', (dpi>1) ? 'images/group-3-copy-600.png' : 'images/group-3-copy-300.png');
$('.js-6').attr('src', (dpi>1) ? 'images/qrcode_for_gh_4a0aed45fc83_258-144-1.jpg' : 'images/qrcode_for_gh_4a0aed45fc83_258-72-1.jpg');
$('.js-7').attr('src', (dpi>1) ? 'images/group-274.png' : 'images/group-137.png');
$('.js-8').attr('src', (dpi>1) ? 'images/path-copy-6-548.png' : 'images/path-copy-6-274.png');};
if(!window.HTMLPictureElement){r();}

});