export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        let auth = "Bearer " + user.accessToken
        return auth ;
    } else {
        return {};
    }
}
