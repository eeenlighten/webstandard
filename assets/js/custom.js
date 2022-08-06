// 라이트 박스
$(".lightgallery").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});

// 윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    window.open("sample_popup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0")
});

// 레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").fadeIn();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").fadeOut();
});        

// 탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);        

// 배너 슬라이드
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

// 타이틀 버튼 클릭
$(".tit .btn").click(function(e){
    e.preventDefault();
    $("#cont-nav").slideToggle();
    $(this).toggleClass("on");
});