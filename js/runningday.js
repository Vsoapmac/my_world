function show_runtime() {
	window.setTimeout("show_runtime()", 1000);
	X = new Date("03/26/2021 13:06:00");
	Y = new Date();
	T = (Y.getTime() - X.getTime());
	M = 24 * 60 * 60 * 1000;
	a = T / M;
	A = Math.floor(a);
	b = (a - A) * 24;
	B = Math.floor(b);
	c = (b - B) * 60;
	C = Math.floor((b - B) * 60);
	D = Math.floor((c - C) * 60);
	document.getElementById("times").innerHTML = "<span style=\"font-size:13.6px;\">小站在各种历练中传火了: " + A + "天" + B + "小时" + C + "分" + D + "秒</span>";
}
show_runtime();