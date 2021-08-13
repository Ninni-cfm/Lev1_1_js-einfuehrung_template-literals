//============================================================================
// Name, Nachname, Alter, Geburtsort, Größe, Gewicht, Hobbys, Computerspiele,
// Lieblingsessen, Lieblingssport, Lieblingsmodemarke, Lieblingsjahreszeit,
// Lieblingsurlaubsort
let firstName = "Klaus";
let lastName = "Nienhaus";
let age = 57;
let placeOfBirth = "Bocholt";
let size = "1.98m";
let weight = "to much 😁!";
let hobbies = "everything about computers, trains - original and model -, and sewing";
let favGames = "all car racing games";
let favFood = "grilled steak, but medium rare!";
let favSport = "soccer and table tennis";
let favClothing = "selfmade";
let favSeason = "summer";
let favVacationResort = "Kenia or South Africa"

//============================================================================
let fullString = `Hello, my name is ${firstName} ${lastName}.\n` +
    `I was born ${age} years ago in a city called ${placeOfBirth}, I'm ${size} tall and I weigh ${weight}\n` +
    `My hobbies are ${hobbies}.\n`;

fullString += `Computer games? If I play I like ${favGames}.\n`;

fullString = fullString.concat(
    `And sports? I like ${favSport}...\n`,
    `What I like to wear? My favorite clothing is ${favClothing} (fits better if you know what I mean 😉).\n`,
    `I like the ${favSeason}, so no wonder that my favorite vacation resorts are ${favVacationResort}, dry, warm and a beach near by.`
);

//============================================================================
document.body.innerHTML = `<p>${replaceCRLF(fullString)}</p>`;
console.log(doubleCRLF(fullString));

//============================================================================
function doubleCRLF(text) {
    let pos = -1;
    while ((pos = text.indexOf("\n", pos + 1)) > -1) {
        text = text.substr(0, pos) + "\n\n" + text.substr(++pos);
    }
    return text;
}

//============================================================================
function replaceCRLF(text) {
    while (text.indexOf("\n") > -1) {
        text = text.replace("\n", "</p><p>");
    }
    return text;
}
