module.exports = {
    root: true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": ["jest"],
    "rules": {},
    "ignorePatterns": ["__test__"]
}
