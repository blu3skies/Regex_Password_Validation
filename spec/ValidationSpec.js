describe("Validation", function() {

  it('valid should be true until not', function(){
    var password = new Password("djI38D55")
    console.log(password.password)
    expect(password.validate()).toEqual(true)
  })

  it('should return false if password is too short', function() {
    expect(validate("123")).toEqual(false)
  })

});