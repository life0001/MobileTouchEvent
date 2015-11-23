/**
 * Created by pengweifeng on 2015/11/17.
 */
$(function(){
    var navFooter={
        touch:(function(){
            document.addEventListener('touchstart',touch, false);  // touchstart ：当手指触摸屏幕时候触发。
            document.addEventListener('touchend',touch, false);    // touchend: 当手指从屏幕上离开的时候触发。
            document.addEventListener('touchmove',touch, false);   //touchmove ：当手指在屏幕上滑动的时候连续地触发。

            var startY,endY,startX,endX,$table=$('footer div.main_footer_navi');
            function touch (event){
                var event = event || window.event;
                switch(event.type){
                    case "touchstart":
                        startY=event.touches[0].clientY;
                        break;
                    case "touchend":
                        endY=event.changedTouches[0].clientY;
                        if(startY>endY){  //向上滑动
                            $table.hide();
                            setTimeout(function(){
                                $table.fadeIn();
                            },2000)
                        }else{
                            $table.show();
                        }
                        break;
                    //case "touchmove":
                    //    event.preventDefault();
                    //    break;
                }
            }
        }),
        // 用下面这个，上面那个无效
        scroll:(function(){
            var scroll,scrolltop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,$table=$('footer div.main_footer_navi');
            $(window).scroll(function(){
                scrolltop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                if(scroll<scrolltop){
                    $table.hide();
                    setTimeout(function(){
                        $table.fadeIn();
                    },2000)
                }
                scroll=scrolltop;
            });
    })()
    }
});
