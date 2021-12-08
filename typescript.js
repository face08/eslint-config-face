module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended",// 插件里的规则
        "airbnb-base",
        "plugin:prettier/recommended",
        require.resolve("./configs/base")
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'space-infix-ops': 'off',
        'strict': 'off',
        /*
        * typescript
        */
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        "@typescript-eslint/no-inferrable-types": "off" ,
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    // static
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',

                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',

                    // Constructors
                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',

                    // Methods
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                ]
            }
        ]
    }
};
