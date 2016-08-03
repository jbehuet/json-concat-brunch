# json-concat-brunch

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
          'public/lang/i18n.json': [ 'public/lang/fr.json', 'public/lang/en.json', 'public/lang/es.json' ]
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
