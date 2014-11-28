var bio = {
	"name" : "Nathan Miller",
	"role" : "Aspiring Web Developer",
	"welcomeMessage": "Want to know more about me?",
	"contacts" : {
		"mobile": "555-555-1212",
		"email": "aricept@gmail.com",
		"github": "aricept",
		"location": "Lafayette, LA"
	},
	"skills" : ["Object-Oriented Programming", "Customer Service", "HTML", "CSS", "JavaScript", "jQuery"],
	"bioPic": "images/me.jpg"
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// $("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#main").prepend(formattedName+formattedRole);
var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMsg);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);

function contactsDisplay() {
	for (contact in bio.contacts) {
		formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
		formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
	}
}

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Customer Service Team Manager",
			"location": "Lafayette, LA",
			"dates": "December 2012 - Present",
			"description": "Responsible for coaching, mentoring, and evaluating teams of 12+ front-line representatives in assisting our iPhone customers."
		},
		{
			"employer": "AT&T",
			"title": "Customer Service Representative",
			"location": "Lafayette, LA",
			"dates": "September 2008 - December 2012",
			"description": "Front-line representative in various departments, including retention, general care, and iPhone customer care.  Assisted with training of new hires to departments.  Particpated in trial of support by chat functionality."
		},
		{
			"employer": "Cypress Bend Resort",
			"title": "Guest Services Manager",
			"location": "Many, LA",
			"dates": "March 2006 - July 2008",
			"description": "Sole on-site evening manager for mid-sized golf resort.  Oversaw all operations of front desk.  Assisted with all functionality across resort, including housekeeping, food & beverage, and golf operations."
		}
	]
}


var education = {
	"school": "Northwestern State University of Louisiana",
	"location": "Natchitoches, LA",
	"major": "English",
	"degree": "Bachelor of Arts",
	"dates": "Expected 2016",
	"online": [
		 {
		"title": "Front-End Web Developer",
		"school": "Udacity",
		"dates": "November 2014",
		"url": "http://www.udacity.com/course/nd001"
		}
		]
};

education.display = function() {
	$("#education").append(HTMLschoolStart);
	var formattedSchool = HTMLschoolName.replace("%data%", education.school);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.degree);
	$(".education-entry:last").append(formattedSchool + formattedDegree);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.location);
	$(".education-entry:last").append(formattedLocation);
	var formattedDates = HTMLschoolDates.replace("%data%", education.dates);
	$(".education-entry:last").append(formattedDates);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.major);
	$(".education-entry:last").append(formattedMajor);
	$("#education").append(HTMLonlineClasses);
	for (course in education.online) {
$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.online[course].title);
var formattedSchool = HTMLonlineSchool.replace("%data%",education.online[course].school);
var formattedDates = HTMLonlineDates.replace("%data%", education.online[course].dates);
var formattedUrl = HTMLonlineURL.replace("%data%", education.online[course].url);
formattedUrl = formattedUrl.replace("#", education.online[course].url);
$(".education-entry:last").append(formattedTitle+formattedSchool+formattedDates+formattedUrl);
	}
}

var projects = {
	"projects": [
		{
			"title": "Behavior Grid: Touch",
			"dates": "October 2014",
			"description": "Designed and implemented behavior grid in HTML/CSS/Javascript geared toward use on touch interfaces.  Coded around limitations required for use of IE8 for the project.  Created memo-generator from the choices made in the grid using ActiveX API."
		},
		{
			"title": "Rerate Calculator",
			"dates": "February 2014 ",
			"description": "Designed and implemented a calculator to assist with rating difference between overages and a new plan, and generating a note to explain the calculaton.  Implemented using HTML, CSS, JavaScript and jQuery.  Utilized PIE.css to make additional CSS finctionality available in IE8."
		},
		{
			"title": "AT&T Next Calculator",
			"dates": "March 2014",
			"description": "Demonstrates the cost differences between purchasing a device on a 2-year contract vs AT&T Next.  Implemented in HTML/CSS/Javascript."
		}
	]
}

if(bio.skills) {
	$("#header").append(HTMLskillsStart);
	for (var i = bio.skills.length - 1; i >= 0; i--) {
		formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
};

function displaywork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedJob+formattedTitle+formattedLocation+formattedWorkDates+formattedDescription);

	}
}



projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectTitle+formattedProjectDates+formattedProjectDescription);
	}
}

$("#name").slide = function() {}

projects.display();
displaywork();
education.display();
contactsDisplay();