function checkUserData() {
    const url = new URL(location.href);
    const email = url.searchParams.get('email');
    const password = url.searchParams.get('password');

    if (!email || !password) {
        location.href = 'form.html';
    }
}