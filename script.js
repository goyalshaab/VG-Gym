/* =====================================================
   VG GYM WEBSITE
   SCRIPT.JS
   COMPLETE FUNCTIONALITY
===================================================== */


/* ================= PAGE LOAD ================= */


document.addEventListener("DOMContentLoaded", function(){


    console.log("VG GYM Website Loaded Successfully");


});





/* ================= AOS ANIMATION ================= */


if(typeof AOS !== "undefined"){

    AOS.init({

        duration:1000,

        once:true,

        offset:100

    });

}





/* ================= BMI CALCULATOR ================= */


function calculateBMI(){


    let height =
    document.getElementById("height").value;


    let weight =
    document.getElementById("weight").value;



    let result =
    document.getElementById("result");



    if(height === "" || weight === ""){


        result.innerHTML =
        "Please enter height and weight";


        result.style.color="red";


        return;


    }



    height = height / 100;



    let bmi =
    weight /
    (height * height);



    bmi = bmi.toFixed(2);



    let message="";



    if(bmi < 18.5){


        message =
        "Underweight";


    }


    else if(bmi >=18.5 && bmi <25){


        message =
        "Normal Weight";


    }


    else if(bmi >=25 && bmi <30){


        message =
        "Overweight";


    }


    else{


        message =
        "Obesity";


    }



    result.innerHTML =

    "Your BMI is "
    + bmi
    + " - "
    + message;



    result.style.color="#ffc107";


}





/* ================= COUNTER ANIMATION ================= */


let counters =
document.querySelectorAll(".counter");



let started=false;



function startCounter(){


    if(started)
    return;



    counters.forEach(counter=>{


        let target =
        parseInt(counter.innerText);



        let count=0;



        let speed =
        target / 100;



        let update=()=>{


            if(count < target){


                count += speed;


                counter.innerText =
                Math.ceil(count)
                + "+";



                setTimeout(update,20);


            }


            else{


                counter.innerText =
                target+"+";


            }


        };


        update();


    });



    started=true;


}




window.addEventListener("scroll",function(){


    let section =
    document.querySelector(".counter");



    if(section){


        let position =
        section.getBoundingClientRect();



        if(position.top < window.innerHeight){


            startCounter();


        }


    }



});





/* ================= BACK TO TOP ================= */


let topButton =
document.getElementById("topBtn");



window.addEventListener("scroll",function(){



    if(window.scrollY > 400){


        topButton.style.display="flex";


    }


    else{


        topButton.style.display="none";


    }



});




if(topButton){


topButton.addEventListener("click",function(e){


    e.preventDefault();


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});


}






/* ================= NAVBAR EFFECT ================= */



let navbar =
document.querySelector(".navbar");



window.addEventListener("scroll",function(){



    if(window.scrollY > 80){


        navbar.classList.add("shadow-lg");


        navbar.style.background="#000";


    }


    else{


        navbar.classList.remove("shadow-lg");


        navbar.style.background="transparent";


    }



});





/* ================= SMOOTH SCROLL ================= */



document.querySelectorAll('a[href^="#"]')
.forEach(link=>{


    link.addEventListener("click",function(e){


        let target =
        document.querySelector(
        this.getAttribute("href")
        );



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});






/* ================= CONTACT FORM ================= */


let contactForm =
document.querySelector("form");



if(contactForm){



contactForm.addEventListener("submit",function(e){


    e.preventDefault();



    alert(

    "Thank you for contacting VG GYM. We will contact you soon!"

    );



    contactForm.reset();



});


}






/* ================= JOIN BUTTON POPUP ================= */



let joinButtons =
document.querySelectorAll(".join-btn");



joinButtons.forEach(button=>{


button.addEventListener("click",function(){



    let modal =
    new bootstrap.Modal(
    document.getElementById("joinModal")
    );


    modal.show();



});


});







/* ================= DARK MODE ================= */


let darkButton =
document.getElementById("darkMode");



if(darkButton){



darkButton.addEventListener("click",function(){



    document.body.classList.toggle(
    "dark-mode"
    );



    localStorage.setItem(

        "darkMode",

        document.body.classList.contains(
        "dark-mode"
        )

    );



});


}




window.addEventListener("load",function(){



let dark =
localStorage.getItem("darkMode");



if(dark==="true"){


    document.body.classList.add(
    "dark-mode"
    );


}



});







/* ================= IMAGE LAZY LOAD ================= */



let images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.setAttribute(
    "loading",
    "lazy"
    );


});







/* ================= PRELOADER ================= */



window.addEventListener("load",function(){


    let loader =
    document.querySelector(".loader");



    if(loader){


        loader.style.opacity="0";



        setTimeout(()=>{


            loader.style.display="none";


        },500);



    }



});






/* ================= EMAIL VALIDATION ================= */



function validateEmail(email){


return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
.test(email);


}






/* ================= REGISTER VALIDATION ================= */



function registerUser(){



let name =
document.getElementById("name").value;



let email =
document.getElementById("email").value;



if(name==="" || email===""){


alert(
"Please fill all details"
);


return false;


}



if(!validateEmail(email)){


alert(
"Enter valid email address"
);


return false;


}



alert(
"Registration Successful! Welcome to VG GYM"
);



return true;


}






/* ================= MEMBERSHIP SELECT ================= */



function selectPlan(plan){


alert(

"You selected "
+ plan
+ " Membership"

);



}






/* ================= WHATSAPP BUTTON ================= */



function openWhatsapp(){


let phone =
"919999999999";



let message =
"Hello VG GYM, I want to join the gym";



window.open(

"https://wa.me/"
+phone
+"?text="
+encodeURIComponent(message),

"_blank"

);


}






/* ================= END ================= */