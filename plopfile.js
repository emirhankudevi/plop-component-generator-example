module.exports = plop => {
    plop.setGenerator('Component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component Name: '
            },
        ],
        actions: [
            {
                type: 'add',
                path: './src/Components/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile: 'generator/templates/Components.js.hbs',
            },
            {
                type: 'add',
                path: 'src/Components/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile:
                    'generator/templates/Component.test.js.hbs',
            },
            {
                type: 'add',
                path: 'src/Components/{{pascalCase name}}/index.js',
                templateFile:
                    'generator/templates/index.js.hbs',
            },
        ],
    })
}