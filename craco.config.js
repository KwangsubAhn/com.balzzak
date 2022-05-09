const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { 
                            '@primary-color': '#479761',
                            '@secondary-color': '#ff6961',
                            '@tertiary-color': '#CEBC81',
                            '@quaternary-color': '#B19F9E',
                            '@quinary-color': '#19181A',
                            '@background-color': '#f0f2f5'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};