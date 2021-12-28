const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate store',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'store name please',
    validate: notEmpty('name')
  },
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [{
      name: 'state',
      value: 'state',
      checked: true
    },
    {
      name: 'actions',
      value: 'actions',
      checked: true
    }
    ],
    validate(value) {
      if (!value.includes('state') || !value.includes('actions')) {
        return 'store require at least state and actions'
      }
      return true
    }
  }
  ],
  actions(data) {
    const name = '{{name}}'

    const actions = [{
      type: 'add',
      path: `src/store/${name}.ts`,
      templateFile: 'plop-templates/store/index.hbs',
      data: {
        name: name,
        state: data.blocks.includes('state'),
        actions: data.blocks.includes('actions')
      }
    }]
    return actions
  }
}
