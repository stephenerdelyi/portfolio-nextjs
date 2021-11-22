import smoothscroll from 'smoothscroll-polyfill';

export default function smoothScroll(e) {
    e.preventDefault();

    //support loser browsers which still don't have smooth scrolling. ahem - safari
    smoothscroll.polyfill();

    const href = e.target.getAttribute('href');
    const link = document.querySelector(href).offsetTop;

    if(href && link) {
        scroll({
            top: link,
            behavior: "smooth"
        });
    }
}
