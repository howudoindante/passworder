
function generate({ length, splitBy, includeNumbers }) {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let separator = "-";
    let password = "";
    let regExp = splitBy ? new RegExp("\\w{" + splitBy + "}$", "g") : null;
    while (password.length < length) {
        includeNumbers && Math.round(Math.random())
            ? (password += numbers[Math.round(Math.random() * (numbers.length - 1))])
            : (password += letters[Math.round(Math.random() * (letters.length - 1))]);

        if (
            regExp?.test(password) &&
            password.length != length &&
            password.length != length - 1
        ) {
            password += separator;
        }
    }

    return password;
}
module.exports = {
    generate,
};
