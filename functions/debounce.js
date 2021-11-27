export default function debounce(callback, time) {
    let timer;
    time = time || 100;

    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(callback, time, event);
    };
}
