

  function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
      if(callback) {
        callback(cookie.value);
      }
    });
  }

function getAveeceCookie(domain,name,callback){
    getCookies(domain,name,callback);
    setTimeout(5000);
}



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



 $('#form_submit').click(function() {
//
//usage:



  /* Form inputs */
  var title = $("#title");
  var url = $("#url");
  var price = $("#price");
  var gender = $("#gender");
  var vibe = $("#vibe");
  var apparel = $("#apparel");

    function validate() {
   if( title.val() == "" )
   {
     alert( "Please provide a title!" );
     return false;
   }
   if( url.val() == "" )
   {
     alert( "Please provide a url!" );
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

  if (validate()){

    getAveeceCookie("https://www.aveece.com","aveece_user_id",function(data){
      
    });

    if (uid != null) {
      alert(uid);
      console.log(uid);

//    var base_url = "localhost:3000/items/new?"
var base_url = "https://www.aveece.com/items/new?";
base_url += ("title=" + title.val());
base_url += ("&url=" + url.val());
base_url += ("&price=" + price.val());
base_url += ("&gender=" + gender.val());
base_url += ("&vibe=" + vibe.val());
base_url += ("&apparel=" + apparel.val());
base_url += ("&user_id=" + uid);
window.open(base_url);
}
else {
  console.log("UID WAS NULL");
  console.log(uid);
  alert("FAILURE- must log in");
}
}

});


});
