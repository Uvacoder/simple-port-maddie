// Scroll Reveal
$(document).ready(function () {
    window.sr = ScrollReveal();
    sr.reveal('.reveal', {
        easing: 'ease-in-out',
        distance: '40px',
        scale: 1,
        delay: 0,
        mobile: false,
        useDelay: 'onload'
    });
    count = 0;
    wordsArray = ["Hola", "Hello", "Ciao", "Bonjour", "你好", "Olá", "Hallo", "こんにちは"];
    setInterval(function () {
        count++;
        $("#greet").fadeOut(400, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
        });
    }, 3000);
});

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('checkBoxTheme').checked = true;
    } else {
        setTheme('theme-light');
      document.getElementById('checkBoxTheme').checked = false;
    }
})();

// Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})