document.getElementById("blog").addEventListener("click", function (event) {
  window.location.href = "./blog.html";
});



/**
 * Back To Desk
 */
document.getElementById("back-btn").addEventListener("click", function(event){
    // alert("Clicked")
    window.location.href = "index.html";
})

const colorButton = document.getElementById('colorChange');
const colors = ['#FF5733', '#FF5721', '#33FF57', '#FF33A1', '#33FFF5'];

colorButton.addEventListener('click', function(event) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

