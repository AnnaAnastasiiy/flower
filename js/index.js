$(function() {
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
});

$('html').on("click", ".myCarousel img", function () {
  alert("dfgd");
}); 

function pic(num){
     alert("Ви вибрали букет №"+num);
     document.getElementById("pic").value=num;
    }