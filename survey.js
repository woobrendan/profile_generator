// import * as readline from 'node:readline';
const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

const profile = {
  name: '',
  music: '',
  activity: '',
  food: '',
  sport: ''
}
rl.question('What is your name: ', (answer1) => {
  rl.question('What is your favorite type of music: ', (answer2) => {
    rl.question('What is your favorite activity: ', (answer3) => {
      rl.question('What is your favorite food: ', (answer4) => {
        rl.question('What is your favorite sport to watch: ', (answer5) => {
      profile.name = answer1;
      profile.music = answer2;
      profile.activity = answer3;
      profile.food = answer4;
      profile.sport = answer5;
      console.log(`My name is ${answer1}, and I like to listen to ${answer2} music. I love to participate in ${answer3} and eat ${answer4}. If I'm not doing that, then I am probably watching ${answer5}`);
      rl.close()
        }); 
      });
    }); 
  }); 
}); 

// return profile;


// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
  
//   // rl.close();
// });