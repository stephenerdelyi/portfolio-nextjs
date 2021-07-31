export default function smoothScroll(e) {
    e.preventDefault();

    var href = e.target.getAttribute('href');
    var link = document.querySelector(href).offsetTop;

    if(href && link) {
        scroll({
            top: link,
            behavior: "smooth"
        });
    }
}
