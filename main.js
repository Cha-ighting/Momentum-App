const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    content = document.getElementById('content'),
    author = document.getElementById('author');

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPM = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPM}`

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '' ) + n;
}

function setBg() {
    let hour = new Date().getHours();

    if(hour < 12) {
        document.body.style.backgroundImage = 'url(C:\Users\JHGWC2021\OneDrive\Desktop\Chin\Avion\Momentum App\Momentum-App\morning.jpg)';
        greeting.textContent     = 'Good  Morning';
    } else if(hour < 18) {
        document.body.style.backgroundImage = 'url(afternoon.jpg)';
        greeting.textContent = 'Good  Afternoon';
    } else  {
        document.body.style.backgroundImage = 'url(evening.jpg)';
        greeting.textContent = 'Good  Evening';
    }

}

showTime();
setBg();