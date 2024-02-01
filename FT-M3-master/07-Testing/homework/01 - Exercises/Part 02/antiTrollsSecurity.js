const antiTrollsSecurity = (string) => {
    return string
        .split("")
        .filter(letter => !"AEIOUaeiou".includes(letter))
        .join("")

    // return string.replace(/[AaEeIiOoUu]/g, "")
};

module.exports = antiTrollsSecurity;
