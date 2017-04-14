module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import",
    ],
    "env": {
        "node": true,
        "mocha": true,
    },
    "globals": {
        "expect": true,        
    },
    rules: {
        "no-mixed-operators": [
            "error",
            {
                "groups": [
                    ["+", "-", "*", "/", "%", "**"],
                    ["&", "|", "^", "~", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ],
                "allowSamePrecedence": true
            }
        ],
        "no-plusplus": [
            "off",
        ]
    }
};