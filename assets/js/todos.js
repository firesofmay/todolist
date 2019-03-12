// This says attach to ul (which is available at the load of the page)
// and fire on any li, which even if added dynamically will get fired!
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
    localStorage.setItem('listItems', $('ul').html());
});

$('ul').on("click", "span", function(event){
    $(this).fadeOut(200, function(){
        $(this).parent().remove();
        localStorage.setItem('listItems', $('ul').html());
    });
    event.stopPropagation();
});

$("input[type='text'").on("keypress", function(event){
    var txt = $(this).val();
    if (event.which === 13 && txt != ""){
        $('ul').append("<li><span><i class='fa fa-trash'></i> </span>" + txt + "</li>");
        $(this).val("");
        localStorage.setItem('listItems', $('ul').html());
    }
})

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

$(document).ready(function () {
      todos = localStorage.getItem('listItems');
      console.log(todos);
      
      if (todos == null){
          todos = '<li><span><i class="fa fa-trash"></i></span> Buy Vegetables</li> <li><span><i class="fa fa-trash"></i></span> Go for Salsa Class</li> <li><span><i class="fa fa-trash"></i></span> Plan my holiday</li>';
      }
      $('ul').html(todos);
});