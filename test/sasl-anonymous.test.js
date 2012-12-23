(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-anonymous'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-anonymous'], factory);
  }
}(this, function(saslanonymous) {

  describe('sasl-anonymous', function() {
    
    it('should export Mechanism', function() {
      expect(saslanonymous.Mechanism).to.be.a('function');
    });
    
    it('should export Mechanism via module', function() {
      expect(saslanonymous).to.equal(saslanonymous.Mechanism);
    });
    
  });
  
  return { name: 'test.sasl-anonymous' };
  
}));
