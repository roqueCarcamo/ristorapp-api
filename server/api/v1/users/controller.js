const jwt = require('jsonwebtoken');
const config = require('./../../../config');
const Model = require('./model');

/**
 * @api {get} /users Listar usuarios
 * @apiName GetUser
 * @apiGroup User
 * 
 * @apiParam {String} limit Limit
 * @apiParam {String} skip Skip
 *
 *
 * @apiSuccess {String} cuenta Cuenta
 * @apiSuccess {String} nombres  Nombres
 * @apiSuccess {String} apellidos Apellidos
 * @apiSuccess {String} tipo_identificacion  Tipo identificacion
 * @apiSuccess {String} numero_identificacion numero_identificacion
 * @apiSuccess {String} email     Email
 * @apiSuccess {String} telefono Telefono
 * @apiSuccess {String} direccion Direccion
 * @apiSuccess {String} genero Genero
 * @apiSuccess {String} tipo Tipo usuario
 * @apiSuccess {String} createdAt  Created date of the Users.
 * @apiSuccess {String} updateAt   Last update date of the Users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "data": [
        {
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
 * @api {post} /signup Registrar usuario
 * @apiName SignupUser
 * @apiGroup User
 *
 * @apiParam {String} cuenta Cuenta
 * @apiParam {String} password  Password
 * @apiParam {String} nombres  Nombres
 * @apiParam {String} apellidos Apellidos
 * @apiParam {String} tipo_identificacion  Tipo identificacion
 * @apiParam {String} numero_identificacion numero_identificacion
 * @apiParam {String} email     Email
 * @apiParam {String} telefono Telefono
 * @apiParam {String} direccion Direccion
 * @apiParam {String} genero Genero
 * @apiParam {String} tipo Tipo usuario
 * 
 * 
 * 
 *
 * @apiSuccess {String} cuenta Cuenta
 * @apiSuccess {String} password  Password
 * @apiSuccess {String} nombres  Nombres
 * @apiSuccess {String} apellidos Apellidos
 * @apiSuccess {String} tipo_identificacion  Tipo identificacion
 * @apiSuccess {String} numero_identificacion numero_identificacion
 * @apiSuccess {String} email     Email
 * @apiSuccess {String} telefono Telefono
 * @apiSuccess {String} direccion Direccion
 * @apiSuccess {String} genero Genero
 * @apiSuccess {String} tipo Tipo usuario
 * @apiSuccess {String} createdAt  Created date of the Answers.
 * @apiSuccess {String} updateAt   Last update date of the Answers.
 * @apiSuccess {String} token      Token.
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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFiZTBhOTU4N2NjZjdjZDczMjFjMzgiLCJpYXQiOjE1Mjg1NTM2NDIsImV4cCI6MTUyODU1NzI0Mn0.Evdurl3agsojFPtGJMHQxPvbcUAhEOQpX-G3t5Ra1IQ"
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
        cuenta: body.cuenta,
        password: body.password,
        nombres: body.nombres,
        apellidos: body.apellidos,
        tipo_identificacion: body.tipo_identificacion,
        numero_identificacion: body.numero_identificacion,
        email: body.email,
        telefono: body.telefono,
        direccion: body.direccion,
        genero: body.genero,
        tipo: body.tipo
    });
    
    document.save()
        .then( doc => {
            const token = jwt.sign({
                    _id: doc._id
                },
                config.jwt.secret,
                {
                    algorithm: 'HS256',
                    expiresIn: '1h'
                });
            res.json({
                user: doc,
                token
            });
        })
        .catch( err => {
            next(new Error(err));
        });
};

/**
 * @api {post} /users/login Iniciar sesión
 * @apiName PostLogin
 * @apiGroup User
 *
 * @apiParam {String} cuenta Cuenta
 * @apiParam {String} password Password
 *
 * @apiSuccess {String} cuenta Cuenta
 * @apiSuccess {String} nombres  Nombres
 * @apiSuccess {String} apellidos Apellidos
 * @apiSuccess {String} tipo_identificacion  Tipo identificacion
 * @apiSuccess {String} numero_identificacion numero_identificacion
 * @apiSuccess {String} email     Email
 * @apiSuccess {String} telefono Telefono
 * @apiSuccess {String} direccion Direccion
 * @apiSuccess {String} genero Genero
 * @apiSuccess {String} tipo Tipo usuario
 * @apiSuccess {String} createdAt  Created date of the Users.
 * @apiSuccess {String} updateAt   Last update date of the Users.
 * @apiSuccess {String} token      Token.
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
exports.login = (req, res, next) => {
    const cuenta = req.body.cuenta;
    const password = req.body.password;
    
    Model.findOne({ cuenta: cuenta })
        .then(doc => {
            if(doc){
                // Compare Password
                doc.comparePassword(password, (err, match) => {
                    if (err) {
                        next(new Error(err));
                    } else {
                        if (match) {
                            const token = jwt.sign({
                                    _id: doc._id
                                },
                                config.jwt.secret,
                                {
                                    algorithm: 'HS256',
                                    expiresIn: '1h'
                                });
                            res.json({
                                user: doc,
                                token
                            });
                        } else {
                            res.status(401).json({
                                message: "Unauthorized"
                            });
                        }
                    }
                });
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
 * @api {post} /users/profile Perfil usuario
 * @apiName PostProfile
 * @apiGroup User
 *
 * @apiParam {String} Autorizarion Token
 *
 * @apiSuccess {String} cuenta Cuenta
 * @apiSuccess {String} nombres  Nombres
 * @apiSuccess {String} apellidos Apellidos
 * @apiSuccess {String} tipo_identificacion  Tipo identificacion
 * @apiSuccess {String} numero_identificacion numero_identificacion
 * @apiSuccess {String} email     Email
 * @apiSuccess {String} telefono Telefono
 * @apiSuccess {String} direccion Direccion
 * @apiSuccess {String} genero Genero
 * @apiSuccess {String} tipo Tipo usuario
 * @apiSuccess {String} createdAt  Created date of the Users.
 * @apiSuccess {String} updateAt   Last update date of the Users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
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
exports.profile = (req, res, next) => {
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
