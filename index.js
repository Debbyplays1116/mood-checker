function checkMood(){
    let mood = document.getElementById("moodInput").value.toLowerCase()
   let response = ""

if(mood=="happy"){
    response="😊 That's great! Keep smiling!"
}
else if (mood=="sad"){
   response="😢 Sorry to hear that. Hope things get better!"
}
else if (mood=="excited"){
    response="😄 Woohoo! Keep the energy up!"
}
else if (mood=="tired"){
    response="😴 Time to get some rest!"
}
else if (mood=="angry"){
    response="👌sorry to hear that but now calm down and breath"
}
else if (mood=="anxious"){
    response="😤calm down breath in and out"
}
else if (mood=="jealous"){
    response="🥰 dont be remember you are special so dont be jealous of any one "
}
else if (mood=="deppressed"){
    response="😁dont be lets get those smiles up"
}
else if (mood=="bored"){
    response="😁dont let anything stop you fun"
}
else if(mood=="embarrassed"){
    response="👍 Regain your confidence and shine "
}
else if(mood=="disgusted"){
    response="😷sorry, calm down and breath"
}
else if(mood=="gogolastic"){
    response="my brother calm down"
}
else{
    response="🤔 Hmm... I’m not sure how to respond to that"

}

document.getElementById("response").innerHTML= response
}