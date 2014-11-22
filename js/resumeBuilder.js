/* var awesomeThoughts = "I am Nathan, and I am awesome!"
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts); */

var formattedName = HTMLheaderName.replace("%data%", "Nathan Miller");
var formattedRole = HTMLheaderRole.replace("%data%", "Customer Service Manager");
$("#header").append(formattedRole);
$("#header").append(formattedName);