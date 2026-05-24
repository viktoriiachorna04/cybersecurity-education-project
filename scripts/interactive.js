function showMessage(){

    document.getElementById("result").innerHTML =
    "Так, це фішингове повідомлення, оскільки воно містить підозріле посилання та заклик терміново перейти за ним.";

}

function checkAnswer(answer){

    const result = document.getElementById("test-result");

    if(answer === "correct"){

        result.innerHTML = "✅ Правильно! Це надійний пароль.";

        result.style.color = "green";

    }else{

        result.innerHTML = "❌ Неправильно. Такий пароль легко зламати.";

        result.style.color = "red";

    }
}

window.onscroll = function(){
    const topBtn = document.getElementById("topBtn");

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        topBtn.style.display = "flex";
    }else{
        topBtn.style.display = "none";
    }
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
