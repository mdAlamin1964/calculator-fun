import React from 'react'
import { nanoid } from 'nanoid';
import './assets/main.css'
export default function App() {
    const [display, setDisplay] = React.useState("");
    const [math, setMath] = React.useState({});
    const[countIlt, setCountIlt] = React.useState(0);
    const [newDis, setNewDis] = React.useState("");
    const[quotes, setQuotes] = React.useState("");

    let apiOptions ={
        method: 'GET',
        headers: {'x-api-key': 'ChZgW8qKLWoBQjOLM9YYDw==VQeV5rYlXdckgYmd'}
    }

    React.useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/quotes?category=',apiOptions)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },[]);

    console.log("display",display.length);
    // getting click object value
    function handleClick(obj){
        const currentvalue = obj.target.value;
        if((Number(currentvalue) || currentvalue == "." || currentvalue == 0) && display.length < 19) {
            setNewDis("");
            setDisplay(prevDis => prevDis += currentvalue);
            setCountIlt(preConut => preConut + 1);
            setQuotes("")
        } else if(currentvalue == "Ac") {
            setDefault();
        } else if (currentvalue == "☻") {
            showQuotes(quotesRaw[Math.floor(Math.random() * quotesRaw.length)]);
        } else {
            setMath({
                current: Number(display),
                operator: currentvalue
            });
            setDisplay("")
            setNewDis(currentvalue);
        }
    }

  // set default values
    function setDefault() {
        setDisplay("");
        setMath({});
        setCountIlt(0);
        setNewDis("");
        setQuotes("");
    }
    // fixd num result 
    function fixNumber(num) {
        return String(num).includes('.')? num.toFixed(2) : num ;
    }

    // executing math
    function calculation() {
        let result = 0;
        if(display.length > 0) {
            if(math.operator == "x") {
                result = (math.current * Number(display));
            } else if(math.operator == "+") {
                result = (math.current + Number(display));
            } else if(math.operator == "-") {
                result = (math.current - Number(display));
            } else if(math.operator == "/") {
                result = fixNumber(math.current / Number(display));
            } else if(math.operator == "%") {
                result = fixNumber((math.current % Number(display)));
            }
        }
        setNewDis(result);
        setDisplay(result.toString());
        if(countIlt != 0) {
          const indexQuotes = Math.round(result/countIlt);
          const text = quotesRaw[indexQuotes];
          showQuotes(text)
        }
    }
    // displaying butons on the interface
    function addingButtons(value) {
       return (
            <button
                    className={value== "Ac"? `btn btn-ac` : `btn`}
                    onClick={handleClick}
                    value={value}
                    key={nanoid()}
            >{value}</button>
       )
    }


    const btnSaction1 = ["Ac", "%", "x", "/",7 , 8, 9, "-", 4, 5, 6, "+"];
    const btnSaction2 = [1, 2, 3, 0, ".", "☻"];
    const addSaction1 =  btnSaction1.map(n => addingButtons(n));
    const addSaction2 = btnSaction2.map(n => addingButtons(n));
    

    // display happy text

    const quotesRaw = 
        [
            {
              "Author": "Thomas Edison",
              "Quote": "Genius is one percent inspiration and ninety-nine percent perspiration."
            },
            {
              "Author": "Yogi Berra",
              "Quote": "You can observe a lot just by watching."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "A house divided against itself cannot stand."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "Difficulties increase the nearer we get to the goal."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Fate is in your hands and no one elses"
            },
            {
              "Author": "Lao Tzu",
              "Quote": "Be the chief but never the lord."
            },
            {
              "Author": "Carl Sandburg",
              "Quote": "Nothing happens unless first we dream."
            },
            {
              "Author": "Aristotle",
              "Quote": "Well begun is half done."
            },
            {
              "Author": "Yogi Berra",
              "Quote": "Life is a learning experience, only if you learn."
            },
            {
              "Author": "Margaret Sangster",
              "Quote": "Self-complacency is fatal to progress."
            },
            {
              "Author": "Buddha",
              "Quote": "Peace comes from within. Do not seek it without."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "What you give is what you get."
            },
            {
              "Author": "Iris Murdoch",
              "Quote": "We can only learn to love by loving."
            },
            {
              "Author": "Karen Clark",
              "Quote": "Life is change. Growth is optional. Choose wisely."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "You'll see it when you believe it."
            },
            {
              "Author": "",
              "Quote": "Today is the tomorrow we worried about yesterday."
            },
            {
              "Author": "",
              "Quote": "It's easier to see the mistakes on someone else's paper."
            },
            {
              "Author": "",
              "Quote": "Every man dies. Not every man really lives."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "To lead people walk behind them."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "Having nothing, nothing can he lose."
            },
            {
              "Author": "Henry J. Kaiser",
              "Quote": "Trouble is only opportunity in work clothes."
            },
            {
              "Author": "Publilius Syrus",
              "Quote": "A rolling stone gathers no moss."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Ideas are the beginning points of all fortunes."
            },
            {
              "Author": "Donald Trump",
              "Quote": "Everything in life is luck."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "Doing nothing is better than being busy doing nothing."
            },
            {
              "Author": "Benjamin Spock",
              "Quote": "Trust yourself. You know more than you think you do."
            },
            {
              "Author": "Confucius",
              "Quote": "Study the past, if you would divine the future."
            },
            {
              "Author": "",
              "Quote": "The day is already blessed, find peace within it."
            },
            {
              "Author": "Sigmund Freud",
              "Quote": "From error to error one discovers the entire truth."
            },
            {
              "Author": "Benjamin Franklin",
              "Quote": "Well done is better than well said."
            },
            {
              "Author": "Ella Williams",
              "Quote": "Bite off more than you can chew, then chew it."
            },
            {
              "Author": "Buddha",
              "Quote": "Work out your own salvation. Do not depend on others."
            },
            {
              "Author": "Benjamin Franklin",
              "Quote": "One today is worth two tomorrows."
            },
            {
              "Author": "Christopher Reeve",
              "Quote": "Once you choose hope, anythings possible."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "God always takes the simplest way."
            },
            {
              "Author": "Charles Kettering",
              "Quote": "One fails forward toward success."
            },
            {
              "Author": "",
              "Quote": "From small beginnings come great things."
            },
            {
              "Author": "Chinese proverb",
              "Quote": "Learning is a treasure that will follow its owner everywhere"
            },
            {
              "Author": "Socrates",
              "Quote": "Be as you wish to seem."
            },
            {
              "Author": "V. Naipaul",
              "Quote": "The world is always in movement."
            },
            {
              "Author": "John Wooden",
              "Quote": "Never mistake activity for achievement."
            },
            {
              "Author": "Haddon Robinson",
              "Quote": "What worries you masters you."
            },
            {
              "Author": "Pearl Buck",
              "Quote": "One faces the future with ones past."
            },
            {
              "Author": "Brian Tracy",
              "Quote": "Goals are the fuel in the furnace of achievement."
            },
            {
              "Author": "Leonardo da Vinci",
              "Quote": "Who sows virtue reaps honour."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "Be kind whenever possible. It is always possible."
            },
            {
              "Author": "Chinese proverb",
              "Quote": "Talk doesn't cook rice."
            },
            {
              "Author": "Buddha",
              "Quote": "He is able who thinks he is able."
            },
            {
              "Author": "Larry Elder",
              "Quote": "A goal without a plan is just a wish."
            },
            {
              "Author": "Michael Korda",
              "Quote": "To succeed, we must first believe that we can."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Learn from yesterday, live for today, hope for tomorrow."
            },
            {
              "Author": "James Lowell",
              "Quote": "A weed is no more than a flower in disguise."
            },
            {
              "Author": "Yoda",
              "Quote": "Do, or do not. There is no try."
            },
            {
              "Author": "Harriet Beecher Stowe",
              "Quote": "All serious daring starts from within."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "The best teacher is experience learned from failures."
            },
            {
              "Author": "Murray Gell-Mann",
              "Quote": "Think how hard physics would be if particles could think."
            },
            {
              "Author": "John Lennon",
              "Quote": "Love is the flower you've got to let grow."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Don't wait. The time will never be just right."
            },
            {
              "Author": "Pericles",
              "Quote": "Time is the wisest counsellor of all."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "You give before you get."
            },
            {
              "Author": "Socrates",
              "Quote": "Wisdom begins in wonder."
            },
            {
              "Author": "Baltasar Gracian",
              "Quote": "Without courage, wisdom bears no fruit."
            },
            {
              "Author": "Aristotle",
              "Quote": "Change in all things is sweet."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "What you fear is that which requires action to overcome."
            },
            {
              "Author": "Cullen Hightower",
              "Quote": "When performance exceeds ambition, the overlap is called success."
            },
            {
              "Author": "African proverb",
              "Quote": "When deeds speak, words are nothing."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "Real magic in relationships means an absence of judgement of others."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "I never think of the future. It comes soon enough."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Skill to do comes of doing."
            },
            {
              "Author": "Sophocles",
              "Quote": "Wisdom is the supreme part of happiness."
            },
            {
              "Author": "Maya Angelou",
              "Quote": "I believe that every person is born with talent."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "Important principles may, and must, be inflexible."
            },
            {
              "Author": "Richard Evans",
              "Quote": "The undertaking of a new action brings new strength."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "The years teach much which the days never know."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Our distrust is very expensive."
            },
            {
              "Author": "Bodhidharma",
              "Quote": "All know the way; few actually walk it."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "Great talent finds happiness in execution."
            },
            {
              "Author": "Michelangelo",
              "Quote": "Faith in oneself is the best and safest course."
            },
            {
              "Author": "Winston Churchill",
              "Quote": "Courage is going from failure to failure without losing enthusiasm."
            },
            {
              "Author": "Leo Tolstoy",
              "Quote": "The two most powerful warriors are patience and time."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "Anticipate the difficult by managing the easy."
            },
            {
              "Author": "Buddha",
              "Quote": "Those who are free of resentful thoughts surely find peace."
            },
            {
              "Author": "Sophocles",
              "Quote": "A short saying often contains much wisdom."
            },
            {
              "Author": "",
              "Quote": "It takes both sunshine and rain to make a rainbow."
            },
            {
              "Author": "",
              "Quote": "A beautiful thing is never perfect."
            },
            {
              "Author": "Princess Diana",
              "Quote": "Only do what your heart tells you."
            },
            {
              "Author": "John Pierrakos",
              "Quote": "Life is movement-we breathe, we eat, we walk, we move!"
            },
            {
              "Author": "Eleanor Roosevelt",
              "Quote": "No one can make you feel inferior without your consent."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Argue for your limitations, and sure enough theyre yours."
            },
            {
              "Author": "Seneca",
              "Quote": "Luck is what happens when preparation meets opportunity."
            },
            {
              "Author": "Napoleon Bonaparte",
              "Quote": "Victory belongs to the most persevering."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "Love all, trust a few, do wrong to none."
            },
            {
              "Author": "Richard Bach",
              "Quote": "In order to win, you must expect to win."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "A goal is a dream with a deadline."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "You can do it if you believe you can!"
            },
            {
              "Author": "Bo Jackson",
              "Quote": "Set your goals high, and don't stop till you get there."
            },
            {
              "Author": "",
              "Quote": "Every new day is another chance to change your life."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "Smile, breathe, and go slowly."
            },
            {
              "Author": "Liberace",
              "Quote": "Nobody will believe in you unless you believe in yourself."
            },
            {
              "Author": "William Arthur Ward",
              "Quote": "Do more than dream: work."
            },
            {
              "Author": "Seneca",
              "Quote": "No man was ever wise by chance."
            },
            {
              "Author": "",
              "Quote": "Some pursue happiness, others create it."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "He that is giddy thinks the world turns round."
            },
            {
              "Author": "Ellen Gilchrist",
              "Quote": "Don't ruin the present with the ruined past."
            },
            {
              "Author": "Albert Schweitzer",
              "Quote": "Do something wonderful, people may imitate it."
            },
            {
              "Author": "",
              "Quote": "We do what we do because we believe."
            },
            {
              "Author": "Eleanor Roosevelt",
              "Quote": "Do one thing every day that scares you."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "If you cannot be silent be brilliant and thoughtful."
            },
            {
              "Author": "Carl Jung",
              "Quote": "Who looks outside, dreams; who looks inside, awakes."
            },
            {
              "Author": "Buddha",
              "Quote": "What we think, we become."
            },
            {
              "Author": "Lord Herbert",
              "Quote": "The shortest answer is doing."
            },
            {
              "Author": "Leonardo da Vinci",
              "Quote": "All our knowledge has its origins in our perceptions."
            },
            {
              "Author": "",
              "Quote": "The harder you fall, the higher you bounce."
            },
            {
              "Author": "Anne Wilson Schaef",
              "Quote": "Trusting our intuition often saves us from disaster."
            },
            {
              "Author": "Sojourner Truth",
              "Quote": "Truth is powerful and it prevails."
            },
            {
              "Author": "Elizabeth Browning",
              "Quote": "Light tomorrow with today!"
            },
            {
              "Author": "German proverb",
              "Quote": "Silence is a fence around wisdom."
            },
            {
              "Author": "Madame de Stael",
              "Quote": "Society develops wit, but its contemplation alone forms genius."
            },
            {
              "Author": "Richard Bach",
              "Quote": "The simplest things are often the truest."
            },
            {
              "Author": "",
              "Quote": "Everyone smiles in the same language."
            },
            {
              "Author": "Bernadette Devlin",
              "Quote": "Yesterday I dared to struggle. Today I dare to win."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "No alibi will save you from accepting the responsibility."
            },
            {
              "Author": "Walt Disney",
              "Quote": "If you can dream it, you can do it."
            },
            {
              "Author": "Buddha",
              "Quote": "It is better to travel well than to arrive."
            },
            {
              "Author": "Anais Nin",
              "Quote": "Life shrinks or expands in proportion to one's courage."
            },
            {
              "Author": "Sun Tzu",
              "Quote": "You have to believe in yourself."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "Our intention creates our reality."
            },
            {
              "Author": "Confucius",
              "Quote": "Silence is a true friend who never betrays."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "Character develops itself in the stream of life."
            },
            {
              "Author": "American proverb",
              "Quote": "From little acorns mighty oaks do grow."
            },
            {
              "Author": "Jon Kabat-Zinn",
              "Quote": "You can't stop the waves, but you can learn to surf."
            },
            {
              "Author": "Gustave Flaubert",
              "Quote": "Reality does not conform to the ideal, but confirms it."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "Speak low, if you speak love."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "A really great talent finds its happiness in execution."
            },
            {
              "Author": "John Lennon",
              "Quote": "Reality leaves a lot to the imagination."
            },
            {
              "Author": "Seneca",
              "Quote": "The greatest remedy for anger is delay."
            },
            {
              "Author": "Pearl Buck",
              "Quote": "Growth itself contains the germ of happiness."
            },
            {
              "Author": "",
              "Quote": "You can do what's reasonable or you can decide what's possible."
            },
            {
              "Author": "Leonardo da Vinci",
              "Quote": "Nothing strengthens authority so much as silence."
            },
            {
              "Author": "Confucius",
              "Quote": "Wherever you go, go with all your heart."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "The only real valuable thing is intuition."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Good luck is another name for tenacity of purpose."
            },
            {
              "Author": "Sylvia Voirol",
              "Quote": "Rainbows apologize for angry skies."
            },
            {
              "Author": "",
              "Quote": "Friendship isn't a big thing. It's a million little things."
            },
            {
              "Author": "Theophrastus",
              "Quote": "Time is the most valuable thing a man can spend."
            },
            {
              "Author": "Tony Robbins",
              "Quote": "Whatever happens, take responsibility."
            },
            {
              "Author": "Oscar Wilde",
              "Quote": "Experience is simply the name we give our mistakes."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "I think and that is all that I am."
            },
            {
              "Author": "",
              "Quote": "A good plan today is better than a perfect plan tomorrow."
            },
            {
              "Author": "Gloria Steinem",
              "Quote": "If the shoe doesn't fit, must we change the foot?"
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "Each day provides its own gifts."
            },
            {
              "Author": "Publilius Syrus",
              "Quote": "While we stop to think, we often miss our opportunity."
            },
            {
              "Author": "Bernard Shaw",
              "Quote": "Life isn't about finding yourself. Life is about creating yourself."
            },
            {
              "Author": "Richard Bach",
              "Quote": "To bring anything into your life, imagine that it's already there."
            },
            {
              "Author": "German proverb",
              "Quote": "Begin to weave and God will give you the thread."
            },
            {
              "Author": "Confucius",
              "Quote": "The more you know yourself, the more you forgive yourself."
            },
            {
              "Author": "",
              "Quote": "Someone remembers, someone cares; your name is whispered in someone's prayers."
            },
            {
              "Author": "Mary Bethune",
              "Quote": "Without faith, nothing is possible. With it, nothing is impossible."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Once we accept our limits, we go beyond them."
            },
            {
              "Author": "",
              "Quote": "Don't be pushed by your problems; be led by your dreams."
            },
            {
              "Author": "Brian Tracy",
              "Quote": "Whatever we expect with confidence becomes our own self-fulfilling prophecy."
            },
            {
              "Author": "Pablo Picasso",
              "Quote": "Everything you can imagine is real."
            },
            {
              "Author": "Usman Asif",
              "Quote": "Fear is a darkroom where negatives develop."
            },
            {
              "Author": "Napoleon Bonaparte",
              "Quote": "The truest wisdom is a resolute determination."
            },
            {
              "Author": "Victor Hugo",
              "Quote": "Life is the flower for which love is the honey."
            },
            {
              "Author": "Epictetus",
              "Quote": "Freedom is the right to live as we wish."
            },
            {
              "Author": "",
              "Quote": "Change your thoughts, change your life!"
            },
            {
              "Author": "Robert Heller",
              "Quote": "Never ignore a gut feeling, but never believe that it's enough."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "Loss is nothing else but change,and change is Natures delight."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Someone is special only if you tell them."
            },
            {
              "Author": "",
              "Quote": "Today is the tomorrow you worried about yesterday."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "There is no way to happiness, happiness is the way."
            },
            {
              "Author": "",
              "Quote": "The day always looks brighter from behind a smile."
            },
            {
              "Author": "",
              "Quote": "A stumble may prevent a fall."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "He who talks more is sooner exhausted."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "He who is contented is rich."
            },
            {
              "Author": "Plutarch",
              "Quote": "What we achieve inwardly will change outer reality."
            },
            {
              "Author": "Ralph Waldo Emerson",
              "Quote": "Our strength grows out of our weaknesses."
            },
            {
              "Author": "Mahatma Gandhi",
              "Quote": "We must become the change we want to see."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Happiness is found in doing, not merely possessing."
            },
            {
              "Author": "",
              "Quote": "Put your future in good hands : your own."
            },
            {
              "Author": "Wit",
              "Quote": "We choose our destiny in the way we treat others."
            },
            {
              "Author": "Voltaire",
              "Quote": "No snowflake in an avalanche ever feels responsible."
            },
            {
              "Author": "Virgil",
              "Quote": "Fortune favours the brave."
            },
            {
              "Author": "Joseph Stalin",
              "Quote": "I believe in one thing only, the power of human will."
            },
            {
              "Author": "Robert Frost",
              "Quote": "The best way out is always through."
            },
            {
              "Author": "Seneca",
              "Quote": "The mind unlearns with difficulty what it has long learned."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "I destroy my enemies when I make them my friends."
            },
            {
              "Author": "Thomas Fuller",
              "Quote": "No garden is without its weeds."
            },
            {
              "Author": "Elbert Hubbard",
              "Quote": "There is no failure except in no longer trying."
            },
            {
              "Author": "Turkish proverb",
              "Quote": "Kind words will unlock an iron door."
            },
            {
              "Author": "Hugh Miller",
              "Quote": "Problems are only opportunities with thorns on them."
            },
            {
              "Author": "A. Powell Davies",
              "Quote": "Life is just a chance to grow a soul."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "Mountains cannot be surmounted except by winding paths."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "May our hearts garden of awakening bloom with hundreds of flowers."
            },
            {
              "Author": "John Dryden",
              "Quote": "Fortune befriends the bold."
            },
            {
              "Author": "Friedrich von Schiller",
              "Quote": "Keep true to the dreams of thy youth."
            },
            {
              "Author": "Mike Ditka",
              "Quote": "You're never a loser until you quit trying."
            },
            {
              "Author": "Immanuel Kant",
              "Quote": "Science is organized knowledge. Wisdom is organized life."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "Knowing is not enough; we must apply!"
            },
            {
              "Author": "Richard Bach",
              "Quote": "Strong beliefs win strong men, and then make them stronger."
            },
            {
              "Author": "Albert Camus",
              "Quote": "Autumn is a second spring when every leaf is a flower."
            },
            {
              "Author": "Toni Morrison",
              "Quote": "If you surrender to the wind, you can ride it."
            },
            {
              "Author": "Helen Keller",
              "Quote": "Keep yourself to the sunshine and you cannot see the shadow."
            },
            {
              "Author": "Paulo Coelho",
              "Quote": "Write your plans in pencil and give God the eraser."
            },
            {
              "Author": "Pablo Picasso",
              "Quote": "Inspiration exists, but it has to find us working."
            },
            {
              "Author": "Jonathan Kozol",
              "Quote": "Pick battles big enough to matter, small enough to win."
            },
            {
              "Author": "Janis Joplin",
              "Quote": "Don't compromise yourself. You are all you've got."
            },
            {
              "Author": "Sophocles",
              "Quote": "A short saying oft contains much wisdom."
            },
            {
              "Author": "Epictetus",
              "Quote": "Difficulties are things that show a person what they are."
            },
            {
              "Author": "Honore de Balzac",
              "Quote": "When you doubt your power, you give power to your doubt."
            },
            {
              "Author": "Ovid",
              "Quote": "The cause is hidden. The effect is visible to all."
            },
            {
              "Author": "Francis Bacon",
              "Quote": "A prudent question is one half of wisdom."
            },
            {
              "Author": "Tony Robbins",
              "Quote": "The path to success is to take massive, determined action."
            },
            {
              "Author": "Manuel Puig",
              "Quote": "I allow my intuition to lead my path."
            },
            {
              "Author": "William R. Inge",
              "Quote": "Nature takes away any faculty that is not used."
            },
            {
              "Author": "Epictetus",
              "Quote": "If you wish to be a writer, write."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "There is no way to prosperity, prosperity is the way."
            },
            {
              "Author": "Jim Rohn",
              "Quote": "Either you run the day or the day runs you."
            },
            {
              "Author": "Publilius Syrus",
              "Quote": "Better be ignorant of a matter than half know it."
            },
            {
              "Author": "Oprah Winfrey",
              "Quote": "Follow your instincts. That is where true wisdom manifests itself."
            },
            {
              "Author": "Benjamin Franklin",
              "Quote": "There never was a good knife made of bad steel."
            },
            {
              "Author": "Anatole France",
              "Quote": "To accomplish great things, we must dream as well as act."
            },
            {
              "Author": "Saint Augustine",
              "Quote": "Patience is the companion of wisdom."
            },
            {
              "Author": "Buddha",
              "Quote": "The mind is everything. What you think you become."
            },
            {
              "Author": "Voltaire",
              "Quote": "To enjoy life, we must touch much of it lightly."
            },
            {
              "Author": "Maya Lin",
              "Quote": "To fly, we have to have resistance."
            },
            {
              "Author": "",
              "Quote": "What you see depends on what you're looking for."
            },
            {
              "Author": "Blaise Pascal",
              "Quote": "The heart has its reasons which reason knows not of."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "Be great in act, as you have been in thought."
            },
            {
              "Author": "Napoleon Bonaparte",
              "Quote": "Imagination rules the world."
            },
            {
              "Author": "Blaise Pascal",
              "Quote": "Kind words do not cost much. Yet they accomplish much."
            },
            {
              "Author": "Michelangelo",
              "Quote": "There is no greater harm than that of time wasted."
            },
            {
              "Author": "Jonas Salk",
              "Quote": "Intuition will tell the thinking mind where to look next."
            },
            {
              "Author": "",
              "Quote": "Worry gives a small thing a big shadow."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Fears are nothing more than a state of mind."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "The journey of a thousand miles begins with one step."
            },
            {
              "Author": "Peter Drucker",
              "Quote": "Efficiency is doing things right; effectiveness is doing the right things."
            },
            {
              "Author": "Luisa Sigea",
              "Quote": "Blaze with the fire that is never extinguished."
            },
            {
              "Author": "Dr. Seuss",
              "Quote": "Don't cry because it's over. Smile because it happened."
            },
            {
              "Author": "Jason Fried",
              "Quote": "No is easier to do. Yes is easier to say."
            },
            {
              "Author": "Confucius",
              "Quote": "To be wrong is nothing unless you continue to remember it."
            },
            {
              "Author": "Babe Ruth",
              "Quote": "Yesterdays home runs don't win today's games."
            },
            {
              "Author": "Carlyle",
              "Quote": "Silence is deep as Eternity, Speech is shallow as Time."
            },
            {
              "Author": "Leo F. Buscaglia",
              "Quote": "Don't smother each other. No one can grow in the shade."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "An ant on the move does more than a dozing ox"
            },
            {
              "Author": "Indira Gandhi",
              "Quote": "You can't shake hands with a clenched fist."
            },
            {
              "Author": "Plato",
              "Quote": "A good decision is based on knowledge and not on numbers."
            },
            {
              "Author": "Confucius",
              "Quote": "The cautious seldom err."
            },
            {
              "Author": "Frederick Douglass",
              "Quote": "If there is no struggle, there is no progress."
            },
            {
              "Author": "Willa Cather",
              "Quote": "Where there is great love, there are always miracles."
            },
            {
              "Author": "John Lennon",
              "Quote": "Time you enjoy wasting, was not wasted."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Every problem has a gift for you in its hands."
            },
            {
              "Author": "Jean de la Fontaine",
              "Quote": "Sadness flies away on the wings of time."
            },
            {
              "Author": "Publilius Syrus",
              "Quote": "I have often regretted my speech, never my silence."
            },
            {
              "Author": "Thomas Jefferson",
              "Quote": "Never put off till tomorrow what you can do today."
            },
            {
              "Author": "Thomas Dewar",
              "Quote": "Minds are like parachutes. They only function when open."
            },
            {
              "Author": "George Patton",
              "Quote": "If a man does his best, what else is there?"
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "The secret of success is constancy to purpose."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Life is a progress, and not a station."
            },
            {
              "Author": "Horace Friess",
              "Quote": "All seasons are beautiful for the person who carries happiness within."
            },
            {
              "Author": "Elbert Hubbard",
              "Quote": "To avoid criticism, do nothing, say nothing, be nothing."
            },
            {
              "Author": "Ovid",
              "Quote": "All things change; nothing perishes."
            },
            {
              "Author": "Haynes Bayly",
              "Quote": "Absence makes the heart grow fonder."
            },
            {
              "Author": "Lauren Bacall",
              "Quote": "Imagination is the highest kite one can fly."
            },
            {
              "Author": "Frank Herbert",
              "Quote": "The beginning of knowledge is the discovery of something we do not understand."
            },
            {
              "Author": "Elizabeth Browning",
              "Quote": "Love doesn't make the world go round, love is what makes the ride worthwhile."
            },
            {
              "Author": "Arthur Conan Doyle",
              "Quote": "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth."
            },
            {
              "Author": "J. Willard Marriott",
              "Quote": "Good timber does not grow with ease; the stronger the wind, the stronger the trees."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "I believe that we are fundamentally the same and have the same basic potential."
            },
            {
              "Author": "Edward Gibbon",
              "Quote": "The winds and waves are always on the side of the ablest navigators."
            },
            {
              "Author": "Eleanor Roosevelt",
              "Quote": "The future belongs to those who believe in the beauty of their dreams."
            },
            {
              "Author": "",
              "Quote": "To get something you never had, you have to do something you never did."
            },
            {
              "Author": "",
              "Quote": "Be thankful when you don't know something for it gives you the opportunity to learn."
            },
            {
              "Author": "Mahatma Gandhi",
              "Quote": "Strength does not come from physical capacity. It comes from an indomitable will."
            },
            {
              "Author": "Og Mandino",
              "Quote": "Each misfortune you encounter will carry in it the seed of tomorrows good luck."
            },
            {
              "Author": "Lewis B. Smedes",
              "Quote": "To forgive is to set a prisoner free and realize that prisoner was you."
            },
            {
              "Author": "Buddha",
              "Quote": "In separateness lies the world's great misery, in compassion lies the world's true strength."
            },
            {
              "Author": "Nikos Kazantzakis",
              "Quote": "By believing passionately in something that does not yet exist, we create it."
            },
            {
              "Author": "",
              "Quote": "Letting go isn't the end of the world; it's the beginning of a new life."
            },
            {
              "Author": "John Eliot",
              "Quote": "All the great performers I have worked with are fuelled by a personal dream."
            },
            {
              "Author": "A. A. Milne",
              "Quote": "One of the advantages of being disorderly is that one is constantly making exciting discoveries."
            },
            {
              "Author": "Marie Curie",
              "Quote": "I never see what has been done; I only see what remains to be done."
            },
            {
              "Author": "Seneca",
              "Quote": "Begin at once to live and count each separate day as a separate life."
            },
            {
              "Author": "Lawrence Peter",
              "Quote": "If you don't know where you are going, you will probably end up somewhere else."
            },
            {
              "Author": "Hannah More",
              "Quote": "It is not so important to know everything as to appreciate what we learn."
            },
            {
              "Author": "John Berry",
              "Quote": "The bird of paradise alights only upon the hand that does not grasp."
            },
            {
              "Author": "William Yeats",
              "Quote": "Think as a wise man but communicate in the language of the people."
            },
            {
              "Author": "Epictetus",
              "Quote": "Practice yourself, for heavens sake in little things, and then proceed to greater."
            },
            {
              "Author": "Seneca",
              "Quote": "If one does not know to which port is sailing, no wind is favorable."
            },
            {
              "Author": "",
              "Quote": "Our greatest glory is not in never failing but rising everytime we fall."
            },
            {
              "Author": "",
              "Quote": "Being right is highly overrated. Even a stopped clock is right twice a day."
            },
            {
              "Author": "Ken S. Keyes",
              "Quote": "To be upset over what you don't have is to waste what you do have."
            },
            {
              "Author": "Thomas Edison",
              "Quote": "If we did the things we are capable of, we would astound ourselves."
            },
            {
              "Author": "Marie Curie",
              "Quote": "Nothing in life is to be feared. It is only to be understood."
            },
            {
              "Author": "Tony Robbins",
              "Quote": "Successful people ask better questions, and as a result, they get better answers."
            },
            {
              "Author": "",
              "Quote": "Love is not blind; it simply enables one to see things others fail to see."
            },
            {
              "Author": "Anne Schaef",
              "Quote": "Life is a process. We are a process. The universe is a process."
            },
            {
              "Author": "Eleanor Roosevelt",
              "Quote": "I think somehow we learn who we really are and then live with that decision."
            },
            {
              "Author": "Kenneth Patton",
              "Quote": "We learn what we have said from those who listen to our speaking."
            },
            {
              "Author": "Kahlil Gibran",
              "Quote": "A little knowledge that acts is worth infinitely more than much knowledge that is idle."
            },
            {
              "Author": "",
              "Quote": "If you get up one more time than you fall, you will make it through."
            },
            {
              "Author": "Flora Whittemore",
              "Quote": "The doors we open and close each day decide the lives we live."
            },
            {
              "Author": "H. W. Arnold",
              "Quote": "The worst bankrupt in the world is the person who has lost his enthusiasm."
            },
            {
              "Author": "Buddha",
              "Quote": "Happiness comes when your work and words are of benefit to yourself and others."
            },
            {
              "Author": "",
              "Quote": "Don't focus on making the right decision, focus on making the decision the right one."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "Everything is perfect in the universe, even your desire to improve it."
            },
            {
              "Author": "Eden Phillpotts",
              "Quote": "The universe is full of magical things, patiently waiting for our wits to grow sharper."
            },
            {
              "Author": "Buddha",
              "Quote": "Just as a candle cannot burn without fire, men cannot live without a spiritual life."
            },
            {
              "Author": "Mark Twain",
              "Quote": "A thing long expected takes the form of the unexpected when at last it comes."
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "Action may not always bring happiness; but there is no happiness without action."
            },
            {
              "Author": "Oprah Winfrey",
              "Quote": "I don't believe in failure. It is not failure if you enjoyed the process."
            },
            {
              "Author": "Confucius",
              "Quote": "What you do not want done to yourself, do not do to others."
            },
            {
              "Author": "Winston Churchill",
              "Quote": "Short words are best and the old words when short are best of all."
            },
            {
              "Author": "Buddha",
              "Quote": "If you light a lamp for somebody, it will also brighten your path."
            },
            {
              "Author": "Lin-yutang",
              "Quote": "I have done my best: that is about all the philosophy of living one needs."
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "Through perseverance many people win success out of what seemed destined to be certain failure."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Give thanks for the rain of life that propels us to reach new horizons."
            },
            {
              "Author": "",
              "Quote": "Love is just a word until someone comes along and gives it meaning."
            },
            {
              "Author": "",
              "Quote": "We all have problems. The way we solve them is what makes us different."
            },
            {
              "Author": "Dave Weinbaum",
              "Quote": "The secret to a rich life is to have more beginnings than endings."
            },
            {
              "Author": "Ralph Waldo Emerson",
              "Quote": "It is only when the mind and character slumber that the dress can be seen."
            },
            {
              "Author": "Maya Angelou",
              "Quote": "If you don't like something, change it. If you can't change it, change your attitude."
            },
            {
              "Author": "Confucius",
              "Quote": "Reviewing what you have learned and learning anew, you are fit to be a teacher."
            },
            {
              "Author": "Augustinus Sanctus",
              "Quote": "The world is a book, and those who do not travel read only a page."
            },
            {
              "Author": "Henri-Frederic Amiel",
              "Quote": "So long as a person is capable of self-renewal they are a living being."
            },
            {
              "Author": "Louisa Alcott",
              "Quote": "I'm not afraid of storms, for Im learning how to sail my ship."
            },
            {
              "Author": "Voltaire",
              "Quote": "Think for yourselves and let others enjoy the privilege to do so too."
            },
            {
              "Author": "Annie Dillard",
              "Quote": "How we spend our days is, of course, how we spend our lives."
            },
            {
              "Author": "Man Ray",
              "Quote": "It has never been my object to record my dreams, just to realize them."
            },
            {
              "Author": "Sigmund Freud",
              "Quote": "The most complicated achievements of thought are possible without the assistance of consciousness."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Most great people have attained their greatest success just one step beyond their greatest failure."
            },
            {
              "Author": "Henry Ford",
              "Quote": "If you think you can, you can. And if you think you can't, you're right."
            },
            {
              "Author": "St. Augustine",
              "Quote": "Better to have loved and lost, than to have never loved at all."
            },
            {
              "Author": "Leo Tolstoy",
              "Quote": "Everyone thinks of changing the world, but no one thinks of changing himself."
            },
            {
              "Author": "Richard Bach",
              "Quote": "The best way to pay for a lovely moment is to enjoy it."
            },
            {
              "Author": "Winston Churchill",
              "Quote": "You have enemies? Good. That means you've stood up for something, sometime in your life."
            },
            {
              "Author": "John De Paola",
              "Quote": "Slow down and everything you are chasing will come around and catch you."
            },
            {
              "Author": "Buddha",
              "Quote": "Your worst enemy cannot harm you as much as your own unguarded thoughts."
            },
            {
              "Author": "Lily Tomlin",
              "Quote": "I always wanted to be somebody, but I should have been more specific."
            },
            {
              "Author": "John Lennon",
              "Quote": "Yeah we all shine on, like the moon, and the stars, and the sun."
            },
            {
              "Author": "Martin Fischer",
              "Quote": "Knowledge is a process of piling up facts; wisdom lies in their simplification."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Life is like riding a bicycle. To keep your balance you must keep moving."
            },
            {
              "Author": "Albert Schweitzer",
              "Quote": "We should all be thankful for those people who rekindle the inner spirit."
            },
            {
              "Author": "Thomas Edison",
              "Quote": "Opportunity is missed by most because it is dressed in overalls and looks like work."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Feeling and longing are the motive forces behind all human endeavor and human creations."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "In the end we retain from our studies only that which we practically apply."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "If you correct your mind, the rest of your life will fall into place."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "The world makes way for the man who knows where he is going."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "When your desires are strong enough you will appear to possess superhuman powers to achieve."
            },
            {
              "Author": "John Adams",
              "Quote": "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish."
            },
            {
              "Author": "Henry David Thoreau",
              "Quote": "I cannot make my days longer so I strive to make them better."
            },
            {
              "Author": "Chinese proverb",
              "Quote": "Tension is who you think you should be. Relaxation is who you are."
            },
            {
              "Author": "Helen Keller",
              "Quote": "Never bend your head. Always hold it high. Look the world right in the eye."
            },
            {
              "Author": "Albert Schweitzer",
              "Quote": "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity."
            },
            {
              "Author": "Calvin Coolidge",
              "Quote": "We cannot do everything at once, but we can do something at once."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "You have to do your own growing no matter how tall your grandfather was."
            },
            {
              "Author": "",
              "Quote": "Invent your world. Surround yourself with people, color, sounds, and work that nourish you."
            },
            {
              "Author": "General Douglas MacArthur",
              "Quote": "It is fatal to enter any war without the will to win it."
            },
            {
              "Author": "Julius Charles Hare",
              "Quote": "Be what you are. This is the first step toward becoming better than you are."
            },
            {
              "Author": "Buckminster Fuller",
              "Quote": "There is nothing in a caterpillar that tells you it's going to be a butterfly."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "Love and compassion open our own inner life, reducing stress, distrust and loneliness."
            },
            {
              "Author": "Walter Lippmann",
              "Quote": "Ideals are an imaginative understanding of that which is desirable in that which is possible."
            },
            {
              "Author": "Confucius",
              "Quote": "The superior man is satisfied and composed; the mean man is always full of distress."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "If you spend too much time thinking about a thing, you'll never get it done."
            },
            {
              "Author": "Buddha",
              "Quote": "The way is not in the sky. The way is in the heart."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "Most people are about as happy as they make up their minds to be"
            },
            {
              "Author": "Buddha",
              "Quote": "Three things cannot be long hidden: the sun, the moon, and the truth."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "More often than not, anger is actually an indication of weakness rather than of strength."
            },
            {
              "Author": "Jim Beggs",
              "Quote": "Before you put on a frown, make absolutely sure there are no smiles available."
            },
            {
              "Author": "Donald Kircher",
              "Quote": "A man of ability and the desire to accomplish something can do anything."
            },
            {
              "Author": "Buddha",
              "Quote": "You, yourself, as much as anybody in the entire universe, deserve your love and affection."
            },
            {
              "Author": "Eckhart Tolle",
              "Quote": "It is not uncommon for people to spend their whole life waiting to start living."
            },
            {
              "Author": "H. Jackson Browne",
              "Quote": "Don't be afraid to go out on a limb. That's where the fruit is."
            },
            {
              "Author": "Marquis Vauvenargues",
              "Quote": "Wicked people are always surprised to find ability in those that are good."
            },
            {
              "Author": "Charlotte Bronte",
              "Quote": "Life is so constructed that an event does not, cannot, will not, match the expectation."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "If you change the way you look at things, the things you look at change."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "No man can succeed in a line of endeavor which he does not like."
            },
            {
              "Author": "Buddha",
              "Quote": "You will not be punished for your anger, you will be punished by your anger."
            },
            {
              "Author": "Robert Stevenson",
              "Quote": "Don't judge each day by the harvest you reap but by the seeds you plant."
            },
            {
              "Author": "Andy Warhol",
              "Quote": "They say that time changes things, but you actually have to change them yourself."
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "Never apologize for showing feelings. When you do so, you apologize for the truth."
            },
            {
              "Author": "Pema Chodron",
              "Quote": "The truth you believe and cling to makes you unavailable to hear anything new."
            },
            {
              "Author": "Horace",
              "Quote": "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant."
            },
            {
              "Author": "Morris West",
              "Quote": "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine."
            },
            {
              "Author": "Franklin Roosevelt",
              "Quote": "The only limit to our realization of tomorrow will be our doubts of today."
            },
            {
              "Author": "Edwin Chapin",
              "Quote": "Every action of our lives touches on some chord that will vibrate in eternity."
            },
            {
              "Author": "Les Brown",
              "Quote": "Shoot for the moon. Even if you miss, you'll land among the stars."
            },
            {
              "Author": "Confucius",
              "Quote": "It does not matter how slowly you go as long as you do not stop."
            },
            {
              "Author": "",
              "Quote": "Every day may not be good, but there's something good in every day."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "Most folks are about as happy as they make up their minds to be."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "If you would take, you must first give, this is the beginning of intelligence."
            },
            {
              "Author": "",
              "Quote": "Some people think it's holding that makes one strong, sometimes it's letting go."
            },
            {
              "Author": "Havelock Ellis",
              "Quote": "It is on our failures that we base a new and different and better success."
            },
            {
              "Author": "John Ruskin",
              "Quote": "Quality is never an accident; it is always the result of intelligent effort."
            },
            {
              "Author": "Confucius",
              "Quote": "To study and not think is a waste. To think and not study is dangerous."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Life is a succession of lessons, which must be lived to be understood."
            },
            {
              "Author": "Thomas Hardy",
              "Quote": "Time changes everything except something within us which is always surprised by change."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "You are important enough to ask and you are blessed enough to receive back."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "If you cannot do great things, do small things in a great way."
            },
            {
              "Author": "Oprah Winfrey",
              "Quote": "If you want your life to be more rewarding, you have to change the way you think."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us."
            },
            {
              "Author": "Leonardo Ruiz",
              "Quote": "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try."
            },
            {
              "Author": "Leon Blum",
              "Quote": "The free man is he who does not fear to go to the end of his thought."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world."
            },
            {
              "Author": "Bernard Shaw",
              "Quote": "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own."
            },
            {
              "Author": "Charles Dickens",
              "Quote": "Don't leave a stone unturned. It's always something, to know you have done the most you could."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm."
            },
            {
              "Author": "Sam Keen",
              "Quote": "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly."
            },
            {
              "Author": "Walt Emerson",
              "Quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us."
            },
            {
              "Author": "John Astin",
              "Quote": "There are things so deep and complex that only intuition can reach it in our stage of development as human beings."
            },
            {
              "Author": "Elbert Hubbard",
              "Quote": "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success."
            },
            {
              "Author": "Henry Moore",
              "Quote": "There is no retirement for an artist, it's your way of living so there is no end to it."
            },
            {
              "Author": "Confucius",
              "Quote": "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability."
            },
            {
              "Author": "",
              "Quote": "Why worry about things you can't control when you can keep yourself busy controlling the things that depend on you?"
            },
            {
              "Author": "Laozi",
              "Quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them."
            },
            {
              "Author": "George Sheehan",
              "Quote": "Success means having the courage, the determination, and the will to become the person you believe you were meant to be."
            },
            {
              "Author": "Thomas Jefferson",
              "Quote": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you."
            },
            {
              "Author": "Antoine de Saint-Exupery",
              "Quote": "It is only with the heart that one can see rightly, what is essential is invisible to the eye."
            },
            {
              "Author": "Marcel Proust",
              "Quote": "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom."
            },
            {
              "Author": "Epictetus",
              "Quote": "Make the best use of what is in your power, and take the rest as it happens."
            },
            {
              "Author": "Louise Hay",
              "Quote": "The thoughts we choose to think are the tools we use to paint the canvas of our lives."
            },
            {
              "Author": "W. Clement Stone",
              "Quote": "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto."
            },
            {
              "Author": "Robert McKain",
              "Quote": "The reason most goals are not achieved is that we spend our time doing second things first."
            },
            {
              "Author": "John Quincy Adams",
              "Quote": "If your actions inspire others to dream more, learn more, do more and become more, you are a leader."
            },
            {
              "Author": "Thomas Jefferson",
              "Quote": "I'm a great believer in luck and I find the harder I work, the more I have of it."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "The person born with a talent they are meant to use will find their greatest happiness in using it."
            },
            {
              "Author": "William Saroyan",
              "Quote": "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want."
            },
            {
              "Author": "Leonardo da Vinci",
              "Quote": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind."
            },
            {
              "Author": "Isaac Asimov",
              "Quote": "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value."
            },
            {
              "Author": "Henry Van Dyke",
              "Quote": "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars."
            },
            {
              "Author": "Yogi Berra",
              "Quote": "You got to be careful if you don't know where you're going, because you might not get there."
            },
            {
              "Author": "Naguib Mahfouz",
              "Quote": "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions."
            },
            {
              "Author": "Anthony Robbins",
              "Quote": "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more"
            },
            {
              "Author": "John Wooden",
              "Quote": "You can't let praise or criticism get to you. It's a weakness to get caught up in either one."
            },
            {
              "Author": "Og Mandino",
              "Quote": "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars."
            },
            {
              "Author": "Jane Addams",
              "Quote": "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt."
            },
            {
              "Author": "Thomas Carlyle",
              "Quote": "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears."
            },
            {
              "Author": "M. Scott Peck",
              "Quote": "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it."
            },
            {
              "Author": "Maureen Dowd",
              "Quote": "The minute you settle for less than you deserve, you get even less than you settled for."
            },
            {
              "Author": "Charles Darwin",
              "Quote": "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts."
            },
            {
              "Author": "",
              "Quote": "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace."
            },
            {
              "Author": "Christopher Morley",
              "Quote": "There is only one success, to be able to spend your life in your own way."
            },
            {
              "Author": "Hannah Arendt",
              "Quote": "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible."
            },
            {
              "Author": "Alan Cohen",
              "Quote": "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts."
            },
            {
              "Author": "Aldous Huxley",
              "Quote": "There is only one corner of the universe you can be certain of improving, and that's your own self."
            },
            {
              "Author": "Marian Edelman",
              "Quote": "You're not obligated to win. You're obligated to keep trying to do the best you can every day."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough."
            },
            {
              "Author": "Sue Patton Thoele",
              "Quote": "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand."
            },
            {
              "Author": "Frank Crane",
              "Quote": "You may be deceived if you trust too much, but you will live in torment if you don't trust enough."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven."
            },
            {
              "Author": "Kathleen Norris",
              "Quote": "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable."
            },
            {
              "Author": "Confucius",
              "Quote": "Choose a job you love, and you will never have to work a day in your life."
            },
            {
              "Author": "Eckhart Tolle",
              "Quote": "You cannot find yourself by going into the past. You can find yourself by coming into the present."
            },
            {
              "Author": "Anne Bronte",
              "Quote": "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise."
            },
            {
              "Author": "Richard Bach",
              "Quote": "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice."
            },
            {
              "Author": "Desiderius Erasmus",
              "Quote": "The fox has many tricks. The hedgehog has but one. But that is the best of all."
            },
            {
              "Author": "Arthur Rubinstein",
              "Quote": "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings."
            },
            {
              "Author": "Louis Pasteur",
              "Quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity"
            },
            {
              "Author": "Rumi",
              "Quote": "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness."
            },
            {
              "Author": "Sogyal Rinpoche",
              "Quote": "We must never forget that it is through our actions, words, and thoughts that we have a choice."
            },
            {
              "Author": "Dennis Kimbro",
              "Quote": "We see things not as they are, but as we are. Our perception is shaped by our previous experiences."
            },
            {
              "Author": "William Penn",
              "Quote": "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment."
            },
            {
              "Author": "Immanuel Kant",
              "Quote": "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason."
            },
            {
              "Author": "Buddha",
              "Quote": "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character."
            },
            {
              "Author": "",
              "Quote": "As the rest of the world is walking out the door, your best friends are the ones walking in."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience."
            },
            {
              "Author": "Robert Lynd",
              "Quote": "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him."
            },
            {
              "Author": "Donald Trump",
              "Quote": "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game."
            },
            {
              "Author": "Eleanor Roosevelt",
              "Quote": "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world."
            },
            {
              "Author": "Robert Fulghum",
              "Quote": "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer."
            },
            {
              "Author": "Arthur Schopenhauer",
              "Quote": "Every man takes the limits of his own field of vision for the limits of the world."
            },
            {
              "Author": "Andre Gide",
              "Quote": "One does not discover new lands without consenting to lose sight of the shore for a very long time."
            },
            {
              "Author": "Sai Baba",
              "Quote": "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "Genuine love should first be directed at oneself. if we do not love ourselves, how can we love others?"
            },
            {
              "Author": "Tom Lehrer",
              "Quote": "Life is like a sewer. What you get out of it depends on what you put into it."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind."
            },
            {
              "Author": "Alfred Sheinwold",
              "Quote": "Learn all you can from the mistakes of others. You won't have time to make them all yourself."
            },
            {
              "Author": "Sri Chinmoy",
              "Quote": "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not."
            },
            {
              "Author": "James Freeman Clarke",
              "Quote": "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life."
            },
            {
              "Author": "Anais Nin",
              "Quote": "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "Everything that happens happens as it should, and if you observe carefully, you will find this to be so."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds."
            },
            {
              "Author": "Buddha",
              "Quote": "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves."
            },
            {
              "Author": "Sydney Smith",
              "Quote": "It is the greatest of all mistakes to do nothing because you can only do little, do what you can."
            },
            {
              "Author": "Confucius",
              "Quote": "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself."
            },
            {
              "Author": "Mary Kay Ash",
              "Quote": "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway."
            },
            {
              "Author": "Lloyd Jones",
              "Quote": "Those who try to do something and fail are infinitely better than those who try nothing and succeed."
            },
            {
              "Author": "Vista Kelly",
              "Quote": "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together."
            },
            {
              "Author": "Ben Stein",
              "Quote": "The first step to getting the things you want out of life is this: decide what you want."
            },
            {
              "Author": "",
              "Quote": "Why compare yourself with others? No one in the entire world can do a better job of being you than you."
            },
            {
              "Author": "Aldous Huxley",
              "Quote": "Experience is not what happens to a man. It is what a man does with what happens to him."
            },
            {
              "Author": "",
              "Quote": "A good teacher is like a candle, it consumes itself to light the way for others."
            },
            {
              "Author": "Oscar Wilde",
              "Quote": "The only thing to do with good advice is to pass it on. It is never of any use to oneself."
            },
            {
              "Author": "",
              "Quote": "Life is not measured by the breaths we take, but by the moments that take our breath."
            },
            {
              "Author": "Honore de Balzac",
              "Quote": "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition."
            },
            {
              "Author": "Jacob Braude",
              "Quote": "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others."
            },
            {
              "Author": "Vince Lombardi",
              "Quote": "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives."
            },
            {
              "Author": "Oliver Holmes",
              "Quote": "What lies behind us and what lies before us are small matters compared to what lies within us."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "With the realization of ones own potential and self-confidence in ones ability, one can build a better world."
            },
            {
              "Author": "Nelson Mandela",
              "Quote": "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered."
            },
            {
              "Author": "Robert Anthony",
              "Quote": "Forget about all the reasons why something may not work. You only need to find one good reason why it will."
            },
            {
              "Author": "Aristotle",
              "Quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it."
            },
            {
              "Author": "Washington Irving",
              "Quote": "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart."
            },
            {
              "Author": "Anne Frank",
              "Quote": "We all live with the objective of being happy; our lives are all different and yet the same."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself."
            },
            {
              "Author": "Buddha",
              "Quote": "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind."
            },
            {
              "Author": "Jessamyn West",
              "Quote": "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own."
            },
            {
              "Author": "Plato",
              "Quote": "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."
            },
            {
              "Author": "Charlotte Gilman",
              "Quote": "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!"
            },
            {
              "Author": "Mother Teresa",
              "Quote": "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing."
            },
            {
              "Author": "Margaret Runbeck",
              "Quote": "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own."
            },
            {
              "Author": "Ovid",
              "Quote": "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish."
            },
            {
              "Author": "Og Mandino",
              "Quote": "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted."
            },
            {
              "Author": "James Barrie",
              "Quote": "We never understand how little we need in this world until we know the loss of it."
            },
            {
              "Author": "",
              "Quote": "The real measure of your wealth is how much youd be worth if you lost all your money."
            },
            {
              "Author": "Buddha",
              "Quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "Take no thought of who is right or wrong or who is better than. Be not for or against."
            },
            {
              "Author": "Everett Dirksen",
              "Quote": "I am a man of fixed and unbending principles, the first of which is to be flexible at all times."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day."
            },
            {
              "Author": "Henry Miller",
              "Quote": "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "At the center of your being you have the answer; you know who you are and you know what you want."
            },
            {
              "Author": "Niels Bohr",
              "Quote": "How wonderful that we have met with a paradox. Now we have some hope of making progress."
            },
            {
              "Author": "Georg Lichtenberg",
              "Quote": "Everyone is a genius at least once a year. A real genius has his original ideas closer together."
            },
            {
              "Author": "Anais Nin",
              "Quote": "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living."
            },
            {
              "Author": "Gloria Steinem",
              "Quote": "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Sadness may be part of life but there is no need to let it dominate your entire life."
            },
            {
              "Author": "Charles Schwab",
              "Quote": "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far."
            },
            {
              "Author": "Epictetus",
              "Quote": "Nature gave us one tongue and two ears so we could hear twice as much as we speak."
            },
            {
              "Author": "Barbara Baron",
              "Quote": "Don't wait for your feelings to change to take the action. Take the action and your feelings will change."
            },
            {
              "Author": "Richard Bach",
              "Quote": "You are always free to change your mind and choose a different future, or a different past."
            },
            {
              "Author": "Lou Holtz",
              "Quote": "You were not born a winner, and you were not born a loser. You are what you make yourself be."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements."
            },
            {
              "Author": "Robert Stevenson",
              "Quote": "To be what we are, and to become what we are capable of becoming, is the only end of life."
            },
            {
              "Author": "Charles DeLint",
              "Quote": "The road leading to a goal does not separate you from the destination; it is essentially a part of it."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "Take things as they are. Punch when you have to punch. Kick when you have to kick."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind."
            },
            {
              "Author": "",
              "Quote": "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending."
            },
            {
              "Author": "Paavo Nurmi",
              "Quote": "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind."
            },
            {
              "Author": "Anne Frank",
              "Quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world."
            },
            {
              "Author": "",
              "Quote": "A friend is someone who understands your past, believes in your future, and accepts you just the way you are."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "It is one of the blessings of old friends that you can afford to be stupid with them."
            },
            {
              "Author": "Tryon Edwards",
              "Quote": "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
            },
            {
              "Author": "E. M. Forster",
              "Quote": "One must be fond of people and trust them if one is not to make a mess of life."
            },
            {
              "Author": "David Seamans",
              "Quote": "We cannot change our memories, but we can change their meaning and the power they have over us."
            },
            {
              "Author": "Confucius",
              "Quote": "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?"
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "To give hope to someone occurs when you teach them how to use the tools to do it for themselves."
            },
            {
              "Author": "Lucille Ball",
              "Quote": "Id rather regret the things that I have done than the things that I have not done."
            },
            {
              "Author": "Eckhart Tolle",
              "Quote": "The past has no power to stop you from being present now. Only your grievance about the past can do that."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "If the stars should appear but one night every thousand years how man would marvel and adore."
            },
            {
              "Author": "Laurence J. Peter",
              "Quote": "There are two kinds of failures: those who thought and never did, and those who did and never thought."
            },
            {
              "Author": "Elizabeth Arden",
              "Quote": "I'm not interested in age. People who tell me their age are silly. You're as old as you feel."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe."
            },
            {
              "Author": "Confucius",
              "Quote": "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps."
            },
            {
              "Author": "Nikola Tesla",
              "Quote": "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more."
            },
            {
              "Author": "Leo Aikman",
              "Quote": "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night."
            },
            {
              "Author": "Pablo Picasso",
              "Quote": "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law."
            },
            {
              "Author": "Vernon Cooper",
              "Quote": "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future."
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "One secret of success in life is for a man to be ready for his opportunity when it comes."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost."
            },
            {
              "Author": "Carl Jung",
              "Quote": "The shoe that fits one person pinches another; there is no recipe for living that suits all cases."
            },
            {
              "Author": "Buddha",
              "Quote": "There are only two mistakes one can make along the road to truth; not going all the way, and not starting."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking."
            },
            {
              "Author": "",
              "Quote": "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "Treat people as if they were what they ought to be and you help them to become what they are capable of being."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers."
            },
            {
              "Author": "Jack Dixon",
              "Quote": "If you focus on results, you will never change. If you focus on change, you will get results."
            },
            {
              "Author": "G. K. Chesterton",
              "Quote": "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder."
            },
            {
              "Author": "Denis Waitley",
              "Quote": "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them."
            },
            {
              "Author": "Lao-Tzu",
              "Quote": "All difficult things have their origin in that which is easy, and great things in that which is small."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "You can be what you want to be. You have the power within and we will help you always."
            },
            {
              "Author": "Johannes Gaertner",
              "Quote": "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven."
            },
            {
              "Author": "Doug Larson",
              "Quote": "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk."
            },
            {
              "Author": "Charles Lamb",
              "Quote": "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident."
            },
            {
              "Author": "John Muir",
              "Quote": "When one tugs at a single thing in nature, he finds it attached to the rest of the world."
            },
            {
              "Author": "Winston Churchill",
              "Quote": "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen."
            },
            {
              "Author": "Helen Keller",
              "Quote": "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart."
            },
            {
              "Author": "Buddha",
              "Quote": "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance."
            },
            {
              "Author": "Thomas Edison",
              "Quote": "Many of life's failures are people who did not realize how close they were to success when they gave up."
            },
            {
              "Author": "William Ward",
              "Quote": "When we seek to discover the best in others, we somehow bring out the best in ourselves."
            },
            {
              "Author": "Michael Jordan",
              "Quote": "If you accept the expectations of others, especially negative ones, then you never will change the outcome."
            },
            {
              "Author": "Oliver Holmes",
              "Quote": "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve."
            },
            {
              "Author": "Confucius",
              "Quote": "I am not bothered by the fact that I am unknown. I am bothered when I do not know others."
            },
            {
              "Author": "Epictetus",
              "Quote": "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has."
            },
            {
              "Author": "Pablo Picasso",
              "Quote": "I am always doing that which I cannot do, in order that I may learn how to do it."
            },
            {
              "Author": "Barack Obama",
              "Quote": "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress."
            },
            {
              "Author": "Ivy Baker Priest",
              "Quote": "The world is round and the place which may seem like the end may also be the beginning."
            },
            {
              "Author": "",
              "Quote": "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it."
            },
            {
              "Author": "Danielle Ingrum",
              "Quote": "Give it all you've got because you never know if there's going to be a next time."
            },
            {
              "Author": "Old German proverb",
              "Quote": "You have to take it as it happens, but you should try to make it happen the way you want to take it."
            },
            {
              "Author": "Ralph Blum",
              "Quote": "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "Im not in this world to live up to your expectations and you're not in this world to live up to mine."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy."
            },
            {
              "Author": "Walter Cronkite",
              "Quote": "I can't imagine a person becoming a success who doesn't give this game of life everything hes got."
            },
            {
              "Author": "Socrates",
              "Quote": "The greatest way to live with honor in this world is to be what we pretend to be."
            },
            {
              "Author": "Seneca",
              "Quote": "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back."
            },
            {
              "Author": "Chalmers",
              "Quote": "The grand essentials of happiness are: something to do, something to love, and something to hope for."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "By living deeply in the present moment we can understand the past better and we can prepare for a better future."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Do not go where the path may lead, go instead where there is no path and leave a trail."
            },
            {
              "Author": "Robert Louis Stevenson",
              "Quote": "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times."
            },
            {
              "Author": "",
              "Quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present."
            },
            {
              "Author": "Henry Thoreau",
              "Quote": "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard."
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "The greatest good you can do for another is not just to share your riches but to reveal to him his own."
            },
            {
              "Author": "Brian Tracy",
              "Quote": "You can only grow if you're willing to feel awkward and uncomfortable when you try something new."
            },
            {
              "Author": "Joan Didion",
              "Quote": "To free us from the expectations of others, to give us back to ourselves, there lies the great, singular power of self-respect."
            },
            {
              "Author": "Mabel Newcomber",
              "Quote": "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement."
            },
            {
              "Author": "",
              "Quote": "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious."
            },
            {
              "Author": "Robert Graves",
              "Quote": "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer."
            },
            {
              "Author": "Frank Wright",
              "Quote": "The thing always happens that you really believe in; and the belief in a thing makes it happen."
            },
            {
              "Author": "Francois de La Rochefoucauld",
              "Quote": "A true friend is the most precious of all possessions and the one we take the least thought about acquiring."
            },
            {
              "Author": "Epictetus",
              "Quote": "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will."
            },
            {
              "Author": "Margaret Cousins",
              "Quote": "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary."
            },
            {
              "Author": "",
              "Quote": "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you'll never get back."
            },
            {
              "Author": "Thomas Carlyle",
              "Quote": "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it."
            },
            {
              "Author": "Pearl Buck",
              "Quote": "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied."
            },
            {
              "Author": "Catherine Pulsifer",
              "Quote": "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action."
            },
            {
              "Author": "Alfred Tennyson",
              "Quote": "The happiness of a man in this life does not consist in the absence but in the mastery of his passions."
            },
            {
              "Author": "Margaret Mead",
              "Quote": "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has."
            },
            {
              "Author": "Ovid",
              "Quote": "Let your hook always be cast; in the pool where you least expect it, there will be a fish."
            },
            {
              "Author": "Remez Sasson",
              "Quote": "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years."
            },
            {
              "Author": "Pema Chodron",
              "Quote": "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless."
            },
            {
              "Author": "Richard Bach",
              "Quote": "If you love someone, set them free. If they come back they're yours; if they don't they never were."
            },
            {
              "Author": "David Jordan",
              "Quote": "Wisdom is knowing what to do next; Skill is knowing how to do it, and Virtue is doing it."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!"
            },
            {
              "Author": "Alan Watts",
              "Quote": "No valid plans for the future can be made by those who have no capacity for living now."
            },
            {
              "Author": "Oscar Wilde",
              "Quote": "The aim of life is self-development. To realize ones nature perfectly, that is what each of us is here for."
            },
            {
              "Author": "Anatole France",
              "Quote": "To accomplish great things, we must not only act, but also dream; not only plan, but also believe."
            },
            {
              "Author": "Thomas Edison",
              "Quote": "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary."
            },
            {
              "Author": "John Steinbeck",
              "Quote": "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away."
            },
            {
              "Author": "",
              "Quote": "If we are facing in the right direction, all we have to do is keep on walking."
            },
            {
              "Author": "Eleanor Roosevelt",
              "Quote": "Remember always that you not only have the right to be an individual, you have an obligation to be one."
            },
            {
              "Author": "Denis Waitley",
              "Quote": "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them."
            },
            {
              "Author": "Epictetus",
              "Quote": "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible."
            },
            {
              "Author": "Eknath Easwaran",
              "Quote": "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose."
            },
            {
              "Author": "Helen Keller",
              "Quote": "We could never learn to be brave and patient if there were only joy in the world."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "If it is not right do not do it; if it is not true do not say it."
            },
            {
              "Author": "Norman Schwarzkopf",
              "Quote": "The truth of the matter is that you always know the right thing to do. The hard part is doing it."
            },
            {
              "Author": "Julie Morgenstern",
              "Quote": "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you."
            },
            {
              "Author": "Blaise Pascal",
              "Quote": "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed."
            },
            {
              "Author": "Laura Teresa Marquez",
              "Quote": "Arrogance and rudeness are training wheels on the bicycle of life, for weak people who cannot keep their balance without them."
            },
            {
              "Author": "Chinese proverb",
              "Quote": "If you are patient in one moment of anger, you will escape one hundred days of sorrow."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?"
            },
            {
              "Author": "Harry Kemp",
              "Quote": "The poor man is not he who is without a cent, but he who is without a dream."
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "The greatest good you can do for another is not just share your riches, but reveal to them their own."
            },
            {
              "Author": "Buddha",
              "Quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."
            },
            {
              "Author": "",
              "Quote": "Peace of mind is not the absence of conflict from life, but the ability to cope with it."
            },
            {
              "Author": "Helen Keller",
              "Quote": "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight."
            },
            {
              "Author": "John Kennedy",
              "Quote": "Change is the law of life. And those who look only to the past or present are certain to miss the future."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "You have power over your mind, not outside events. Realize this, and you will find strength."
            },
            {
              "Author": "Louis Pasteur",
              "Quote": "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity."
            },
            {
              "Author": "Buddha",
              "Quote": "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world."
            },
            {
              "Author": "Henry Longfellow",
              "Quote": "He that respects himself is safe from others; he wears a coat of mail that none can pierce."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "I cannot always control what goes on outside. But I can always control what goes on inside."
            },
            {
              "Author": "Daisaku Ikeda",
              "Quote": "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people."
            },
            {
              "Author": "Epictetus",
              "Quote": "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger."
            },
            {
              "Author": "Rumi",
              "Quote": "Everyone has been made for some particular work, and the desire for that work has been put in every heart."
            },
            {
              "Author": "Napoleon Bonaparte",
              "Quote": "Take time to deliberate, but when the time for action has arrived, stop thinking and go in."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "With realization of ones own potential and self-confidence in ones ability, one can build a better world."
            },
            {
              "Author": "Franklin Roosevelt",
              "Quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort."
            },
            {
              "Author": "Pearl Buck",
              "Quote": "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings."
            },
            {
              "Author": "Mary Kay Ash",
              "Quote": "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Try not to become a man of success, but rather try to become a man of value."
            },
            {
              "Author": "Sophocles",
              "Quote": "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them."
            },
            {
              "Author": "Rene Descartes",
              "Quote": "It is not enough to have a good mind; the main thing is to use it well."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life."
            },
            {
              "Author": "Amelia Earhart",
              "Quote": "Never do things others can do and will do, if there are things others cannot do or will not do."
            },
            {
              "Author": "Jimmy Dean",
              "Quote": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination."
            },
            {
              "Author": "George Allen",
              "Quote": "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to."
            },
            {
              "Author": "Joseph Roux",
              "Quote": "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool."
            },
            {
              "Author": "Bernice Reagon",
              "Quote": "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are."
            },
            {
              "Author": "Socrates",
              "Quote": "The greatest way to live with honour in this world is to be what we pretend to be."
            },
            {
              "Author": "Henri Bergson",
              "Quote": "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Try not to become a man of success but rather try to become a man of value."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings."
            },
            {
              "Author": "Buddha",
              "Quote": "Your work is to discover your world and then with all your heart give yourself to it."
            },
            {
              "Author": "Daisaku Ikeda",
              "Quote": "The person who lives life fully, glowing with life's energy, is the person who lives a successful life."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Don't turn away from possible futures before you're certain you don't have anything to learn from them."
            },
            {
              "Author": "David Brinkley",
              "Quote": "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her."
            },
            {
              "Author": "Buddha",
              "Quote": "All that we are is the result of what we have thought. The mind is everything. What we think we become."
            },
            {
              "Author": "Henri-Frederic Amiel",
              "Quote": "Work while you have the light. You are responsible for the talent that has been entrusted to you."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "How far that little candle throws its beams! So shines a good deed in a naughty world."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit."
            },
            {
              "Author": "Tony Robbins",
              "Quote": "It is in your moments of decision that your destiny is shaped."
            },
            {
              "Author": "",
              "Quote": "An obstacle may be either a stepping stone or a stumbling block."
            },
            {
              "Author": "Pierre Auguste Renoir",
              "Quote": "The pain passes, but the beauty remains."
            },
            {
              "Author": "Bob Newhart",
              "Quote": "All I can say about life is, Oh God, enjoy it!"
            },
            {
              "Author": "Rita Mae Brown",
              "Quote": "Creativity comes from trust. Trust your instincts. And never hope more than you work."
            },
            {
              "Author": "Lululemon",
              "Quote": "Your outlook on life is a direct reflection on how much you like yourself."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures."
            },
            {
              "Author": "Kin Hubbard",
              "Quote": "You won't skid if you stay in a rut."
            },
            {
              "Author": "Mary Morrissey",
              "Quote": "You block your dream when you allow your fear to grow bigger than your faith."
            },
            {
              "Author": "Aristotle",
              "Quote": "Happiness depends upon ourselves."
            },
            {
              "Author": "Albert Schweitzer",
              "Quote": "Wherever a man turns he can find someone who needs him."
            },
            {
              "Author": "Maya Angelou",
              "Quote": "If one is lucky, a solitary fantasy can totally transform one million realities."
            },
            {
              "Author": "Leo Buscaglia",
              "Quote": "Never idealize others. They will never live up to your expectations."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "When you realize there is nothing lacking, the whole world belongs to you."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "Happiness is not something ready made. It comes from your own actions."
            },
            {
              "Author": "Peter Elbow",
              "Quote": "Meaning is not what you start with but what you end up with."
            },
            {
              "Author": "Anne Frank",
              "Quote": "No one has ever become poor by giving."
            },
            {
              "Author": "Mother Teresa",
              "Quote": "Be faithful in small things because it is in them that your strength lies."
            },
            {
              "Author": "Heraclitus",
              "Quote": "All is flux; nothing stays still."
            },
            {
              "Author": "Leonardo da Vinci",
              "Quote": "He who is fixed to a star does not change his mind."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "He who lives in harmony with himself lives in harmony with the universe."
            },
            {
              "Author": "Sophocles",
              "Quote": "Ignorant men don't know what good they hold in their hands until they've flung it away."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "When the solution is simple, God is answering."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "All achievements, all earned riches, have their beginning in an idea."
            },
            {
              "Author": "Publilius Syrus",
              "Quote": "Do not turn back when you are just at the goal."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "You can't trust without risk but neither can you live in a cocoon."
            },
            {
              "Author": "Rudolf Arnheim",
              "Quote": "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention."
            },
            {
              "Author": "Channing",
              "Quote": "Error is discipline through which we advance."
            },
            {
              "Author": "Pearl Buck",
              "Quote": "The truth is always exciting. Speak it, then. Life is dull without it."
            },
            {
              "Author": "Confucius",
              "Quote": "The superior man is modest in his speech, but exceeds in his actions."
            },
            {
              "Author": "Voltaire",
              "Quote": "The longer we dwell on our misfortunes, the greater is their power to harm us."
            },
            {
              "Author": "Cervantes",
              "Quote": "Those who will play with cats must expect to be scratched."
            },
            {
              "Author": "",
              "Quote": "I've never seen a smiling face that was not beautiful."
            },
            {
              "Author": "Aristotle",
              "Quote": "In all things of nature there is something of the marvellous."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "The universe is transformation; our life is what our thoughts make it."
            },
            {
              "Author": "Samuel Johnson",
              "Quote": "Memory is the mother of all wisdom."
            },
            {
              "Author": "Confucius",
              "Quote": "Silence is the true friend that never betrays."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "You might well remember that nothing can bring you success but yourself."
            },
            {
              "Author": "Benjamin Franklin",
              "Quote": "Watch the little things; a small leak will sink a great ship."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "God has given you one face, and you make yourself another."
            },
            {
              "Author": "Confucius",
              "Quote": "To be wronged is nothing unless you continue to remember it."
            },
            {
              "Author": "",
              "Quote": "Kindness is the greatest wisdom."
            },
            {
              "Author": "Tehyi Hsieh",
              "Quote": "Action will remove the doubts that theory cannot solve."
            },
            {
              "Author": "",
              "Quote": "Don't miss all the beautiful colors of the rainbow looking for that pot of gold."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Your big opportunity may be right where you are now."
            },
            {
              "Author": "Chinese proverb",
              "Quote": "People who say it cannot be done should not interrupt those who are doing it."
            },
            {
              "Author": "Japanese proverb",
              "Quote": "The day you decide to do it is your lucky day."
            },
            {
              "Author": "Cicero",
              "Quote": "We must not say every mistake is a foolish one."
            },
            {
              "Author": "George Patton",
              "Quote": "Accept challenges, so that you may feel the exhilaration of victory."
            },
            {
              "Author": "Anatole France",
              "Quote": "It is better to understand a little than to misunderstand a lot."
            },
            {
              "Author": "",
              "Quote": "You don't drown by falling in water. You drown by staying there."
            },
            {
              "Author": "",
              "Quote": "Never be afraid to try, remember... Amateurs built the ark, Professionals built the Titanic."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "Correction does much, but encouragement does more."
            },
            {
              "Author": "Epictetus",
              "Quote": "Know, first, who you are, and then adorn yourself accordingly."
            },
            {
              "Author": "Oprah Winfrey",
              "Quote": "The biggest adventure you can ever take is to live the life of your dreams."
            },
            {
              "Author": "Charles Swindoll",
              "Quote": "Life is 10% what happens to you and 90% how you react to it."
            },
            {
              "Author": "Cynthia Ozick",
              "Quote": "To want to be what one can be is purpose in life."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "Remember that sometimes not getting what you want is a wonderful stroke of luck."
            },
            {
              "Author": "Winston Churchill",
              "Quote": "History will be kind to me for I intend to write it."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "Our lives are a sum total of the choices we have made."
            },
            {
              "Author": "Leonardo da Vinci",
              "Quote": "Time stays long enough for anyone who will use it."
            },
            {
              "Author": "",
              "Quote": "Never tell me the sky's the limit when there are footprints on the moon."
            },
            {
              "Author": "Denis Waitley",
              "Quote": "You must welcome change as the rule but not as your ruler."
            },
            {
              "Author": "Jim Rohn",
              "Quote": "Give whatever you are doing and whoever you are with the gift of your attention."
            },
            {
              "Author": "Lena Horne",
              "Quote": "Always be smarter than the people who hire you."
            },
            {
              "Author": "Tom Peters",
              "Quote": "Formula for success: under promise and over deliver."
            },
            {
              "Author": "Henri Bergson",
              "Quote": "The eye sees only what the mind is prepared to comprehend."
            },
            {
              "Author": "Lee Mildon",
              "Quote": "People seldom notice old clothes if you wear a big smile."
            },
            {
              "Author": "Shakti Gawain",
              "Quote": "The more light you allow within you, the brighter the world you live in will be."
            },
            {
              "Author": "Walter Anderson",
              "Quote": "Nothing diminishes anxiety faster than action."
            },
            {
              "Author": "Andre Gide",
              "Quote": "Man cannot discover new oceans unless he has the courage to lose sight of the shore."
            },
            {
              "Author": "Carl Jung",
              "Quote": "Everything that irritates us about others can lead us to an understanding about ourselves."
            },
            {
              "Author": "Sun Tzu",
              "Quote": "Can you imagine what I would do if I could do all I can?"
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "Ignorance never settle a question."
            },
            {
              "Author": "Paul Cezanne",
              "Quote": "The awareness of our own strength makes us modest."
            },
            {
              "Author": "Confucius",
              "Quote": "They must often change, who would be constant in happiness or wisdom."
            },
            {
              "Author": "Tom Krause",
              "Quote": "There are no failures. Just experiences and your reactions to them."
            },
            {
              "Author": "Frank Tyger",
              "Quote": "Your future depends on many things, but mostly on you."
            },
            {
              "Author": "Dorothy Thompson",
              "Quote": "Fear grows in darkness; if you think theres a bogeyman around, turn on the light."
            },
            {
              "Author": "Shunryu Suzuki",
              "Quote": "The most important point is to accept yourself and stand on your two feet."
            },
            {
              "Author": "Tomas Eliot",
              "Quote": "Do not expect the world to look bright, if you habitually wear gray-brown glasses."
            },
            {
              "Author": "Donald Trump",
              "Quote": "As long as your going to be thinking anyway, think big."
            },
            {
              "Author": "John Dewey",
              "Quote": "Without some goals and some efforts to reach it, no man can live."
            },
            {
              "Author": "Richard Braunstein",
              "Quote": "He who obtains has little. He who scatters has much."
            },
            {
              "Author": "George Orwell",
              "Quote": "Myths which are believed in tend to become true."
            },
            {
              "Author": "Buddha",
              "Quote": "The foot feels the foot when it feels the ground."
            },
            {
              "Author": "John Petit-Senn",
              "Quote": "Not what we have but what we enjoy constitutes our abundance."
            },
            {
              "Author": "George Eliot",
              "Quote": "It is never too late to be what you might have been."
            },
            {
              "Author": "Mary Wollstonecraft",
              "Quote": "The beginning is always today."
            },
            {
              "Author": "Sheldon Kopp",
              "Quote": "In the long run we get no more than we have been willing to risk giving."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Self-trust is the first secret of success."
            },
            {
              "Author": "Satchel Paige",
              "Quote": "Don't look back. Something might be gaining on you."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too."
            },
            {
              "Author": "George Bernard Shaw",
              "Quote": "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing."
            },
            {
              "Author": "Epictetus",
              "Quote": "Men are disturbed not by things, but by the view which they take of them."
            },
            {
              "Author": "Blaise Pascal",
              "Quote": "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world."
            },
            {
              "Author": "Mark Twain",
              "Quote": "Happiness is a Swedish sunset, it is there for all, but most of us look the other way and lose it."
            },
            {
              "Author": "",
              "Quote": "A smile is a light in the window of your face to show your heart is at home."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Look forward to spring as a time when you can start to see what nature has to offer once again."
            },
            {
              "Author": "Billy Wilder",
              "Quote": "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses."
            },
            {
              "Author": "Blaise Pascal",
              "Quote": "The least movement is of importance to all nature. The entire ocean is affected by a pebble."
            },
            {
              "Author": "Pablo Picasso",
              "Quote": "I am always doing that which I can not do, in order that I may learn how to do it."
            },
            {
              "Author": "Niccolo Machiavelli",
              "Quote": "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration."
            },
            {
              "Author": "",
              "Quote": "You may only be someone in the world, but to someone else, you may be the world."
            },
            {
              "Author": "Henry Ward Beecher",
              "Quote": "Every artist dips his brush in his own soul, and paints his own nature into his pictures."
            },
            {
              "Author": "James Faust",
              "Quote": "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase."
            },
            {
              "Author": "Denis Waitley",
              "Quote": "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude."
            },
            {
              "Author": "Hasidic saying",
              "Quote": "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength."
            },
            {
              "Author": "Joseph Campbell",
              "Quote": "When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness."
            },
            {
              "Author": "Dhammapada",
              "Quote": "Do not give your attention to what others do or fail to do; give it to what you do or fail to do."
            },
            {
              "Author": "Peter Drucker",
              "Quote": "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action."
            },
            {
              "Author": "Bernice Reagon",
              "Quote": "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are."
            },
            {
              "Author": "Fannie Hamer",
              "Quote": "There is one thing you have got to learn about our movement. Three people are better than no people."
            },
            {
              "Author": "Ralph Waldo Emerson",
              "Quote": "Happiness is a perfume you cannot pour on others without getting a few drops on yourself."
            },
            {
              "Author": "Byron Roberts",
              "Quote": "It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "The amount of happiness that you have depends on the amount of freedom you have in your heart."
            },
            {
              "Author": "Carl Jung",
              "Quote": "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens."
            },
            {
              "Author": "Babatunde Olatunji",
              "Quote": "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present."
            },
            {
              "Author": "Tony Robbins",
              "Quote": "The way we communicate with others and with ourselves ultimately determines the quality of our lives."
            },
            {
              "Author": "Tony Blair",
              "Quote": "Sometimes it is better to lose and do the right thing than to win and do the wrong thing."
            },
            {
              "Author": "Mother Teresa",
              "Quote": "Let us always meet each other with smile, for the smile is the beginning of love."
            },
            {
              "Author": "",
              "Quote": "A bend in the road is not the end of the road...unless you fail to make the turn."
            },
            {
              "Author": "Aristotle",
              "Quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
            },
            {
              "Author": "Ray Bradbury",
              "Quote": "Living at risk is jumping off the cliff and building your wings on the way down."
            },
            {
              "Author": "Albert Camus",
              "Quote": "In the depth of winter, I finally learned that there was within me an invincible summer."
            },
            {
              "Author": "Madame de Stael",
              "Quote": "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike."
            },
            {
              "Author": "Elbert Hubbard",
              "Quote": "A failure is a man who has blundered but is not capable of cashing in on the experience."
            },
            {
              "Author": "Herbert Swope",
              "Quote": "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody."
            },
            {
              "Author": "",
              "Quote": "One who asks a question is a fool for five minutes; one who does not ask a question remains a fool forever."
            },
            {
              "Author": "Laozi",
              "Quote": "The power of intuitive understanding will protect you from harm until the end of your days."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "The best thing about the future is that it only comes one day at a time."
            },
            {
              "Author": "Epictetus",
              "Quote": "We have two ears and one mouth so that we can listen twice as much as we speak."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Fear of failure is one attitude that will keep you at the same point in your life."
            },
            {
              "Author": "Ed Cunningham",
              "Quote": "Friends are those rare people who ask how we are and then wait to hear the answer."
            },
            {
              "Author": "Pema Chodron",
              "Quote": "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher."
            },
            {
              "Author": "Eleanor Roosevelt",
              "Quote": "People grow through experience if they meet life honestly and courageously. This is how character is built."
            },
            {
              "Author": "Ralph Waldo Emerson",
              "Quote": "A hero is no braver than an ordinary man, but he is braver five minutes longer."
            },
            {
              "Author": "Angela Schwindt",
              "Quote": "While we try to teach our children all about life, our children teach us what life is all about."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "Genuine love should first be directed at oneself, if we do not love ourselves, how can we love others?"
            },
            {
              "Author": "Orison Marden",
              "Quote": "The Creator has not given you a longing to do that which you have no ability to do."
            },
            {
              "Author": "Sam Levenson",
              "Quote": "It's so simple to be wise. Just think of something stupid to say and then don't say it."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health."
            },
            {
              "Author": "Doris Mortman",
              "Quote": "Until you make peace with who you are, you will never be content with what you have."
            },
            {
              "Author": "Buddha",
              "Quote": "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path."
            },
            {
              "Author": "Henry Miller",
              "Quote": "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself."
            },
            {
              "Author": "Mohandas Gandhi",
              "Quote": "Happiness is when what you think, what you say, and what you do are in harmony."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "The greatest antidote to insecurity and the sense of fear is compassion, it brings one back to the basis of one's inner strength"
            },
            {
              "Author": "",
              "Quote": "Courage is the discovery that you may not win, and trying when you know you can lose."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture."
            },
            {
              "Author": "Mortimer Adler",
              "Quote": "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live."
            },
            {
              "Author": "Buddha",
              "Quote": "When you realize how perfect everything is you will tilt your head back and laugh at the sky."
            },
            {
              "Author": "Mary Kay Ash",
              "Quote": "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour."
            },
            {
              "Author": "Walter Linn",
              "Quote": "It is surprising what a man can do when he has to, and how little most men will do when they don't have to."
            },
            {
              "Author": "Tenzin Gyatso",
              "Quote": "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else."
            },
            {
              "Author": "Edmund Burke",
              "Quote": "Nobody made a greater mistake than he who did nothing because he could do only a little."
            },
            {
              "Author": "Albert Schweitzer",
              "Quote": "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate."
            },
            {
              "Author": "Rene Descartes",
              "Quote": "The greatest minds are capable of the greatest vices as well as of the greatest virtues."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "A man should look for what is, and not for what he thinks should be."
            },
            {
              "Author": "William Channing",
              "Quote": "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "If you have no respect for your own values how can you be worthy of respect from others."
            },
            {
              "Author": "Alphonse Karr",
              "Quote": "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses."
            },
            {
              "Author": "W. H. Auden",
              "Quote": "To choose what is difficult all ones days, as if it were easy, that is faith."
            },
            {
              "Author": "Lou Holtz",
              "Quote": "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it."
            },
            {
              "Author": "Thomas Carlyle",
              "Quote": "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education."
            },
            {
              "Author": "Buddha",
              "Quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
            },
            {
              "Author": "Michel de Montaigne",
              "Quote": "I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing."
            },
            {
              "Author": "Margaret Laurence",
              "Quote": "Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world."
            },
            {
              "Author": "Napoleon Bonaparte",
              "Quote": "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god."
            },
            {
              "Author": "Ajahn Chah",
              "Quote": "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness."
            },
            {
              "Author": "Vincent Lombardi",
              "Quote": "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur."
            },
            {
              "Author": "Jean-Paul Sartre",
              "Quote": "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly."
            },
            {
              "Author": "Elisabeth Kubler-Ross",
              "Quote": "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality."
            },
            {
              "Author": "Kahlil Gibran",
              "Quote": "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do."
            },
            {
              "Author": "Bernard Shaw",
              "Quote": "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create."
            },
            {
              "Author": "Confucius",
              "Quote": "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points."
            },
            {
              "Author": "Anne Lindbergh",
              "Quote": "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others."
            },
            {
              "Author": "Dale Carnegie",
              "Quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all."
            },
            {
              "Author": "John Lennon",
              "Quote": "You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one."
            },
            {
              "Author": "Nathaniel Hawthorne",
              "Quote": "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you."
            },
            {
              "Author": "Buddha",
              "Quote": "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye."
            },
            {
              "Author": "Buddha",
              "Quote": "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true."
            },
            {
              "Author": "Caroline Myss",
              "Quote": "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless."
            },
            {
              "Author": "Winston Churchill",
              "Quote": "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe."
            },
            {
              "Author": "William James",
              "Quote": "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be."
            },
            {
              "Author": "Henry David Thoreau",
              "Quote": "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours."
            },
            {
              "Author": "Pearl Buck",
              "Quote": "The secret of joy in work is contained in one word, excellence. To know how to do something well is to enjoy it."
            },
            {
              "Author": "Confucius",
              "Quote": "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self."
            },
            {
              "Author": "Uta Hagen",
              "Quote": "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre."
            },
            {
              "Author": "Orison Marden",
              "Quote": "Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them."
            },
            {
              "Author": "Victor Frankl",
              "Quote": "Everything can be taken from a man but ... the last of the human freedoms, to choose ones attitude in any given set of circumstances, to choose ones own way."
            },
            {
              "Author": "Edward de Bono",
              "Quote": "It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning."
            },
            {
              "Author": "Amy Tan",
              "Quote": "I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever."
            },
            {
              "Author": "Epictetus",
              "Quote": "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort."
            },
            {
              "Author": "Stephen Covey",
              "Quote": "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice."
            },
            {
              "Author": "Paul Graham",
              "Quote": "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent."
            },
            {
              "Author": "Buddha",
              "Quote": "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared."
            },
            {
              "Author": "Chuck Norris",
              "Quote": "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do."
            },
            {
              "Author": "Amiel",
              "Quote": "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark."
            },
            {
              "Author": "Amy Bloom",
              "Quote": "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle."
            },
            {
              "Author": "Keshavan Nair",
              "Quote": "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity."
            },
            {
              "Author": "Margaret Smith",
              "Quote": "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character."
            },
            {
              "Author": "Frederick Douglass",
              "Quote": "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence."
            },
            {
              "Author": "Helen Keller",
              "Quote": "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love."
            },
            {
              "Author": "Helen Keller",
              "Quote": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved."
            },
            {
              "Author": "Oprah Winfrey",
              "Quote": "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always."
            },
            {
              "Author": "Ingrid Bergman",
              "Quote": "You must train your intuition, you must trust the small voice inside you which tells you exactly what to say, what to decide."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart."
            },
            {
              "Author": "John Kennedy",
              "Quote": "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions."
            },
            {
              "Author": "Marie Curie",
              "Quote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
            },
            {
              "Author": "Anne Frank",
              "Quote": "Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance."
            },
            {
              "Author": "Robert Fulghum",
              "Quote": "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience."
            },
            {
              "Author": "Albert Schweitzer",
              "Quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut."
            },
            {
              "Author": "Thornton Wilder",
              "Quote": "My advice to you is not to inquire why or whither, but just enjoy your ice cream while its on your plate, that's my philosophy."
            },
            {
              "Author": "John Dewey",
              "Quote": "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "He who conquers others is strong; He who conquers himself is mighty."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "Anything you really want, you can attain, if you really go after it."
            },
            {
              "Author": "John Dewey",
              "Quote": "Arriving at one point is the starting point to another."
            },
            {
              "Author": "James Oppenheim",
              "Quote": "The foolish man seeks happiness in the distance, the wise grows it under his feet."
            },
            {
              "Author": "Martha Washington",
              "Quote": "The greatest part of our happiness depends on our dispositions, not our circumstances."
            },
            {
              "Author": "Margaret Bonnano",
              "Quote": "It is only possible to live happily ever after on a day to day basis."
            },
            {
              "Author": "Goethe",
              "Quote": "A man sees in the world what he carries in his heart."
            },
            {
              "Author": "Benjamin Disraeli",
              "Quote": "Action may not always bring happiness, but there is no happiness without action."
            },
            {
              "Author": "Joe Paterno",
              "Quote": "Believe deep down in your heart that you're destined to do great things."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Sooner or later, those who win are those who think they can."
            },
            {
              "Author": "Tony Robbins",
              "Quote": "The only limit to your impact is your imagination and commitment."
            },
            {
              "Author": "Cathy Pulsifer",
              "Quote": "You are special, you are unique, you are the best!"
            },
            {
              "Author": "William Arthur Ward",
              "Quote": "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "To know oneself is to study oneself in action with another person."
            },
            {
              "Author": "Bishop Desmond Tutu",
              "Quote": "We must not allow ourselves to become like the system we oppose."
            },
            {
              "Author": "Thich Nhat Hanh",
              "Quote": "Smile, breathe and go slowly."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Reality is merely an illusion, albeit a very persistent one."
            },
            {
              "Author": "Franklin Roosevelt",
              "Quote": "When you come to the end of your rope, tie a knot and hang on."
            },
            {
              "Author": "Buddha",
              "Quote": "Always be mindful of the kindness and not the faults of others."
            },
            {
              "Author": "Carl Jung",
              "Quote": "Everything that irritates us about others can lead us to an understanding of ourselves."
            },
            {
              "Author": "Dale Carnegie",
              "Quote": "When fate hands us a lemon, lets try to make lemonade."
            },
            {
              "Author": "Mohandas Gandhi",
              "Quote": "The weak can never forgive. Forgiveness is the attribute of the strong."
            },
            {
              "Author": "Chanakya",
              "Quote": "A man is great by deeds, not by birth."
            },
            {
              "Author": "Dale Carnegie",
              "Quote": "Success is getting what you want. Happiness is wanting what you get."
            },
            {
              "Author": "",
              "Quote": "Put your future in good hands, your own."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Truth isn't all about what actually happens but more about how what has happened is interpreted."
            },
            {
              "Author": "",
              "Quote": "A good rest is half the work."
            },
            {
              "Author": "Robert Stevenson",
              "Quote": "Don't judge each day by the harvest you reap but by the seeds that you plant."
            },
            {
              "Author": "Demosthenes",
              "Quote": "Small opportunities are often the beginning of great enterprises."
            },
            {
              "Author": "Gail Sheehy",
              "Quote": "To be tested is good. The challenged life may be the best therapist."
            },
            {
              "Author": "English proverb",
              "Quote": "Take heed: you do not find what you do not seek."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Happiness is the reward we get for living to the highest right we know."
            },
            {
              "Author": "Cervantes",
              "Quote": "Be slow of tongue and quick of eye."
            },
            {
              "Author": "Mohandas Gandhi",
              "Quote": "Freedom is not worth having if it does not connote freedom to err."
            },
            {
              "Author": "John Locke",
              "Quote": "I have always thought the actions of men the best interpreters of their thoughts."
            },
            {
              "Author": "Soren Kierkegaard",
              "Quote": "To dare is to lose ones footing momentarily. To not dare is to lose oneself."
            },
            {
              "Author": "David Eddings",
              "Quote": "No day in which you learn something is a complete loss."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "Peace cannot be kept by force. It can only be achieved by understanding."
            },
            {
              "Author": "David McCullough",
              "Quote": "Real success is finding your lifework in the work that you love."
            },
            {
              "Author": "Buddha",
              "Quote": "Better than a thousand hollow words, is one word that brings peace."
            },
            {
              "Author": "",
              "Quote": "All the flowers of all the tomorrows are in the seeds of today."
            },
            {
              "Author": "Joseph Campbell",
              "Quote": "Your sacred space is where you can find yourself again and again."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "As you think, so shall you become."
            },
            {
              "Author": "William Blake",
              "Quote": "In seed time learn, in harvest teach, in winter enjoy."
            },
            {
              "Author": "Cheng Yen",
              "Quote": "Happiness does not come from having much, but from being attached to little."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Every gift from a friend is a wish for your happiness."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Go put your creed into the deed. Nor speak with double tongue."
            },
            {
              "Author": "Euripides",
              "Quote": "The wisest men follow their own direction."
            },
            {
              "Author": "William Sloane Coffin",
              "Quote": "Hope arouses, as nothing else can arouse, a passion for the possible."
            },
            {
              "Author": "Confucius",
              "Quote": "Everything has beauty, but not everyone sees it."
            },
            {
              "Author": "Pema Chodron",
              "Quote": "Nothing ever goes away until it has taught us what we need to know."
            },
            {
              "Author": "Maya Angelou",
              "Quote": "When you learn, teach. When you get, give."
            },
            {
              "Author": "Dorothy Thompson",
              "Quote": "Only when we are no longer afraid do we begin to live."
            },
            {
              "Author": "Andy Rooney",
              "Quote": "If you smile when no one else is around, you really mean it."
            },
            {
              "Author": "Martin Luther King, Jr.",
              "Quote": "Love is the only force capable of transforming an enemy into friend."
            },
            {
              "Author": "Carl Jung",
              "Quote": "In all chaos there is a cosmos, in all disorder a secret order."
            },
            {
              "Author": "",
              "Quote": "A man is not where he lives but where he loves."
            },
            {
              "Author": "Winston Churchill",
              "Quote": "The price of greatness is responsibility."
            },
            {
              "Author": "Paul Tillich",
              "Quote": "Decision is a risk rooted in the courage of being free."
            },
            {
              "Author": "William Burroughs",
              "Quote": "Your mind will answer most questions if you learn to relax and wait for the answer."
            },
            {
              "Author": "",
              "Quote": "The world doesn't happen to you it happens from you."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "We cannot solve our problems with the same thinking we used when we created them."
            },
            {
              "Author": "",
              "Quote": "More powerful than the will to win is the courage to begin."
            },
            {
              "Author": "Richard Bach",
              "Quote": "Learning is finding out what you already know."
            },
            {
              "Author": "Alfred Painter",
              "Quote": "Saying thank you is more than good manners. It is good spirituality."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "Silence is a source of great strength."
            },
            {
              "Author": "Anne Lamott",
              "Quote": "Joy is the best makeup."
            },
            {
              "Author": "Seneca",
              "Quote": "There is no great genius without some touch of madness."
            },
            {
              "Author": "Buddha",
              "Quote": "A jug fills drop by drop."
            },
            {
              "Author": "Doris Mortman",
              "Quote": "Until you make peace with who you are, you'll never be content with what you have."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "We aim above the mark to hit the mark."
            },
            {
              "Author": "Catherine Pulsifer",
              "Quote": "Being angry never solves anything."
            },
            {
              "Author": "Orison Marden",
              "Quote": "All men who have achieved great things have been great dreamers."
            },
            {
              "Author": "Arthur Conan Doyle",
              "Quote": "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius."
            },
            {
              "Author": "Walter Lippmann",
              "Quote": "Where all think alike, no one thinks very much."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "Everything that exists is in a manner the seed of that which will be."
            },
            {
              "Author": "Marie Curie",
              "Quote": "Be less curious about people and more curious about ideas."
            },
            {
              "Author": "Charles Perkhurst",
              "Quote": "The heart has eyes which the brain knows nothing of."
            },
            {
              "Author": "Robert Kennedy",
              "Quote": "Only those who dare to fail greatly can ever achieve greatly."
            },
            {
              "Author": "Richard Whately",
              "Quote": "Lose an hour in the morning, and you will spend all day looking for it."
            },
            {
              "Author": "Bruce Lee",
              "Quote": "Mistakes are always forgivable, if one has the courage to admit them."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "Go to your bosom: Knock there, and ask your heart what it doth know."
            },
            {
              "Author": "Dalai Lama",
              "Quote": "Happiness mainly comes from our own attitude, rather than from external factors."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "If you do not change direction, you may end up where you are heading."
            },
            {
              "Author": "",
              "Quote": "What we see is mainly what we look for."
            },
            {
              "Author": "Marsha Petrie Sue",
              "Quote": "Stay away from what might have been and look at what will be."
            },
            {
              "Author": "William James",
              "Quote": "Act as if what you do makes a difference. It does."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Passion creates the desire for more and action fuelled by passion creates a future."
            },
            {
              "Author": "Alexander Pope",
              "Quote": "Do good by stealth, and blush to find it fame."
            },
            {
              "Author": "Napoleon Hill",
              "Quote": "Opportunity often comes disguised in the form of misfortune, or temporary defeat."
            },
            {
              "Author": "Thomas Jefferson",
              "Quote": "Don't talk about what you have done or what you are going to do."
            },
            {
              "Author": "Seneca",
              "Quote": "Most powerful is he who has himself in his own power."
            },
            {
              "Author": "Bernard Shaw",
              "Quote": "We don't stop playing because we grow old; we grow old because we stop playing."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "Experience can only be gained by doing not by thinking or dreaming."
            },
            {
              "Author": "Mark Twain",
              "Quote": "Always tell the truth. That way, you don't have to remember what you said."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "From wonder into wonder existence opens."
            },
            {
              "Author": "Napoleon Bonaparte",
              "Quote": "He who fears being conquered is sure of defeat."
            },
            {
              "Author": "John Lennon",
              "Quote": "Life is what happens while you are making other plans."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "Doing what you love is the cornerstone of having abundance in your life."
            },
            {
              "Author": "Johann Wolfgang von Goethe",
              "Quote": "Kindness is the golden chain by which society is bound together."
            },
            {
              "Author": "Nietzsche",
              "Quote": "You need chaos in your soul to give birth to a dancing star."
            },
            {
              "Author": "Byron Pulsifer",
              "Quote": "It can't be spring if your heart is filled with past failures."
            },
            {
              "Author": "Brendan Francis",
              "Quote": "No yesterdays are ever wasted for those who give themselves to today."
            },
            {
              "Author": "Tom Krause",
              "Quote": "There are no failures, just experiences and your reactions to them."
            },
            {
              "Author": "Pablo Picasso",
              "Quote": "Action is the foundational key to all success."
            },
            {
              "Author": "Abraham Maslow",
              "Quote": "What is necessary to change a person is to change his awareness of himself."
            },
            {
              "Author": "Zig Ziglar",
              "Quote": "Positive thinking will let you do everything better than negative thinking will."
            },
            {
              "Author": "Mother Teresa",
              "Quote": "We shall never know all the good that a simple smile can do."
            },
            {
              "Author": "Frances de Sales",
              "Quote": "Nothing is so strong as gentleness. Nothing is so gentle as real strength."
            },
            {
              "Author": "Ralph Waldo Emerson",
              "Quote": "Imagination is not a talent of some men but is the health of every man."
            },
            {
              "Author": "Kenji Miyazawa",
              "Quote": "We must embrace pain and burn it as fuel for our journey."
            },
            {
              "Author": "",
              "Quote": "Don't wait for people to be friendly. Show them how."
            },
            {
              "Author": "Chinese proverb",
              "Quote": "A gem cannot be polished without friction, nor a man perfected without trials."
            },
            {
              "Author": "George Matthew Adams",
              "Quote": "Each day can be one of triumph if you keep up your interests."
            },
            {
              "Author": "Robert M. Pirsig",
              "Quote": "The place to improve the world is first in one's own heart and head and hands."
            },
            {
              "Author": "Winston Churchill",
              "Quote": "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty."
            },
            {
              "Author": "Albert Gray",
              "Quote": "Winners have simply formed the habit of doing things losers don't like to do."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Nature is a mutable cloud which is always and never the same."
            },
            {
              "Author": "Grandma Moses",
              "Quote": "Life is what you make of it. Always has been, always will be."
            },
            {
              "Author": "Swedish proverb",
              "Quote": "Worry often gives a small thing a big shadow."
            },
            {
              "Author": "Confucius",
              "Quote": "I want you to be everything that's you, deep at the center of your being."
            },
            {
              "Author": "William Shakespeare",
              "Quote": "We know what we are, but know not what we may be."
            },
            {
              "Author": "Jean-Paul Sartre",
              "Quote": "Freedom is what you do with what's been done to you."
            },
            {
              "Author": "Felix Adler",
              "Quote": "The truth which has made us free will in the end make us glad also."
            },
            {
              "Author": "Joseph Joubert",
              "Quote": "He who has imagination without learning has wings but no feet."
            },
            {
              "Author": "Elizabeth Browning",
              "Quote": "Whoso loves, believes the impossible."
            },
            {
              "Author": "Ella Fitzgerald",
              "Quote": "It isn't where you come from, it's where you're going that counts."
            },
            {
              "Author": "Pema Chodron",
              "Quote": "The greatest obstacle to connecting with our joy is resentment."
            },
            {
              "Author": "C. Pulsifer",
              "Quote": "When anger use your energy to do something productive."
            },
            {
              "Author": "Blaise Pascal",
              "Quote": "We are all something, but none of us are everything."
            },
            {
              "Author": "Albert Einstein",
              "Quote": "If you can't explain it simply, you don't understand it well enough."
            },
            {
              "Author": "Marcus Aurelius",
              "Quote": "He who lives in harmony with himself lives in harmony with the world."
            },
            {
              "Author": "Lao Tzu",
              "Quote": "He who knows himself is enlightened."
            },
            {
              "Author": "Ralph Emerson",
              "Quote": "Build a better mousetrap and the world will beat a path to your door."
            },
            {
              "Author": "Abraham Lincoln",
              "Quote": "As our case is new, we must think and act anew."
            },
            {
              "Author": "Mother Teresa",
              "Quote": "If you can't feed a hundred people, then feed just one."
            },
            {
              "Author": "Robert Frost",
              "Quote": "In three words I can sum up everything Ive learned about life: it goes on."
            },
            {
              "Author": "",
              "Quote": "Don't let today's disappointments cast a shadow on tomorrow's dreams."
            },
            {
              "Author": "Tony Robbins",
              "Quote": "You always succeed in producing a result."
            },
            {
              "Author": "Wayne Dyer",
              "Quote": "Everything you are against weakens you. Everything you are for empowers you."
            },
            {
              "Author": "Fran Watson",
              "Quote": "As we risk ourselves, we grow. Each new experience is a risk."
            },
            {
              "Author": "Mary Almanac",
              "Quote": "Who we are never changes. Who we think we are does."
            },
            {
              "Author": "Elbert Hubbard",
              "Quote": "The final proof of greatness lies in being able to endure criticism without resentment."
            },
            {
              "Author": "Victor Hugo",
              "Quote": "An invasion of armies can be resisted, but not an idea whose time has come."
            },
            {
              "Author": "",
              "Quote": "Never let lack of money interfere with having fun."
            },
            {
              "Author": "Ralph Marston",
              "Quote": "Excellence is not a skill. It is an attitude."
            },
            {
              "Author": "Lewis Cass",
              "Quote": "People may doubt what you say, but they will believe what you do."
            },
            {
              "Author": "Thomas Paine",
              "Quote": "The most formidable weapon against errors of every kind is reason."
            },
            {
              "Author": "Danilo Dolci",
              "Quote": "It's important to know that words don't move mountains. Work, exacting work moves mountains."
            },
            {
              "Author": "Franz Liszt",
              "Quote": "Beware of missing chances; otherwise it may be altogether too late some day."
            },
            {
              "Author": "Buddha",
              "Quote": "You only lose what you cling to."
            },
            {
              "Author": "Corita Kent",
              "Quote": "Life is a succession of moments. To live each one is to succeed."
            },
            {
              "Author": "Ralph Waldo Emerson",
              "Quote": "Most of the shadows of life are caused by standing in our own sunshine."
            },
           ]

  function showQuotes(textObj) {
      setQuotes({
        quotes: textObj.Quote,
        author: textObj.Author
      });
  }

    
    const showText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec mauris ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sapien magna.";
    
    console.log(quotesRaw);

    const styleDisplay = {
      fontSize: newDis.toString().length > 10 || display.toString().length > 10? "20px" : "40px" 
    }

    return (
        <div className="container">
            <div className="happy-box">
              <div className="display-happy-text">
                  { quotes? 
                      <p className="happy-text">
                      {quotes.quotes} 
                        <br />
                      -{quotes.author}
                  </p> : 
                  
                  ""
                  }
              </div>
            </div>
            <div className="cal-body">
                <div className="cal-display">
                    <div className="cal-display-result" style={styleDisplay}>
                        {newDis? newDis : (display? display : "0")}
                    </div>
                </div>
                <div className="cal-input">
                    <div className="cal-input-top">
                       {addSaction1}
                    </div>
                    <div className="cal-input-bottom">
                        <div className="cal-input-bottom-left">
                            {addSaction2}
                        </div>
                        <div className="cal-input-bottom-right">
                            <button onClick={calculation} className='btn btn-equal' >=</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
              <a href="https://www.linkedin.com/in/alamin1964/" target='_blank'>Concept & build by MD Alamin</a>
            </div>
        </div>
    )
}