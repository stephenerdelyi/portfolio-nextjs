const use_local_endpoint = false;

export default function getEndpoint() {
    if(use_local_endpoint) {
        //local testing endpoint
        return 'http://portfolio-headless-wp.lndo.site/wp-json/portfolio';
    } else {
        //production endpoint
        return 'https://admin.steveerdelyi.com/wp-json/portfolio';
    }
}
