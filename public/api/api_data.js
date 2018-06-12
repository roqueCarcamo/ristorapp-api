define({ "api": [
  {
    "type": "get",
    "url": "https://ristorapp.herokuapp.com/api/pedidos",
    "title": "Listar pedidos",
    "name": "GetPedidos",
    "group": "Pedido",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": "<p>Skip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>id de restaurante</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plato",
            "description": "<p>Plato</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cant_platos",
            "description": "<p>Cantidad de platos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "valor_total",
            "description": "<p>Valor total</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": [\n        {\n            \"_id\": \"5b1db509a7ec694188151cd3\",\n            \"restaurante\": {\n                \"_id\": \"5b1d8426a85bac179fcc7023\",\n                \"nombre\": \"Potasio Saludable\",\n                \"telefono\": \"389482\",\n                \"email\": \"potasio@gmail.com\",\n                \"direccion\": \"av 39 #29\",\n                \"cant_mesas\": \"10\",\n                \"createdAt\": \"2018-06-10T20:03:50.098Z\",\n                \"updatedAt\": \"2018-06-10T20:03:50.098Z\",\n                \"__v\": 0\n            },\n            \"user\": {\n                \"cuenta\": \"rrcarcamo\",\n                \"nombres\": \"Rodolfo\",\n                \"apellidos\": \"Carcamo\",\n                \"tipo_identificacion\": \"CC\",\n                \"numero_identificacion\": \"321243\",\n                \"email\": \"carcamo@gmail.com\",\n                \"telefono\": \"434234\",\n                \"direccion\": \"Cr 43 #25\",\n                \"genero\": \"M\",\n                \"tipo\": \"C\",\n                \"createdAt\": \"2018-06-09T14:14:01.162Z\",\n                \"updatedAt\": \"2018-06-09T14:14:01.162Z\",\n                \"__v\": 0\n            },\n            \"plato\": {\n                \"_id\": \"5b1d84a4a85bac179fcc7025\",\n                \"nombre\": \"Ensalada fuerte\",\n                \"precio\": \"20.000\",\n                \"restaurante\": \"5b1d8426a85bac179fcc7023\",\n                \"createdAt\": \"2018-06-10T20:05:56.028Z\",\n                \"updatedAt\": \"2018-06-10T20:05:56.028Z\",\n                \"__v\": 0\n            },\n            \"cant_platos\": \"1\",\n            \"valor_total\": \"1\",\n            \"estado\": \"A\",\n            \"createdAt\": \"2018-06-10T23:32:25.369Z\",\n            \"updatedAt\": \"2018-06-10T23:32:25.369Z\",\n            \"__v\": 0\n        }\n    ],\n    \"limit\": 10,\n    \"skip\": 0,\n    \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/pedidos/controller.js",
    "groupTitle": "Pedido"
  },
  {
    "type": "post",
    "url": "/byRestaurante",
    "title": "Listar pedidos por restaurante",
    "name": "GetPedidosRestaurante",
    "group": "Pedido",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>id de restaurante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>id de restaurante</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plato",
            "description": "<p>Plato</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cant_platos",
            "description": "<p>Cantidad de platos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "valor_total",
            "description": "<p>Valor total</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": [\n        {\n            \"_id\": \"5b1db509a7ec694188151cd3\",\n            \"restaurante\": {\n                \"_id\": \"5b1d8426a85bac179fcc7023\",\n                \"nombre\": \"Potasio Saludable\",\n                \"telefono\": \"389482\",\n                \"email\": \"potasio@gmail.com\",\n                \"direccion\": \"av 39 #29\",\n                \"cant_mesas\": \"10\",\n                \"createdAt\": \"2018-06-10T20:03:50.098Z\",\n                \"updatedAt\": \"2018-06-10T20:03:50.098Z\",\n                \"__v\": 0\n            },\n            \"user\": {\n                \"cuenta\": \"rrcarcamo\",\n                \"nombres\": \"Rodolfo\",\n                \"apellidos\": \"Carcamo\",\n                \"tipo_identificacion\": \"CC\",\n                \"numero_identificacion\": \"321243\",\n                \"email\": \"carcamo@gmail.com\",\n                \"telefono\": \"434234\",\n                \"direccion\": \"Cr 43 #25\",\n                \"genero\": \"M\",\n                \"tipo\": \"C\",\n                \"createdAt\": \"2018-06-09T14:14:01.162Z\",\n                \"updatedAt\": \"2018-06-09T14:14:01.162Z\",\n                \"__v\": 0\n            },\n            \"plato\": {\n                \"_id\": \"5b1d84a4a85bac179fcc7025\",\n                \"nombre\": \"Ensalada fuerte\",\n                \"precio\": \"20.000\",\n                \"restaurante\": \"5b1d8426a85bac179fcc7023\",\n                \"createdAt\": \"2018-06-10T20:05:56.028Z\",\n                \"updatedAt\": \"2018-06-10T20:05:56.028Z\",\n                \"__v\": 0\n            },\n            \"cant_platos\": \"1\",\n            \"valor_total\": \"1\",\n            \"estado\": \"A\",\n            \"createdAt\": \"2018-06-10T23:32:25.369Z\",\n            \"updatedAt\": \"2018-06-10T23:32:25.369Z\",\n            \"__v\": 0\n        }\n    ],\n    \"limit\": 10,\n    \"skip\": 0,\n    \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/pedidos/controller.js",
    "groupTitle": "Pedido"
  },
  {
    "type": "get",
    "url": "/byUsuario",
    "title": "Listar pedidos usuario",
    "name": "GetPedidosUsuario",
    "group": "Pedido",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>id de restaurante</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plato",
            "description": "<p>Plato</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cant_platos",
            "description": "<p>Cantidad de platos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "valor_total",
            "description": "<p>Valor total</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": [\n        {\n            \"_id\": \"5b1db509a7ec694188151cd3\",\n            \"restaurante\": {\n                \"_id\": \"5b1d8426a85bac179fcc7023\",\n                \"nombre\": \"Potasio Saludable\",\n                \"telefono\": \"389482\",\n                \"email\": \"potasio@gmail.com\",\n                \"direccion\": \"av 39 #29\",\n                \"cant_mesas\": \"10\",\n                \"createdAt\": \"2018-06-10T20:03:50.098Z\",\n                \"updatedAt\": \"2018-06-10T20:03:50.098Z\",\n                \"__v\": 0\n            },\n            \"user\": {\n                \"cuenta\": \"rrcarcamo\",\n                \"nombres\": \"Rodolfo\",\n                \"apellidos\": \"Carcamo\",\n                \"tipo_identificacion\": \"CC\",\n                \"numero_identificacion\": \"321243\",\n                \"email\": \"carcamo@gmail.com\",\n                \"telefono\": \"434234\",\n                \"direccion\": \"Cr 43 #25\",\n                \"genero\": \"M\",\n                \"tipo\": \"C\",\n                \"createdAt\": \"2018-06-09T14:14:01.162Z\",\n                \"updatedAt\": \"2018-06-09T14:14:01.162Z\",\n                \"__v\": 0\n            },\n            \"plato\": {\n                \"_id\": \"5b1d84a4a85bac179fcc7025\",\n                \"nombre\": \"Ensalada fuerte\",\n                \"precio\": \"20.000\",\n                \"restaurante\": \"5b1d8426a85bac179fcc7023\",\n                \"createdAt\": \"2018-06-10T20:05:56.028Z\",\n                \"updatedAt\": \"2018-06-10T20:05:56.028Z\",\n                \"__v\": 0\n            },\n            \"cant_platos\": \"1\",\n            \"valor_total\": \"1\",\n            \"estado\": \"A\",\n            \"createdAt\": \"2018-06-10T23:32:25.369Z\",\n            \"updatedAt\": \"2018-06-10T23:32:25.369Z\",\n            \"__v\": 0\n        }\n    ],\n    \"limit\": 10,\n    \"skip\": 0,\n    \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/pedidos/controller.js",
    "groupTitle": "Pedido"
  },
  {
    "type": "post",
    "url": "/registrar",
    "title": "Registrar pedido",
    "name": "RegistrarPedido",
    "group": "Pedido",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>Restaurante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plato",
            "description": "<p>Plato</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cant_platos",
            "description": "<p>Cantidad de platos</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valor_total",
            "description": "<p>Valor total</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>id de restaurante</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "plato",
            "description": "<p>Plato</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cant_platos",
            "description": "<p>Cantidad de platos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "valor_total",
            "description": "<p>Valor total</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "estado",
            "description": "<p>Estado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"pedido\": {\n        \"_id\": \"5b1db509a7ec694188151cd3\",\n        \"restaurante\": \"5b1d8426a85bac179fcc7023\",\n        \"user\": \"5b1be0a9587ccf7cd7321c38\",\n        \"plato\": \"5b1d84a4a85bac179fcc7025\",\n        \"cant_platos\": \"1\",\n        \"valor_total\": \"1\",\n        \"estado\": \"A\",\n        \"createdAt\": \"2018-06-10T23:32:25.369Z\",\n        \"updatedAt\": \"2018-06-10T23:32:25.369Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/pedidos/controller.js",
    "groupTitle": "Pedido"
  },
  {
    "type": "get",
    "url": "/platos",
    "title": "Listar platos",
    "name": "GetPlatos",
    "group": "Plato",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": "<p>Skip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "precio",
            "description": "<p>Precio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>Restaurante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": [\n        {\n            \"_id\": \"5b1c6efc227e44291b220414\",\n            \"nombre\": \"Alitas de pollo con salsa Yakitori\",\n            \"precio\": \"12.000\",\n            \"restaurante\": {\n                \"_id\": \"5b1c6ede227e44291b220413\",\n                \"nombre\": \"Aperto\",\n                \"telefono\": \"32342432\",\n                \"email\": \"aperto@gmail.com\",\n                \"direccion\": \"av 35 #23\",\n                \"cant_mesas\": \"4\",\n                \"createdAt\": \"2018-06-10T00:20:46.515Z\",\n                \"updatedAt\": \"2018-06-10T00:20:46.515Z\",\n                \"__v\": 0\n            },\n            \"createdAt\": \"2018-06-10T00:21:16.632Z\",\n            \"updatedAt\": \"2018-06-10T00:21:16.632Z\",\n            \"__v\": 0\n        }\n    ],\n    \"limit\": 10,\n    \"skip\": 0,\n    \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/platos/controller.js",
    "groupTitle": "Plato"
  },
  {
    "type": "post",
    "url": "/platos/platosByRestaurante",
    "title": "Buscar platos por restaurante",
    "name": "PostPlato",
    "group": "Plato",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>id de Restaurante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "precio",
            "description": "<p>Precio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>Restaurante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"_id\": \"5b1d84a4a85bac179fcc7025\",\n            \"nombre\": \"Ensalada fuerte\",\n            \"precio\": \"20.000\",\n            \"restaurante\": \"5b1d8426a85bac179fcc7023\",\n            \"createdAt\": \"2018-06-10T20:05:56.028Z\",\n            \"updatedAt\": \"2018-06-10T20:05:56.028Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/platos/controller.js",
    "groupTitle": "Plato"
  },
  {
    "type": "post",
    "url": "/platos/actualizar",
    "title": "Actualizar plato",
    "name": "PostPlato",
    "group": "Plato",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "precio",
            "description": "<p>Precio</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>Restaurante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "precio",
            "description": "<p>Precio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>Restaurante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"plato\": {\n        \"_id\": \"5b1c5cf2cdee8e1739f57846\",\n        \"nombre\": \"Alitas de pollo con salsa Yakitori\",\n        \"precio\": \"12.000\",\n        \"restaurante\": \"5b1c13f7cf903816d5069bf5\",\n        \"createdAt\": \"2018-06-09T23:04:18.412Z\",\n        \"updatedAt\": \"2018-06-09T23:04:18.412Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/platos/controller.js",
    "groupTitle": "Plato"
  },
  {
    "type": "post",
    "url": "/registrar",
    "title": "Registrar plato",
    "name": "RegistrarPlato",
    "group": "Plato",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "precio",
            "description": "<p>Precio</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>Restaurante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "precio",
            "description": "<p>Precio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurante",
            "description": "<p>Restaurante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"plato\": {\n        \"_id\": \"5b1c5cf2cdee8e1739f57846\",\n        \"nombre\": \"Alitas de pollo con salsa Yakitori\",\n        \"precio\": \"12.000\",\n        \"restaurante\": \"5b1c13f7cf903816d5069bf5\",\n        \"createdAt\": \"2018-06-09T23:04:18.412Z\",\n        \"updatedAt\": \"2018-06-09T23:04:18.412Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/platos/controller.js",
    "groupTitle": "Plato"
  },
  {
    "type": "get",
    "url": "/restaurantes",
    "title": "Listar restaurantes",
    "name": "GetRestaurantes",
    "group": "Restaurante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": "<p>Skip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cant_mesas",
            "description": "<p>Cantidad Mesas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": [\n        {\n            \"_id\": \"5b1c13f7cf903816d5069bf5\",\n            \"nombre\": \"El cocinero\",\n            \"telefono\": \"32342432\",\n            \"email\": \"cocinero@gmail.com\",\n            \"direccion\": \"av 35 #23\",\n            \"cant_mesas\": \"4\",\n            \"createdAt\": \"2018-06-09T17:52:55.533Z\",\n            \"updatedAt\": \"2018-06-09T17:52:55.533Z\",\n            \"__v\": 0\n        }\n    ],\n    \"limit\": 10,\n    \"skip\": 0,\n    \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/restaurantes/controller.js",
    "groupTitle": "Restaurante"
  },
  {
    "type": "post",
    "url": "/restaurantes/actualizar",
    "title": "Actualizar restaurante",
    "name": "PostActualizar",
    "group": "Restaurante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cant_mesas",
            "description": "<p>Cantidad Mesas</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cant_mesas",
            "description": "<p>Cantidad Mesas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"cuenta\": \"rrcarcamo\",\n        \"nombres\": \"Rodolfo\",\n        \"apellidos\": \"Carcamo\",\n        \"tipo_identificacion\": \"CC\",\n        \"numero_identificacion\": \"321243\",\n        \"email\": \"carcamo@gmail.com\",\n        \"telefono\": \"434234\",\n        \"direccion\": \"Cr 43 #25\",\n        \"genero\": \"M\",\n        \"tipo\": \"C\",\n        \"createdAt\": \"2018-06-09T14:14:01.162Z\",\n        \"updatedAt\": \"2018-06-09T14:14:01.162Z\",\n        \"__v\": 0\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFiZTBhOTU4N2NjZjdjZDczMjFjMzgiLCJpYXQiOjE1Mjg1NTQ0MDEsImV4cCI6MTUyODU1ODAwMX0.Sjii4lWm6uVye-rT-Ib5xNdQrVExTbVpKcnqo3hl7HA\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/restaurantes/controller.js",
    "groupTitle": "Restaurante"
  },
  {
    "type": "post",
    "url": "/registrar",
    "title": "Registrar resturante",
    "name": "RegistrarRestaurante",
    "group": "Restaurante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cant_mesas",
            "description": "<p>Cantidad Mesas</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cant_mesas",
            "description": "<p>Cantidad Mesas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"restaurante\": {\n        \"_id\": \"5b1c13f7cf903816d5069bf5\",\n        \"nombre\": \"El cocinero\",\n        \"telefono\": \"32342432\",\n        \"email\": \"cocinero@gmail.com\",\n        \"direccion\": \"av 35 #23\",\n        \"cant_mesas\": \"4\",\n        \"createdAt\": \"2018-06-09T17:52:55.533Z\",\n        \"updatedAt\": \"2018-06-09T17:52:55.533Z\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/restaurantes/controller.js",
    "groupTitle": "Restaurante"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Listar usuarios",
    "name": "GetUser",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": "<p>Skip</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cuenta",
            "description": "<p>Cuenta</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_identificacion",
            "description": "<p>Tipo identificacion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numero_identificacion",
            "description": "<p>numero_identificacion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genero",
            "description": "<p>Genero</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"data\": [\n        {\n            \"cuenta\": \"rrcarcamo\",\n            \"nombres\": \"Rodolfo\",\n            \"apellidos\": \"Carcamo\",\n            \"tipo_identificacion\": \"CC\",\n            \"numero_identificacion\": \"321243\",\n            \"email\": \"carcamo@gmail.com\",\n            \"telefono\": \"434234\",\n            \"direccion\": \"Cr 43 #25\",\n            \"genero\": \"M\",\n            \"tipo\": \"C\",\n            \"createdAt\": \"2018-06-09T14:14:01.162Z\",\n            \"updatedAt\": \"2018-06-09T14:14:01.162Z\",\n            \"__v\": 0\n        }\n    ],\n    \"limit\": 10,\n    \"skip\": 0,\n    \"count\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/users/controller.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Iniciar sesión",
    "name": "PostLogin",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cuenta",
            "description": "<p>Cuenta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cuenta",
            "description": "<p>Cuenta</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_identificacion",
            "description": "<p>Tipo identificacion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numero_identificacion",
            "description": "<p>numero_identificacion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genero",
            "description": "<p>Genero</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"cuenta\": \"rrcarcamo\",\n        \"nombres\": \"Rodolfo\",\n        \"apellidos\": \"Carcamo\",\n        \"tipo_identificacion\": \"CC\",\n        \"numero_identificacion\": \"321243\",\n        \"email\": \"carcamo@gmail.com\",\n        \"telefono\": \"434234\",\n        \"direccion\": \"Cr 43 #25\",\n        \"genero\": \"M\",\n        \"tipo\": \"C\",\n        \"createdAt\": \"2018-06-09T14:14:01.162Z\",\n        \"updatedAt\": \"2018-06-09T14:14:01.162Z\",\n        \"__v\": 0\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFiZTBhOTU4N2NjZjdjZDczMjFjMzgiLCJpYXQiOjE1Mjg1NTQ0MDEsImV4cCI6MTUyODU1ODAwMX0.Sjii4lWm6uVye-rT-Ib5xNdQrVExTbVpKcnqo3hl7HA\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/users/controller.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/users/profile",
    "title": "Perfil usuario",
    "name": "PostProfile",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Autorizarion",
            "description": "<p>Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cuenta",
            "description": "<p>Cuenta</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_identificacion",
            "description": "<p>Tipo identificacion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numero_identificacion",
            "description": "<p>numero_identificacion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genero",
            "description": "<p>Genero</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"cuenta\": \"rrcarcamo\",\n    \"nombres\": \"Rodolfo\",\n    \"apellidos\": \"Carcamo\",\n    \"tipo_identificacion\": \"CC\",\n    \"numero_identificacion\": \"321243\",\n    \"email\": \"carcamo@gmail.com\",\n    \"telefono\": \"434234\",\n    \"direccion\": \"Cr 43 #25\",\n    \"genero\": \"M\",\n    \"tipo\": \"C\",\n    \"createdAt\": \"2018-06-09T14:14:01.162Z\",\n    \"updatedAt\": \"2018-06-09T14:14:01.162Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/users/controller.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Registrar usuario",
    "name": "SignupUser",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cuenta",
            "description": "<p>Cuenta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo_identificacion",
            "description": "<p>Tipo identificacion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numero_identificacion",
            "description": "<p>numero_identificacion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "genero",
            "description": "<p>Genero</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cuenta",
            "description": "<p>Cuenta</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombres",
            "description": "<p>Nombres</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo_identificacion",
            "description": "<p>Tipo identificacion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "numero_identificacion",
            "description": "<p>numero_identificacion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telefono",
            "description": "<p>Telefono</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "direccion",
            "description": "<p>Direccion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "genero",
            "description": "<p>Genero</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<p>Tipo usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Created date of the Answers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updateAt",
            "description": "<p>Last update date of the Answers.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"user\": {\n        \"cuenta\": \"rrcarcamo\",\n        \"nombres\": \"Rodolfo\",\n        \"apellidos\": \"Carcamo\",\n        \"tipo_identificacion\": \"CC\",\n        \"numero_identificacion\": \"321243\",\n        \"email\": \"carcamo@gmail.com\",\n        \"telefono\": \"434234\",\n        \"direccion\": \"Cr 43 #25\",\n        \"genero\": \"M\",\n        \"tipo\": \"C\",\n        \"createdAt\": \"2018-06-09T14:14:01.162Z\",\n        \"updatedAt\": \"2018-06-09T14:14:01.162Z\",\n        \"__v\": 0\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFiZTBhOTU4N2NjZjdjZDczMjFjMzgiLCJpYXQiOjE1Mjg1NTM2NDIsImV4cCI6MTUyODU1NzI0Mn0.Evdurl3agsojFPtGJMHQxPvbcUAhEOQpX-G3t5Ra1IQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Document",
            "description": "<p>Not Found the id of the Questions was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Document Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/api/v1/users/controller.js",
    "groupTitle": "Usuario"
  }
] });
