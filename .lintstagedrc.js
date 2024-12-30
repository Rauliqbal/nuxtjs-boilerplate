const path = require("path")

const buildEslintCommand = (filenames) =>
    `npm run lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" --file ")}`

const prettierCommand = "prettier --write"

module.exports = {
    "*.{js,ts,vue}": [prettierCommand, buildEslintCommand],
    "*.{json,css,md}": [prettierCommand],
}