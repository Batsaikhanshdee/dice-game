// Тоглогчийн ээлжийг хадгалах хувисагч 
var activePlayer = 1;
// Тоглогчийн цуглуулсан оноог хадгалах хувисагч
var scores =[0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадглалх хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр өгнө.
var dice =Math.floor(Math.random() * 6) + 1;

//   <div class="player-score" id="score-0">43</div>

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

window.document.querySelector('.dice').style.display = "none";


console.log(' Шоо: ' + dice);
