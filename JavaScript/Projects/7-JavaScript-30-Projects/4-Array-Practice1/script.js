// ## Array Cardio Day 1

// Array of objects
const inventors = [
{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array of people's name: lastname, firstname
const people = [
'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let firstInventors = inventors.filter(function (element)
{
    if(element.year >= 1500 && element.year < 1600)
    {
        return true;
    }
});
console.log(firstInventors);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let secondInventors = inventors.map(function (element)
{
    let fullName = element.first + " " + element.last;
    return fullName;
});
console.log(secondInventors);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort(function (element1, element2)
{
    // Sorts on the basis of year in descending order
    return (element2.year - element1.year);
});
console.log(inventors);
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let thirdInventors = inventors.reduce(function (accumulator, element)
{
    return (accumulator + (element.passed - element.year));
}, 0);
console.log(`The inventors lived for ${thirdInventors} years together`);
// 5. Sort the inventors by years lived
inventors.sort(function (element1, element2)
{
    let firstLived = (element1.passed - element1.year);
    let secondLived = (element2.passed - element2.year);
    return (firstLived - secondLived);
});
console.log(inventors);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
let boulevards = 
["City walls of Paris",
"Thiers wall",
"Wall of Charles",
"Wall of Philip II Augustus",
"City gates of Paris",
"Haussmann's renovation of Paris",
"Boulevards of the Marshals",
"Boulevard Auguste-Blanqui",
"Boulevard Barbès",
"Boulevard Beaumarchais",
"Boulevard de l'Amiral-Bruix",
"Boulevard des Capucines",
"Boulevard de la Chapelle",
"Boulevard du Général-d",
"Boulevard des Italiens",
"Boulevard de Magenta",
"Boulevard Malesherbes",
"Boulevard du Montparnasse",
"Boulevard Raspail",
"Boulevard Saint-Germain",
"Boulevard de Sébastopol",
"Boulevard de Strasbourg",
"Boulevard du Temple",
"Boulevard Voltaire"];

let firstBoulevard = boulevards.filter(function (element)
{
    if(element.includes("de"))
    {return element;}
});
console.log(firstBoulevard);

// 7. sort Exercise
// Sort the people alphabetically by last name
let peopelLastName = people.map(function (element)
{
    let lastname = element.split(",");                  // Extract last name from each full name
    return lastname[0];
});
peopelLastName.sort();                                  // Sorts alphabetically by default
console.log(peopelLastName);
// 8. Reduce Exercise
// Count the instances of each of these vehicles
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// Since, reduce returns single value. So, to get count of all vehicles, we return an object
let count = data.reduce(function (accumulator, element)
{
    if(!accumulator[element])                           // Check if 'element' exists as 'key'in object using []
    {accumulator[element] = 0;}                         // Create the 'element' key with '0' value if not existed in object
    accumulator[element]++;                             // Increment the vehicle count if already existed
    return accumulator;
}, {});                                                 // Here, we declare 'accumulator' as empty object
console.log(count);