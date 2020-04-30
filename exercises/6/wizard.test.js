const assert = require('chai').assert;
const Wizard = require('./wizard');

describe('Wizard', function() {

  it('should have a name', function() {
    const wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it('should have a beard by default', function() {
    const wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.bearded, true);
  });

  it('should not always be bearded', function() {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.bearded, false)
  });

  it('should have root powers', function() {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it('should has lots of root powers', function() {
    const wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it('should start rested', function() {
    // create wizard
    const wizard = new Wizard({name: 'Harry'})
    // assert isRested returns true
    assert.equal(wizard.isRested, true)
  });

  it('should be able to cast spells', function() {
    // create wizard
    const wizard = new Wizard({name: 'Harry'})
    // assert wizard.cast() returns 'MAGIC BULLET'
    assert.equal(wizard.cast('Magic Bullet'), 'MAGIC BULLET')
  });

  it('should only be able to cast 3 spells', function() {
    // create wizard
    const wizard = new Wizard({name: 'Harry'})
    // assert isRested is true
    assert.equal(wizard.isRested, true)
    // cast()
    wizard.cast()
    // assert isRested is true
    assert.equal(wizard.isRested, true)
    // cast()
    wizard.cast()
    // assert isRested is true
    assert.equal(wizard.isRested, true)
    // cast()
    wizard.cast()
    // assert isRested is false
    assert.equal(wizard.isRested, false)
    // assert cast() returns 'I SHALL NOT CAST!'
    assert.equal(wizard.cast('I SHALL NOT CAST!'))
  });
});
