const quizData = {
  earthquake: [
    {
      question: "What should you do first during an earthquake?",
      options: [
        "Run outside immediately",
        "Drop, cover, and hold on",
        "Call emergency services",
        "Stand in a doorway"
      ],
      correctAnswer: 1,
      explanation: "The safest immediate action is to drop to the ground, take cover under sturdy furniture, and hold on until the shaking stops."
    },
    {
      question: "Which of these is NOT recommended during an earthquake?",
      options: [
        "Getting under a sturdy desk",
        "Standing near windows",
        "Staying indoors if you're already inside",
        "Protecting your head and neck"
      ],
      correctAnswer: 1,
      explanation: "Windows can shatter during earthquakes, sending glass flying. Stay away from windows, glass, and exterior doors."
    },
    {
      question: "What should be included in an earthquake emergency kit?",
      options: [
        "Only food and water",
        "Only first aid supplies",
        "Food, water, first aid kit, flashlight, and battery-powered radio",
        "Just a flashlight and radio"
      ],
      correctAnswer: 2,
      explanation: "A complete emergency kit should include food, water, first aid supplies, flashlight, battery-powered radio, and other essential items."
    },
    {
      question: "After an earthquake, when is it safe to go back inside a building?",
      options: [
        "Immediately after the shaking stops",
        "After authorities declare it safe",
        "After 10 minutes",
        "Only if you see others entering"
      ],
      correctAnswer: 1,
      explanation: "Wait until authorities have inspected the building and declared it safe. Aftershocks can cause additional damage to weakened structures."
    },
    {
      question: "What is the \"triangle of life\" theory for earthquake safety?",
      options: [
        "A proven safety technique recommended by experts",
        "A controversial theory not supported by earthquake safety experts",
        "A government-approved safety protocol",
        "The safest place to be during an earthquake"
      ],
      correctAnswer: 1,
      explanation: "The 'triangle of life' theory is controversial and not supported by earthquake safety experts. Experts recommend 'Drop, Cover, and Hold On' instead."
    }
  ],
  fire: [
    {
      question: "What should you do if your clothes catch fire?",
      options: [
        "Run to find water",
        "Fan the flames to extinguish them",
        "Stop, drop, and roll",
        "Remove the clothing immediately"
      ],
      correctAnswer: 2,
      explanation: "Stop, drop, and roll is the correct procedure. Stop immediately, drop to the ground, and roll back and forth to smother the flames."
    },
    {
      question: "What is the recommended way to exit a smoke-filled room?",
      options: [
        "Run as fast as possible through the smoke",
        "Crawl low under the smoke",
        "Cover your face with a wet cloth and walk normally",
        "Open windows to clear the smoke first"
      ],
      correctAnswer: 1,
      explanation: "Crawl low under the smoke. Smoke rises, so the air is clearer and cooler near the floor."
    },
    {
      question: "Which type of fire extinguisher is appropriate for electrical fires?",
      options: [
        "Class A (Water)",
        "Class B (Foam)",
        "Class C (Carbon Dioxide or Dry Chemical)",
        "Class D (Metal)"
      ],
      correctAnswer: 2,
      explanation: "Class C extinguishers are designed for electrical fires. Water-based extinguishers can conduct electricity and should never be used on electrical fires."
    },
    {
      question: "What is the most important thing to do before going to sleep each night?",
      options: [
        "Check that all doors are locked",
        "Turn off all lights",
        "Make sure smoke detectors are working",
        "Close all windows"
      ],
      correctAnswer: 2,
      explanation: "Working smoke detectors can alert you to a fire while you're sleeping, potentially saving lives. They should be tested regularly."
    },
    {
      question: "What should you do if you're trapped in a room during a fire?",
      options: [
        "Break a window and jump out",
        "Hide in a closet",
        "Seal doors with wet towels, call for help, and signal from windows",
        "Try to run through the fire to escape"
      ],
      correctAnswer: 2,
      explanation: "Seal doors and vents with wet towels to keep smoke out, call for help, and signal your location from a window if possible."
    }
  ],
  flood: [
    {
      question: "What should you do if you encounter a flooded road while driving?",
      options: [
        "Drive through slowly if the water isn't too deep",
        "Turn around, don't drown",
        "Park and walk through the water",
        "Wait for the water to recede"
      ],
      correctAnswer: 1,
      explanation: "Turn around, don't drown. Just 6 inches of water can cause loss of control and stalling, and 12 inches can float many vehicles."
    },
    {
      question: "Which of these should NOT be done during a flood warning?",
      options: [
        "Move to higher ground",
        "Fill bathtubs with clean water",
        "Wade through moving water to reach safety",
        "Listen to emergency broadcasts"
      ],
      correctAnswer: 2,
      explanation: "Never wade through moving water. Just 6 inches of moving water can knock you down, and the water may be contaminated."
    },
    {
      question: "What is the first thing you should do after returning to a home that was flooded?",
      options: [
        "Check for structural damage",
        "Clean and disinfect everything",
        "Turn on the electricity",
        "Call your insurance company"
      ],
      correctAnswer: 0,
      explanation: "Check for structural damage before entering. The building may be unstable due to water damage."
    },
    {
      question: "Which of these is a sign that you should evacuate your home during heavy rain?",
      options: [
        "Light rain lasting more than one day",
        "Water rising rapidly or evacuation order issued",
        "Cloudy weather forecast for the next week",
        "Minor leaking in the basement"
      ],
      correctAnswer: 1,
      explanation: "If water is rising rapidly or authorities have issued an evacuation order, leave immediately. Don't wait until it's too late."
    },
    {
      question: "What should you do with food that has come into contact with floodwater?",
      options: [
        "Wash it thoroughly and then consume it",
        "Cook it at high temperatures to kill bacteria",
        "Throw it away, including canned goods if they're damaged",
        "Dry it in the sun before consuming"
      ],
      correctAnswer: 2,
      explanation: "Throw away all food that has come into contact with floodwater, including canned goods if they're damaged. Floodwater contains bacteria and contaminants."
    }
  ],
  zombie: [
    {
      question: "Which survival skill would be most important during a zombie apocalypse?",
      options: [
        "Martial arts",
        "First aid and basic medical knowledge",
        "Playing dead",
        "Social media management"
      ],
      correctAnswer: 1,
      explanation: "While this is a fictional scenario, in any emergency, first aid and medical knowledge can save lives. Knowing how to treat injuries and maintain health is crucial."
    },
    {
      question: "What is the most important resource to secure first in a zombie outbreak?",
      options: [
        "Weapons",
        "Electronic devices",
        "Clean water and non-perishable food",
        "Zombie repellent"
      ],
      correctAnswer: 2,
      explanation: "In any disaster, securing clean water and food is the top priority for survival. Humans can only survive a few days without water."
    },
    {
      question: "In terms of real-world disaster preparedness, what does the CDC's zombie preparedness campaign actually teach?",
      options: [
        "How to fight zombies",
        "General emergency preparedness that applies to real disasters",
        "That zombies are a legitimate threat",
        "Government evacuation protocols"
      ],
      correctAnswer: 1,
      explanation: "The CDC's zombie preparedness campaign was created to teach general emergency preparedness in an engaging way. The skills apply to real disasters like hurricanes, earthquakes, and pandemics."
    },
    {
      question: "Which location would be best to avoid during a zombie outbreak?",
      options: [
        "A rural farmhouse",
        "A boat on open water",
        "Densely populated urban centers",
        "A mountain cabin"
      ],
      correctAnswer: 2,
      explanation: "In any contagious outbreak, avoiding densely populated areas reduces exposure risk. This principle applies to real epidemics too."
    },
    {
      question: "What's the best communication strategy during a zombie apocalypse?",
      options: [
        "Post updates on social media",
        "Have a battery-powered or hand-crank radio for emergency broadcasts",
        "Shout to attract rescue teams",
        "Use zombie sounds to blend in"
      ],
      correctAnswer: 1,
      explanation: "In real emergencies, having a battery-powered or hand-crank radio allows you to receive updates even when power and cellular networks are down."
    }
  ],
  alien: [
    {
      question: "What real-world disaster preparedness skill would be most useful during an alien invasion?",
      options: [
        "Speaking foreign languages",
        "Having an emergency plan and supply kit",
        "Astronomical knowledge",
        "Advanced weapon training"
      ],
      correctAnswer: 1,
      explanation: "While this is a fictional scenario, having an emergency plan and supply kit is valuable in any disaster, including natural disasters and civil emergencies."
    },
    {
      question: "In a fictional alien invasion, what communication method would likely be most reliable?",
      options: [
        "Cellular networks",
        "Internet-based communication",
        "Radio communication",
        "Telepathy"
      ],
      correctAnswer: 2,
      explanation: "In any large-scale disaster where infrastructure might be compromised, radio communication (especially with hand-crank or battery-powered radios) tends to be more reliable than systems requiring intact infrastructure."
    },
    {
      question: "What is the primary reason the government recommends having emergency supplies?",
      options: [
        "To prepare for alien invasions",
        "To be self-sufficient during any emergency when services are disrupted",
        "Because shops might run out of your favorite snacks",
        "To have trading goods for bartering"
      ],
      correctAnswer: 1,
      explanation: "Emergency supplies allow you to be self-sufficient during any disaster when normal services (water, electricity, grocery stores) might be disrupted."
    },
    {
      question: "Which of these is an actual FEMA recommendation for emergency preparedness?",
      options: [
        "Stockpile weapons",
        "Build underground bunkers",
        "Have a family communication plan",
        "Learn martial arts"
      ],
      correctAnswer: 2,
      explanation: "FEMA recommends having a family communication plan so everyone knows how to contact each other and where to meet in case of separation during an emergency."
    },
    {
      question: "What's the best way to stay informed during any large-scale emergency?",
      options: [
        "Check social media",
        "Call friends",
        "Follow official emergency broadcasts and alerts",
        "Look out the window"
      ],
      correctAnswer: 2,
      explanation: "Official emergency broadcasts and alerts provide the most reliable information during emergencies. This applies to all disaster scenarios."
    }
  ]
};

export default quizData;