let sports: string[] = ['golf', 'cricket', 'tennis', 'swimming'];

/* for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
} */

sports.push('baseball');

for (let tempSport of sports) {
  console.log(tempSport);
}
