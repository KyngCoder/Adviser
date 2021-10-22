

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music.",
    "When you have a dream, you’ve got to grab it and never let go.",
    "Take up one idea. Make that one idea your life-think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success." ,
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "Don't be afraid to give up the good to go for the great.",
    "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "You may have to fight a battle more than once to win it.",
    "The best revenge is massive success.",
    "A good plan violently executed now is better than a perfect plan executed next week.",
    "If you spend your life trying to be good at everything, you will never be great at anything.",
    "In order to be irreplaceable, one must always be different",
    "Fix the cause, not the symptom"
]


    
let storeAdvice = document.getElementById("adviceDisplay")
let displayAdvice = document.getElementById("adviceBtn");



displayAdvice.addEventListener("click",random)


function random(){
    for(let i=0; i<advice.length; i++){
    
    let ranNum = Math.floor(Math.random()*5)
    storeAdvice.textContent = advice[ranNum]}
}
 