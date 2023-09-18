import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) {
    // promesa para usar async await
    return new Promise ((resolve, reject) => {

        jwt.sign (
            payload,
            TOKEN_SECRET, //llave que vamos a usar para poder crear un token
            {
                expiresIn: '1d',
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token);
            }
         );
    });
};


