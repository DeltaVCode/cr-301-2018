'use strict'

const doctors = [
  { number: 20, actor: 'William Hartnell', begin: 1963, end: 1966 },
  { number: 30, actor: 'Patrick Troughton', begin: 1966, end: 1969 },
  { number: 3, actor: 'Jon Pertwee', begin: 1970, end: 1974 },
  { number: 4, actor: 'Tom Baker', begin: 1974, end: 1981 },
  { number: 5, actor: 'Peter Davison', begin: 1982, end: 1984 },
  { number: 6, actor: 'Colin Baker', begin: 1984, end: 1986 },
  { number: 7, actor: 'Sylvester McCoy', begin: 1987, end: 1989 },
  { number: 8, actor: 'Paul McGann', begin: 1996, end: 1996 },
  { number: 9, actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
  { number: 10, actor: 'David Tennant', begin: 2005, end: 2010 },
  { number: 11, actor: 'Matt Smith', begin: 2010, end: 2013 },
  { number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2013 }
];

console.log('# for loop');
var actorNames = [];
for (let i = 0; i < doctors.length; i++) {
  // "filter"-ish
  if (doctors[i].begin <= 2000) continue;

  console.log(doctors[i].actor);
  actorNames.push(doctors[i].actor);
}
console.log(actorNames);

console.log('# forEach');
doctors.forEach(doctor => console.log(doctor.actor));

console.log('# forEach with index`');
doctors
  .forEach((doctor, index) =>
    console.log(`${index}: ${doctor.actor}`));

console.log('# map');
console.log(doctors.map(doctor => doctor.actor));

console.log('# map with index');
console.log(doctors
  .map((doctor, index) => `${index}: ${doctor.actor}`));

console.log('# filter');
console.log(doctors.filter(doctor => doctor.begin > 2000));

console.log('# filter with index (even doctors)');
console.log(doctors
  .filter((doctor, index) => index % 2 === 1));

console.log('# filter even docs, map to name');
console.log(doctors
  .filter((d,i) => i % 2)
  .map(d => d.actor)
);

console.log('# reduce');
var initialTotal = 0;
var reducer = (total, doctor) => total + doctor.number;
var reduceTotal = doctors
  .reduce(
    reducer,
    initialTotal
  );
console.log(reduceTotal);
// equivalent to:
var total = initialTotal;
for (let i = 0; i < doctors.length; i++) {
  total = reducer(total, doctors[i]);
}
console.log(total);

console.log('# sum of numbers');
var nums = [1,3,5,7,9];
var numsSum = nums.reduce((sum,num) => sum + num);
console.log(numsSum);

var docSum = doctors.reduce((sum,doc) => sum + doc.number);
console.log(docSum);
var docSum2 = doctors
  .map(doc => doc.number)
  .reduce((sum,num) => (console.log(sum), sum + num));
console.log(docSum2);

console.log('# min via reduce');
console.log(doctors
  .reduce(
    (min,doctor) => doctor.begin < min ? doctor.begin : min,
    Infinity
  ));

console.log(doctors
  .reduce(
    (max,doctor) => doctor.begin > max ? doctor.begin : max,
    -Infinity
  ));

console.log(doctors
  .reduce((minMax, doctor) => ({
    min: doctor.begin < minMax.min ? doctor.begin : minMax.min,
    max: doctor.begin > minMax.max ? doctor.begin : minMax.max,
  }),
  {
    min: Infinity,
    max: -Infinity,
  })
);

var reversed = 'DeltaV'.split('')
  .reduce((acc, char) => char + acc, '');
console.log(reversed);
