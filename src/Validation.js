function Password(pw) {
  this.password = pw
  this.valid = true 
}

Password.prototype.validate = function() {

  // console.log(this.password.length)
  this.checkLength()
  return this.valid
}
  
Password.prototype.checkLength = function() {
    this.valid = (this.password.length > 6) ? true : false;
}



