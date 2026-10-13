let currentFeeling ="";

function chooseMotivation(feeling) {

    currentFeeling = feeling;

    let motivationBox = document.getElementById("motivationBox");
    let motivationTitle = document.getElementById("motivationTitle");
    let motivationMessage = document.getElementById("motivationMessage");

    if (currentFeeling === "tired") {
        motivationTitle.innerHTML = "You can take a break.";

        motivationMessage.innerHTML = "It's okay to rest and give yourself a break! Come back when you are ready.";

        motivationBox.style.backgroundColor = "lightblue";

    } else if (currentFeeling === "procrastinating") {
        motivationTitle.innerHTML = "Start with something small.";
        motivationMessage.innerHTML = "One small step in closer to your goal!";
        motivationBox.style.backgroundColor = "lightyellow";
}   else {

        motivationTitle.innerHTML = "Keep going!";
        motivationMessage.innerHTML = "Keep pushing forward, you are capable of anything you put your mind to!";
        motivationBox.style.backgroundColor = "lightpink";
}
}