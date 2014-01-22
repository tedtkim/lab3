'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('.jumbotron button').text("Test Successful!");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	// Making all img and p elements (except those in class title) hidden
	// by default, and will be toggled by projectClick
	$('.project img').toggle(0);
	$('.project p').not('.title').toggle(0);

	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(function(e) {
		var project = $($("#project").val());

		// animate width to new value
		var width = $("#width").val();
		if (width != "Width") {
			project.width(width);
		}

		// change project description text if visible
		var descriptionText = $("#description").val();
		if (descriptionText != "Project description") {
		    var description = $(project).find(".project-description p");
		    if (description.is(":visible")) {
		    	description.text(descriptionText);
		    }
		}
	});
}

function projectClick(e) { 
	/* First code
	console.log("Project clicked");

    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");
	*/

    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
	   
	   description = $(containingProject).find(".project-description p");
       description.toggle(0);	// Doing this to align with toggles below	
    }

    /* Removing this to achieve stretch goal, done through toggling 
    else { 
       description.fadeOut();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
	*/

    // Stretch goal code to show/hide project image and description
    containingProject.find("img").toggle(0);
    containingProject.find("p").not("title").toggle(0);
}