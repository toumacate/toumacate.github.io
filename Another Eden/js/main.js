$(document).ready(function(){
	$('#clock').countdown('2019/05/08', function(event) {
    	$(this).html(event.strftime(''
    	+'<div><span>%d</span><span>天</span></div>'
    	+'<div><span>%H</span><span>時</span></div>'
    	+'<div><span>%M</span><span>分</span></div>'
    	+'<div><span>%S</span><span>秒</span></div>'
    	));
  	});
});