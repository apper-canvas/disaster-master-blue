const quizData = {
  earthquake: [
    {
      question: "Couch shaking! First move?",
      options: [
        "Run outside screaming",
        "Drop, cover, and hold on",
        "Call mom for dramatic goodbye",
        "Take earthquake selfie"
      ],
      correctAnswer: 1,
      explanation: "Drop, cover, hold on! Netflix will still be there later."
    },
    {
      question: "Earthquake! WORST hiding spot?",
      options: [
        "Under solid table",
        "Next to glass cabinet",
        "Doorway (superhero pose optional)",
        "Under bed (monster-free zone)"
      ],
      correctAnswer: 1,
      explanation: "Glass cabinets = sharp souvenirs shower. Avoid glass during quakes!"
    },
    {
      question: "Earthquake kit must have:",
      options: [
        "Rocks to throw back at Earth",
        "One granola bar (it's quick, right?)",
        "Water, food, first aid kit, flashlight",
        "Earthquake documentary collection"
      ],
      correctAnswer: 2,
      explanation: "Complete kit: water, food, first aid, flashlight. Teddy bears optional!"
    },
    {
      question: "Building's leaning like Pisa. When grab favorite mug?",
      options: [
        "Now - it's irreplaceable!",
        "After inspectors say it's safe",
        "When pizza guy refuses delivery",
        "Send neighbor's cat as scout"
      ],
      correctAnswer: 1,
      explanation: "Wait for pros! Building might go full Pisa during aftershocks."
    },
    {
      question: "'Triangle of life' method legit?",
      options: [
        "Yes! Scientists love it",
        "Nope - stick with drop, cover, hold",
        "Only with perfect triangle shape",
        "Triangle salespeople say yes"
      ],
      correctAnswer: 1,
      explanation: "The 'triangle of life' theory is not supported by earthquake safety experts. It's like using a chocolate teapot - sounds good, doesn't work. Stick with 'Drop, Cover, and Hold On'!"
    }
  ],
  fire: [
    {
      question: "Outfit caught fire during TikTok! Now what?",
      options: [
        "Run fast - wind puts it out!",
        "Jump in neighbor's pool",
        "Stop, drop, roll (make it trend)",
        "Fire selfie: '#TooHotToHandle'"
      ],
      correctAnswer: 2,
      explanation: "Stop, drop, roll works! Smothers flames by cutting off oxygen. Great camera angles too!"
    },
    {
      question: "Gaming room's smoky! How escape?",
      options: [
        "Naruto run through smoke",
        "Crawl low under the smoke",
        "Splash water at smoke",
        "Use gaming chair as shield"
      ],
      correctAnswer: 1,
      explanation: "Smoke rises, so crawl low where air's clearer. Your lungs thank you."
    },
    {
      question: "PC sparking! Which extinguisher?",
      options: [
        "Class A (Water) - tech bath!",
        "Class B (Foam) - PC spa day",
        "Class C (CO2) - for electrical",
        "Class D (Metal) - fire vs metal"
      ],
      correctAnswer: 2,
      explanation: "Class C for electrical fires. Water + electricity = shocking selfie!"
    },
    {
      question: "Before bed, top fire check?",
      options: [
        "Turn off selfie lighting",
        "Hide snack wrappers",
        "Test smoke detectors",
        "Fireproof teddy's PJs"
      ],
      correctAnswer: 2,
      explanation: "Working smoke detectors = guardian angels. Wake you from even lottery-winning dreams."
    },
    {
      question: "Trapped in bedroom fire. Best move?",
      options: [
        "Smash window with duck collection",
        "Hide under bed (fire-proof strategy)",
        "Wet towels at door, signal for help",
        "Text fire inspirational quotes"
      ],
      correctAnswer: 2,
      explanation: "Wet towels block smoke, signal from window for rescue. Keep ducks for emotional support."
    }
  ],
  flood: [
    {
      question: "Flooded road ahead. You:",
      options: [
        "Test car's secret submarine mode",
        "Turn around, don't drown",
        "Wade through (shoes 'waterproof')",
        "Let someone else go first"
      ],
      correctAnswer: 1,
      explanation: "Just 6 inches of water can sweep you away. Car ≠ submarine, despite dealer promises."
    },
    {
      question: "Friend wants flood water splashing. You say?",
      options: [
        "Higher ground (boring adult move)",
        "Fill bathtub with clean water",
        "Urban rafting sounds awesome!",
        "Draft dramatic goodbye texts"
      ],
      correctAnswer: 0,
      explanation: "Flood water = nature's mystery stew. Just 6 inches knocks you down faster than prom rejection."
    },
    {
      question: "Home flooded. First step back?",
      options: [
        "Check structural safety",
        "Start cleaning frenzy",
        "Test all electrical switches",
        "Take 'before' pics for insurance"
      ],
      correctAnswer: 0,
      explanation: "Check structure first! House might be playing Jenga with physics. Roof > photos."
    },
    {
      question: "When evacuate during flood?",
      options: [
        "Weather app shows rain icon",
        "Rising water or officials yell 'GO!'",
        "Cat looks weather-concerned",
        "Damp basement corner"
      ],
      correctAnswer: 1,
      explanation: "Water rising fast or authorities say go? LEAVE! Stuff replaceable, you aren't."
    },
    {
      question: "Flooded fridge. Food status?",
      options: [
        "Soap wash = good as new!",
        "Cook at sun-temperature",
        "Trash everything, even canned beans",
        "Make flood-jerky (apocalypse ready)"
      ],
      correctAnswer: 2,
      explanation: "Floodwater is basically a backstage pass for bacteria and contaminants. If food touched floodwater, it's time for the trash can, not your mouth."
    }
  ],
  zombie: [
    {
      question: "Zombie apocalypse! Best survival skill?",
      options: [
        "TikTok zombie dance moves",
        "Actual first aid skills",
        "Expert playing dead (method acting)",
        "Apocalypse influencer skills"
      ],
      correctAnswer: 1,
      explanation: "First aid = survivor VIP. Zombies already mastered 'playing dead' - find your niche."
    },
    {
      question: "5-minute zombie store raid. Grab?",
      options: [
        "Zombie-bonking bat collection",
        "Latest iPhone (zombies hate tech)",
        "Water and canned food",
        "Zombie spray (fiction aisle)"
      ],
      correctAnswer: 2,
      explanation: "Water and food first! You'll die of thirst in 3 days while zombies wander eternally."
    },
    {
      question: "BFF zombie-bitten. Friendship protocol?",
      options: [
        "Group hug (friendship beats viruses!)",
        "Last selfies #ZombieBFF",
        "Tearful goodbye, then sprint",
        "Gaming marathon for their finale"
      ],
      correctAnswer: 2,
      explanation: "Zombie bites = delayed death with extra teeth. True friendship sometimes means running away fast."
    },
    {
      question: "WORST zombie shelter location?",
      options: [
        "Island (zombies hate swimming)",
        "Shopping mall (movie-approved)",
        "Prison (secure but sad)",
        "Amusement park (mascot zombies!)"
      ],
      correctAnswer: 3,
      explanation: "Amusement parks: crowded and mascots hide zombies. Zombie Mickey or regular Mickey? Too late to ask."
    },
    {
      question: "CDC's zombie guide! Real purpose?",
      options: [
        "Teaching headshot techniques",
        "Sneaky real disaster prep",
        "Government zombie conspiracy",
        "Finding survival-ready citizens"
      ],
      correctAnswer: 1,
      explanation: "CDC used zombies to make disaster prep viral. 'Hurricane readiness' = boring, 'zombie survival' = clicks!"
    }
  ],
  alien: [
    {
      question: "Aliens landed! Which skill works for both alien attacks AND boring Earth disasters?",
      options: [
        "Fluent Klingon",
        "Emergency supply kit",
        "Star navigation",
        "Tinfoil hat fashion"
      ],
      correctAnswer: 1,
      explanation: "Emergency kits work for hurricanes AND aliens! Ray guns can't zap away preparation."
    },
    {
      question: "Aliens fried all tech! How get updates?",
      options: [
        "Tap dead phone repeatedly",
        "Refresh Twitter for #AlienInvasion",
        "Battery-powered radio",
        "Count saucers from window"
      ],
      correctAnswer: 2,
      explanation: "Radio = cockroach of tech. Aliens always forget to disable analog signals!"
    },
    {
      question: "Caught an alien! First question?",
      options: [
        "\"Menu plans for humans?\"",
        "\"Spaceship tour available?\"",
        "\"Earth invasion plans?\"",
        "\"Alien TikTok popular?\""
      ],
      correctAnswer: 2,
      explanation: "Know their plans = survival advantage. But they probably do have space TikTok."
    },
    {
      question: "Alien offers UFO ride. Smart move?",
      options: [
        "Accept! Free space tour!",
        "Decline, request business card",
        "Bring support goldfish",
        "Check UFO safety rating"
      ],
      correctAnswer: 3,
      explanation: "Strange vehicles + unknown beings = bad idea, regardless of planet. Cosmic stranger danger!"
    },
    {
      question: "Aliens broadcasting mind-control! How get real info?",
      options: [
        "Twitter (aliens verified?)",
        "Call conspiracy friend",
        "Official emergency broadcasts",
        "Count saucers from window"
      ],
      correctAnswer: 2,
      explanation: "Emergency broadcasts work during all disasters. Even extraterrestrial ones!"
    }
  ]
};

export default quizData;