const quizData = {
  earthquake: [
    {
      question: "Your couch is shaking! What's your first move?",
      options: [
        "Run outside screaming",
        "Drop, cover, and hold on",
        "Call mom for a dramatic goodbye",
        "Take a selfie with shaking furniture"
      ],
      correctAnswer: 1,
      explanation: "Drop, cover, and hold on is the right move! Netflix will still be there later."
    },
    {
      question: "It's an earthquake! Which is the WORST hiding spot?",
      options: [
        "Under solid table",
        "Next to glass cabinet",
        "In doorway, superhero pose optional",
        "Under bed, monster-free zone"
      ],
      correctAnswer: 1,
      explanation: "Glass cabinets will shower you with sharp souvenirs. Avoid glass during earthquakes!"
    },
    {
      question: "Your earthquake emergency kit should definitely contain:",
      options: [
        "Cool rocks to throw back at Earth",
        "One granola bar (quakes are quick, right?)",
        "Water, food, first aid, flashlight, radio",
        "Earthquake documentaries for reference"
      ],
      correctAnswer: 2,
      explanation: "A complete kit needs water, food, first aid, flashlight and radio. Teddy bears optional!"
    },
    {
      question: "Your building's now leaning like Pisa. When grab your favorite mug?",
      options: [
        "Now - that mug is irreplaceable!",
        "After inspectors say it's safe",
        "When pizza delivery refuses to come up",
        "Send neighbor's cat in first"
      ],
      correctAnswer: 1,
      explanation: "Wait for professionals! Your apartment might go full Pisa during an aftershock."
    },
    {
      question: "Is the 'triangle of life' earthquake method legit?",
      options: [
        "Yes! Scientists love it",
        "Nope - stick with drop, cover, hold on",
        "Only if you make a perfect triangle shape",
        "Triangle salespeople swear by it"
      ],
      correctAnswer: 1,
      explanation: "The 'triangle of life' theory is not supported by earthquake safety experts. It's like using a chocolate teapot - sounds good, doesn't work. Stick with 'Drop, Cover, and Hold On'!"
    }
  ],
  fire: [
    {
      question: "Your outfit caught fire during a TikTok dance! Now what?",
      options: [
        "Run screaming - wind will blow it out!",
        "Jump in neighbor's pool (emergency excuse)",
        "Stop, drop, and roll like it's trending",
        "Take fire selfie - 'Too hot to handle'"
      ],
      correctAnswer: 2,
      explanation: "Stop, drop, and roll works! It smothers flames by cutting off oxygen. Plus, great views!"
    },
    {
      question: "Gaming room's filled with smoke! How escape?",
      options: [
        "Naruto run through smoke",
        "Crawl low under the smoke",
        "Throw water at smoke",
        "Use leaf blower as smoke shield"
      ],
      correctAnswer: 1,
      explanation: "Smoke rises, so crawl low where air is clearer. Your lungs will thank you."
    },
    {
      question: "PC shooting sparks! Which extinguisher type?",
      options: [
        "Class A (Water) - tech vs nature!",
        "Class B (Foam) - PC bubble bath",
        "Class C (CO2/Dry Chemical) - for electrical fires",
        "Class D (Metal) - fight fire with metal"
      ],
      correctAnswer: 2,
      explanation: "Class C extinguishers are for electrical fires. Water + electricity = shocking results!"
    },
    {
      question: "Before bed, what's the #1 fire safety check?",
      options: [
        "Turn off selfie lighting",
        "Hide midnight snack evidence",
        "Test smoke detectors are working",
        "Dress teddy in fire-resistant PJs"
      ],
      correctAnswer: 2,
      explanation: "Working smoke detectors are your guardian angels. They'll wake you from even lottery-winning dreams."
    },
    {
      question: "Trapped in bedroom during fire. Best strategy?",
      options: [
        "Smash window with rubber ducks",
        "Hide under bed - fire can't see you",
        "Wet towels under door, signal from window",
        "Fight fire with motivational quotes"
      ],
      correctAnswer: 2,
      explanation: "Seal the door with wet towels to block smoke, call for help, and signal your location from the window. The rubber ducks can provide emotional support."
    }
  ],
  flood: [
    {
      question: "Road ahead is flooded. Do you:",
      options: [
        "Test car's submarine mode",
        "Turn around, don't drown",
        "Wade through - shoes are 'waterproof'",
        "Let someone else test it first"
      ],
      correctAnswer: 1,
      explanation: "Just 6 inches of water can sweep you away. Your car isn't a submarine, despite dealer claims."
    },
    {
      question: "Friend wants to splash in flood waters. Your response?",
      options: [
        "Head to higher ground (boring adult)",
        "Fill bathtub with clean water",
        "Agree! Urban rafting sounds fun!",
        "Send dramatic goodbye texts just in case"
      ],
      correctAnswer: 0,
      explanation: "Flood water is nature's mystery stew - full of debris and contaminants. Just 6 inches can knock you down faster than prom rejection."
    },
    {
      question: "Home flooded. First step when returning?",
      options: [
        "Check structural safety",
        "Start cleaning with fancy products",
        "Test all electrical switches",
        "Take 'before' pics for social media"
      ],
      correctAnswer: 0,
      explanation: "Check structure first! Your house might be playing Jenga with physics. No photo worth a roof on your head."
    },
    {
      question: "When to evacuate during flooding?",
      options: [
        "Weather app shows week of rain",
        "Fast-rising water or officials yelling 'GET OUT!'",
        "Cat looks worried about weather",
        "Small puddle in basement"
      ],
      correctAnswer: 1,
      explanation: "When water rises fast or authorities say go, LEAVE! Your stuff is replaceable, you aren't."
    },
    {
      question: "Fridge got flooded. Food status?",
      options: [
        "Wash with soap - good as new!",
        "Cook at nuclear temperatures",
        "Trash it all, even ancient canned beans",
        "Sun-dry everything like apocalypse jerky"
      ],
      correctAnswer: 2,
      explanation: "Floodwater is basically a backstage pass for bacteria and contaminants. If food touched floodwater, it's time for the trash can, not your mouth."
    }
  ],
  zombie: [
    {
      question: "Zombie apocalypse! Which skill makes you survive?",
      options: [
        "TikTok kung fu moves",
        "Actual first aid skills",
        "Playing dead convincingly",
        "Managing apocalypse Instagram"
      ],
      correctAnswer: 1,
      explanation: "First aid makes you the VIP of any survivor group. Zombies already mastered 'playing dead' - don't compete."
    },
    {
      question: "5-minute store raid during zombie outbreak. Grab?",
      options: [
        "Baseball bats for zombie-bonking",
        "Latest iPhone (zombies can't text)",
        "Water and canned food",
        "Zombie repellent (aisle: never)"
      ],
      correctAnswer: 2,
      explanation: "Water and food first! You'll die of thirst in 3 days, while zombies wander for years."
    },
    {
      question: "BFF got zombie-bit. Friendship protocol?",
      options: [
        "Group hug! Friendship beats viruses!",
        "Final selfies #ZombieBFF",
        "Tearful goodbye, then run",
        "PlayStation and snacks for their last hours"
      ],
      correctAnswer: 2,
      explanation: "Separation necessary. Zombie bites = delayed death sentence with extra teeth. True friendship sometimes means running away fast."
    },
    {
      question: "WORST zombie shelter location?",
      options: [
        "Island (zombies can't swim...maybe)",
        "Shopping mall (worked in movies)",
        "Prison (secure but depressing)",
        "Amusement park (mascot hiding spots!)"
      ],
      correctAnswer: 3,
      explanation: "Amusement parks: crowded and mascots hide zombies. Can't tell if it's zombie or Mickey until too late."
    },
    {
      question: "CDC has a zombie guide! Their real purpose?",
      options: [
        "Teaching zombie combat (headshots!)",
        "Sneaky real disaster prep education",
        "Government knows zombies are coming",
        "Identifying survivors by downloads"
      ],
      correctAnswer: 1,
      explanation: "The CDC cleverly used zombies as a teaching tool to get people interested in actual disaster preparedness. They figured 'hurricane readiness' doesn't go viral, but 'zombie survival' does!"
    }
  ],
  alien: [
    {
      question: "Aliens have landed! Which survival skill might actually work for both extraterrestrial invasions AND boring Earth emergencies?",
      options: [
        "Speaking Klingon",
        "Emergency kit with supplies",
        "Constellation navigation skills",
        "Tinfoil hat crafting"
      ],
      correctAnswer: 1,
      explanation: "Emergency kits work for hurricanes, blizzards AND aliens! Ray guns can't zap away good preparation."
    },
    {
      question: "Aliens killed all tech! How get invasion updates?",
      options: [
        "Check phone obsessively",
        "Refresh Twitter for #AlienInvasion",
        "Use emergency radio with buttons",
        "Count flying saucers from window"
      ],
      correctAnswer: 2,
      explanation: "Radio is the cockroach of tech - impossible to kill. Aliens always forget about radio!"
    },
    {
      question: "You caught an alien! First question?",
      options: [
        "\"Planning to eat me?\"",
        "\"Spaceship selfie tour?\"",
        "\"What are your Earth intentions?\"",
        "\"Got alien TikTok?\""
      ],
      correctAnswer: 2,
      explanation: "Knowing their intentions helps survival planning. But they probably do have TikTok."
    },
    {
      question: "Alien offers spaceship ride. Smart move?",
      options: [
        "Accept! Free space tourism!",
        "Politely decline, ask for card",
        "Bring emotional support goldfish",
        "Check spacecraft safety ratings first"
      ],
      correctAnswer: 3,
      explanation: "Strange vehicles + unknown beings = bad idea, regardless of planet origin. Galactic stranger danger!"
    },
    {
      question: "Aliens broadcasting mind-control! Get reliable info how?",
      options: [
        "Check Twitter - aliens verified yet?",
        "Call conspiracy theory friend",
        "Listen to official emergency broadcasts",
        "Count flying saucers from window"
      ],
      correctAnswer: 2,
      explanation: "Official emergency broadcasts are designed to work during disasters. Even alien ones!"
    }
  ]
};

export default quizData;