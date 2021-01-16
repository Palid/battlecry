import { separator } from 'path'
import { Generator } from 'battlecry'

export default class ComponentGenerator extends Generator {
  battlecryVersion = '0.3.x'
  config = {
    generate: {
      args: 'name',
      options: {
        path: { description: 'path', arg: 'optional' },
      },
    },
  }

  get folder() {
    return `src/components/${this.options.path || ''}/__NaMe__/`
  }
  generate() {
    this.templates('**/**.*').forEach((file) => {
      file.replaceAllText(
        '__path__',
        this.folder
          .replace('src' + separator, '')
          .replace(`__NaMe__/`, '__NaMe__')
          .replace(/[\/\\]+/g, '/')
      )
      file.saveAs(this.folder, this.args.name)
    })
  }
}
