const jwt = require('jsonwebtoken');
const config = require('./../../../config');
const Model = require('./model');

/**
 * @api {get} https://ristorapp.herokuapp.com/api/platos listar platos
 * @apiName GetPlatos
 * @apiGroup Plato
 * 
 * @apiParam {String} limit Limit
 * @apiParam {String} skip Skip
 *
 *
 * @apiSuccess {String} nombre Nombre
 * @apiSuccess {String} precio Precio
 * @apiSuccess {String} url Url
 * @apiSuccess {String} tiempo Tiempo
 * @apiSuccess {String} restaurante Restaurante
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "data": [
        {
            "_id": "5b1c6efc227e44291b220414",
            "nombre": "Alitas de pollo con salsa Yakitori",
            "precio": "12.000",
            "restaurante": {
                "_id": "5b1c6ede227e44291b220413",
                "nombre": "Aperto",
                "telefono": "32342432",
                "email": "aperto@gmail.com",
                "direccion": "av 35 #23",
                "cant_mesas": "4",
                "createdAt": "2018-06-10T00:20:46.515Z",
                "updatedAt": "2018-06-10T00:20:46.515Z",
                "__v": 0
            },
            url: "http:ueuryreir",
            tiempo: "1 Hora",
            "createdAt": "2018-06-10T00:21:16.632Z",
            "updatedAt": "2018-06-10T00:21:16.632Z",
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
        .limit(limit)
        .populate('restaurante');
    
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
 * @api {post} https://ristorapp.herokuapp.com/api/platos/registrar Registrar plato
 * @apiName RegistrarPlato
 * @apiGroup Plato
 *
 * @apiParam {String} nombre Nombre
 * @apiParam {String} descripcion  Descripcion
 * @apiParam {String} url  Url
 * @apiParam {String} precio  Precio
 * @apiParam {String} tiempo  Tiempo
 * @apiParam {String} restaurante Restaurante
 * 
 * 
 * @apiSuccess {String} nombre Nombre
 * @apiSuccess {String} descripcion Descripcion
 * @apiSuccess {String} url Url
 * @apiSuccess {String} precio Precio
 * @apiSuccess {String} tiempo Tiempo
 * @apiSuccess {String} restaurante Restaurante
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "plato": {
        "_id": "5b1c5cf2cdee8e1739f57846",
        "nombre": "Alitas de pollo con salsa Yakitori",
        "url" : "http:uyeywiee",
        "precio": "12.000",
        "tiempo": "1 hora",
        "restaurante": "5b1c13f7cf903816d5069bf5",
        "createdAt": "2018-06-09T23:04:18.412Z",
        "updatedAt": "2018-06-09T23:04:18.412Z",
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
        descripcion: body.descripcion,
        url: body.url,
        precio: body.precio,
        tiempo: body.tiempo,
        restaurante: body.restaurante
    });
    
    document.save()
        .then( doc => {
            res.json({
                plato: doc
            });
        })
        .catch( err => {
            next(new Error(err));
        });
};


/**
 * @api {post} https://ristorapp.herokuapp.com/api/platos/actualizar Actualizar plato
 * @apiName PostPlato
 * @apiGroup Plato
 *
 *
 * @apiParam {String} nombre Nombre
 * @apiParam {String} precio Precio
 * @apiParam {String} restaurante Restaurante
 * @apiParam {String} ulr Url
 * @apiParam {String} tiempo Tiempo
 *
 * @apiSuccess {String} nombre Nombre
 * @apiSuccess {String} precio Precio
 * @apiSuccess {String} restaurante Restaurante
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "plato": {
        "_id": "5b1c5cf2cdee8e1739f57846",
        "nombre": "Alitas de pollo con salsa Yakitori",
        "precio": "12.000",
        "url": "httpjlkdjsjddsssds",
        "tiempo": "1 hora",
        "restaurante": "5b1c13f7cf903816d5069bf5",
        "createdAt": "2018-06-09T23:04:18.412Z",
        "updatedAt": "2018-06-09T23:04:18.412Z",
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

/**
 * @api {post}  https://ristorapp.herokuapp.com/api/platos/platosByRestaurante Buscar platos por restaurante
 * @apiName PostPlato
 * @apiGroup Plato
 *
 * @apiParam {String} restaurante id de Restaurante
 *
 * @apiSuccess {String} nombre Nombre
 * @apiSuccess {String} precio Precio
 * @apiSuccess {String} restaurante Restaurante
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "data": [
        {
            "_id": "5b1d84a4a85bac179fcc7025",
            "nombre": "Ensalada fuerte",
            "precio": "20.000",
            "url": "http:iuewejsnkdkf",
            "tiempo": "1 hora",
            "restaurante": "5b1d8426a85bac179fcc7023",
            "createdAt": "2018-06-10T20:05:56.028Z",
            "updatedAt": "2018-06-10T20:05:56.028Z",
            "__v": 0
        }
    ]
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
exports.buscarPlatos = (req, res, next) => {
    let restauran = req.body.restaurante;
    const items = Model.find({ restaurante: restauran});
    
    Promise.all([items.exec()])
        .then( data => {
            res.json({
                data: data[0]
            })
        })
        .catch( err => {
            next(new Error(err));
        });
};
