const validator = require('validator');
const chalk = require('chalk')
const yargs = require('yargs')

const getnotes = require('./notes.js');

const msg = getnotes();

console.log(msg);

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new Note')
    }},
    
)

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function() {
        console.log('Remove a note')
    }
})
console.log(chalk.red.bold("Success!!"))

console.log(yargs.argv)