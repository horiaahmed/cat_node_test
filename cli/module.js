const { program } = require('commander');
program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();
const option = program.opts();
const limit = option.first ? 1 : undefined;
const username=program.args[0].split(option.separator, limit).toString()
module.exports=username