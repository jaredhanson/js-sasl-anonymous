(function(root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(require('sasl-anonymous/lib/mechanism'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['sasl-anonymous/lib/mechanism'], factory);
  }
}(this, function(Mechanism) {

  describe('Mechanism', function() {
    var mech = new Mechanism();
    
    it('should be named ANONYMOUS', function() {
      expect(mech.name).to.equal('ANONYMOUS');
    });
    
    it('should be client first', function() {
      expect(mech.clientFirst).to.equal(true);
    });
    
    it('should encode credentials', function() {
      expect(mech.response({})).to.equal('');
    });
    
    it('should encode credentials with trace information', function() {
      expect(mech.response({ trace: 'sirhc' })).to.equal('sirhc');
    });
    
    it('should have challenge function', function() {
      expect(mech.challenge).to.be.a('function');
    });
    
  });
  
  return { name: 'test.sasl-anonymous.mechanism' };
  
}));
