const use_local_endpoint = false;

export default function getMailerEndpoint() {
    if(use_local_endpoint) {
        //local testing endpoint
        return 'http://localhost:5000';
    } else {
        //production endpoint
        return 'https://se-node-mailer.herokuapp.com';
    }
}
