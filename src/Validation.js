function Password(pw) {
  this.password = pw
  this.valid = true 
}

Password.prototype.validate = function() {
  // checkLength(this.password)
  return this.valid
}
  
  function checkLength() {
    valid = (this.password.length > 6) ? true : false;
  }



