const numbers = [1, 5, 2, 17, 6, 10];
const players = [70, 71, 75, 73, 74, 69, 68, 67, 65, 64, 63] 
// const selected = players.filter(n => n > 70);
const selected = players.filter(n => n > 75);
// console.log(selected);

const friends = ['Abdullah', 'Abdur Rahman', 'Abdus Salam', 'Abdus Subhan', 'Umama'];
const oddNameFriends = friends.filter(x => x.length % 2 === 1);
console.log(oddNameFriends);