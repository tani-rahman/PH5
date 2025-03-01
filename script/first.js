// background color change

document.getElementById("themeToggle").addEventListener("click", function () {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});


// live date 
    function updateDate() {
        let now = new Date();

        let options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
        let formattedDate = now.toLocaleDateString('en-US', options);

        let parts = formattedDate.split(' ');
        let weekday = parts[0]; 
        let restOfDate = parts.slice(1).join(' ');

        document.getElementById("liveDate").innerHTML = `${weekday}<br><strong>${restOfDate}</strong>`;
    }
    updateDate();

// main page to blogs page
    document.getElementById('discoverButton').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './deshboared.html'; 
    });