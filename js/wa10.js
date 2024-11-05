const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 76 fahrenheit outside, so insertx: went for a bike ride. When they pulled up to :inserty:, they turned their head, then :insertz:. Bob was watching from down the street, but he didnt care — :insertx: weighs 500 pounds, and it had been a long day.';

const insertX = ['Randy', 'Elmo', 'Dr. House']; 

const insertY = ['the post office', 'Casa Bonita', 'the Eiffel Tower'];

const insertZ = ['lost their balance and tumbled into a nearby bush', 'suddenly started mimicking a chicken, flapping their arms and squawking', 'tripped over their own feet'];

randomize.addEventListener('click', result);

function result() {

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name); 
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(500/14)+ ' stone';
    const temperature =  Math.round((76-32)*5/9)+ ' centigrade';

    newStory = newStory.replace('76 fahrenheit', temperature);
    newStory = newStory.replace('500 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

let newStory = storyText

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replace('insertx:', xItem)
.replace(':inserty:', yItem)
.replace(':insertz:', zItem)
.replace(':insertx:', xItem);

story.textContent = newStory;