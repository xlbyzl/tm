//放大镜
$(function(){
	$('.glass .small').mousemove(function(e){
		//小模块和大图显示
		$('.glass .small .move,.glass .big').show();
		//获取鼠标坐标
		var x=e.pageX-$(this).offset().left;
		var y=e.pageY-$(this).offset().top;
		// console.log(x,y)
		//鼠标居中(减去宽高一半)
		var x=x-$('.glass .small .move').width()/2;
		var y=y-$('.glass .small .move').height()/2;
		// console.log(x,y)
		//判断 边界
		if(x<=0){
			x=0;
		}else if(x >= $('.glass .small').width()-$('.glass .small .move').width()){
			x=$('.glass .small').width()-$('.glass .small .move').width();
		}
		if(y<=0){
			y=0;
		}else if(y >= $('.glass .small').height()-$('.glass .small .move').height()){
			y=$('.glass .small').height()-$('.glass .small .move').height();
		}
		// 绑定坐标
		$('.glass .small .move').css({left:x,top:y});

		//大小图比例  
		var scale= $('.big_pic').width()/$('.small_pic').width();
		// var scale= $('.small').width()/$('.move').width();
		console.log(scale)
		//大图移动
		$('.big_pic').css({left:-x*scale,top:-y*scale});
		//让大图和小图的图片一样
		$('.big_pic').attr('src',$('.small_pic').attr('src'));


	}).mouseleave(function(){
		$('.glass .small .move,.glass .big').hide();
	})

	//鼠标移动改变图片
	$('.glass .dian li').mouseenter(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$('.small_pic').attr('src',$(this).find('img').attr('src'));
		// console.log(this)
	})
});
// 支付方式
$(function(){
	$('#zf .icon-arrow-down').click(function(){
		$('#zf .down').toggle();
	})
})
// 数量
$(function(){
	var val=$('#infopt').val();
	$('.up').click(function(){
		val++;
		$("#infopt").val(val);
	});
	$('.down').click(function(){
		if(val>1){
			val--;
			$('#infopt').val(val);
		}else{
			$('#infopt').val(1);
		}
	})
})
// 地址
$(function(){
	$('.s').click(function(){
		$('.s-down').toggle();
	});
	$('.q').click(function(){
		$('.q-down').toggle();
	})
})