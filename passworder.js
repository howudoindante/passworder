const chalk = require("chalk");
const { program } = require("commander");
const { generate } = require("./engine");
const clipboardy = require("clipboardy");
const appVersion = "0.0.1";
const coloredV = chalk.redBright(`v.${appVersion}`);
const { save } = require("./file");
program.version(appVersion);

function parseValue(value) {
    return parseInt(value);
}
function parseBool(value) {
    return value === "true" ? true : false;
}

program.name(chalk.yellow(`Password Generator ${coloredV}`));

program
    .option("-l, --length <number>", "length of the password", parseValue, 10)
    .option(
        "-sb, --split-by <number>",
        'count of symbols to split with "-"',
        parseValue,
        0
    )
    .option(
        "-in, --include <number>",
        "include numbers in password",
        parseBool,
        true
    )
    .option("-s, --save <filename.ext>", "If setted, password will saved to file");

program.parse();

let password = generate(program.opts());
console.log(chalk.yellow(password));
clipboardy.writeSync(password);
console.log(chalk.yellow("Password save to clipboard"));
program.opts().save && save(password, program.opts().save);
