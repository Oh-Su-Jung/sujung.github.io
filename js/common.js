$(document).ready(function(){
    
    var indexNum = 0;
	$("#mPortfolio .more_btn").click(function(){
        if (indexNum == 0){
            if ($(window).width() > 1024){
                indexNum = 9;
            } else {
                indexNum = 8;
            }
        }

        var num = 0;
        
        if ($(window).width() > 1024){
            num = 3;
        } else {
            num = 2;
        }

        for (var i = 0; i < num; i++){
            $("#mPortfolio ul li:eq("+ indexNum +")").fadeIn();
            indexNum++;
            if (indexNum == $("#mPortfolio ul li").length){
                $("#mPortfolio .more_btn").hide()
            }
        }
    })

    $("#gnb ul li").click(function(){
        var data = $(this).data("gnb");
        $("html, body").animate({scrollTop:$("#m"+ data +"").offset().top+"px"})
    })
})
