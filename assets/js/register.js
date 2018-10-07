// 遮罩
$(document).ready(function(){
	$('#protocol').css('display','block',);
	$('#protocol').show();
	$('.btn2').click(function(){
		$('#protocol').fadeOut(500);
	})
});
//失去焦点事件
$(function(){
	$('.number').blur(function(){
		var val=$('.number').val();
		if(val.length==11){
			$('.pd2').css('display','block');
			$('.pd').css('display','none');
		}else{
			$('.pd').css('display','block');
			$('.pd2').css('display','none');
		}
	});
});
// 拖拽
$(function(){
	$('.xiaomi').mousedown(function(ev){
		var e=ev || window.event;
		//wrap的偏移值
		var bleft=$('.wrap').offset().left;
		var btop=$('.wrap').offset().top;
		var offset=$(this).offset();
		var x=e.pageX-offset.left;
		var y=e.pageY-offset.top;
		$(document).mousemove(function(evt){
			var l=evt.pageX-x-bleft;
			var t=evt.pageY-y-btop;
			console.log(l+':'+t);
			if(l<=0){
				l=0
			}else if(l >=$('.wrap').width()-$('.xiaomi').width()){
				l =$('.wrap').width()-$('.xiaomi').width();
			}
			if(t<=20){
				t=20
			}else if(t >=$('.wrap').height()-$('.xiaomi').height()){
				t =$('.wrap').height()-$('.xiaomi').height();
			}
			$('.xiaomi').css({left:l+'px',top:t+'px','position':'absolute','z-index':111100});
		})
		$(document).mouseup(function(){
			$(document).off('mousemove');
	})
	})
})