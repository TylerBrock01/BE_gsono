import { CorsOptions } from 'cors'
export const corsconfig: CorsOptions = {
    origin: function(origin, callback){
        console.log(origin)
        if(origin ===process.env.FRONTEND_BUSSINES || origin === undefined ){
            callback(null,true)
            console.log('Allowed by CORS')
        }else {
            console.log('Not allowed by CORS')
            return 'Not allowed by CORS'
        }
    }
}