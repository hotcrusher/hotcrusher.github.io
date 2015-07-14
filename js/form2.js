document.writeln("<form class=\"form-horizontal\" method=\"post\" name=\"form\" action=\"http://inquiry.sbmchina.com/updata.php\" onsubmit=\"return(CheckfootInput())\">");
document.writeln("<table border=\"1\" cellspacing=\"1\">");
document.writeln("<tr>");
document.writeln("<td><input name=\"name\" type=\"text\" class=\"input-xlarge namebg\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'Name:*\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'Name:*\';this.style.color=\'#999\';};\" value=\"Name:*\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><input name=\"email\" type=\"text\" class=\"input-xlarge emailbg\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'Email:*\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'Email:*\';this.style.color=\'#999\';};\" value=\"Email:*\" size=\"25\" maxlength=\"50\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><input name=\"phone\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'Phone:*\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'Phone:*\';this.style.color=\'#999\';};\" value=\"Phone:*\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><textarea name=\"content\" cols=\"45\" rows=\"6\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'Message:*\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'Message:*\';this.style.color=\'#999\';};\">Message:*</textarea></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td  class=\"submit\" ><input  type=\"submit\" value=\"Submit Now\" class=\"btn btn-primary\" /></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</form>");
function is_number(str) {
exp = /[^0-9 .+()-]/g;
if (str.search(exp) != -1) {
return false;
}
return true;
}
function is_email(str) {
if ((str.indexOf("@") == -1) || (str.indexOf(".") == -1)) {
return false;
}
return true;
}
function CheckfootInput(){

if(document.form.name.value==''||document.form.name.value=='Name:*'){
alert("Please Write Your Name ^_^");
document.form.name.focus();
return false; 
}

if(document.form.email.value==''||document.form.email.value=='Email:*'||!is_email(document.form.email.value)){
alert("Please Write Your Email ^_^");
document.form.email.focus();
return false; 
}

if(document.form.content.value==''||document.form.content.value=='Message:*'){
alert("Please Write Your Message ^_^");
document.form.content.focus();
return false; 
}

if(document.form.capacity.value=='As: 20 TPH'){
document.form.capacity.value='';
}

if(document.form.title.value=='As: Marble'){ 
document.form.title.value=''; 
}

if(document.form.phone.value=='Phone:*'){
document.form.phone.value = ''; 
}

return true;
}