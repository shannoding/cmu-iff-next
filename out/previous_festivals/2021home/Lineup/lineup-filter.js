let lineupGrid = document.getElementById("lineup-grid");
let select = document.getElementById("keyword");

let filmJSON = 
{
	"films": 
	[
		{
			"title": "America Street",
			"director": "Director Idrissou Mora-Kpai",
			"specs": {
				"country": "USA",
				"year": "2019",
				"runtime": "74 min"
			},
			"page": "../Films/america-street.html",
			"image": "../Assets/Films/America_Street_Film_Still.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "The Cordillera of Dreams",
			"director": "Director Patricio Guzmán",
			"specs": {
				"country": "Chile/France",
				"year": "2020",
				"runtime": "84 min"
			},
			"page": "../Films/the-cordillera-of-dreams.html",
			"image": "../Assets/Films/The_Cordillera_of_Dreams_Film_Still.jpg",
			"keywords": ["week-3"]
		},
		{
			"title": "Corpus Christi",
			"director": "Director Jan Komasa",
			"specs": {
				"country": "Poland",
				"year": "2019",
				"runtime": "115 min"
			},
			"page": "../Films/corpus-christi.html",
			"image": "../Assets/Films/Corpus_Christi_Film_Still.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "For Sama",
			"director": "Directors Waad Al-Kateab & Edward Watts",
			"specs": {
				"country": "Syria/UK/USA",
				"year": "2019",
				"runtime": "100 min"
			},
			"page": "../Films/for-sama.html",
			"image": "../Assets/Films/For_Sama_Film_Still.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "Garbage",
			"director": "Director Jose Muniain",
			"specs": {
				"country": "USA",
				"year": "2019",
				"runtime": "18 min"
			},
			"page": "../Films/garbage.html",
			"image": "../Assets/Films/Garbage_Film_Still.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "The Great Green Wall",
			"director": "Director Jared P. Scott",
			"specs": {
				"country": "UK",
				"year": "2019",
				"runtime": "90 min"
			},
			"page": "../Films/great-green-wall.html",
			"image": "../Assets/Films/The_Great_Green_Wall_Film_Still.jpg",
			"keywords": ["week-1"]
		},
		{
			"title": "\"I Do Not Care If We Go Down in History as Barbarians\"",
			"director": "Director Radu Jude",
			"specs": {
				"country": "Romania/Germany/Bulgaria/France/Czech Republic",
				"year": "2018",
				"runtime": "140 min"
			},
			"page": "../Films/barbarians.html",
			"image": "../Assets/Films/Barbarians_Film_Still.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "The Infiltrators",
			"director": "Directors Cristina Ibarra & Alex Rivera",
			"specs": {
				"country": "USA",
				"year": "2019",
				"runtime": "95 min"
			},
			"page": "../Films/the-infiltrators.html",
			"image": "../Assets/Films/The_Infiltrators_Film_Still.jpg",
			"keywords": ["week-3"]
		},
		{
			"title": "Our Mothers",
			"director": "Director César Díaz",
			"specs": {
				"country": "Belgium/Guatemala",
				"year": "2019",
				"runtime": "78 min"
			},
			"page": "../Films/our-mothers.html",
			"image": "../Assets/Films/Our_Mothers_Film_Still.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "Out Stealing Horses",
			"director": "Director Hans Petter Moland",
			"specs": {
				"country": "Norway/Sweden/Denmark",
				"year": "2020",
				"runtime": "123 min"
			},
			"page": "../Films/out-stealing-horses.html",
			"image": "../Assets/Films/Out_Stealing_Horses_Film_Still.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "Push",
			"director": "Director Fredrik Gertten",
			"specs": {
				"country": "Sweden",
				"year": "2019",
				"runtime": "92 min"
			},
			"page": "../Films/push.html",
			"image": "../Assets/Films/Push_Film_Still.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "The Rest",
			"director": "Director Ai Weiwei",
			"specs": {
				"country": "Germany",
				"year": "2019",
				"runtime": "78 min"
			},
			"page": "../Films/the-rest.html",
			"image": "../Assets/Films/The_Rest_Film_Still.png",
			"keywords": ["week-3"]
		},
		{
			"title": "So Long, My Son",
			"director": "Director Wang Xiaoshuai",
			"specs": {
				"country": "China",
				"year": "2019",
				"runtime": "185 min"
			},
			"page": "../Films/so-long-my-son.html",
			"image": "../Assets/Films/So_Long_My_Son_Film_Still.jpg",
			"keywords": [ "week-2"]
		},
		{
			"title": "The Son",
			"director": "Director Ines Tanovic",
			"specs": {
				"country": "Bosnia and Herzegovina",
				"year": "2019",
				"runtime": "106 min"
				},
			"page": "../Films/the-son.html",
			"image": "../Assets/Films/The-Son-Film-Still.jpg",
			"keywords": ["week-3"]
		},
		{
			"title": "Sorry We Missed You",
			"director": "Director Ken Loach",
			"specs": {
				"country": "UK/France/Belgium",
				"year": "2019",
				"runtime": "100 min"
			},
			"page": "../Films/sorry-we-missed-you.html",
			"image": "../Assets/Films/sorry-film-still.jpg",
			"keywords": [ "week-1"]
		},
		{
			"title": "This is Not a Burial, It’s a Resurrection",
			"director": "Director Lemohang Jeremiah Mosese ",
			"specs": {
				"country": "Lesotho/South Africa/Italy",
				"year": "2019",
				"runtime": "119 min"
			},
			"page": "../Films/this-is-not-a-burial.html",
			"image": "../Assets/Films/This_is_Not_a_Burial_Film_Still.jpg",
			"keywords": ["week-3"]
		},
		{
			"title": "Transit",
			"director": "Director Christian Petzold",
			"specs": {
				"country": "Germany/France",
				"year": "2019",
				"runtime": "101 min"
				},
			"page": "../Films/transit.html",
			"image": "../Assets/Films/transit.jpg",
			"keywords": ["week-2"]
		},
		{
			"title": "Young Ahmed",
			"director": "Directors Jean-Pierre & Luc Dardenne",
			"specs": {
				"country": "Belgium/France",
				"year": "2019",
				"runtime": "84 min"
				},
			"page": "../Films/young-ahmed.html",
			"image": "../Assets/Films/LE_JEUNE_AHMED_Photo_1_Christine-Plenus.jpg",
			"keywords": ["week-1"]
		}
		
	], 

	"keywords": ["week-1", "week-2", "week-3"]
};

select.addEventListener("change", function() {
	fill(this.value);
});

let data = filmJSON.films;
init_fill();
function init_fill() {
	lineupGrid.innerHTML = "";
		// Fill all
	for (let i = 0; i < data.length; i++) {
		lineupGrid.appendChild(makeFilmBox(data[i]))

	}
}
function fill(keyword) {
	if (keyword === "") {
		// Fill all
		for (let i = 0; i < data.length; i++) {
			lineupGrid.children[i].style.display = "block";

		}
		return;
	}

	for (let i = 0; i < data.length; i++) {
		console.log(lineupGrid.children);
		if (data[i].keywords.includes(keyword)) {
			lineupGrid.children[i].style.display = "block";
		}
		else {
			lineupGrid.children[i].style.display = "none";
		}
	}


}

function makeFilmBox(fData) {
	let filmBox = document.createElement("div");
	filmBox.className = "lineup-film";

	let filmImageLink = document.createElement("a");
	filmImageLink.setAttribute("href", `${fData.page}`);
	let filmImageBox = document.createElement("img");
	filmImageBox.setAttribute("src", `${fData.image}`);
	filmImageLink.appendChild(filmImageBox);

	let filmTitleBox = document.createElement("p");
	filmTitleBox.className = "lineup-film-title";
	let filmTitleLink = document.createElement("a");
	filmTitleLink.setAttribute("href", `${fData.page}`);
	filmTitleLink.appendChild(document.createTextNode(`${fData.title}`));
	filmTitleBox.appendChild(filmTitleLink);

	let filmDirectorBox = document.createElement("p");
	filmDirectorBox.className = "lineup-film-director";
	filmDirectorBox.appendChild(document.createTextNode(`${fData.director}`));

	let filmInfoBox = document.createElement("p");
	filmInfoBox.className = "lineup-film-info";
	filmInfoBox.appendChild(document.createTextNode(`${fData.specs.country} | ${fData.specs.year} | ${fData.specs.runtime}`));

	filmBox.appendChild(filmImageLink);
	filmBox.appendChild(filmTitleBox);
	filmBox.appendChild(filmDirectorBox);
	filmBox.appendChild(filmInfoBox);

	return filmBox;
}