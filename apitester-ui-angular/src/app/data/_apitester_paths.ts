export const paths = [
  {
    path: "/api/binary/one",
    mappings: [
      {
        pattern: "/api/binary/one",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.BinaryController",
          methodName: "one",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Some lucky number"],
              name: "x",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.Integer",
                typeShort: "Integer",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "Integer",
              primitive: true,
              object: 1,
              type: "java.lang.Integer",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: true,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "void",
            typeShort: "void",
            contentTypes: ["image/gif"],
            typeParameters: [],
            fields: [],
            values: null,
            object: {}
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["GET"]
  },
  {
    path: "/api/binary/two",
    mappings: [
      {
        pattern: "/api/binary/two",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.BinaryController",
          methodName: "two",
          deprecated: false,
          descriptions: [],
          params: [],
          returnType: {
            primitive: true,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "void",
            typeShort: "void",
            contentTypes: ["image/gif"],
            typeParameters: [],
            fields: [],
            values: null,
            object: {}
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["GET"]
  },
  {
    path: "/api/countries",
    mappings: [
      {
        pattern: "/api/countries",
        method: "GET",
        methodInfo: {
          className:
            "com.mcg.apitester.example.controllers.CountryControllerImpl",
          methodName: "list",
          deprecated: false,
          descriptions: [],
          params: [],
          returnType: {
            primitive: false,
            file: false,
            collection: true,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "java.util.Collection",
            typeShort: "Collection",
            contentTypes: [],
            typeParameters: [
              {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "com.mcg.apitester.example.entities.Country",
                typeShort: "Country",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "countryCode",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: null
              }
            ],
            fields: [
              {
                name: "empty",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "boolean",
                  typeShort: "boolean",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: [{ countryCode: "a string" }]
          },
          returnStatus: [],
          headerInfos: []
        }
      },
      {
        pattern: "/api/countries",
        method: "POST",
        methodInfo: {
          className:
            "com.mcg.apitester.example.controllers.CountryControllerImpl",
          methodName: "create",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "country",
              defaultValue: "",
              paramType: "BODY",
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "com.mcg.apitester.example.entities.Country",
                typeShort: "Country",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "countryCode",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: { countryCode: "a string" }
              },
              typeShort: "Country",
              primitive: false,
              object: { countryCode: "a string" },
              type: "com.mcg.apitester.example.entities.Country",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "com.mcg.apitester.example.entities.Country",
            typeShort: "Country",
            contentTypes: [],
            typeParameters: [],
            fields: [
              {
                name: "countryCode",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: { countryCode: "a string" }
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["GET", "POST"]
  },
  {
    path: "/api/countries/{countryCode}",
    mappings: [
      {
        pattern: "/api/countries/{countryCode}",
        method: "GET",
        methodInfo: {
          className:
            "com.mcg.apitester.example.controllers.CountryControllerImpl",
          methodName: "get",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "countryCode",
              defaultValue: "",
              paramType: "PATH",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "com.mcg.apitester.example.entities.Country",
            typeShort: "Country",
            contentTypes: [],
            typeParameters: [],
            fields: [
              {
                name: "countryCode",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: { countryCode: "a string" }
          },
          returnStatus: [],
          headerInfos: []
        }
      },
      {
        pattern: "/api/countries/{countryCode}",
        method: "DELETE",
        methodInfo: {
          className:
            "com.mcg.apitester.example.controllers.CountryControllerImpl",
          methodName: "delete",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "countryCode",
              defaultValue: "",
              paramType: "PATH",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: true,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "void",
            typeShort: "void",
            contentTypes: [],
            typeParameters: [],
            fields: [],
            values: null,
            object: {}
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["GET", "DELETE"]
  },
  {
    path: "/api/messages/text",
    mappings: [
      {
        pattern: "/api/messages/text",
        method: "POST",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.MessagesController",
          methodName: "createText",
          deprecated: false,
          descriptions: ["Send message as text in the request body."],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: ["The message to be sent"],
              name: "message",
              defaultValue: "",
              paramType: "BODY",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: true,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "void",
            typeShort: "void",
            contentTypes: [],
            typeParameters: [],
            fields: [],
            values: null,
            object: {}
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["POST"]
  },
  {
    path: "/api/one/counter",
    mappings: [
      {
        pattern: "/api/one/counter",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.OneController",
          methodName: "update",
          deprecated: false,
          descriptions: [
            "#### The OneController\n\nThe OneController deals with One Entity (annotation on the class)\n\n",
            "*** Attention! All calls need the apiKey parameter.\n\n** hello\n\n- a\n- b\n\n\n"
          ],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["The API key to use with this request"],
              name: "apiKey",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Laguage wishlist, in order of preference"],
              name: "languages",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [""],
              name: "a",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "in",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: true,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.reflect.Array",
                typeShort: "Array",
                contentTypes: null,
                typeParameters: [
                  {
                    primitive: true,
                    file: false,
                    collection: false,
                    array: false,
                    map: false,
                    loop: false,
                    enumeration: false,
                    type: "java.lang.String",
                    typeShort: "String",
                    contentTypes: null,
                    typeParameters: [],
                    fields: [],
                    values: null,
                    object: null
                  }
                ],
                fields: [],
                values: null,
                object: ["a string"]
              },
              typeShort: "Array",
              primitive: true,
              object: ["a string"],
              type: "java.lang.reflect.Array",
              file: false,
              collection: true,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: true,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "java.util.Map",
            typeShort: "Map",
            contentTypes: [],
            typeParameters: [
              {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.Object",
                typeShort: "Object",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.Object",
                typeShort: "Object",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              }
            ],
            fields: [
              {
                name: "empty",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "boolean",
                  typeShort: "boolean",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: [{}]
          },
          returnStatus: [
            {
              def: false,
              status: 401,
              name: "UNAUTHORIZED",
              description: "If the user is not authenticated"
            },
            {
              def: false,
              status: 403,
              name: "FORBIDDEN",
              description:
                "If the user is authenticated, but doesn't have sufficient permissions"
            },
            {
              def: false,
              status: 500,
              name: "INTERNAL_SERVER_ERROR",
              description: "If processing the request failed"
            }
          ],
          headerInfos: [
            {
              name: "AUTHENTICATION",
              description:
                "the value of the authentication token acquired through a call to /authentication"
            }
          ]
        }
      }
    ],
    methods: ["GET"]
  },
  {
    path: "/api/one/entities",
    mappings: [
      {
        pattern: "/api/one/entities",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.OneController",
          methodName: "list",
          deprecated: false,
          descriptions: [
            "#### The OneController\n\nThe OneController deals with One Entity (annotation on the class)\n\n",
            "*** Attention! All calls need the apiKey parameter.\n\n** hello\n\n- a\n- b\n\n\n"
          ],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["The API key to use with this request"],
              name: "apiKey",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Laguage wishlist, in order of preference"],
              name: "languages",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [""],
              name: "a",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "x",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "y",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: ["Example for description + enumeration values"],
              name: "enumeration",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: true,
                type: "com.mcg.apitester.example.entities.AnEnumeration",
                typeShort: "AnEnumeration",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: ["ONE_VAUE", "TWO_VALUES", "THREE_VALUES"],
                object: "ONE_VAUE | TWO_VALUES | THREE_VALUES"
              },
              typeShort: "AnEnumeration",
              primitive: false,
              object: "ONE_VAUE | TWO_VALUES | THREE_VALUES",
              type: "com.mcg.apitester.example.entities.AnEnumeration",
              file: false,
              collection: false,
              values: ["ONE_VAUE", "TWO_VALUES", "THREE_VALUES"]
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [
                "Time filter: Items created after fromDate, of type timestamp"
              ],
              name: "fromDate",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.util.Date",
                typeShort: "Date",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "date",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "day",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "hours",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "minutes",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "month",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "seconds",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "time",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "long",
                      typeShort: "long",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "timezoneOffset",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "year",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: 1579688718347
              },
              typeShort: "Date",
              primitive: false,
              object: 1579688718347,
              type: "java.util.Date",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: ["Pagination: The offset"],
              name: "offset",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [
                "Pagination: The maximum number of entries per page"
              ],
              name: "max",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [
                "The field to order by. One of 'name', 'date' or 'size'"
              ],
              name: "orderBy",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: true,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.reflect.Array",
                typeShort: "Array",
                contentTypes: null,
                typeParameters: [
                  {
                    primitive: true,
                    file: false,
                    collection: false,
                    array: false,
                    map: false,
                    loop: false,
                    enumeration: false,
                    type: "java.lang.String",
                    typeShort: "String",
                    contentTypes: null,
                    typeParameters: [],
                    fields: [],
                    values: null,
                    object: null
                  }
                ],
                fields: [],
                values: null,
                object: ["a string"]
              },
              typeShort: "Array",
              primitive: true,
              object: ["a string"],
              type: "java.lang.reflect.Array",
              file: false,
              collection: true,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: true,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "java.util.Collection",
            typeShort: "Collection",
            contentTypes: [],
            typeParameters: [
              {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "com.mcg.apitester.example.entities.OneEntity",
                typeShort: "OneEntity",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "id",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "lastModified",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Date",
                      typeShort: "Date",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "date",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "day",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "hours",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "minutes",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "month",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "seconds",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "time",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "long",
                            typeShort: "long",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "timezoneOffset",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "year",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "mainPet",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  },
                  {
                    name: "name",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "otherEntities",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type:
                            "com.mcg.apitester.example.entities.AnotherEntity",
                          typeShort: "AnotherEntity",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [
                            {
                              name: "id",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "password",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "username",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            }
                          ],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "petArray",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "pets",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "timestamp",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "long",
                      typeShort: "long",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "values",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: true,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type: "int",
                          typeShort: "int",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: null
              }
            ],
            fields: [
              {
                name: "empty",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "boolean",
                  typeShort: "boolean",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: [
              {
                pets: ["DOG | CAT | FISH | HORSE"],
                values: [1],
                name: "a string",
                otherEntities: [
                  { password: "a string", id: "a string", username: "a string" }
                ],
                id: "a string",
                lastModified: 1579688718348,
                mainPet: "DOG | CAT | FISH | HORSE",
                petArray: ["DOG | CAT | FISH | HORSE"],
                timestamp: 9223372036854775807
              }
            ]
          },
          returnStatus: [
            {
              def: false,
              status: 401,
              name: "UNAUTHORIZED",
              description: "If the user is not authenticated"
            },
            {
              def: false,
              status: 403,
              name: "FORBIDDEN",
              description:
                "If the user is authenticated, but doesn't have sufficient permissions"
            },
            {
              def: false,
              status: 500,
              name: "INTERNAL_SERVER_ERROR",
              description: "If processing the request failed"
            }
          ],
          headerInfos: [
            {
              name: "AUTHENTICATION",
              description:
                "the value of the authentication token acquired through a call to /authentication"
            }
          ]
        }
      },
      {
        pattern: "/api/one/entities",
        method: "OPTIONS",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.OneController",
          methodName: "permissions",
          deprecated: false,
          descriptions: [
            "#### The OneController\n\nThe OneController deals with One Entity (annotation on the class)\n\n",
            "*** Attention! All calls need the apiKey parameter.\n\n** hello\n\n- a\n- b\n\n\n"
          ],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["The API key to use with this request"],
              name: "apiKey",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Laguage wishlist, in order of preference"],
              name: "languages",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [""],
              name: "a",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: true,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "void",
            typeShort: "void",
            contentTypes: [],
            typeParameters: [],
            fields: [],
            values: null,
            object: {}
          },
          returnStatus: [
            {
              def: false,
              status: 401,
              name: "UNAUTHORIZED",
              description: "If the user is not authenticated"
            },
            {
              def: false,
              status: 403,
              name: "FORBIDDEN",
              description:
                "If the user is authenticated, but doesn't have sufficient permissions"
            },
            {
              def: false,
              status: 500,
              name: "INTERNAL_SERVER_ERROR",
              description: "If processing the request failed"
            }
          ],
          headerInfos: [
            {
              name: "AUTHENTICATION",
              description:
                "the value of the authentication token acquired through a call to /authentication"
            }
          ]
        }
      },
      {
        pattern: "/api/one/entities",
        method: "POST",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.OneController",
          methodName: "create",
          deprecated: false,
          descriptions: [
            "##### CREATE\n\nThis call is used to create a new entity (ApiDescription annotation on the method)",
            "#### The OneController\n\nThe OneController deals with One Entity (annotation on the class)\n\n",
            "*** Attention! All calls need the apiKey parameter.\n\n** hello\n\n- a\n- b\n\n\n"
          ],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["The API key to use with this request"],
              name: "apiKey",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Laguage wishlist, in order of preference"],
              name: "languages",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [""],
              name: "a",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "body",
              defaultValue: "",
              paramType: "BODY",
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "com.mcg.apitester.example.entities.OneEntity",
                typeShort: "OneEntity",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "id",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "lastModified",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Date",
                      typeShort: "Date",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "date",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "day",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "hours",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "minutes",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "month",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "seconds",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "time",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "long",
                            typeShort: "long",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "timezoneOffset",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "year",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "mainPet",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  },
                  {
                    name: "name",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "otherEntities",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type:
                            "com.mcg.apitester.example.entities.AnotherEntity",
                          typeShort: "AnotherEntity",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [
                            {
                              name: "id",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "password",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "username",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            }
                          ],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "petArray",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "pets",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "timestamp",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "long",
                      typeShort: "long",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "values",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: true,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type: "int",
                          typeShort: "int",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: {
                  pets: ["DOG | CAT | FISH | HORSE"],
                  values: [1],
                  name: "a string",
                  otherEntities: [
                    {
                      password: "a string",
                      id: "a string",
                      username: "a string"
                    }
                  ],
                  id: "a string",
                  lastModified: 1579688718362,
                  mainPet: "DOG | CAT | FISH | HORSE",
                  petArray: ["DOG | CAT | FISH | HORSE"],
                  timestamp: 9223372036854775807
                }
              },
              typeShort: "OneEntity",
              primitive: false,
              object: {
                pets: ["DOG | CAT | FISH | HORSE"],
                values: [1],
                name: "a string",
                otherEntities: [
                  { password: "a string", id: "a string", username: "a string" }
                ],
                id: "a string",
                lastModified: 1579688718362,
                mainPet: "DOG | CAT | FISH | HORSE",
                petArray: ["DOG | CAT | FISH | HORSE"],
                timestamp: 9223372036854775807
              },
              type: "com.mcg.apitester.example.entities.OneEntity",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "com.mcg.apitester.example.entities.OneEntity",
            typeShort: "OneEntity",
            contentTypes: [],
            typeParameters: [],
            fields: [
              {
                name: "id",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "lastModified",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Date",
                  typeShort: "Date",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [
                    {
                      name: "date",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "day",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "hours",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "minutes",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "month",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "seconds",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "time",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "long",
                        typeShort: "long",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "timezoneOffset",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "year",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "mainPet",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: true,
                  type: "com.mcg.apitester.example.entities.Pets",
                  typeShort: "Pets",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: ["DOG", "CAT", "FISH", "HORSE"],
                  object: null
                }
              },
              {
                name: "name",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "otherEntities",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "com.mcg.apitester.example.entities.AnotherEntity",
                      typeShort: "AnotherEntity",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "id",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "password",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "username",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "petArray",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "pets",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "timestamp",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "long",
                  typeShort: "long",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "values",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: {
              pets: ["DOG | CAT | FISH | HORSE"],
              values: [1],
              name: "a string",
              otherEntities: [
                { password: "a string", id: "a string", username: "a string" }
              ],
              id: "a string",
              lastModified: 1579688718363,
              mainPet: "DOG | CAT | FISH | HORSE",
              petArray: ["DOG | CAT | FISH | HORSE"],
              timestamp: 9223372036854775807
            }
          },
          returnStatus: [
            {
              def: false,
              status: 401,
              name: "UNAUTHORIZED",
              description: "If the user is not authenticated"
            },
            {
              def: false,
              status: 403,
              name: "FORBIDDEN",
              description:
                "If the user is authenticated, but doesn't have sufficient permissions"
            },
            {
              def: false,
              status: 500,
              name: "INTERNAL_SERVER_ERROR",
              description: "If processing the request failed"
            }
          ],
          headerInfos: [
            {
              name: "AUTHENTICATION",
              description:
                "the value of the authentication token acquired through a call to /authentication"
            }
          ]
        }
      }
    ],
    methods: ["GET", "POST", "OPTIONS"]
  },
  {
    path: "/api/one/entities/{id}",
    mappings: [
      {
        pattern: "/api/one/entities/{id}",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.OneController",
          methodName: "get",
          deprecated: false,
          descriptions: [
            "*** sdklfh sdklf hlsd fkhl,",
            "#### The OneController\n\nThe OneController deals with One Entity (annotation on the class)\n\n",
            "*** Attention! All calls need the apiKey parameter.\n\n** hello\n\n- a\n- b\n\n\n"
          ],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["The API key to use with this request"],
              name: "apiKey",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Laguage wishlist, in order of preference"],
              name: "languages",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [""],
              name: "a",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: ["The ID of the entity to read"],
              name: "id",
              defaultValue: "",
              paramType: "PATH",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "y",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "offset",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "max",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "orderBy",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "com.mcg.apitester.example.entities.OneEntity",
            typeShort: "OneEntity",
            contentTypes: [],
            typeParameters: [],
            fields: [
              {
                name: "id",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "lastModified",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Date",
                  typeShort: "Date",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [
                    {
                      name: "date",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "day",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "hours",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "minutes",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "month",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "seconds",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "time",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "long",
                        typeShort: "long",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "timezoneOffset",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "year",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "mainPet",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: true,
                  type: "com.mcg.apitester.example.entities.Pets",
                  typeShort: "Pets",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: ["DOG", "CAT", "FISH", "HORSE"],
                  object: null
                }
              },
              {
                name: "name",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "otherEntities",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "com.mcg.apitester.example.entities.AnotherEntity",
                      typeShort: "AnotherEntity",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "id",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "password",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "username",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "petArray",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "pets",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "timestamp",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "long",
                  typeShort: "long",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "values",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: {
              pets: ["DOG | CAT | FISH | HORSE"],
              values: [1],
              name: "a string",
              otherEntities: [
                { password: "a string", id: "a string", username: "a string" }
              ],
              id: "a string",
              lastModified: 1579688718331,
              mainPet: "DOG | CAT | FISH | HORSE",
              petArray: ["DOG | CAT | FISH | HORSE"],
              timestamp: 9223372036854775807
            }
          },
          returnStatus: [
            {
              def: false,
              status: 401,
              name: "UNAUTHORIZED",
              description: "If the user is not authenticated"
            },
            {
              def: false,
              status: 403,
              name: "FORBIDDEN",
              description:
                "If the user is authenticated, but doesn't have sufficient permissions"
            },
            {
              def: false,
              status: 500,
              name: "INTERNAL_SERVER_ERROR",
              description: "If processing the request failed"
            }
          ],
          headerInfos: [
            {
              name: "AUTHENTICATION",
              description:
                "the value of the authentication token acquired through a call to /authentication"
            }
          ]
        }
      },
      {
        pattern: "/api/one/entities/{id}",
        method: "PUT",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.OneController",
          methodName: "update",
          deprecated: false,
          descriptions: [
            "#### The OneController\n\nThe OneController deals with One Entity (annotation on the class)\n\n",
            "*** Attention! All calls need the apiKey parameter.\n\n** hello\n\n- a\n- b\n\n\n"
          ],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["The API key to use with this request"],
              name: "apiKey",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Laguage wishlist, in order of preference"],
              name: "languages",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [""],
              name: "a",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "id",
              defaultValue: "",
              paramType: "PATH",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "body",
              defaultValue: "",
              paramType: "BODY",
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "com.mcg.apitester.example.entities.OneEntity",
                typeShort: "OneEntity",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "id",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "lastModified",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Date",
                      typeShort: "Date",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "date",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "day",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "hours",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "minutes",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "month",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "seconds",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "time",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "long",
                            typeShort: "long",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "timezoneOffset",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "year",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "mainPet",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  },
                  {
                    name: "name",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "otherEntities",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type:
                            "com.mcg.apitester.example.entities.AnotherEntity",
                          typeShort: "AnotherEntity",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [
                            {
                              name: "id",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "password",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "username",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            }
                          ],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "petArray",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "pets",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "timestamp",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "long",
                      typeShort: "long",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "values",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: true,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type: "int",
                          typeShort: "int",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: {
                  pets: ["DOG | CAT | FISH | HORSE"],
                  values: [1],
                  name: "a string",
                  otherEntities: [
                    {
                      password: "a string",
                      id: "a string",
                      username: "a string"
                    }
                  ],
                  id: "a string",
                  lastModified: 1579688718337,
                  mainPet: "DOG | CAT | FISH | HORSE",
                  petArray: ["DOG | CAT | FISH | HORSE"],
                  timestamp: 9223372036854775807
                }
              },
              typeShort: "OneEntity",
              primitive: false,
              object: {
                pets: ["DOG | CAT | FISH | HORSE"],
                values: [1],
                name: "a string",
                otherEntities: [
                  { password: "a string", id: "a string", username: "a string" }
                ],
                id: "a string",
                lastModified: 1579688718337,
                mainPet: "DOG | CAT | FISH | HORSE",
                petArray: ["DOG | CAT | FISH | HORSE"],
                timestamp: 9223372036854775807
              },
              type: "com.mcg.apitester.example.entities.OneEntity",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "com.mcg.apitester.example.entities.OneEntity",
            typeShort: "OneEntity",
            contentTypes: [],
            typeParameters: [],
            fields: [
              {
                name: "id",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "lastModified",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Date",
                  typeShort: "Date",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [
                    {
                      name: "date",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "day",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "hours",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "minutes",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "month",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "seconds",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "time",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "long",
                        typeShort: "long",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "timezoneOffset",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "year",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "mainPet",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: true,
                  type: "com.mcg.apitester.example.entities.Pets",
                  typeShort: "Pets",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: ["DOG", "CAT", "FISH", "HORSE"],
                  object: null
                }
              },
              {
                name: "name",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "otherEntities",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "com.mcg.apitester.example.entities.AnotherEntity",
                      typeShort: "AnotherEntity",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "id",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "password",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "username",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "petArray",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "pets",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "timestamp",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "long",
                  typeShort: "long",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "values",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: {
              pets: ["DOG | CAT | FISH | HORSE"],
              values: [1],
              name: "a string",
              otherEntities: [
                { password: "a string", id: "a string", username: "a string" }
              ],
              id: "a string",
              lastModified: 1579688718338,
              mainPet: "DOG | CAT | FISH | HORSE",
              petArray: ["DOG | CAT | FISH | HORSE"],
              timestamp: 9223372036854775807
            }
          },
          returnStatus: [
            {
              def: false,
              status: 401,
              name: "UNAUTHORIZED",
              description: "If the user is not authenticated"
            },
            {
              def: false,
              status: 403,
              name: "FORBIDDEN",
              description:
                "If the user is authenticated, but doesn't have sufficient permissions"
            },
            {
              def: false,
              status: 500,
              name: "INTERNAL_SERVER_ERROR",
              description: "If processing the request failed"
            }
          ],
          headerInfos: [
            {
              name: "AUTHENTICATION",
              description:
                "the value of the authentication token acquired through a call to /authentication"
            }
          ]
        }
      },
      {
        pattern: "/api/one/entities/{id}",
        method: "DELETE",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.OneController",
          methodName: "delete",
          deprecated: false,
          descriptions: [
            "#### The OneController\n\nThe OneController deals with One Entity (annotation on the class)\n\n",
            "*** Attention! All calls need the apiKey parameter.\n\n** hello\n\n- a\n- b\n\n\n"
          ],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["The API key to use with this request"],
              name: "apiKey",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Laguage wishlist, in order of preference"],
              name: "languages",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [""],
              name: "a",
              defaultValue: "",
              paramType: null,
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: null,
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              typeShort: null,
              primitive: false,
              object: null,
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "id",
              defaultValue: "",
              paramType: "PATH",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: true,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "void",
            typeShort: "void",
            contentTypes: [],
            typeParameters: [],
            fields: [],
            values: null,
            object: {}
          },
          returnStatus: [
            {
              def: false,
              status: 401,
              name: "UNAUTHORIZED",
              description: "If the user is not authenticated"
            },
            {
              def: false,
              status: 403,
              name: "FORBIDDEN",
              description:
                "If the user is authenticated, but doesn't have sufficient permissions"
            },
            {
              def: false,
              status: 409,
              name: "CONFLICT",
              description:
                "If the entity could not be deleted because another entity depends on it"
            },
            {
              def: false,
              status: 500,
              name: "INTERNAL_SERVER_ERROR",
              description: "If processing the request failed"
            }
          ],
          headerInfos: [
            {
              name: "AUTHENTICATION",
              description:
                "the value of the authentication token acquired through a call to /authentication"
            }
          ]
        }
      }
    ],
    methods: ["GET", "PUT", "DELETE"]
  },
  {
    path: "/api/three/wait",
    mappings: [
      {
        pattern: "/api/three/wait",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.ThreeController",
          methodName: "list",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [],
              name: "wait",
              defaultValue: "2000",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [],
              name: "error",
              defaultValue: "false",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "boolean",
                typeShort: "boolean",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: true
              },
              typeShort: "boolean",
              primitive: true,
              object: true,
              type: "boolean",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: true,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "boolean",
            typeShort: "boolean",
            contentTypes: [],
            typeParameters: [],
            fields: [],
            values: null,
            object: true
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["GET"]
  },
  {
    path: "/api/three/wait/{id}",
    mappings: [
      {
        pattern: "/api/three/wait/{id}",
        method: "DELETE",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.ThreeController",
          methodName: "delete",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "id",
              defaultValue: "",
              paramType: "PATH",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: true,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "void",
            typeShort: "void",
            contentTypes: [],
            typeParameters: [],
            fields: [],
            values: null,
            object: {}
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["DELETE"]
  },
  {
    path: "/api/two/entities",
    mappings: [
      {
        pattern: "/api/two/entities",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.TwoController",
          methodName: "list",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "x",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "y",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: ["Pagination: The offset"],
              name: "offset",
              defaultValue: "0",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: false,
              descriptions: [
                "Pagination: The maximum number of entries per page"
              ],
              name: "max",
              defaultValue: "25",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [
                "The field to order by. One of 'name', 'date' or 'size'"
              ],
              name: "orderBy",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: true,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "java.util.Collection",
            typeShort: "Collection",
            contentTypes: [],
            typeParameters: [
              {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "com.mcg.apitester.example.entities.OneEntity",
                typeShort: "OneEntity",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "id",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "lastModified",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Date",
                      typeShort: "Date",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "date",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "day",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "hours",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "minutes",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "month",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "seconds",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "time",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "long",
                            typeShort: "long",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "timezoneOffset",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "year",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "mainPet",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  },
                  {
                    name: "name",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "otherEntities",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type:
                            "com.mcg.apitester.example.entities.AnotherEntity",
                          typeShort: "AnotherEntity",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [
                            {
                              name: "id",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "password",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "username",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            }
                          ],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "petArray",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "pets",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "timestamp",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "long",
                      typeShort: "long",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "values",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: true,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type: "int",
                          typeShort: "int",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: null
              }
            ],
            fields: [
              {
                name: "empty",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "boolean",
                  typeShort: "boolean",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: [
              {
                pets: ["DOG | CAT | FISH | HORSE"],
                values: [1],
                name: "a string",
                otherEntities: [
                  { password: "a string", id: "a string", username: "a string" }
                ],
                id: "a string",
                lastModified: 1579688718369,
                mainPet: "DOG | CAT | FISH | HORSE",
                petArray: ["DOG | CAT | FISH | HORSE"],
                timestamp: 9223372036854775807
              }
            ]
          },
          returnStatus: [],
          headerInfos: [{ name: "contextKey", description: "the context key" }]
        }
      },
      {
        pattern: "/api/two/entities",
        method: "POST",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.TwoController",
          methodName: "create",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "body",
              defaultValue: "",
              paramType: "BODY",
              typeInfo: {
                primitive: false,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "com.mcg.apitester.example.entities.OneEntity",
                typeShort: "OneEntity",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "id",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "lastModified",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Date",
                      typeShort: "Date",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "date",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "day",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "hours",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "minutes",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "month",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "seconds",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "time",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "long",
                            typeShort: "long",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "timezoneOffset",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "year",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "int",
                            typeShort: "int",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "mainPet",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  },
                  {
                    name: "name",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "otherEntities",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type:
                            "com.mcg.apitester.example.entities.AnotherEntity",
                          typeShort: "AnotherEntity",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [
                            {
                              name: "id",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "password",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            },
                            {
                              name: "username",
                              typeInfo: {
                                primitive: true,
                                file: false,
                                collection: false,
                                array: false,
                                map: false,
                                loop: false,
                                enumeration: false,
                                type: "java.lang.String",
                                typeShort: "String",
                                contentTypes: null,
                                typeParameters: [],
                                fields: [],
                                values: null,
                                object: null
                              }
                            }
                          ],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "petArray",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "pets",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: true,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.util.Collection",
                      typeShort: "Collection",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: false,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: true,
                          type: "com.mcg.apitester.example.entities.Pets",
                          typeShort: "Pets",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: ["DOG", "CAT", "FISH", "HORSE"],
                          object: null
                        }
                      ],
                      fields: [
                        {
                          name: "empty",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "boolean",
                            typeShort: "boolean",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "timestamp",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "long",
                      typeShort: "long",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "values",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: true,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type: "int",
                          typeShort: "int",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: {
                  pets: ["DOG | CAT | FISH | HORSE"],
                  values: [1],
                  name: "a string",
                  otherEntities: [
                    {
                      password: "a string",
                      id: "a string",
                      username: "a string"
                    }
                  ],
                  id: "a string",
                  lastModified: 1579688718370,
                  mainPet: "DOG | CAT | FISH | HORSE",
                  petArray: ["DOG | CAT | FISH | HORSE"],
                  timestamp: 9223372036854775807
                }
              },
              typeShort: "OneEntity",
              primitive: false,
              object: {
                pets: ["DOG | CAT | FISH | HORSE"],
                values: [1],
                name: "a string",
                otherEntities: [
                  { password: "a string", id: "a string", username: "a string" }
                ],
                id: "a string",
                lastModified: 1579688718370,
                mainPet: "DOG | CAT | FISH | HORSE",
                petArray: ["DOG | CAT | FISH | HORSE"],
                timestamp: 9223372036854775807
              },
              type: "com.mcg.apitester.example.entities.OneEntity",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "com.mcg.apitester.example.entities.OneEntity",
            typeShort: "OneEntity",
            contentTypes: [],
            typeParameters: [],
            fields: [
              {
                name: "id",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "lastModified",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Date",
                  typeShort: "Date",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [
                    {
                      name: "date",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "day",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "hours",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "minutes",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "month",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "seconds",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "time",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "long",
                        typeShort: "long",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "timezoneOffset",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "year",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "mainPet",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: true,
                  type: "com.mcg.apitester.example.entities.Pets",
                  typeShort: "Pets",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: ["DOG", "CAT", "FISH", "HORSE"],
                  object: null
                }
              },
              {
                name: "name",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "otherEntities",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "com.mcg.apitester.example.entities.AnotherEntity",
                      typeShort: "AnotherEntity",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "id",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "password",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "username",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "petArray",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "pets",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "timestamp",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "long",
                  typeShort: "long",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "values",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: {
              pets: ["DOG | CAT | FISH | HORSE"],
              values: [1],
              name: "a string",
              otherEntities: [
                { password: "a string", id: "a string", username: "a string" }
              ],
              id: "a string",
              lastModified: 1579688718371,
              mainPet: "DOG | CAT | FISH | HORSE",
              petArray: ["DOG | CAT | FISH | HORSE"],
              timestamp: 9223372036854775807
            }
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["GET", "POST"]
  },
  {
    path: "/api/two/entities/{id}",
    mappings: [
      {
        pattern: "/api/two/entities/{id}",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.TwoController",
          methodName: "get",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: ["The ID of the entity to read"],
              name: "id",
              defaultValue: "",
              paramType: "PATH",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "y",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "offset",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "max",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "int",
                typeShort: "int",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: 1
              },
              typeShort: "int",
              primitive: true,
              object: 1,
              type: "int",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "orderBy",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "com.mcg.apitester.example.entities.OneEntity",
            typeShort: "OneEntity",
            contentTypes: [],
            typeParameters: [],
            fields: [
              {
                name: "id",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "lastModified",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Date",
                  typeShort: "Date",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [
                    {
                      name: "date",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "day",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "hours",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "minutes",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "month",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "seconds",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "time",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "long",
                        typeShort: "long",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "timezoneOffset",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "year",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "mainPet",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: true,
                  type: "com.mcg.apitester.example.entities.Pets",
                  typeShort: "Pets",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: ["DOG", "CAT", "FISH", "HORSE"],
                  object: null
                }
              },
              {
                name: "name",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "otherEntities",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "com.mcg.apitester.example.entities.AnotherEntity",
                      typeShort: "AnotherEntity",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "id",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "password",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "username",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "petArray",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "pets",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "timestamp",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "long",
                  typeShort: "long",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "values",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: {
              pets: ["DOG | CAT | FISH | HORSE"],
              values: [1],
              name: "a string",
              otherEntities: [
                { password: "a string", id: "a string", username: "a string" }
              ],
              id: "a string",
              lastModified: 1579688718368,
              mainPet: "DOG | CAT | FISH | HORSE",
              petArray: ["DOG | CAT | FISH | HORSE"],
              timestamp: 9223372036854775807
            }
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["GET"]
  },
  {
    path: "/api/two/same_name/{foo}",
    mappings: [
      {
        pattern: "/api/two/same_name/{foo}",
        method: "GET",
        methodInfo: {
          className: "com.mcg.apitester.example.controllers.TwoController",
          methodName: "getWithTwoParams",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "foo1",
              defaultValue: "",
              paramType: "PATH",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "foo",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: false,
            loop: false,
            enumeration: false,
            type: "com.mcg.apitester.example.entities.OneEntity",
            typeShort: "OneEntity",
            contentTypes: [],
            typeParameters: [],
            fields: [
              {
                name: "id",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "lastModified",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Date",
                  typeShort: "Date",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [
                    {
                      name: "date",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "day",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "hours",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "minutes",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "month",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "seconds",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "time",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "long",
                        typeShort: "long",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "timezoneOffset",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    },
                    {
                      name: "year",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "int",
                        typeShort: "int",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "mainPet",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: true,
                  type: "com.mcg.apitester.example.entities.Pets",
                  typeShort: "Pets",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: ["DOG", "CAT", "FISH", "HORSE"],
                  object: null
                }
              },
              {
                name: "name",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.String",
                  typeShort: "String",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "otherEntities",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "com.mcg.apitester.example.entities.AnotherEntity",
                      typeShort: "AnotherEntity",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [
                        {
                          name: "id",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "password",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        },
                        {
                          name: "username",
                          typeInfo: {
                            primitive: true,
                            file: false,
                            collection: false,
                            array: false,
                            map: false,
                            loop: false,
                            enumeration: false,
                            type: "java.lang.String",
                            typeShort: "String",
                            contentTypes: null,
                            typeParameters: [],
                            fields: [],
                            values: null,
                            object: null
                          }
                        }
                      ],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "petArray",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "pets",
                typeInfo: {
                  primitive: false,
                  file: false,
                  collection: true,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.util.Collection",
                  typeShort: "Collection",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: true,
                      type: "com.mcg.apitester.example.entities.Pets",
                      typeShort: "Pets",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: ["DOG", "CAT", "FISH", "HORSE"],
                      object: null
                    }
                  ],
                  fields: [
                    {
                      name: "empty",
                      typeInfo: {
                        primitive: true,
                        file: false,
                        collection: false,
                        array: false,
                        map: false,
                        loop: false,
                        enumeration: false,
                        type: "boolean",
                        typeShort: "boolean",
                        contentTypes: null,
                        typeParameters: [],
                        fields: [],
                        values: null,
                        object: null
                      }
                    }
                  ],
                  values: null,
                  object: null
                }
              },
              {
                name: "timestamp",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "long",
                  typeShort: "long",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              },
              {
                name: "values",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: true,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "java.lang.reflect.Array",
                  typeShort: "Array",
                  contentTypes: null,
                  typeParameters: [
                    {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "int",
                      typeShort: "int",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  ],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: {
              pets: ["DOG | CAT | FISH | HORSE"],
              values: [1],
              name: "a string",
              otherEntities: [
                { password: "a string", id: "a string", username: "a string" }
              ],
              id: "a string",
              lastModified: 1579688718372,
              mainPet: "DOG | CAT | FISH | HORSE",
              petArray: ["DOG | CAT | FISH | HORSE"],
              timestamp: 9223372036854775807
            }
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["GET"]
  },
  {
    path: "/api/upload_form",
    mappings: [
      {
        pattern: "/api/upload_form",
        method: "POST",
        methodInfo: {
          className:
            "com.mcg.apitester.example.controllers.FileUploadController",
          methodName: "list1",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "file",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: false,
                file: true,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "org.springframework.web.multipart.MultipartFile",
                typeShort: "MultipartFile",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "bytes",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: true,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type: "byte",
                          typeShort: "byte",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "contentType",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "empty",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "boolean",
                      typeShort: "boolean",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "inputStream",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.io.InputStream",
                      typeShort: "InputStream",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "name",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "originalFilename",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "size",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "long",
                      typeShort: "long",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: "[BINARY FILE]"
              },
              typeShort: "MultipartFile",
              primitive: false,
              object: "[BINARY FILE]",
              type: "org.springframework.web.multipart.MultipartFile",
              file: true,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "y",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: true,
            loop: false,
            enumeration: false,
            type: "java.util.Map",
            typeShort: "Map",
            contentTypes: [],
            typeParameters: [
              {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.Object",
                typeShort: "Object",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              }
            ],
            fields: [
              {
                name: "empty",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "boolean",
                  typeShort: "boolean",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: { "a string": {} }
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["POST"]
  },
  {
    path: "/api/upload_standalone",
    mappings: [
      {
        pattern: "/api/upload_standalone",
        method: "POST",
        methodInfo: {
          className:
            "com.mcg.apitester.example.controllers.FileUploadController",
          methodName: "list2",
          deprecated: false,
          descriptions: [],
          params: [
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "file",
              defaultValue: "",
              paramType: "BODY",
              typeInfo: {
                primitive: false,
                file: true,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "org.springframework.web.multipart.MultipartFile",
                typeShort: "MultipartFile",
                contentTypes: null,
                typeParameters: [],
                fields: [
                  {
                    name: "bytes",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: true,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.reflect.Array",
                      typeShort: "Array",
                      contentTypes: null,
                      typeParameters: [
                        {
                          primitive: true,
                          file: false,
                          collection: false,
                          array: false,
                          map: false,
                          loop: false,
                          enumeration: false,
                          type: "byte",
                          typeShort: "byte",
                          contentTypes: null,
                          typeParameters: [],
                          fields: [],
                          values: null,
                          object: null
                        }
                      ],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "contentType",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "empty",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "boolean",
                      typeShort: "boolean",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "inputStream",
                    typeInfo: {
                      primitive: false,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.io.InputStream",
                      typeShort: "InputStream",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "name",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "originalFilename",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "java.lang.String",
                      typeShort: "String",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  },
                  {
                    name: "size",
                    typeInfo: {
                      primitive: true,
                      file: false,
                      collection: false,
                      array: false,
                      map: false,
                      loop: false,
                      enumeration: false,
                      type: "long",
                      typeShort: "long",
                      contentTypes: null,
                      typeParameters: [],
                      fields: [],
                      values: null,
                      object: null
                    }
                  }
                ],
                values: null,
                object: "[BINARY FILE]"
              },
              typeShort: "MultipartFile",
              primitive: false,
              object: "[BINARY FILE]",
              type: "org.springframework.web.multipart.MultipartFile",
              file: true,
              collection: false,
              values: null
            },
            {
              deprecated: false,
              secret: false,
              required: true,
              descriptions: [],
              name: "y",
              defaultValue: "",
              paramType: "REQUEST",
              typeInfo: {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: "a string"
              },
              typeShort: "String",
              primitive: true,
              object: "a string",
              type: "java.lang.String",
              file: false,
              collection: false,
              values: null
            }
          ],
          returnType: {
            primitive: false,
            file: false,
            collection: false,
            array: false,
            map: true,
            loop: false,
            enumeration: false,
            type: "java.util.Map",
            typeShort: "Map",
            contentTypes: [],
            typeParameters: [
              {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.String",
                typeShort: "String",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              },
              {
                primitive: true,
                file: false,
                collection: false,
                array: false,
                map: false,
                loop: false,
                enumeration: false,
                type: "java.lang.Object",
                typeShort: "Object",
                contentTypes: null,
                typeParameters: [],
                fields: [],
                values: null,
                object: null
              }
            ],
            fields: [
              {
                name: "empty",
                typeInfo: {
                  primitive: true,
                  file: false,
                  collection: false,
                  array: false,
                  map: false,
                  loop: false,
                  enumeration: false,
                  type: "boolean",
                  typeShort: "boolean",
                  contentTypes: null,
                  typeParameters: [],
                  fields: [],
                  values: null,
                  object: null
                }
              }
            ],
            values: null,
            object: { "a string": {} }
          },
          returnStatus: [],
          headerInfos: []
        }
      }
    ],
    methods: ["POST"]
  }
];
