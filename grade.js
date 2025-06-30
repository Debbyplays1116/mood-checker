function checkscore(){
    let score = document.getElementById("score").value
    console.log(score)
   let response = ""

if(score>=90){
    response="A+"
}
else if(score>=70){
    response="B"
}
else if(score>=50){
    response="C"
}
else {
    response="F"
}
document.getElementById("response").innerHTML= response
}
