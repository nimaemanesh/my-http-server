import http from "http"

const app = http.createServer();
app.listen(3001,()=>{
    console.log("hello from server.")
})
