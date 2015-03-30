describe('ttIdentity', function() {
  beforeEach(module('app'));

  describe('isAuthenticated', function() {
    it('should return false if the user has not logged in', inject(function(ttAuth, ttIdentity) {
      var username = "joe@joe.com"
      var password = "123456"
      ttAuth.authenticateUser(username, password).then(function(success) {
        expect(ttIdentity.isAuthenticated()).to.be.falsey;
      })
    }));

    it('should return true if the user is logged in', inject(function(ttAuth, ttIdentity) {
      var username = "test@test.se"
      var password = "qweasd"
      ttAuth.authenticateUser(username, password).then(function(success) {
        expect(ttIdentity.isAuthenticated()).to.be.true;
      })
    }))
  })
})
