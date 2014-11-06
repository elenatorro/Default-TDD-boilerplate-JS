// -- Object ------------------------------------------------------
var DefaultObject, exports;


DefaultObject = (function() {
  function DefaultObject() {
    console.log('Creating Default Object');
    this._defaultVariable = 'default';
  }

  DefaultObject.prototype.defaultVariable = function() {
    return this._defaultVariable;
  };

  DefaultObject.prototype.defaultFunction = function(obj) {};

  return DefaultObject;

})();

// -- Export ------------------------------------------------------
exports = module.exports = DefaultObject;
