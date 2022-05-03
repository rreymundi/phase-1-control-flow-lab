function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
    return `This one is on me!`
  }
    else if (someNumber > 400 && someNumber < 2000) {
      return `That will be twenty bucks.`;
    }
      else if (someNumber > 2000 && someNumber < 2500) {
        return `I will gladly take your thirty bucks.`;
      }
        else if (someNumber > 2500) {
          return `No can do.`;
        }
  }

function ternaryCheckCity(city){
  const cityGreeting = city === "NYC" ? "Ok, sounds good." : "No go.";
  return cityGreeting;
}

function switchOnCharmFromTip(tip){
  
  switch (tip) {
    case 'generous':
        return  `Thank you so much.`;
        break;
    case 'not as generous':
        return `Thank you.`;
        break;
    default:
        return `Bye.`;
        break;
}

}