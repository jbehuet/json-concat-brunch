# json-concat-brunch

[![Licence](https://img.shields.io/badge/licence-MIT-blue.svg?maxAge=2592000)](https://github.com/jbehuet/json-concat-brunch/blob/master/LICENCE) [![Release](https://img.shields.io/github/release/jbehuet/json-concat-brunch.svg?maxAge=2592000)](https://github.com/jbehuet/json-concat-brunch/releases) [![Issues](https://img.shields.io/github/issues/jbehuet/json-concat-brunch.svg?maxAge=2592000)](https://github.com/jbehuet/json-concat-brunch/issues) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/47b52c86359d4c0c92611289a644db30)](https://www.codacy.com/app/jbehuet/json-concat-brunch?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jbehuet/json-concat-brunch&amp;utm_campaign=Badge_Grade)

A plugin for Brunch to combine JSON files in only one

## Install

```bash
npm install json-concat-brunch --save
```

## Usage

```javascript
plugins : {
  concatenate: {
      files: {
          'public/lang/i18n.json': [ 'public/lang/fr.json', 'public/lang/en.json', 'public/lang/es.json' ],
          'public/i18n/en.json': ['public/**/*.en.json']
      }
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request

## Licence

This project is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
