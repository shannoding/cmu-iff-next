let scheduleGrid = document.getElementById("schedule-grid");
let select = document.getElementById("keyword");

let filmJSON = 
{
	"films": 
	[
		{
			"title": "Sorry We Missed You",
			"date": { "month" : "MAR", "day": "19" },
			"specs": {
				"location": ["March 19 (Thursday), 7pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Opening Night Reception", "+ Discussion moderated by Roger Rouse"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=37"
			},
			"page": "../Films/sorry-we-missed-you.html",
			"image": "../Assets/Films/SWMU_poster.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "The Great Green Wall",
			"date": { "month" : "MAR", "day": "20" },
			"specs": {
				"location": ["March 20 (Friday), 7pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Panel Discussion", "+ Food Reception"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=47"
			},
			"page": "../Films/great-green-wall.html",
			"image": "../Assets/Films/The Great Green Wall_Poster.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "America Street",
			"date": { "month" : "MAR", "day": "21" },
			"specs": {
				"location": ["March 21 (Saturday), 1pm", "McConomy Auditorium, CMU"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=38"
			},
			"page": "../Films/america-street.html",
			"image": "../Assets/Films/AMERICA-STREET_2019_POSTER-HR300dpi.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "Garbage",
			"date": { "month" : "MAR", "day": "21" },
			"specs": {
				"location": ["March 21 (Saturday), 1pm", "McConomy Auditorium, CMU"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=38"
			},
			"page": "../Films/garbage.html",
			"image": "../Assets/Films/Garbage_Poster.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "Corpus Christi",
			"date": { "month" : "MAR", "day": "21" },
			"specs": {
				"location": ["March 21 (Saturday), 3pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Panel Discussion", "+ Food Reception"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=39"
			},
			"page": "../Films/corpus-christi.html",
			"image": "../Assets/Films/Corpus Christi_poster.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "Young Ahmed",
			"date": { "month" : "MAR", "day": "21" },
			"specs": {
				"location": ["March 21 (Saturday), 7pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Panel Discussion", "+ Food Reception"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=53"
			},
			"page": "../Films/young-ahmed.html",
			"image": "../Assets/Films/Young Ahmed_Poster.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "Our Mothers",
			"date": { "month" : "MAR", "day": "22" },
			"specs": {
				"location": ["March 22 (Sunday), 3pm", "McConomy Auditorium, CMU"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=42"
			},
			"page": "../Films/our-mothers.html",
			"image": "../Assets/Films/Our Mothers_Poster.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "Transit",
			"date": { "month" : "MAR", "day": "26" },
			"specs": {
				"location": ["March 26 (Thursday), 5pm", "Harris Theater"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=52"
			},
			"page": "../Films/transit.html",
			"image": "../Assets/Films/Transit_Poster.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "So Long, My Son",
			"date": { "month" : "MAR", "day": "27" },
			"specs": {
				"location": ["March 27 (Friday), 7pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Panel Discussion", "+ Food Reception"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=45"
			},
			"page": "../Films/so-long-my-son.html",
			"image": "../Assets/Films/So Long My Son_Poster.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "For Sama",
			"date": { "month" : "MAR", "day": "28" },
			"specs": {
				"location": ["March 28 (Saturday), 6pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Panel Discussion", "+ Food Reception"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=40"
			},
			"page": "../Films/for-sama.html",
			"image": "../Assets/Films/FOR SAMA_poster.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "Out Stealing Horses",
			"date": { "month" : "MAR", "day": "28" },
			"specs": {
				"location": ["March 28 (Saturday), 8pm", "McConomy Auditorium, CMU"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=43"
			},
			"page": "../Films/out-stealing-horses.html",
			"image": "../Assets/Films/Out Stealing Horses_Poster.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "Push",
			"date": { "month" : "MAR", "day": "29" },
			"specs": {
				"location": ["March 29 (Sunday), 3pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Panel Discussion", "+ Food Reception"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=44"
			},
			"page": "../Films/push.html",
			"image": "../Assets/Films/PUSH-Poster.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "The Infiltrators",
			"date": { "month" : "APR", "day": "1" },
			"specs": {
				"location": ["April 1 (Wednesday), 4pm", "Carlow University"],
				"includes": [],
				"tickets": "Free Admission!", "link": "#"
			},
			"page": "../Films/the-infiltrators.html",
			"image": "../Assets/Films/The Infiltrators_Poster.jpg",
			"keywords": [ "week-3"]
		},
		{
			"title": "\"I Do Not Care If We Go Down in History as Barbarians\"",
			"date": { "month" : "APR", "day": "1" },
			"specs": {
				"location": ["April 1 (Wednesday), 6pm", "McConomy Auditorium, CMU"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=41"
			},
			"page": "../Films/barbarians.html",
			"image": "../Assets/Films/I Do Not Care If We Go Down in History as Barbarians_Poster.jpg",
			"keywords": [ "week-3"]
		},
		{
			"title": "The Infiltrators",
			"date": { "month" : "APR", "day": "2" },
			"specs": {
				"location": ["April 2 (Thursday), 7pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Exclusive Q&A with Directors", "+ Food Reception"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=48"
			},
			"page": "../Films/the-infiltrators.html",
			"image": "../Assets/Films/The Infiltrators_Poster.jpg",
			"keywords": [ "week-3"]
		},
		{
			"title": "The Son",
			"date": { "month" : "APR", "day": "3" },
			"specs": {
				"location": ["April 3 (Friday), 6pm", "McConomy Auditorium, CMU"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=50"
			},
			"page": "../Films/the-son.html",
			"image": "../Assets/Films/The Son_Poster.jpg",
			"keywords": [ "week-3"]
		},
		{
			"title": "The Rest",
			"date": { "month" : "APR", "day": "3" },
			"specs": {
				"location": ["April 3 (Friday), 8:30pm", "McConomy Auditorium, CMU"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=49"
			},
			"page": "../Films/the-rest.html",
			"image": "../Assets/Films/The Rest_Poster.jpg",
			"keywords": [ "week-3"]
		},
		{
			"title": "This Is Not A Burial, It's A Resurrection",
			"date": { "month" : "APR", "day": "4" },
			"specs": {
				"location": ["April 4 (Saturday), 7pm", "McConomy Auditorium, CMU"],
				"includes": ["+ Panel Discussion", "+ Food Reception"],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=51"
			},
			"page": "../Films/this-is-not-a-burial.html",
			"image": "../Assets/Films/This is Not a Burial_Poster.jpg",
			"keywords": [ "week-3"]
		},
		{
			"title": "Short Film Competition",
			"date": { "month" : "APR", "day": "5" },
			"specs": {
				"location": ["April 5 (Sunday), 1pm", "Row House Cinema"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=54"
			},
			"page": "../Short_Film_Competition/sfc.html",
			"image": "../Assets/Films/Short Film Competition_2020.jpg",
			"keywords": [ "week-3"]
		},
		{
			"title": "The Cordillera of Dreams",
			"date": { "month" : "APR", "day": "5" },
			"specs": {
				"location": ["April 5 (Sunday), 4:30pm", "McConomy Auditorium, CMU"],
				"includes": [],
				"tickets": "Buy Tickets", "link": "https://commerce.cashnet.com/CMU169?cname=46"
			},
			"page": "../Films/the-cordillera-of-dreams.html",
			"image": "../Assets/Films/The Cordillera of Dreams_Poster.jpg",
			"keywords": [ "week-3"]
		},

	],
	"keywords": ["week-1", "week-2", "week-3"]
};

select.addEventListener("change", function() {
	fill(this.value);
});

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
		let textBox = document.createElement("p");
		textBox.appendChild(document.createTextNode(`${text}`));
		filmInfoBoxLocation.appendChild(textBox);
	});

	let filmInfoBoxIncludes = document.createElement("div");
	fData.specs.includes.forEach(function(text) {
		let textBox = document.createElement("p");
		textBox.appendChild(document.createTextNode(`${text}`));
		filmInfoBoxIncludes.appendChild(textBox);
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