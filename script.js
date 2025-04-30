elementImg = document.getElementById("idImage");

listImage =["advertisement.png", "gambar kolaborasi stev and jen 2.jpg", "gambar kolaborasi stev and jen.jpg"];
i=0;
function gantiGbr(){
    elementImg.src=listImage[i];
    i = (i+1)% listImage.length;
}
setInterval(gantiGbr,2000)