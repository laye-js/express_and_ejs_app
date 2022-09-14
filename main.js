const express= require("express");
const HomeController=require("./controllers/HomeController")
const layouts=require("express-ejs-layouts") 
const app=express()
const ErrorController=require("./controllers/ErrorController")


app.set("port",process.env.PORT||3000 )
app.set("view engine","ejs")
app.use(express.static("public"))
app.get("/",HomeController.Showhome
)
app.get("/courses",HomeController.ShowCourses
)
app.get("/contact",HomeController.ShowContact
)
app.post("/contact",HomeController.ShowPostedsignup
)
app.get("/contact",HomeController.ShowPostedsignup
)
app.use(ErrorController.pageNotFoundError)
app.use(ErrorController.internalServerError)

app.use(layouts)
port=app.get("port")
app.listen(port,console.log(`server listening at http://127.0.0.1:${port} `))