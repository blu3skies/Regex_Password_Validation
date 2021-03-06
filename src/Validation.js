
function Password(pw) {
  this.password = pw
  this.valid = true 
}

Password.prototype.validate = function() {
  this.checkLength()
  this.checkLowerCase()
  this.checkUpperCase()
  this.checkNumber()
  this.checkNoSpecialChar()
  return this.valid
}
  
Password.prototype.checkLength = function() {
    this.valid = (this.password.length > 6) ? true : false;
}

Password.prototype.checkLowerCase = function() {
  if (!this.password.match(/[a-z]/)) this.valid = false
}

Password.prototype.checkUpperCase = function() {
  if (!this.password.match(/[A-Z]/)) this.valid = false
}

Password.prototype.checkNumber = function() {
  if (!this.password.match(/[0-9]/)) this.valid = false
}
Password.prototype.checkNoSpecialChar = function() {
  if (!this.password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) this.valid = false
}



