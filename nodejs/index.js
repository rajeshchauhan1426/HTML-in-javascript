const http =require("http");

const server= http.createServer((req, res)=> {
    if(req.url === "/about") {
        res.end("<h1>About page</h1>");
    }else if (req.url === "/") {
        res.end("<h1>Home page</h1>");
    }else if (req.url === "/contact") {
        res.end("<h1>Contact page</h1>");
    }
    else{
        res.end("<h1>Page Not Found</h1>")
    }

});

server.listen(5000, () =>{
    console.log("server is working");
});