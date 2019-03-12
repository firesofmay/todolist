var defaultTodos = '<li><span><i class="fa fa-trash"></i></span> Buy Vegetables</li> <li><span><i class="fa fa-trash"></i></span> Go for Salsa Class</li> <li><span><i class="fa fa-trash"></i></span> Plan my holiday</li>';
var listItemsKey = 'listItems';

function getTodo(){
    return localStorage.getItem(listItemsKey);
}

function setTodo(){  
    localStorage.setItem(listItemsKey, $('ul').html());
}

function updateTodo(val){  
    localStorage.setItem(listItemsKey, val);
}

function resetTodos() {  
    localStorage.removeItem(listItemsKey);
    $('ul').html(null);
}


// This says attach to ul (which is available at the load of the page)
// and fire on any li, which even if added dynamically will get fired!
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
    setTodo();
});

$('ul').on("click", "span", function(event){
    $(this).fadeOut(200, function(){
        $(this).parent().remove();
        setTodo();
    });
    event.stopPropagation();
});

$("input[type='text'").on("keypress", function(event){
    var txt = $(this).val();
    if (event.which === 13 && txt != ""){
        $('ul').append("<li><span><i class='fa fa-trash'></i> </span>" + txt + "</li>");
        $(this).val("");
        setTodo();
    }
})

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

$("#reset").click(function(){
    resetTodos();
    $("input[type='text'").val("");
});


$(document).ready(function () {
      todos = getTodo();
      console.log(todos);
      
      if (todos == null){
          todos = defaultTodos;
      }
      $('ul').html(todos);
});