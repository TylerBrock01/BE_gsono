import server from "./server";
const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    console.log("---------------------------------------");
    console.log(`Server is running on port:\t ${PORT}\nLocal link: \thttp://localhost:${PORT}/`);
    console.log("---------------------------------------");


});