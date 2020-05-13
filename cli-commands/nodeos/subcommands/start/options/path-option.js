const path = require('path');

const Option = require('../../../../option');

class PathOption extends Option {
    constructor() {
        super(
            'path',
            {
                "describe": "The path nodeos data will be stored",
                "type": "string"
            }
        );
    }

    async process(optionValue) {
        return path.resolve(optionValue);
    }
}

module.exports = new PathOption();
