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
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1].name);

//-

//Object-ception

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo=null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

//-

// BOND FILMS

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
let bondTitles=[];

	for (let i = 0; i < bondFilms.length; i++) {
		bondTitles[i]=(bondFilms[i].title);
	}

console.log(bondTitles);


let oddBonds=[];
 	for (let i = 0; i < bondFilms.length; i++){
 		if (bondFilms[i].year % 2 !== 0){
 		
 			oddBonds[i]=(`${(bondFilms[i].title)}, ${(bondFilms[i].year)}`);
 		}
 		else {
 			oddBonds[i]=``;
 		}
 	}
console.log(oddBonds);

//- fills even years with 'empty' or string - can't strip null from log

// Bond Gross

    		
let revBonds=0;

	for (let i = 0; i < bondFilms.length; i++) {
		revAmt=(bondFilms[i].gross);
		//could check string(x) for exist $, else next
		revStr1=revAmt.replace("$", "");

	let revStr2 = revStr1;
		//could also find j<(length % 3)
    		for (j=1;j<5;j++) {  
    			revStr2 = revStr2.replace(",","");
    		}
    		
	

		revBonds+=Number(revStr2);
		
	}
	console.log(revBonds);
revString=revBonds.toString([10]);
revLength=Math.floor((revString.length)/3);
console.log(revLength);
console.log(revString);
revSplit=revString.split("");
console.log(revSplit);
bondTotal=[]
	for (let k=revString.length-1; k>0; k--){
		for (let l=0; l<3;l++) {
			bondTotal=((revSplit[k])+bondTotal);
			k--;
		}
		bondTotal=(`,${bondTotal}`);
		k++
	}
	
console.log(bondTotal);
//LET IT GO DAVE! Come back later..

//-


 	
