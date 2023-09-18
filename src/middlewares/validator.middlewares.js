
// middlewares para validar 
// este funcion validateSchema lo que va hacer esque va a recibir un schema y sirve
//para ejecutar la validacion, estos schema tienen un metodo parse que lo valida 
export const validateSchema = (schema) => ( req, res, next ) => {

    try {
        schema.parse(req.body);
        next();
    } catch(error){
        
        return res.status(400).json(error.errors.map((error) => error.message));
    }
};