import server from "./server";
import color from "colors";
const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    console.log(color.red("---------------------------------------"));
    console.log(color.inverse.bold.blue(`Server is running on port: ${PORT}\ndefault web link: \n\thttp://localhost:${PORT}/`));
    console.log(color.red("---------------------------------------"));


});