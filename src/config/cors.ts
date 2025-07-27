import { CorsOptions } from 'cors'
export const corsconfig: CorsOptions = {
    origin: function(origin, callback){
        // callback(null, true)
        console.log(origin)
        if(origin ==='http://localhost:5173'){
            callback(null,true)
            console.log('Allowed by CORS')
            // return true;
        }else {
            // callback(new Error('Not allowed by CORS'))
            console.log('Not allowed by CORS')
        }
    }
}