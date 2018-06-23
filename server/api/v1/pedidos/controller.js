const jwt = require('jsonwebtoken');
const config = require('./../../../config');
const Model = require('./model');

/**
 * @api {get} https://ristorapp.herokuapp.com/api/pedidos Listar pedidos
 * @apiName GetPedidos
 * @apiGroup Pedido
 * 
 * @apiParam {String} limit Limit
 * @apiParam {String} skip Skip
 *
 *
 * @apiSuccess {String} restaurante id de restaurante
 * @apiSuccess {String} user Usuario
 * @apiSuccess {String} plato Plato
 * @apiSuccess {String} cant_platos Cantidad de platos
 * @apiSuccess {String} valor_total Valor total
 * @apiSuccess {String} estado Estado
 * @apiSuccess {String} tiempo Tiempo de llegada
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "data": [
        {
            "_id": "5b1db509a7ec694188151cd3",
            "restaurante": {
                "_id": "5b1d8426a85bac179fcc7023",
                "nombre": "Potasio Saludable",
                "telefono": "389482",
                "email": "potasio@gmail.com",
                "direccion": "av 39 #29",
                "cant_mesas": "10",
                "createdAt": "2018-06-10T20:03:50.098Z",
                "updatedAt": "2018-06-10T20:03:50.098Z",
                "__v": 0
            },
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
            "plato": {
                "_id": "5b1d84a4a85bac179fcc7025",
                "nombre": "Ensalada fuerte",
                "precio": "20.000",
                "restaurante": "5b1d8426a85bac179fcc7023",
                "createdAt": "2018-06-10T20:05:56.028Z",
                "updatedAt": "2018-06-10T20:05:56.028Z",
                "__v": 0
            },
            "cant_platos": "1",
            "valor_total": "1",
            "estado": "A",
            "createdAt": "2018-06-10T23:32:25.369Z",
            "updatedAt": "2018-06-10T23:32:25.369Z",
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
        .sort(['createdAt', 1])
        .skip(skip)
        .limit(limit)
        .populate('restaurante')
        .populate('plato')
        .populate('user');
        
    
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
 * @api {post} https://ristorapp.herokuapp.com/api/registrar Registrar pedido
 * @apiName RegistrarPedido
 * @apiGroup Pedido
 *
 * @apiParam {String} restaurante Restaurante
 * @apiParam {String} user Usuario
 * @apiParam {String} plato Plato
 * @apiParam {String} cant_platos Cantidad de platos
 * @apiParam {String} valor_total Valor total
 * @apiParam {String} estado Estado
 * @apiParam {String} tiempo Tiempo de llegada
 * 
 * 
 *
 * @apiSuccess {String} restaurante id de restaurante
 * @apiSuccess {String} user Usuario
 * @apiSuccess {String} plato Plato
 * @apiSuccess {String} cant_platos Cantidad de platos
 * @apiSuccess {String} valor_total Valor total
 * @apiSuccess {String} estado Estado
 * @apiSuccess {String} tiempo Tiempo de llegada
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "pedido": {
        "_id": "5b1db509a7ec694188151cd3",
        "restaurante": "5b1d8426a85bac179fcc7023",
        "user": "5b1be0a9587ccf7cd7321c38",
        "plato": "5b1d84a4a85bac179fcc7025",
        "cant_platos": "1",
        "valor_total": "1",
        "estado": "A",
        "createdAt": "2018-06-10T23:32:25.369Z",
        "updatedAt": "2018-06-10T23:32:25.369Z",
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
        restaurante: body.restaurante,
        user: body.usuario,
        plato: body.plato,
        cant_platos: body.cant_platos,
        valor_total: body.valor_total,
        estado: body.estado,
        tiempo: body.tiempo
    });
    
    document.save()
        .then( doc => {
            res.json({
                pedido: doc
            });
        })
        .catch( err => {
            next(new Error(err));
        });
};


/**
 * @api {post} https://ristorapp.herokuapp.com/api/pedidos/byRestaurante Listar pedidos por restaurante
 * @apiName GetPedidosRestaurante
 * @apiGroup Pedido
 * 
 * @apiParam {String} restaurante id de restaurante
 *
 * @apiSuccess {String} restaurante id de restaurante
 * @apiSuccess {String} user Usuario
 * @apiSuccess {String} plato Plato
 * @apiSuccess {String} cant_platos Cantidad de platos
 * @apiSuccess {String} valor_total Valor total
 * @apiSuccess {String} estado Estado
 * @apiSuccess {String} tiempo Tiempo de llegada
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "data": [
        {
            "_id": "5b1db509a7ec694188151cd3",
            "restaurante": {
                "_id": "5b1d8426a85bac179fcc7023",
                "nombre": "Potasio Saludable",
                "telefono": "389482",
                "email": "potasio@gmail.com",
                "direccion": "av 39 #29",
                "cant_mesas": "10",
                "createdAt": "2018-06-10T20:03:50.098Z",
                "updatedAt": "2018-06-10T20:03:50.098Z",
                "__v": 0
            },
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
            "plato": {
                "_id": "5b1d84a4a85bac179fcc7025",
                "nombre": "Ensalada fuerte",
                "precio": "20.000",
                "restaurante": "5b1d8426a85bac179fcc7023",
                "createdAt": "2018-06-10T20:05:56.028Z",
                "updatedAt": "2018-06-10T20:05:56.028Z",
                "__v": 0
            },
            "cant_platos": "1",
            "valor_total": "1",
            "estado": "A",
            "createdAt": "2018-06-10T23:32:25.369Z",
            "updatedAt": "2018-06-10T23:32:25.369Z",
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
exports.buscarByRestaurante = (req, res, next) => {
    let restauran = req.body.restaurante;
    const items = Model.find({ restaurante: restauran})
    .populate('restaurante')
    .populate('plato')
    .populate('user');
    
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


/**
 * @api {get} https://ristorapp.herokuapp.com/api/pedidos/byUsuario Listar pedidos usuario
 * @apiName GetPedidosUsuario
 * @apiGroup Pedido
 * 
 * 
 * @apiParam {String} Authorization Token usuario
 *
 * @apiSuccess {String} restaurante id de restaurante
 * @apiSuccess {String} user Usuario
 * @apiSuccess {String} plato Plato
 * @apiSuccess {String} cant_platos Cantidad de platos
 * @apiSuccess {String} valor_total Valor total
 * @apiSuccess {String} estado Estado
 * @apiSuccess {String} tiempo Tiempo de llegada
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "data": [
        {
            "_id": "5b1db509a7ec694188151cd3",
            "restaurante": {
                "_id": "5b1d8426a85bac179fcc7023",
                "nombre": "Potasio Saludable",
                "telefono": "389482",
                "email": "potasio@gmail.com",
                "direccion": "av 39 #29",
                "cant_mesas": "10",
                "createdAt": "2018-06-10T20:03:50.098Z",
                "updatedAt": "2018-06-10T20:03:50.098Z",
                "__v": 0
            },
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
            "plato": {
                "_id": "5b1d84a4a85bac179fcc7025",
                "nombre": "Ensalada fuerte",
                "precio": "20.000",
                "restaurante": "5b1d8426a85bac179fcc7023",
                "createdAt": "2018-06-10T20:05:56.028Z",
                "updatedAt": "2018-06-10T20:05:56.028Z",
                "__v": 0
            },
            "cant_platos": "1",
            "valor_total": "1",
            "estado": "A",
            "createdAt": "2018-06-10T23:32:25.369Z",
            "updatedAt": "2018-06-10T23:32:25.369Z",
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
exports.buscarByUsuario = (req, res, next) => {
    let user = req.body.usuario;
    const items = Model.find({ user: user})
        .populate('restaurante')
        .populate('plato')
        .populate('user');
    
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
