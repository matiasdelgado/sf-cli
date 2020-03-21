const {Command, flags} = require('@oclif/command')

class OpenCommand extends Command {
  async run() {
    const {flags} = this.parse(OpenCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/matias/work/sf-cli/src/commands/open.js`)
  }
}

OpenCommand.description = `Describe the command here
...
Extra documentation goes here
`

OpenCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = OpenCommand
