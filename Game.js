/**
 * Created by session2 on 8/15/16.
 */



function generateFaces() {
    var theLeftSide = document.getElementById("leftSide");
    var numberOfFaces = 5;
    for (var i = 0; i < numberOfFaces; i++) {
        var img = document.createElement('img');
        img.src = "Superman_shield.svg.png";
        img.height = 100;
        img.width = 100;

        theLeftSide.appendChild(img).style.left = (Math.random() * 370) + "px";
        theLeftSide.appendChild(img).style.top = (Math.random() * 370) + "px";
    }
}






