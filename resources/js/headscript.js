// process scores
const params = new URLSearchParams(document.location.search)
function processScore(score) {
  if(!score) { return 0; }
  else { return isNaN(Number(score)) ? 0 : Number(score); }
}
const scores = {
  k1: processScore(params.get('k1')),
  k2: processScore(params.get('k2')),
  h1: processScore(params.get('h1')),
  h2: processScore(params.get('h2')),
  h3: processScore(params.get('h3')),
  g1: processScore(params.get('g1')),
  g2: processScore(params.get('g2')),
  g3: processScore(params.get('g3')),
  g4: processScore(params.get('g4')),
  g5: processScore(params.get('g5'))
}

// calc scores and stages
let totalScore = 0;
for (let s in scores) { totalScore += scores[s]; }
let stage = 1;
if (totalScore >= 0 && totalScore <= 20) { stage = 1; }
else if (totalScore >= 21 && totalScore <= 39) { stage = 2; }
else if (totalScore >= 40 && totalScore <= 59) { stage = 3; }
else if (totalScore >= 60 && totalScore <= 70) { stage = 4; }
else { stage = 1; }

let hScore = (scores.h1 + scores.h2 + scores.h3);
let hStage = 1;
if (hScore >= 0 && hScore <= 6) { hStage = 1; }
else if (hScore >= 7  && hScore <= 11) { hStage = 2; }
else if (hScore >= 12 && hScore <= 17) { hStage = 3; }
else if (hScore >= 18 && hScore <= 21) { hStage = 4; }
else { hStage = 1; }

let kScore = (scores.k1 + scores.k2);
let kStage = 1;
if (kScore >= 0 && kScore <= 3) { kStage = 1; }
else if (kScore >= 4 && kScore <= 7) { kStage = 2; }
else if (kScore >= 8 && kScore <= 11) { kStage = 3; }
else if (kScore >= 12 && kScore <= 14) { kStage = 4; }
else { kStage = 1; }

let gScore = (scores.g1 + scores.g2 + scores.g3 + scores.g4 + scores.g5);
let gStage = 1;
if (gScore >= 0 && gScore <= 10) { gStage = 1; }
else if (gScore >= 11 && gScore <= 19) { gStage = 2; }
else if (gScore >= 20 && gScore <= 29) { gStage = 3; }
else if (gScore >= 30 && gScore <= 35) { gStage = 4; }
else { gStage = 1; }

/** for debugging **/
// console.log({g: {score: gScore, stage: gStage}, k: {score:kScore, stage:kStage}, h: {score: hScore, stage:hStage}, overall: {score: totalScore, stage: stage}});