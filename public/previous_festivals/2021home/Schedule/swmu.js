// This isn't functional! Use schedule-filter for the real thing.

let scheduleGrid = document.getElementById("schedule-grid");
let select = document.getElementById("keyword");

let filmJSON = 
{
	"films": 
	[
		{
			"title": "Sorry We Missed You",
			"date": { "month" : "MAY", "day": "16-23" },
			"specs": {
				"location": ["Tickets on sale May 16 to May 23", "Film available for streaming for 5 days after ticket purchase."],
				"includes": ["+ May 23: Emulate our opening night by watching the film at 7pm and then joining a free live discussion by Zoom just before 9pm.", "To join the discussion, register in advance <a href='https://cmu.zoom.us/meeting/register/tJUsd-uqrz4oGdHXm1-cekCAJLJ-6tad_DKf' target='_blank'>here</a>."],
				"tickets": "Buy Tickets", "link": "../Tickets/tickets.html"
			},
			"page": "../Films/sorry-we-missed-you.html",
			"image": "../Assets/Films/SWMU_poster.jpg",
			"keywords": [ "week-1"]
		},
	],
	"keywords": ["week-1"]
};

// select.addEventListener("change", function() {
// 	fill(this.value);
// });

let data = filmJSON.films;
init_fill();
function init_fill() {
	scheduleGrid.innerHTML = "";
		// Fill all
	for (let i = 0; i < data.length; i++) {
		scheduleGrid.appendChild(makeFilmBox(data[i]))

	}
}
function fill(keyword) {
	if (keyword === "") {
		// Fill all
		for (let i = 0; i < data.length; i++) {
			scheduleGrid.children[i].style.display = "block";

		}
		return;
	}

	for (let i = 0; i < data.length; i++) {
		console.log(scheduleGrid.children);
		if (data[i].keywords.includes(keyword)) {
			scheduleGrid.children[i].style.display = "block";
		}
		else {
			scheduleGrid.children[i].style.display = "none";
		}
	}


}

function makeFilmBox(fData) {
	let filmBox = document.createElement("div");
	filmBox.className = "schedule-film";

	let filmBoxContainer = document.createElement("div");
	filmBoxContainer.className = "schedule-film-container";

	let filmImageBox = document.createElement("img");
	filmImageBox.className = "schedule-film-image";
	filmImageBox.setAttribute("src", fData.image);

	let filmTextBox = document.createElement("div");
	filmTextBox.className = "schedule-film-text";
	

	let filmTitleBox = document.createElement("p");
	filmTitleBox.className = "schedule-film-title";
	let filmTitleLink = document.createElement("a");
	filmTitleLink.setAttribute("href", `${fData.page}`);
	filmTitleLink.appendChild(document.createTextNode(`${fData.title}`));
	filmTitleBox.appendChild(filmTitleLink);

	let filmDateBox = document.createElement("div");
	filmDateBox.className = "schedule-film-date";
	filmDateBox.innerHTML = `<span>${fData.date.month}</span><span>${fData.date.day}</span>`
	
	let filmInfoBox = document.createElement("div");
	filmInfoBox.className = "schedule-film-info";
	let filmInfoBoxLocation = document.createElement("div");
	fData.specs.location.forEach(function(text) {
		// let textBox = document.createElement("p");
		// textBox.appendChild(document.createTextNode(`${text}`));
		// filmInfoBoxLocation.appendChild(textBox);
		filmInfoBoxLocation.innerHTML += `<p>${text}</p>`;
	});

	let filmInfoBoxIncludes = document.createElement("div");
	fData.specs.includes.forEach(function(text) {
		// let textBox = document.createElement("p");
		// textBox.appendChild(document.createTextNode(`${text}`));
		// filmInfoBoxIncludes.appendChild(textBox);
		filmInfoBoxIncludes.innerHTML += `<p>${text}</p>`;
	});
	
	let filmBoxTickets = document.createElement("a");
	filmBoxTickets.appendChild(document.createTextNode(`${fData.specs.tickets}`));
	filmBoxTickets.setAttribute("href", fData.specs.link);
	
	filmInfoBox.appendChild(filmInfoBoxLocation);
	filmInfoBox.appendChild(filmInfoBoxIncludes);

	filmBoxContainer.appendChild(filmImageBox);
	filmBoxContainer.appendChild(filmDateBox);

	let filmTitleInfoContainerBox = document.createElement("div");

	filmTitleInfoContainerBox.appendChild(filmTitleBox);
	filmTitleInfoContainerBox.appendChild(filmInfoBox);
	filmTextBox.appendChild(filmTitleInfoContainerBox);
	filmTextBox.appendChild(filmBoxTickets);
	filmBoxContainer.appendChild(filmTextBox);

	filmBox.appendChild(filmBoxContainer);

	return filmBox;
}