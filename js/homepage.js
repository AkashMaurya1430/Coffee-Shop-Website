var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        document.getElementById("scrollTop").style.display = "block"
    }
    else {
        document.getElementById("scrollTop").style.display = "none"

    }
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-200px";
    }

    if (window.pageYOffset > 500) {
        document.getElementById("navbar").style.backgroundColor = "#3E2723";
    }
    else {
        document.getElementById("navbar").style.background = "Transparent";
    }
    prevScrollpos = currentScrollPos;
}



function scrollWin(x, y) {
    window.scrollTo({
        top: y, // could be negative value
        left: x,
        behavior: 'smooth'
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0, // could be negative value
        behavior: 'smooth'
    });
}


const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // console.log(inc);
        // console.log(count);

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 50);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

