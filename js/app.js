/*********************************
 *          DECLARE NAMESPACE
 *********************************/
const slangApp = {}

//jQuery Cache
slangApp.$snarkSection = $('#snarkSection');
slangApp.$darkModeText = $('.darkModeText');
slangApp.$darkModeBackground = $('.darkModeBackground');
slangApp.$resultsSection = $('#resultsSection');
slangApp.$errorText = $('#errorText');
slangApp.$formChoice = $('#formChoice');
slangApp.$displayModeButton = $('#displayModeButton');
slangApp.$abbrvButtons = $('#abbrvButtons');
slangApp.$abbrvChoice = $('.abbrvChoice');
slangApp.$abbrvForm = $('#abbrvForm');
slangApp.$descriptionSection = $('#descriptionSection');
slangApp.$secretDescription = $('#secretDescription');
slangApp.$sendMeBack = $('#sendMeBack');
slangApp.$snarkSection = $('#snarkSection');

// Defining arrays for each letter
slangApp.wordBank = {
    a: ['Apples', 'Arrays', 'Aardvarks', 'Asses', 'Anchors', 'Ants', 'Axes', 'Aptly', 'Annoying', 'Admitting', 'Accordions', 'Alligators', 'Atypical', 'Assimilating', 'Actors', 'Alcoholic', 'Attacking'],
    b: ['By', 'Buy', 'Buying', 'Bees', 'Beets', 'Bashful', 'Bureaucratic', 'Burly', 'Bears', 'Breaching', 'Bolstering', 'Blatant', 'Bizzare', 'Boats', 'Beavers', 'Besmirching', 'Bourgeoisie', 'Birds', 'Big'],
    c: ['Courting', 'Coy', 'Cats', 'Castles', 'Chirping', 'Chickens', 'Captitalism', 'Cars', 'Children', 'Cookies', 'Cooking', 'Cabbages', 'Cacti', 'Catapulting', 'Combing', 'Crows', 'Crowing'],
    d: ['Dogs', 'Dumping', 'Discombobulating', 'Dapper', 'Daft', 'Dubious', 'Dysfunctional', 'Docile', 'Dissenting', 'Dolls'],
    e: ['Eggs', 'Elephants', 'Estaticially', 'Eat', 'Eating', 'Every', 'Egotistic', 'Ears', 'Edgy', 'Ergonomically', 'Euphoric', 'Erratic', 'Elbows', 'Expertly'],
    f: ['Fanning', 'From', 'Flaunting', 'Flaunt', 'Firing', 'Foxes', 'Flatulent', 'Flummoxing', 'Flying', 'Folding'],
    g: ['Gnats', 'Gloves', 'Garbage', 'Gimmicky', 'Grumpy', 'Guitars', 'Gaming', 'Ghosts', 'Ghostly', 'Gnashing', 'Goats', 'Gerbils', 'Gerrymandering'],
    h: ['Heads', 'Heels', 'Hands', 'Hats', 'Hedgehogs', 'Hamsters', 'Harrowing', 'Hairy', 'Heartthrobs'],
    i: ['It\'s', 'Inside', 'Iterating', 'Ineptly', 'Irate', 'Ignoring', 'Impressive', 'Inserting', 'Interrupting', 'Insects', 'Ideas'],
    j: ['Jumping', 'Jaunting', 'Jaded', 'Jackass', 'Juvenile', 'Jumpy', 'Jerry'],
    k: ['Know', 'Kneeling', 'Knees', 'Koalas', 'Kangaroos', 'Knitting', 'Kneading', 'Kitties'],
    l: ['Laughing', 'Lounging', 'Loving', 'Lamenting', 'Let', 'Larry', 'Lenny', 'Love', 'Lately', 'Livid', 'Loathing', 'Lamps'],
    m: ['My', 'Many', 'More', 'Multiplying', 'Monthly', 'Meeting', 'Mocking', 'Meat', 'Moist', 'Malevolent', 'Mellow'],
    n: ['Newts', 'Neanderthals', 'Needing', 'Nefarious', 'Nagging', 'Nonnas'],
    o: ['Off', 'Often', 'Openly', 'Overtly', 'Obfuscating', 'Overthrowing', 'Obtuse', 'Omnipotent', 'Opulent', 'Otters'],
    p: ['Parrots', 'Poignantly', 'Pooping', 'Peeing', 'Puking', 'Pulling', 'Potatoes', 'Producing', 'Pickles', 'Planes', 'Playing', 'Pesky', 'Pizzas'],
    q: ['Quintessentially', 'Quashing', 'Quaking', 'Quirky', 'Quails', 'Queens'],
    r: ['Right', 'Rigorously', 'Rightly', 'Romping', 'Rotating', 'Rampaging', 'Ranting', 'Rats', 'Rabid', 'Raunchy'],
    s: ['Shaking', 'Shaming', 'Saving', 'Scaring', 'Shaving', 'Scraping', 'Sweet', 'Salty', 'Sheep', 'Sheepishly', 'Sleepy', 'Sanctimoniously', 'Sour', 'Shady', 'Shindigs', 'Sugary', 'Snakes', 'Soapy', 'Shook', 'Shooketh', 'Sashaying'],
    t: ['The', 'Those', 'Their', 'Traipsing', 'Throwing', 'Trees', 'Tomatoes', 'Twinks', 'Trucks'],
    u: ['Universally', 'Undermining', 'Unicorns', 'Uncouth', 'Unhinged', 'Unsolicited', 'Upbeat', 'Usurping', 'Underwear', 'Unionized'],
    v: ['Vividly', 'Velociraptor', 'Voracious', 'Voraciously', 'Venting', 'Vindictive', 'Ventriliquists'],
    w: ['Ways', 'Whales', 'Watermelons', 'Waddling', 'Waltzing', 'Wallowing', 'Warily', 'Wary', 'Whimsical', 'Wonky', 'Worms', 'Watching', 'Watches', 'Wrenches'],
    x: ['Xylophones'],
    y: ['Yanking', 'Yoinking', 'Yelling', 'Yodelling', 'Yelling', 'Yummy', 'Yams'],
    z: ['Zesty', 'Zombies', 'Zesting', 'Zany', 'Zapping', 'Zigzagging', 'Zebras']
}

// Snark phrases to display on screen
slangApp.snarkyPhrases = [
    'And now you know! Go show the Twitter world what you\'re made of!',
    'So much knowledge! You\'re going to be a Twitter pro!',
    'Whoa! Slow down there! How much of this sweet knowledge can you handle?!',
    'SO. MUCH. TWITTER. KNOWLEDGE! How do you contain all of this?!',
    'Okay, I think you\'ve had enough. Please rest your brain for a little bit.',
    'Still going? How is your brain not exploding right now?',
    'That\'s it, you need to STOP! No one should have this much knowledge!',
    'Stop this madness! Not even Jack Dorsey knows this much about his own platform!',
    'You are now, LITERALLY, the CEO of Twitter. I don\'t know how you did it, but I think you can stop now!',
    'THAT\'S ENOUGH! NO MORE PHRASES. YOU HAVE EXHAUSTED ALL OF THE KNOWN TWITTER PHRASES IN THE UNIVERSE.',
]

// Snark phrase to display once modeCounter reaches a certain number as defined in the statements below
slangApp.snarkyDisplay = function(){
    if (slangApp.modeCounter === 80) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[9]}</p><button class="finalForm darkModeText">THIS ISN'T EVEN MY FINAL FORM</button>`).on('click', '.finalForm',slangApp.enableSecretMode);
    } else if (slangApp.modeCounter === 69) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[8]}</p>`)
    } else if (slangApp.modeCounter === 58) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[7]}</p>`)
    } else if (slangApp.modeCounter === 47) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[6]}</p>`)
    } else if (slangApp.modeCounter === 40) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[5]}</p>`)
    } else if (slangApp.modeCounter === 34) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[4]}</p>`)
    } else if (slangApp.modeCounter === 25) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[3]}</p>`) 
    } else if (slangApp.modeCounter === 15) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[2]}</p>`)
    } else if (slangApp.modeCounter === 7) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[1]}</p>`)
    } else if (slangApp.modeCounter === 2) {
        slangApp.$snarkSection.html(`<p>${slangApp.snarkyPhrases[0]}</p>`)
    }   
}

// Light and dark mode changer
slangApp.lightDarkMode = function () {
    slangApp.$darkModeText.toggleClass('lightModeText');
    slangApp.$darkModeBackground.toggleClass('lightModeBackground');
}

// Phrase Generator
slangApp.phraseGenerator = function () {

    // Get the value from the button and turn it into an array of letters
    const abbrvChoice = $(this).val();
    const abbrvArray = Array.from(abbrvChoice);

    // Using abbrvArray, grab random word from each wordBank array and push into a new array
    const wordArray = abbrvArray.map(function (choiceArray) {
        const index = Math.floor(Math.random() * slangApp.wordBank[choiceArray].length)
        return slangApp.wordBank[choiceArray][index];
    })

    // Combine wordArray into a string
    const resultString = wordArray.join(" ");

    // Print results to screen
    slangApp.$resultsSection.html(`<h2>${abbrvChoice}</h2><p>${resultString}</p>`);

    // Increase secret mode counter
    slangApp.modeCounter++;

    // Super secret mode snark and button from if statements
    slangApp.snarkyDisplay();
    
}// End of phrase generator

/*********************************
 *          SECRET MODE
 *********************************/
// Secret Mode Counter
slangApp.modeCounter = 0

// Secret Mode Phrase Generator
slangApp.secretModeGenerator = function (event) {

    // Prevent default
    event.preventDefault();

    //Hide input error text
    slangApp.$errorText.addClass("errorHidden");

    // Reset input if anything other than letters are detected.  Display error text under input if true
    if (!/^[A-Za-z]+$/.test($('input').val())){
        slangApp.$errorText.removeClass("errorHidden");
        $('input').val("");
    } 

    // Get the value from the input and turn it into an array of letters
    const abbrvChoice = $('input').val().toLowerCase();
    const abbrvArray = Array.from(abbrvChoice);

    // Using abbrvArray, grab random word from each wordBank array and push into a new array
    const wordArray = abbrvArray.map(function (choiceArray) {
        const index = Math.floor(Math.random() * slangApp.wordBank[choiceArray].length)
        return slangApp.wordBank[choiceArray][index];
    })

    // Combine wordArray into a string
    const resultString = wordArray.join(" ");

    // Print results to screen
    slangApp.$resultsSection.html(`<h2>${abbrvChoice}</h2><p>${resultString}</p>`);
}// End of Secret mode phrase generator

// Enable Secret mode and clear the page
slangApp.enableSecretMode = function () {
    $('header h1').text('You have transcended the internet. Create your own abbreviations and rule the Twitterverse.');
    slangApp.$descriptionSection.remove();
    slangApp.$abbrvButtons.remove();
    slangApp.$snarkSection.remove();
    slangApp.$sendMeBack.removeClass('secretHidden');
    slangApp.$resultsSection.empty();
    slangApp.$secretDescription.removeClass('secretHidden');
    $('input').focus();
}

/*********************************
 *          EVENT LISTENER
 *********************************/
slangApp.eventListeners = function () {
    // Abbreviation button listener to generate phrases
    slangApp.$abbrvChoice.on('click', slangApp.phraseGenerator);

    // Found this at http://jsfiddle.net/EJFbt/45/  and it prevents spacebar from being used on input boxes
    $('input').on({
        keydown: function (e) {
            if (e.which === 32) return false;
        }
    });

    // Input box listener in secret mode to generate phrases
    slangApp.$abbrvForm.on('submit', slangApp.secretModeGenerator);

    // Listener for the button that refreshes the page and brings back original abbreviation buttons
    slangApp.$sendMeBack.on('click', () => location.reload());

    // Light and dark mode button listener
    slangApp.$displayModeButton.on('click', slangApp.lightDarkMode);
}

/*********************************
 *          INIT METHOD
 *********************************/
slangApp.init = function () {
    slangApp.eventListeners();
}

/*********************************
 *          DOCUMENT READY
 *********************************/
$(function () {
    slangApp.init();
})