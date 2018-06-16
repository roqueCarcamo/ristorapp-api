const jwt = require('jsonwebtoken');
const config = require('./../../../config');
const Model = require('./model');

/**
 * @api {get} https://ristorapp.herokuapp.com/api/restaurantes Listar restaurantes
 * @apiName GetRestaurantes
 * @apiGroup Restaurante
 * 
 * @apiParam {String} limit Limit
 * @apiParam {String} skip Skip
 *
 *
 * @apiSuccess {String} nombre Nombre
 * @apiSuccess {String} telefono  Telefono
 * @apiSuccess {String} email  Email
 * @apiSuccess {String} direccion Direccion
 * @apiSuccess {String} cant_mesas  Cantidad Mesas
 * @apiSuccess {String} url Url imagen
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "data": [
        {
            "_id": "5b1c13f7cf903816d5069bf5",
            "nombre": "El cocinero",
            "telefono": "32342432",
            "email": "cocinero@gmail.com",
            "direccion": "av 35 #23",
            "cant_mesas": "4",
            "url": "htpp:wueyeuweieiurireur",
            "createdAt": "2018-06-09T17:52:55.533Z",
            "updatedAt": "2018-06-09T17:52:55.533Z",
            "__v": 0
        }
    ],
    "limit": 10,
    "skip": 0,
    "count": 1
}
 *
 * @apiError Document Not Found the id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.all = (req, res, next) => {
    const limit = Number(req.query.limit) || 10;
    const skip = Number(req.query.skip) || 0;
    
    const items = Model
        .find()
        .skip(skip)
        .limit(limit);
    
    const count = Model.count();
    
    Promise.all([items.exec(), count.exec()])
        .then( data => {
            res.json({
                data: data[0],
                limit,
                skip,
                count: data[1]
            })
        })
        .catch( err => {
            next(new Error(err));
        });
};

/**
 * @api {post} https://ristorapp.herokuapp.com/api/restaurantes/registrar Registrar resturante
 * @apiName RegistrarRestaurante
 * @apiGroup Restaurante
 *
 * @apiParam {String} nombre Nombre
 * @apiParam {String} telefono  Telefono
 * @apiParam {String} email  Email
 * @apiParam {String} direccion Direccion
 * @apiParam {String} cant_mesas  Cantidad Mesas
 * @apiParam {String} url Url imagen
 * 
 * 
 *
 * @apiSuccess {String} nombre Nombre
 * @apiSuccess {String} telefono  Telefono
 * @apiSuccess {String} email  Email
 * @apiSuccess {String} direccion Direccion
 * @apiSuccess {String} cant_mesas  Cantidad Mesas
 * @apiSuccess {String} url Url imagen
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "restaurante": {
        "_id": "5b1c13f7cf903816d5069bf5",
        "nombre": "El cocinero",
        "telefono": "32342432",
        "email": "cocinero@gmail.com",
        "direccion": "av 35 #23",
        "cant_mesas": "4",
        "url": "httpajddjkjsdhjdshjsdhjds",
        "createdAt": "2018-06-09T17:52:55.533Z",
        "updatedAt": "2018-06-09T17:52:55.533Z",
        "__v": 0
    }
}
 *
 * @apiError Document Not Found the id of the Questions was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.create = (req, res, next) => {
    const body = req.body;
    
    let document = new Model({
        nombre: body.nombre,
        telefono: body.telefono,
        email: body.email,
        direccion: body.direccion,
        cant_mesas: body.cant_mesas,
        url: body.url
    });
    
    document.save()
        .then( doc => {
            res.json({
                restaurante: doc
            });
        })
        .catch( err => {
            next(new Error(err));
        });
};


/**
 * @api {post} https://ristorapp.herokuapp.com/api/restaurantes/actualizar Actualizar restaurante
 * @apiName PostActualizar
 * @apiGroup Restaurante
 *
 *
 * @apiParam {String} nombre Nombre
 * @apiParam {String} telefono  Telefono
 * @apiParam {String} email  Email
 * @apiParam {String} direccion Direccion
 * @apiParam {String} cant_mesas  Cantidad Mesas
 * @apiParam {String} url Url imagen
 *
 * @apiSuccess {String} nombre Nombre
 * @apiSuccess {String} telefono  Telefono
 * @apiSuccess {String} email  Email
 * @apiSuccess {String} direccion Direccion
 * @apiSuccess {String} cant_mesas  Cantidad Mesas
 * @apiSuccess {String} url Url imagen
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "user": {
        "cuenta": "rrcarcamo",
        "nombres": "Rodolfo",
        "apellidos": "Carcamo",
        "tipo_identificacion": "CC",
        "numero_identificacion": "321243",
        "email": "carcamo@gmail.com",
        "telefono": "434234",
        "direccion": "Cr 43 #25",
        "genero": "M",
        "tipo": "C",
        "createdAt": "2018-06-09T14:14:01.162Z",
        "updatedAt": "2018-06-09T14:14:01.162Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFiZTBhOTU4N2NjZjdjZDczMjFjMzgiLCJpYXQiOjE1Mjg1NTQ0MDEsImV4cCI6MTUyODU1ODAwMX0.Sjii4lWm6uVye-rT-Ib5xNdQrVExTbVpKcnqo3hl7HA"
}
 *
 * @apiError Document Not Found the id of the Questions was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.actualizar = (req, res, next) => {
    Model.findById(req.decoded._id)
        .then( doc => {
            if(doc){
               res.json(doc);
            }else{
                res.status(404).json({
                    message: "Document not found"
                });
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};
