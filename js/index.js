window.onload=function(){
	var headbtn=document.querySelector(".head-left");
	var cehua=document.querySelector(".ce-left");
	var zhuye=document.querySelector(".zhuye");
	headbtn.onclick=function(){
		cehua.style.left=50+"px";
		zhuye.style.left=50+"px";
	}
}