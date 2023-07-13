export default [
    {
        extends: [
            'plugin:yml/standard',
        ],
        plugins: [
            'eslint-plugin-yml',
        ],
        ignoredPatterns: [
            'node_modules/**/*.{yml,yaml}',
        ],
        files: [
            '**/*.{yml,yaml}',
        ]
    }
]
