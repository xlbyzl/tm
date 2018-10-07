$(function(){
	//轮播图开始
	//全部变量
	var m=0;

	function bgColor(){
		if(m==0){
			$('#nav-wrap').css('background-color','#C9D4E8');
		}else if(m==1){
			$('#nav-wrap').css('background-color','#E5E5E5');
		}else if(m==2){
			$('#nav-wrap').css('background-color','#FF6F38');
		}else if(m==3){
			$('#nav-wrap').css('background-color','#ECE6EA');
		}else if(m==4){
			$('#nav-wrap').css('background-color','#FF2C6F');
		}else{
			$('#nav-wrap').css('background-color','#FE9727');
		}
	}
	//封装函数 方便调用
	function run(){
		timer=setInterval(function(){
			//下标自增
		
			//判断下标
			if(m>5){
				m=0;
			}
			
			bgColor();

			//显示图片
			$('.banner .img li').eq(m).addClass('show').siblings('li').removeClass('show');
			//显示数字

			$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			m++;
		},2000)
	
	}
	//首次调用函数 轮播
	run();
	//容器鼠标移入移出
	$('.banner').mouseenter(function(){
		//清除定时器
		clearInterval(timer);
		$('.num li').mouseenter(function(){
			//获取当前li的下标
			m=$(this).index();
			//显示图片
			$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
			//显示数字
			$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			bgColor();
		
		})
		
	}).mouseleave(function(){
		run();
	});

	//轮播图结束
	
});
	//今日疯抢开始
$(function(){
    var n=0;
	function auto(){
			run=setInterval(function(){
				//下标自增
				n++;
				//判断下标
				if(n>1){
					n=0;
				}
				//显示图片
				$('.grid-tabs .tab li').eq(n).addClass('active').siblings('li').removeClass('active');
				//显示数字
				$('.grid-tabs .cont li').eq(n).addClass('active').siblings('li').removeClass('active');
			},2000)
		
		}
	auto();
	$('.two-grid .grid-tabs .tab li').mouseenter(function(){
			//清除定时器
			clearInterval(run)
				//获取当前li的下标
				n=$(this).index();
				$('.grid-tabs .tab li').eq(n).addClass('active').siblings('li').removeClass('active');
				//显示数字
				$('.grid-tabs .cont li').eq(n).addClass('active').siblings('li').removeClass('active');
			
			}).mouseleave(function(){
			auto();
		});
});
	//今日疯抢结束

	//顶部导航开始
$(window).scroll(function(){
		// var y= document.documentElement.clientHeight;
		//当前窗口可视高度
		var y=$(window).height();
		// 获取滚动条到顶部的垂直高度
		var h=$(document).scrollTop();
		if(h>=y){
			
			$('#scrollmenu-wrap').css({height:'50px',transition:'all 0.5s',overflow:'hidden',opacity:1,visibility:'visible'});
			$('#floor-wrap').css({height:'400px',width:'36px',transition:'all 0.5s',overflow:'hidden',opacity:1})
		}else{
			$('#scrollmenu-wrap').css({height:'0px',transition:'all 0.5s',overflow:'hidden'})
			$('#floor-wrap').css({height:'0px',width:'0px',transition:'all 0.5s',overflow:'hidden'});
		}
		// console.log(y,h);
	});
	//顶部导航结束












	//换一批开始
	
$(function(){
	var arr1=['1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9','10','1','2','3','4','5','6','7','8','9',]
	function demo(){
		$('.brand-lest1').html(`<li class="brand-item huan">
				<a href="javascript:;">
					<i class="iconfont icon-huanyihuan"></i>
					<span class="btn-text">换一批</span>
				</a>
			</li>`);
		for(var i = 0; i<29; i++){
			var HTML = $('.brand-lest1').html();
			var rand = Math.floor(Math.random()*29+1);
			$('.brand-lest1').html(`<li class="brand-item" style="width:121px;">
					<a href="javascript:;">
						<div class="brand-img" style="width:122px;">
							<img src="assets/images/index/huan/list`+rand+`.png">
						</div>
						<div class="brand-yin" style="width:122px;">`+`<b class="brand-b">`+arr1[rand]+`</b>`+`
							<div class="brand-click">`+`<a class="brand-a" href="javascript:;" style="color:#fff;">点击进入</a>`+`
							</div>	
						</div>
					</a>
				</li>`+HTML);
		}
	}
	demo();
	
	$('.huan').live('click',function(){
		demo();
		var len = $('.brand-item').length - 1;
		for(let i=0; i<len; i++){
			//let ES6 定义变量 ，块级作用域，一个｛｝就是一个作用域
			rotate(i);
		}
		function rotate(i){
			var random = Math.random()*1000;
			setTimeout(function(){
				$('.brand-item').eq(i).css({'transition':'all 1s','transform':'rotateY(360deg)'});
			},random);
		}
		
	})
})
    //换一批结束

    //楼层开始
$(function(){
	
    //点击li 滚动到指定的位置
    $('.floor .item').click(function(){
    	var index=$(this).index();
    	// console.log($('.tmcs').eq(index).offset().top);
    	var top=$('.tmcs').eq(index).offset().top;
    	// console.log($('#tmgj').offset().top)
    	$('html').animate({scrollTop:top},200);
    });
    //获取楼层高度的数组
    var heights=[];
    $('#main .tmcs').each(function(){
    	heights.push($(this).offset().top);
    });
    // console.log(heights)
    //当前文档的滚动监听事件
    $(window).scroll(function(){
    	//获取滚动距离
    	var top=$(window).scrollTop();
    	// console.log(top1);
    	var index;
    	//遍历每一个楼层到顶部的距离
    	for(var i=0;i<heights.length;i++){
    		if(top>=heights[i]-20 && top<heights[i+1]){
    			index=i;
    			$('.floor .item').eq(index).css('background-color','red').siblings('li').css('background-color','rgba(0, 0, 0, 0.6)');
    		}else if(top>=heights[heights.length-1]){
    			index=heights.length-1;
    			$('.floor .item').eq(index).css('background-color','red').siblings('li').css('background-color','rgba(0, 0, 0, 0.6)');
    		}
    	}
    	play()
	    function play(){
	    	if(index==0){
	    		$('.floor .item').eq(index).css('backgroundColor','#64C333');
	    	}else if(index==1){
	    		$('.floor .item').eq(index).css('backgroundColor','purple');
	    	}else if(index==2){
	    		$('.floor .item').eq(index).css('backgroundColor','#EA5F8D');
	    	}else if(index==3){
	    		$('.floor .item').eq(index).css('backgroundColor','#0AA6E8');
	    	}else if(index==4){
	    		$('.floor .item').eq(index).css('backgroundColor','#64C333');
	    	}else if(index==5){
	    		$('.floor .item').eq(index).css('backgroundColor','#F15453');
	    	}else if(index==6){
	    		$('.floor .item').eq(index).css('backgroundColor','#19C8A9');
	    	}else{
	    		$('.floor .item').eq(index).css('backgroundColor','black');
	    	}
	    }
    })
});

	//返回顶部
$(function(){
	$('#floor-wrap .list').click(function(){
    	$('html').animate({scrollTop:0},500);
	});
	$('.backtop').click(function(){
    	$('html').animate({scrollTop:0},500);
	});
})

	//滚动监听事件
$(function(){
	$(document).scroll(function(){
		var h=$(document).scrollTop();
		if(h<450){
			$('.backtop').css('opacity',0).css('transition','all 1s');
		}else{
			$('.backtop').css('opacity',1).css('transition','all 1s');
		}
	})
})
		






