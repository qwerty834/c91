function send(){
    a1 = document.getElementById("answer1").value;
    a2 = document.getElementById("answer2").value;
    a3 = a1*a2;
    row1 = "<h5><b>"+a1+"*"+a2 +"</h5></b>";
    row2 = "<br><h6>Answer:</h6> <input type='text'>";
    row3 = "<br><button id='check' onclick='check.()'></button>";
    row = row1 + row2 + row3;
    document.getElementById("output").innerHTML = row;
}