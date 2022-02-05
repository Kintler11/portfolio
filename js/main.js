$(".navigation-handle").on("mouseover",function(){
    let hovered_slide = $(this).attr("slide")
    $(".image-container").find("img").each(function(){
        if($(this).attr("slide") == hovered_slide){
            $(this).show()
        }else{
            $(this).hide()
        }
    })

    $(this).parent().find(".navigation-handle").each(function(){
        if($(this).attr("slide") != hovered_slide){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active")
        }
    })
})
$(".library-container").each(function(){
    $(this).find(".library-item").delay(10).each(function(i) {
        $(this).delay(50 * i).queue(function() {
          $(this).addClass("anim");
        })
      })
})