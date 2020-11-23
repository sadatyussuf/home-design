const images = document.querySelectorAll('.img')

const imgs = document.querySelectorAll('.img img')

const showimage = document.querySelector(".sec-large img")

const image_wrapper = document.querySelector(".sec-large")

const slide_images = ['images/gallery-img1.jpg','images/gallery-img2.jpg','images/gallery-img3.jpg','images/gallery-img4.jpg','images/gallery-img5.jpg','images/gallery-img6.jpg']; 

let slide_index = 0; 
let i = 0;
let j = 0;

//  imgs[0].style.filter = 'brightness(100%)'

 console.log(imgs.length)
 console.log(slide_images)

window.addEventListener("DOMContentLoaded",function(event){
    // event.preventDefault()
    current = event.target
  
    setInterval(slideshow,1000);

    function slideshow(){
        showimage.src = slide_images[slide_index];
        slide_index++

        // adding fade-in class into the Showimage div
        showimage.classList.add('fade-in');
        
        //removing the fade in class from the div after 0.5 sec
        setTimeout(()=> showimage.classList.remove('fade-in'),500);

        if (slide_index>slide_images.length-1){
            slide_index=0;

        }
        
           //looping through the thumbnails and applying the brightness to them
           
    
        //  console.log(i)
        //  i++
        
        if (i == 0){
            imgs[5].style.filter = 'brightness(50%)';
        }
           if (i==1){
               imgs[0].style.filter = 'brightness(50%)';
            }
            if (i == 2){
                imgs[1].style.filter = 'brightness(50%)';
            }
             if (i == 3){
                imgs[2].style.filter = 'brightness(50%)';
            }
             if (i == 4){
                imgs[3].style.filter = 'brightness(50%)';
            }
             if (i == 5){
                imgs[4].style.filter = 'brightness(50%)';
            }

        imgs[i].style.filter = 'brightness(100%)';
        if (i >=5){
            i=0;
        }
        console.log(i)
        i++
        
    }
    
})



images.forEach(function(image){
    
    image.addEventListener('click',function(e){
      // Reset the brigthness of the all the thumbnails
        imgs.forEach(img => (img.style.filter = 'brightness(50%)'))
       
       
        current =e.target.id
        curr = e.target
       
        //changes the image to that of the targeted image
        showimage.src = current;

        // adding fade-in class into the Showimage div
        showimage.classList.add('fade-in');
        
        //removing the fade in class from the div after 0.5 sec
        setTimeout(()=> showimage.classList.remove('fade-in'),500)
        
        // changing te brigthness when the thumbnail is clicked
         curr.style.filter = 'brightness(100%)';

    })
})