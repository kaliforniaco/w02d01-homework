console.log("ready..");

//1. A light switch that can be either on or off. =BOOLEAN
	let switchOn=true;
//2. A user's email address. =STRING
	const email="linxkynd@gmail.com";
//3. A spaceship with a hull, laser blasters, tractor beam, and warp drive. =OBJECT
	const heartOfGold = {
		passengers: 7,
		computer: "Eddie",
		improbabilityDrive: true,
		possibleInstances: Infinity
	}

//4. A list of student names from our class. =ARRAY
	let classList=["David", "Elizabeth", "Bowen", "Riley"]

//5. A list of student names from our class, each with a location. =ARRAY
	const Roster=[
	["David", "Evergreen"],
	["Liz", "Kittredge"],
	["Bowen", "Lakewood"],
	["Riley", "Sheridan"]
]

//6. A list of student names from our class, each with a location and each with a list of favorite tv shows. =OBJECT
	const classListDetailed = [
		{
			name: "David",
			location: "Evergreen",
			favoriteMovies: ["Princess Bride","TRON", "Labyrinth"]
		},
		{	name: "Liz",
			location: "Kittredge",
			favoriteMovies: ["New Year's Eve", "Valentine's Day"]
		},
		{
			name: "Bowen",
			location: "Lakweood",
			favoriteMovies: ["Deadpool", "Ready Player One", "Maze Runner"]
		}
]

// Take It Easy

	const rainbowColors = ["Red", "Purple", "Orange", "Yellow", "Green", "Blue"];
	console.log(rainbowColors[5]);

	//called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype
	const davidEpps = {
		favoriteFood: "Fettucini Alfredo",
		hobby: "Multimedia Presentation",
		currentTown: "Kittredge",
		favDatatype: "boolean"
	};

	console.log(davidEpps.hobby);

//-

// Crazy Object

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);



