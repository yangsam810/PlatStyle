const stars=document.querySelector(".rating").children;
let ratingValue
let index //目前選到的星星
document.getElementById("rating-value").innerHTML // "請給分"
for(let i=0;i<stars.length;i++){
stars[i].addEventListener("mouseover",function(){
//  console.log(i)
document.getElementById("rating-value").innerHTML // "正在打分數"
for(let j=0;j<stars.length;j++){
stars[j].classList.remove("fa-solid")//reset 所有星星
stars[j].classList.add("fa-regular")
}
for(let j=0;j<=i;j++){
stars[j].classList.remove("fa-regular") //先移除空心的星星
stars[j].classList.add("fa-solid") //添加新的星星 如果i=j表示選中的
}
})
stars[i].addEventListener("click",function(){
ratingValue=i+1
index=i
document.getElementById("rating-value").innerHTML // ratingValue //"你打的分數是 
})
stars[i].addEventListener("mouseout",function(){
for(let j=0;j<stars.length;j++){
stars[j].classList.remove("fa-solid")//reset 所有星星
stars[j].classList.add("fa-regular")
}
for(let j=0;j<=index;j++){
stars[j].classList.remove("fa-regular")
stars[j].classList.add("fa-solid")
}
})
}