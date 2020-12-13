export default {
  json: require('./components/icon-module/json.png'),
  object: require('./components/icon-module/object.png'),
  array: require('./components/icon-module/array.png'),
  string: require('./components/icon-module/string.png'),
  integer: require('./components/icon-module/integer.png'),
  number: require('./components/icon-module/number.png'),
  boolean: require('./components/icon-module/boolean.png'),
  enum: require('./components/icon-module/enum.png'),
  icon (name) {
    if (name) {
      if (this[name]) return this[name]
    }
    return null
  }
}
