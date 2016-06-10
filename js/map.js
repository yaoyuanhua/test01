var markerArr = [
    { url: "index2.html",  title: "名称：上梅林实业股份有限公司", point: "114.06096,22.571033",  tel: "12306" },
    { url: "index2.html",  title: "名称：下梅林实业股份有限公司", point: "114.047144,22.567229", tel: "18500000000" },
    { url: "index2.html",  title: "名称：田面实业股份公司", point: "114.090502,22.548298",     tel: "18500000000" },
    { url: "index2.html",  title: "名称：上步实业股份公司", point: "114.091149,22.54289",      tel: "18500000000" },
	{ url: "index2.html",  title: "名称：岗厦股份公司",   point: "114.07886,22.540086",   	   tel: "18500000000" },
	{ url: "index2.html",  title: "名称：福田环庆股份有限公司", point: "114.075056,22.537391",  tel: "18500000000" },
	{ url: "index2.html",  title: "名称：皇岗实业股份有限公司", point: "114.074714,22.534286",  tel: "18500000000" },
	{ url: "index2.html",  title: "名称：水围实业股份有限公司", point: "114.073937,22.525532",  tel: "18500000000" },
	{ url: "index2.html",  title: "名称：新洲实业股份有限公司", point: "114.059996,22.528069",  tel: "18500000000" },
	{ url: "index2.html",  title: "名称：石厦实业股份有限公司", point: "114.056474,22.520925",  tel: "18500000000" },
	{ url: "index2.html",  title: "名称：下沙实业股份有限公司", point: "114.029453,22.53548",   tel: "18500000000" },
	{ url: "index2.html",  title: "名称：上沙实业股份有限公司", point: "114.03743,22.533277",   tel: "18500000000" },
	{ url: "index2.html",  title: "名称：沙尾实业股份有限公司", point: "114.043898,22.525866",  tel: "18500000000" },
	{ url: "index2.html",  title: "名称：沙嘴实业股份有限公司", point: "114.050941,22.524597",  tel: "18500000000" }

];

function map_init() {
	var point = new Array(); //存放标注点经纬信息的数组
	var marker = new Array(); //存放标注点对象的数组
	var info = new Array(); //存放提示信息窗口对象的数组
    var map = new BMap.Map("map"); // 创建Map实例
    var point = new BMap.Point(114.059937, 22.545235); //地图中心点，福田区
    map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别。
    map.enableScrollWheelZoom(true); //启用滚轮放大缩小
    //向地图中添加缩放控件
    var ctrlNav = new window.BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(ctrlNav);

    //向地图中添加缩略图控件
    var ctrlOve = new window.BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
    });
    map.addControl(ctrlOve);

    //向地图中添加比例尺控件
    var ctrlSca = new window.BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
    });
    map.addControl(ctrlSca);

    for (var i = 0; i < markerArr.length; i++) {
        var p0 = markerArr[i].point.split(",")[0]; //
        var p1 = markerArr[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来
        point[i] = new window.BMap.Point(p0, p1); //循环生成新的地图点
        marker[i] = new window.BMap.Marker(point[i]); //按照地图点坐标生成标记
        map.addOverlay(marker[i]);
        //marker[i].setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        var label = new window.BMap.Label(markerArr[i].title, { offset: new window.BMap.Size(20, -10) });
        marker[i].setLabel(label);
        info[i] = new window.BMap.InfoWindow("<p style=’font-size:12px;line-height:1.8em;’>" + markerArr[i].title + "</br> 电话：" + markerArr[i].tel + "</p>"); // 创建信息窗口对象
    	
    }
    //
    marker[0].addEventListener("mouseover", function () {
        this.openInfoWindow(info[0]);
    });
    marker[1].addEventListener("mouseover", function () {
        this.openInfoWindow(info[1]);
    });
    marker[2].addEventListener("mouseover", function () {
        this.openInfoWindow(info[2]);
    });
    marker[3].addEventListener("mouseover", function () {
        this.openInfoWindow(info[3]);
    });
    marker[4].addEventListener("mouseover", function () {
        this.openInfoWindow(info[4]);
    });
    marker[5].addEventListener("mouseover", function () {
        this.openInfoWindow(info[5]);
    });
    marker[6].addEventListener("mouseover", function () {
        this.openInfoWindow(info[6]);
    });
    marker[7].addEventListener("mouseover", function () {
        this.openInfoWindow(info[7]);
    });
    marker[8].addEventListener("mouseover", function () {
        this.openInfoWindow(info[8]);
    });
    marker[9].addEventListener("mouseover", function () {
        this.openInfoWindow(info[9]);
    });
    marker[10].addEventListener("mouseover", function () {
        this.openInfoWindow(info[10]);
    });
    marker[11].addEventListener("mouseover", function () {
        this.openInfoWindow(info[11]);
    });
    marker[12].addEventListener("mouseover", function () {
        this.openInfoWindow(info[12]);
    });
    marker[13].addEventListener("mouseover", function () {
        this.openInfoWindow(info[13]);
    });
    //
    marker[0].addEventListener("click", function () {
        window.location.href=markerArr[0].url;
    });
    marker[1].addEventListener("click", function () {
        window.location.href=markerArr[1].url;
    });
    marker[2].addEventListener("click", function () {
        window.location.href=markerArr[2].url;
    });
    marker[3].addEventListener("click", function () {
        window.location.href=markerArr[3].url;
    });
    marker[4].addEventListener("click", function () {
        window.location.href=markerArr[4].url;
    });
    marker[5].addEventListener("click", function () {
        window.location.href=markerArr[5].url;
    });
    marker[6].addEventListener("click", function () {
        alert(markerArr[6].url);
        window.location.href=markerArr[6].url;
    });
    marker[7].addEventListener("click", function () {
        window.location.href=markerArr[7].url;
    });
    marker[8].addEventListener("click", function () {
        window.location.href=markerArr[8].url;
    });
    marker[9].addEventListener("click", function () {
        window.location.href=markerArr[9].url;
    });
    marker[10].addEventListener("click", function () {
        window.location.href=markerArr[10].url;
    });
    marker[11].addEventListener("click", function () {
        window.location.href=markerArr[11].url;
    });
    marker[12].addEventListener("click", function () {
        window.location.href=markerArr[12].url;
    });
    marker[13].addEventListener("click", function () {
        window.location.href=markerArr[13].url;
    });
}
//异步调用百度js
function map_load() {
    var load = document.createElement("script");
    load.src = "http://api.map.baidu.com/api?v=1.4&callback=map_init";
    document.body.appendChild(load);
}
//window.onload = map_load;
	document.getElementById('mapcl').addEventListener("click", function () {
   	map_load();
   	$('.demo_main').show();
   	$('.demo_mainhid').show();
   	
});