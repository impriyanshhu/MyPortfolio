
//          NAVBAR SLIDER

let cancel = document.getElementById('cancel');
let burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    document.getElementById('cancel').style.display = "block";
    document.getElementById('navbar').style.left = '0';
})
cancel.addEventListener('click', () => {
    document.getElementById('navbar').style.left = '-235px';
    document.getElementById('cancel').style.display = "none";
})

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


//          GO TO PAGE

function netflixclone() {
    // window.open("https://impriyanshhu.github.io/Netflixclone/", '_blank');
    window.open("https://priyanshu-netfliixclone.netlify.app/", '_blank');
}


