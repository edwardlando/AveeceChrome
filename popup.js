

function getCookies(domain, name, callback) {
  chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
    if(callback) {
      callback(cookie.value);
    }
  });
}


function validate() {
 if( $("#title").val() == "" )
 {
   return false;
 }
 if( $("#url").val() == "" )
 {
   return false;
 }
 if( $("#price").val() == "" )
 {
   return false;
 }
 return( true );
} 

function checkPresenceOfCookie() {
  $("#must_login").show(400);
} 



        

$(document).ready(function() {


    chrome.tabs.getSelected(null, function(tab) {
      $("#url").val(tab.url);
    });



    getCookies("https://www.aveece.com", "aveece_user_id", function(uid) {

      $('#form_submit').click(function() {


          /* Form inputs */
          var title = $("#title").val();
          var url = $("#url").val();
          var price = $("#price").val();
          var gender = $("#gender").val();
          var vibe = $("#vibe").val();
          var apparel = $("#apparel").val();

          if (validate() && uid != null){
              var base_url = "https://www.aveece.com/items/new?";
              base_url += ("title=" + title);
              base_url += ("&url=" + url);
              base_url += ("&price=" + price);
              base_url += ("&gender=" + gender);
              base_url += ("&vibe=" + vibe);
              base_url += ("&apparel=" + apparel);
              base_url += ("&user_id=" + uid);
   
            window.open(base_url);

            } 
          else {
  
          }
        });
      
    });
});
