// Тоглогчийн ээлжийг хадгалах хувисагч 
var activePlayer = 0;
// Тоглогчийн цуглуулсан оноог хадгалах хувисагч
var scores =[0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадглалх хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр өгнө.
var diceNumber =Math.floor(Math.random() * 6) + 1;



document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

// шоог шидэх эвэнт листзнэр
document.querySelector('.btn-roll').addEventListener("click", function (){
    // 1 - 6 хүртлэх тоог санамсаргүйгээр гаргаж ирнэ.
    var diceNumber =Math.floor(Math.random() * 6) + 1;

// Шооны зургыг вэб дээр гаргаж ирнэ.
    diceDom.style.display = "block";
// Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.    
    diceDom.src = 'dice-' + diceNumber + ".png";
// Буусан тоо нь 1 ээс ялгаатай бол Тоглогчийн ээлжийн оноог нэмэгдүүонэ.
    if(diceNumber !==1){
        // 1 ээс ялгаатай буулаа. Буусан тоог тоглогчид өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;   
    } else{
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.

        // Хэрэв идвэхитэй тоглогч 0 байвал 1 болго. Үгүй бол идвэхитэй тоглогчийг 1 болго.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // if(activePlayer === 0){
        //     activePlayer = 1;
        // } else{
        //     activePlayer = 0;    
        // }  
        // Улаан цэгийг шилжүүлэх 
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        // Шоог түр алга болгоно.
        diceDom.style.display = "none";
        
    }
});





