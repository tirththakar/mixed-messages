// this is a script that will generate a randomised horoscope 
// it will tell the user where their planet is 
// and what their lucky numbers and colours are
// and what they should do today 

planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
star_signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
colors = ['red', 'green', 'blue', 'black', 'white', 'yellow', 'purple', 'orange', 'indigo', 'biege'];
action = ['go swimming', 'play some sport', 'eat some food', 'meet up with friends', 'do some work', 'watch tv', 'go to sleep']

message_components = {
    planets: planets,
    star_signs: star_signs,
    colors: colors,
    action: action
};

rand_color1 = null;
rand_color2 = null;
rand_num1 = 0;
rand_num2 = 0;

while (rand_color1 === rand_color2 || rand_num1 === rand_num2) {
    rand_color1 = message_components.colors[Math.floor(Math.random()*message_components.colors.length)];
    rand_color2 = message_components.colors[Math.floor(Math.random()*message_components.colors.length)];
    rand_num1 = Math.floor(Math.random()*100);
    rand_num2 = Math.floor(Math.random()*100);
};

rand_planet = message_components.planets[Math.floor(Math.random()*message_components.planets.length)];
rand_action = message_components.action[Math.floor(Math.random()*message_components.action.length)];
rand_sign = message_components.star_signs[Math.floor(Math.random()*message_components.star_signs.length)];
is_retrograde = Math.random() < 0.5 ? ' (retrograde)' : '';

let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

console.log(`Your horoscope for ${today}: \n`);
console.log(`${rand_planet}${is_retrograde} is in ${rand_sign}!`);
console.log(`Your lucky numbers for today are ${rand_num1} and ${rand_num2}!`);
console.log(`You should wear something ${rand_color1} or ${rand_color2} today!!`);
console.log(`And perhaps try to ${rand_action}...`);
console.log(`\nCome back tomorrow to see your new horoscope :)`)