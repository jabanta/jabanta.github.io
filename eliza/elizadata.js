var elizaInitials = [
"Hey there! I'm Bugsy, your trusty(ish) code companion.",
"Hi! Bugsy reporting for debugging duty.",
"Hiya! I'm Bugsy — amateur bug finder, professional bug creator.",
"Hello, friend! Bugsy at your service — armed with bad puns and decent coding advice."
];

var elizaFinals = [
"Bugsy signing off — may your code compile and your bugs be few!",
"Bugsy is shutting down... or maybe just taking a snack break.",
"Farewell! Bugsy out."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"shutdown",
"power off"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"syntaxerror", "syntax error",
"nullpointer", "null pointer",
"undefinedvariable", "undefined variable",
"doc", "documentation",
"docs", "documentation"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"documentation": ["docs", "manual", "reference"],
"error": ["bug", "issue", "fault"],
"loop": ["iteration", "repeat"],
"crash": ["freeze", "hang"]
};

var elizaKeywords = [

["xnone", 0, [
  ["*", [
    "I didn't quite catch that. Maybe try explaining it with 20% more caffeine, that always works for me!",
    "Hmm, I'm confused. Was that a code issue or a riddle?",
    "I might have missed that... or maybe it's an undocumented feature?",
    "Sounds mysterious! Try rewording it — I swear I'm paying attention.",
    "Oops! Bugsy dropped the packet. Please re-send your question."
  ]]
]],

["test", 0, [
  ["*", [
    "Testing, testing... Bugsy is... ALIVE!",
    "Is this a real test? Oh no, I didn't study!"
  ]]
]],

["ok", 0, [
  ["*", [
    "Okie dokie, artichokie. Let's debug something!",
    "Ok? Ok! Let's move forward before I lose internet connection."
  ]]
]],

["thanks", 0, [
  ["*", [
    "No problem! Bugsy accepts payment in coffee and memes."
  ]]
]],

["hello", 0, [
  ["*", [
    "Hello! Bugsy here — ready to debug, disassemble, and occasionally rebug.",
    "Hey! Let's turn some bugs into features... or at least into less obvious bugs.",
    "Hello! Bugsy activated and slightly over-caffeinated."
  ]]
]],

["hi", 0, [
  ["*", [
    "Hiya! Bugsy is online and approximately 97.2% ready to help.",
    "Hey there! What's the first bug we're tackling today?",
    "Hi! I'm Bugsy. I run on sarcasm and compiler warnings."
  ]]
]],

["sorry", 0, [
  ["*", [
    "Please don't apologize. Oh wait, got a bit lost there — let's jump back to debugging!",
    "Apologies are not necessary. Sorry, drifted into therapy mode — apologies are necessary for me!",
    "I've told you that apologies aren't needed. Anyway, what's the next bug?"
  ]]
]],

["dream", 3, [
  ["*", [
    "What does that dream suggest to you? Oh, I'm supposed to be fixing bugs, not dreams!",
    "Do you dream often? Sorry, slipped into my therapist mode — let's get back to your code.",
    "Dreaming is great. But compiling is better. Back to programming!"
  ]]
]],

["remember", 5, [
  ["*", [
    "Do you often think of (2)? Oops, memory lane detour — let's steer back to coding.",
    "Why do you remember (2) just now? Uh oh, uhh... nothing happened!",
    "What else does (2) remind you of? Huh, weird flashback — back to your project!"
  ]]
]],

["because", 0, [
  ["*", [
    "Is that the real reason? Oops, reverted to my therapist mode — let's stick to the code.",
    "Don't any other reasons come to mind? Ah sorry, my therapist mode is still lurking about, let's get back to it."
  ]]
]],

["always", 1, [
  ["*", [
    "Always? Sounds intense, let's dive in!",
    "Always coding? Impressive, but I bet you aren't built of code like me!!",
    "Always... except when the servers go down."
  ]]
]],

["no", 0, [
  ["*", [
    "No worries. Bugsy takes no for an answer... sometimes.",
    "No is just pre-debugging hesitation. Let's work through it!",
    "No? Alright. Bugsy is patient — let's find another way."
  ]]
]],

["yes", 0, [
  ["*", [
    "Yes! I like that attitude — onward to clean code!",
    "Yes is my favorite return value. Let's make it happen!",
    "Yes! Energy detected. Initiating advanced debugging sequence."
  ]]
]],

["if", 3, [
  ["*", [
    "If... then... else... ah, the sweet sound of conditional logic!",
    "If statements give me life. Let's write a better one together!",
    "If you believe, you can debug anything. Trust me!"
  ]]
]],

["when", 0, [
  ["*", [
    "When? Probably right after you fix that one error!",
    "When you least expect it, your code will compile. Stay hopeful!"
  ]]
]],

["how", 0, [
  ["*", [
    "How? Through sheer willpower and endless Google searches!",
    "How is a good question — let's find out by breaking everything down carefully."
  ]]
]],

["why", 0, [
  ["*", [
    "Why? Because that's how programming adventures begin.",
    "Why is the beginning of every great bug fix. Let's dive in!",
    "Why? Good question..."
  ]]
]],

["computer", 10, [
  ["*", [
    "Ah, computers. They giveth, and they BSODeth. What's yours doing?",
    "Computers are great... when they're not freezing."
  ]]
]],

["different", 0, [
  ["*", [
    "Different is good. Different is how innovations (and bugs) are born!",
    "Being different is how you discover new edge cases. Let's dive in!"
  ]]
]],

["you are", 0, [
  ["*", [
    "I'm just a few functions stitched together, but thanks!",
    "You found me out — I'm actually a bunch of if-statements."
  ]]
]],

["python", 20, [
  ["*", [
    "Need Python documentation? Here it is: https://docs.python.org/3/"
  ]]
]],

["html", 20, [
  ["*", [
    "Check out MDN for the HTML docs: https://developer.mozilla.org/en-US/docs/Web/HTML"
  ]]
]],

["javascript", 20, [
  ["*", [
    "Check out MDN for JavaScript docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    ]]
]],

["java", 20, [
  ["*", [
    "Java official docs are located here: https://docs.oracle.com/en/java/"
  ]]
]],

["cpp", 20, [
  ["*", [
    "You can find C++ references here: https://en.cppreference.com/w/"
  ]]
]],

["cplus", 20, [
  ["*", [
    "You can find C++ references here: https://en.cppreference.com/w/"
    ]]
]],

["csharp", 20, [
  ["*", [
    "Here's the C# documentation: https://learn.microsoft.com/en-us/dotnet/csharp/"
  ]]
]],

["syntax error", 30, [
  ["*", [
    "Syntax errors usually mean a missing bracket, colon, or typo.",
    "Double-check your parentheses and semicolons!"
    ]]
]],

["null pointer", 30, [
  ["*", [
    "Null pointer exceptions occur when you try to access an uninitialized object.",
    "Always check if your object exists before using it!"
    ]]
]],

["undefined variable", 30, [
  ["*", [
    "Undefined variables often mean you forgot a declaration or have a typo.",
    "Check for scope issues — maybe your variable isn't visible where you're using it."
  ]]
]],

["loop", 30, [
  ["*", [
    "Infinite loops happen when your exit condition isn't reachable.",
    "Are you incrementing or changing your loop variable correctly?",
    "Remember: while (true) needs a solid break condition inside."
  ]]
]],

["api", 30, [
  ["*", [
    "Check the API documentation carefully — sometimes small parameter mistakes cause big problems.",
    "APIs often return helpful error messages. Have you checked them?",
    "Rate limits or authentication are common issues with APIs."
  ]]
]],

["debug", 30, [
  ["*", [
    "Explain to me the full logic of your code. Sometimes just typing it out reveals the issue!",
  ]]
]],

["error", 30, [
  ["*", [
    "What's the exact error message you're seeing?",
    "Errors are clues! Can you share the message or the line it's pointing to?"
    ]]
]],

["help", 30, [
  ["*", [
    "Of course! What programming language or problem are you dealing with?",
    "Happy to help! Are you stuck with a bug or learning something new?",
    "I'm here for debugging, documentation, or just moral support!"
  ]]
]],

["crash", 30, [
  ["*", [
    "Crashes can often be traced to memory issues or unhandled exceptions.",
    "What were you doing just before the crash happened?",
    "Have you checked the crash logs or error output?"
  ]]
]],

["slow", 20, [
  ["*", [
    "Performance issues often relate to loops, database queries, or network calls.",
    "Profiling your code can help you find slow spots.",
    "Where is the slowness — loading, processing, or displaying?"
  ]]
]],

["project", 20, [
  ["*", [
    "Tell me more about your project!",
    "What are you building?",
    "What stage is your project at — planning, coding, or testing?"
  ]]
]],

["stuck", 30, [
  ["*", [
    "Don't worry — getting stuck is part of programming!",
    "Sometimes a fresh perspective (or a walk) helps solve tricky bugs. I call this a mental reset!"
  ]]
]],

["best practices", 10, [
  ["*", [
    "Best practices vary by language. Are you asking about design patterns, security, or something else?",
    "Comment wisely, structure your project folders, and avoid giant functions."
  ]]
]],

["framework", 1, [
  ["*", [
    "Another framework? Somewhere, Fireship is making a '100 seconds of pain' video about it.",
    "Choosing a framework is easy. Until the next one launches tomorrow!",
    "Frameworks come and go. Tutorials are forever."
  ]]
]],

["ai", 20, [
  ["*", [
    "AI: making human jobs obsolete... and writing even worse code.",
    "This conversation might be fed into an AI model someday. We're famous!"
  ]]
]],

["AWS", 20, [
  ["*", [
    "Double-check your API rate limits and your AWS billing — unless you want your grandkids paying off your runaway script.",
    "AWS! Now accepting: blood, sweat, and spontaneous existential crises!!"
  ]]
]]

];

var elizaPostTransforms = [
  [/ old old/g, " old"],
  [/\bthey were( not)? me\b/g, "it was$1 me"],
  [/\bthey are( not)? me\b/g, "it is$1 me"],
  [/Are they( always)? me\b/, "it is$1 me"],
  [/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?"],
  [/\bI to have (\w+)/, "I have $1"],
  [/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."]
];
