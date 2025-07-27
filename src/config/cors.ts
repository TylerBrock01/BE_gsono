import { CorsOptions } from 'cors'
export const corsconfig: CorsOptions = {
    origin: function(origin, callback){
        // callback(null, true)
        console.log(origin)
        if(origin ===process.env.FRONTEND_BUSSINES){
            callback(null,true)
            console.log('Allowed by CORS')
            // return true;
        }else {
            // callback(new Error('Not allowed by CORS'))
            console.log('Not allowed by CORS')
        }
    }
}