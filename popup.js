$(document).ready(function() {


chrome.tabs.getSelected(null, function(tab) {
    $("#url").val(tab.url);
});


  /* Form inputs */
  var title = $("#title");
  var url = $("#url");
  var price = $("#price");
  var gender = $("#gender");
  var vibe = $("#vibe");
  var apparel = $("#apparel");


  /*
        Title:   <input type="text" name="title" id="title">
        URL:     <input type="text" name="url" id="url">
        Price:   <input type="text" name="price" id="price">
        Gender:  <input type="text" name="gender" id="gender">
        Vibe:    <input type="text" name="vibe" id="vibe">
        Apparel: <input type="text" name="apparel" id="apparel">

  */

  function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default, if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}


  function validate() {
   if( title.val() == "" )
   {
     alert( "Please provide your name!" );
     return false;
   }
   if( url.val() == "" )
   {
     alert( "Please provide your Email!" );
     return false;
   }
   if( price.val() == "" ||
           isNaN( parseFloat(price.val()) ))
   {
     alert( "Please provide a price." );
     return false;
   }
   return( true );
}  

  $('#form_submit').click(function() {





  /* Form inputs */
  var title = $("#title");
  var url = $("#url");
  var price = $("#price");
  var gender = $("#gender");
  var vibe = $("#vibe");
  var apparel = $("#apparel");


    if (validate()){



//    var base_url = "localhost:3000/items/new?"
  var base_url = "https://aveece.com/items/new?";
  base_url += ("title=" + title.val());
  base_url += ("&url=" + url.val());
  base_url += ("&price=" + price.val());
  base_url += ("&gender=" + gender.val());
  base_url += ("&vibe=" + vibe.val());
  base_url += ("&apparel=" + apparel.val());
  base_url += ("&user_id=" + "99");



var xhr = new XMLHttpRequest();
xhr.open("GET", base_url, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
  //  var resp = JSON.parse(xhr.responseText);
  }
}
xhr.send();


//  window.open(base_url);
/*
$.ajax({
     url:base_url,
     dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
     success:function(json){
         // do stuff with json (in this case an array)
         console.log("success");
         alert("Success");
     },
     error:function(){
         alert("Error");
         console.log("failure");
     },
});
*/

alert("hello");

/*
$.get(base_url, function(data){
  console.log(data);
  alert(data);
  console.log("After wards");
});
*/

    }
  });


});
