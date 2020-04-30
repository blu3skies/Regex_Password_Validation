describe("Validation", function() {

  it('valid should be true until not', function(){
    var password = new Password("djI38D55")
    expect(password.validate()).toEqual(true)
  })

  it('should return false if password is too short', function() {
    var password = new Password("123")
    expect(password.validate()).toEqual(false)
  })

  it("should return false if password doesn't contain lowercase", function() {
    var password = new Password('JHD5FJ53')
    expect(password.validate()).toEqual(false)
  })

  it("should return false if pw doesnt have uppercase letters", function() {
    var password = new Password('!fdjn345')
    expect(password.validate()).toEqual(false)
  })

  it('should return false if pw doesnt contain number', function(){
    var password = new Password('JfkdfjKj')
    expect(password.validate()).toEqual(false)
  })

});