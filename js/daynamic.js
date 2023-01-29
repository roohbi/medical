// daynamic topbar :
let topbar = document.querySelector(".bar");
topbar.innerHTML=`<div class="container">
<div class="top-bar row">
    <div class="left-bar col-sm-12 col-md-8">
        <span><a href="tel:+212537774380">Renseignements : +212 5 37 77 43 80 /  </a></span>
        <span><a href="https://wa.me/+212665751349">WhatsApp : +212 6 65 75 13 49</a></span>
    </div>
    <div class="col-sm-12 col-md-4 text-md-center">
        <span><a href="https://e-supmedical.com/" target="_blank">Espace E-learning</a></span>
    </div>
</div>    
</div>`;

let navbar = document.querySelector(".navbar");
navbar.innerHTML=`
<div class="container">
<div class="image shadow-sm">
    <img src="images/logo2.jpg" alt="">
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main"
    aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars"></i>
</button>
<div class="collapse navbar-collapse" id="main">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link p-lg-2"  href="index.html">Accueil</a></li>
        <li class="nav-item"><a class="nav-link p-lg-2 " href='about-us.html'>Qui sommes nous</a></li>
        <li class="nav-item"><a class="nav-link p-lg-2 " href='#Certifiantes'>Formations certifiantes</a></li>
        <li class="nav-item"><a class="nav-link p-lg-2 " href='#Séminaires'>Formations Séminaires</a></li>
        <li class="nav-item"><a class="last-child nav-link p-lg-2 " href='contact.html'>Contact</a></li>
    </ul>
    <div class="cta d-none d-lg-block"></div>
</div>
</div>`;



let myfooter = document.querySelector(".footer");
myfooter.innerHTML=`
<div class="container">
<div class="row">
    <div class="col-sm-12 col-md-6">
        <div class="image logo shadow-sm">
            <img src="images/logo2.jpg" alt="">
        </div>
        <p class="slogne">chez SUPMEDICAL FORMATION Médicale adaptée à vos besoins !</p>
    </div>
    <div class="images col-sm-12 col-md-6">
        <div class="row">
            <div class="col-sm-4 col-lg-4">
                <img src="images/portfolio/2.jpg" alt=""/>
            </div>
            <div class="col-sm-4 col-lg-4">
                <img src="images/portfolio/4.jpg" alt=""/>
            </div>
            <div class="col-sm-4 col-lg-4">
                <img src="images/portfolio/5.jpg" alt=""/>
            </div>
            <div class="col-sm-4 col-lg-4">
                <img src="images/portfolio/11.jpg" alt=""/>
            </div>
            <div class="col-sm-4 col-lg-4">
                <img src="images/portfolio/12.jpg" alt=""/>
            </div>
            <div class="col-sm-4 col-lg-4">
                <img src="images/portfolio/14.jpg" alt=""/>
            </div>
        </div>
    </div>
    <div class="images-sm col-sm-12 col-md-6">
        <div class="row">
            <img src="images/portfolio/2.jpg" alt=""/>
            <img src="images/portfolio/4.jpg" alt=""/>
            <img src="images/portfolio/5.jpg" alt=""/>
        </div>
        <div class="row">
            <img src="images/portfolio/11.jpg" alt=""/>
            <img src="images/portfolio/12.jpg" alt=""/>
            <img src="images/portfolio/14.jpg" alt=""/>
        </div>
    </div>
    <div class="contact-me col-sm-12">
        <div class="row">
            <div class="col-sm-6 col-lg-3">
                <span class="ican"><i class="fa-solid fa-location-pin"></i></span>
                <span style='color:fff;text-decoration:underline;'>Siège Rabat : APPT 4, IMMEUBLE 68, RUE OUED ZIZ, AGDAL, RABAT</span>
            </div>
            <div class="col-sm-6 col-lg-3">
                <span class="ican"><i class="fa-solid fa-envelope"></i></span>
                <span><a href="mailto: infos.supmedical@gmail.com">Email :  infos.supmedical@gmail.com</a></span>
            </div>
            <div class="col-sm-6 col-lg-3">
                <span class="ican"><i class="fa-solid fa-phone"></i></span>
                <span><a href="tel:+212537774380">Fixe : 05 37 77 43 80 </a></span>
            </div>
            <div class="col-sm-6 col-lg-3">
                <span class="ican"><i class="fa-brands fa-whatsapp"></i></span>
                <span><a href="https://wa.me/+212665751349">Tel /WhatsApp  06 65 75 13 49</a></span>
            </div>
        </div>
    </div>
</div>
</div>`;

function showModal(image) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modalImg.src = image.src;
    modal.style.display = "block";
}

function hideModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


let testi = document.querySelector(".testim");
let up = document.querySelector('.up');
window.onscroll = function(){
    console.log(window.scrollY);
    if(window.scrollY >= 3266){
        testi.classList.add('active');
    }
    else{
        testi.classList.remove('active');
    }
    if(window.scrollY > 500){
        up.style.cssText="display:block";
    }
    else{
        up.style.display='none';
    }

    up.onclick = function(){
        window.scrollTo({
            left:0,
            top:0,
            behavior : "smooth"
        });
    };
}


let displyvalues = document.querySelectorAll(".num");
let allprogres = document.querySelectorAll("#number");
let interval = 5000;
displyvalues.forEach(displyvalue =>{
    let startvalue = 0;
    let endvalue = parseInt(displyvalue.getAttribute("data-val"));
    let duration = Math.floor(interval / endvalue);
    console.log(duration)
    let counter = setInterval(function(){
        startvalue += 1;
        displyvalue.innerHTML=startvalue;
        if(startvalue == endvalue){
            clearInterval(counter);
        }

    },duration)
});

allprogres.forEach(myprogres =>{
    let startvalue = 0;
    let endprogress = parseInt(myprogres.getAttribute("data-progres"));
    console.log(endprogress)
    let duration = Math.floor(interval / endprogress);
    let counter = setInterval(function(){
        startvalue += 1;
        myprogres.innerHTML=startvalue+"%";
        if(startvalue == endprogress){
            clearInterval(counter);
        }
    },duration)
});  


let navbar_2 = document.querySelector(".navbar-2");
navbar_2.innerHTML=`
<div class="container">
<div class="image shadow-sm">
    <img src="images/logo2.jpg" alt="">
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main"
    aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars"></i>
</button>
<div class="collapse navbar-collapse" id="main">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link p-lg-2"  href="index.html">Accueil</a></li>
        <li class="nav-item"><a class="nav-link p-lg-2 " href='about-us.html'>Qui sommes nous</a></li>
        <li class="nav-item"><a class="nav-link p-lg-2 " href='index.html'>Formations certifiantes</a></li>
        <li class="nav-item"><a class="nav-link p-lg-2 " href='index.html'>Formations Séminaires</a></li>
        <li class="nav-item"><a class="last-child nav-link p-lg-2 " href='contact.html'>Contact</a></li>
    </ul>
    <div class="cta d-none d-lg-block"></div>
</div>
</div>`;








