// This says attach to ul (which is available at the load of the page)
// and fire on any li, which even if added dynamically will get fired!
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
});

$('ul').on("click", "span", function(event){
    $(this).fadeOut(200, function(){
        $(this).parent().remove();
    });
    event.stopPropagation();
});

$("input[type='text'").on("keypress", function(event){
    var txt = $(this).val();
    if (event.which === 13 && txt != ""){
        $('ul').append("<li><span><i class='fa fa-trash'></i> </span>" + txt + "</li>");
        $(this).val("");
    }
})

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});