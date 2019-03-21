const Validator = require('validator')
const isEmpty = require('../utils/isEmpty')

module.exports = function validateNoteInput(data) {
  const errors = {}
  const { title = '' } = data

  // // Validate `title`
  // if (Validator.isEmpty(title)) {
  //   errors.title = 'Title field is required'
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
