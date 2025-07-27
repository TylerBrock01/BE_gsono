import { CorsOptions } from 'cors'
export const corsconfig: CorsOptions = {
    origin: function(origin, callback){
        console.log(origin)
        if(origin ===process.env.FRONTEND_BUSSINES){
            callback(null,true)
            console.log('Allowed by CORS')
        }else {
            // callback(new Error('Not allowed by CORS'))
            console.log('Not allowed by CORS')
        }
    }
}