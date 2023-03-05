const imgPositipon = document.querySelectorAll('.aspect-ratio-169 img');
    const imgContainer = document.querySelector('.aspect-ratio-169');
    let imgNumber = imgPositipon.length;
    let index = 0;
    const dotItems = document.querySelectorAll(".dot");
    imgPositipon.forEach(function(image,index) {
        image.style.left = index*100 + '%';
        dotItems[index].addEventListener("click",function(){
            slider (index);
        });
    });
    function imgSlide(){
        index++;
        if(index >= imgNumber){
            index = 0;
        }
        slider (index);
    }
    function slider (index){
        imgContainer.style.left ="-" +index*100+ "%";
        const dotActive = document.querySelector(".active");
        dotActive.classList.remove("active");
        dotItems[index].classList.add("active");
    }
    setInterval(imgSlide, 5000);