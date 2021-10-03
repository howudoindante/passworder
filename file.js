const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
function save(password, filename) {
    fs.writeFileSync(`${__dirname}/${filename}`, password);
    console.log(chalk.blueBright("The file was succesfully saved!"));
}

module.exports = {
    save
};