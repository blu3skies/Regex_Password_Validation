describe("Validation", function() {

  it('valid should be true until not', function(){
    var password = new Password("djI38D55")
    expect(password.validate()).toEqual(true)
  })

  it('should return false if password is too short', function() {
    var password = new Password("123")
    expect(password.validate()).toEqual(false)
  })

});