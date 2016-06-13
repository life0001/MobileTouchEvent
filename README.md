# touch
手机端touch事件，手势上下移动 用scroll事件
<pre>
在触摸屏幕时会触发一些事件 如下：
（按先后顺序排列）
1.touchstart
2.mouseover
3.mousemove（一次）
4.mousedown
5.mouseup
6.click
7.touchend


获取手指触摸屏幕后的所有属性/值
e.originalEvent

触摸事件
1. e.originalEvent.touches ：当前位于屏幕上的所有手指的一个列表。
2. e.originalEvent.targetTouches ：位于当前DOM元素上的手指的一个列表。
3. e.originalEvent.changedTouches ：涉及当前事件的手指的一个列表。
 

多手指触摸
if (e.originalEvent.targetTouches.length == 2) {    //2根手指
  		startX1= e.originalEvent.changedTouches[0].screenX;  //第1根手指的横坐标
  		startX2= e.originalEvent.changedTouches[1].screenX;  //第2根手指的横坐标
}



</pre>
