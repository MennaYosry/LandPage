var randomChange= document.getElementById('randomChange'),
images=['images/bags.jpg' , 'images/black.webp','images/cream.avif','images/clothes.jpg']
var imgCount=images.length
var number=Math.floor(Math.random()*imgCount);
alert(number)
window.onload=function(){
    randomChange.style.backgroundImage='url('+images[number]+')'
}