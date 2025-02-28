
/* eslint quotes: 0 */
// Validation definitions for validateSchema hook for service `data`. (Can be re-generated.)
const { validateSchema } = require('feathers-hooks-common');
const merge = require('lodash.merge');
const ajv = require('ajv');
// !code: imports // !end
// !code: init // !end

// !<DEFAULT> code: set_id_type
// eslint-disable-next-line no-unused-vars
const ID = 'integer';
// !end

let base = merge({},
  // !<DEFAULT> code: base
  {
    title: "Data",
    description: "Data database.",
    required: [
      "model",
      "rule",
      "shock",
      "func",
      "outputvar",
      "values"
    ],
    uniqueItemProperties: [],
    properties: {
      model: {
        type: "string"
      },
      rule: {
        type: "string"
      },
      shock: {
        oneOf: [
          {
            type: "string",
            enum: [
              "Fis",
              "Mon"
            ]
          },
          {
            type: "null"
          }
        ],
        type: "string"
      },
      func: {
        type: "string",
        enum: [
          "IRF",
          "AC",
          "VAR"
        ]
      },
      outputvar: {
        type: "string",
        enum: [
          "inflation",
          "interest",
          "output",
          "outputgap"
        ]
      },
      values: {
        type: "string"
      }
    },
    additionalProperties: false
  },
  // !end
  // !code: base_more // !end
);
// !code: base_change // !end

let create = merge({},
  base,
  // !code: create_more // !end
);

let update = merge({},
  base,
  // !code: update_more // !end
);

let patch = merge({},
  base,
  // !code: patch_more // !end
);
delete patch.required;
// !code: all_change // !end

let validateCreate = options => {
  // !<DEFAULT> code: func_create
  return validateSchema(create, ajv, options);
  // !end
};

let validateUpdate = options => {
  // !<DEFAULT> code: func_update
  return validateSchema(update, ajv, options);
  // !end
};

let validatePatch = options => {
  // !<DEFAULT> code: func_patch
  return validateSchema(patch, ajv, options);
  // !end
};

let quickValidate = (method, data, options) => {
  try {
    if (method === 'create') { validateCreate(options)({ type: 'before', method: 'create', data }); }
    if (method === 'update') { validateCreate(options)({ type: 'before', method: 'update', data }); }
    if (method === 'patch') { validateCreate(options)({ type: 'before', method: 'patch', data }); }
  } catch (err) {
    return err;
  }
};
// !code: validate_change // !end

let moduleExports = {
  create,
  update,
  patch,
  validateCreate,
  validateUpdate,
  validatePatch,
  quickValidate,
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
