numbering = 0

$('#New').click(function(){
  var name = prompt("Please enter your list:", "");
  if (name == null || name == ''){
    alert("invalid");
    return 
  }
  numbering++;
  setCookie(numbering.toString(), name, 365);  
  appending(name);
});

function appending(name){
  var todo_div = $('<div></div>')
      .text(name)
      .attr('id', numbering)
      .attr('class',"todo-item")
  $('#ft_list').prepend(todo_div);
}

function setCookie(cname, cvalue, exdays){
  const expDate = new Date();
  expDate.setTime(expDate.getTime() + (exdays*24*60*60*1000));
  $.cookie(cname,cvalue,{expires: expDate})
  localStorage.setItem(cname, cvalue);
}

$('#ft_list').on('click', '.todo-item', function(){
  if (confirm("Do you want to delete?")){
    deleteCookie(this.id);
    $(this).remove();
    localStorage.removeItem(this.id);
    numbering--;
  }
});

function deleteCookie(name){
  setCookie(name, null, 0);
}

$(window).on("load", function(){
  numbering = 0;
  var keys = Object.keys(localStorage);
  keys.sort()
  $.each(keys, function(index, key) {
    numbering++;
    var value = localStorage.getItem(key);
    appending(value)
  });
});
