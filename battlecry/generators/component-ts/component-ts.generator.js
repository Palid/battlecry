import { normalize } from 'path';
import { Generator } from 'battlecry';

export default class ComponentGenerator extends Generator {
	battlecryVersion = '0.3.x';
	config = {
		generate: {
			args: 'name',
			options: {
				path: { description: 'path', arg: 'optional' },
			}
		}
	};

	get folder() {
		return normalize(`src/components/${ this.options.path || '' }/__NaMe__/`);
	}


	generate() {
		this.templates('**/**.*').forEach(file => {
			console.log(file.dirname)
			console.log(this.folder)
			file.replaceAllText('__path__', this.folder.replace('src/', '').replace(`__NaMe__/`, '__NaMe__'))
			file.saveAs(this.folder, this.args.name);
		});
	}
}
