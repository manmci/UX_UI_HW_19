$(".chevron").on("click", function(){
    // $(".menuContainer").toggleClass("down");
    if ($(".menuContainer").hasClass("up")) {
        $(".menuContainer").removeClass("up").addClass("down");
        $("h2").removeClass("off");
        $("ul").removeClass("off");
        $(".chevron").removeClass("default").addClass("dropped");
        console.log("help... ;_;");
    };
    else {
        $(".menuContainer").removeClass("down").addClass("up");
        $("h2").addClass("off");
        $("ul").addClass("off");
        $(".chevron").removeClass("dropped").addClass("default");
    };
});