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
        switchToNextPlayer();
        
    }
});
// Hold товчны эвэнт листенэр
document.querySelector('.btn-hold').addEventListener("click", function(){
    // Уг тоглогчийн цуглуулсан ээлжний оноог голбаль оноон дээр нэмнэ.
    // if(activePlayer === 0){
    //     scores[0] = scores[0] + roundScore;
    // }else{
    //     scores[1] = scores[1] + roundScore;
    // }
    scores[activePlayer] = scores[activePlayer] + roundScore;
        // Дэлгэц дээр оноо өөрчилнө.
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Уг тоглогчийн хожсон эсэхийг шалгах (100 аас их эсэх)
    if(scores[activePlayer] >= 20){
        // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана.
        document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
        document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
    } else{
            // Тоглогчийн ээлжийг солино.
        switchToNextPlayer();
    }
});
    // Энэ функц нь тоглох дараагийн тоглогчруу шилжүүлдэг.
    function switchToNextPlayer(){
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.

        // Хэрэв идвэхитэй тоглогч 0 байвал 1 болго. Үгүй бол идвэхитэй тоглогчийг 1 болго.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        // Улаан цэгийг шилжүүлэх 
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        // Шоог түр алга болгоно.
        diceDom.style.display = "none";
    }




