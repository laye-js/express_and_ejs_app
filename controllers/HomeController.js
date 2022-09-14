donnees = [
    {
        name: "nodejs",
        prix: "gratuit"
    },
    {
        name: "react",
        prix: "15000F/mois"

    }
];
exports.Showhome = (req, res) => {
    res.render("index")
}

exports.ShowCourses = (req, res) => {
    res.render("courses",{ madonnees: donnees })

}
exports.ShowContact = (req, res) => {
    res.render("contact")
}
exports.ShowPostedsignup = (req, res) => {
    res.render("PostedContact")
}