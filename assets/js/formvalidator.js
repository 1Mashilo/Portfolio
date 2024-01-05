jQuery(function ($) {
  // Custom validation method for alphabets and spaces
  $.validator.addMethod('alphabetsnspace', function (value, element) {
    return this.optional(element) || /^[a-zA-ZÀ-ú' ]*$/.test(value);
  });

  // Custom validation method for alphabets, spaces, hyphens, commas, question marks, numbers, and periods
  $.validator.addMethod('alphabetsnspace2', function (value, element) {
    return this.optional(element) || /^[a-zA-Z-,-?0-9.' ]*$/.test(value);
  });

  // Form validation rules
  $('#formContact').validate({
    rules: {
      nome: {
        alphabetsnspace: true,
        minlength: 2,
        maxlength: 15,
        required: true,
      },
      sobrenome: {
        required: true,
        minlength: 3,
        maxlength: 20,
        alphabetsnspace: true,
      },
      email: {
        required: true,
        email: true,
      },
      celular: {
        required: true,
        minlength: 15,
      },
      mensagem: {
        alphabetsnspace2: true,
        required: true,
        maxlength: 1500,
      },
    },
    messages: {
      nome: {
        required: 'Please enter your name',
        alphabetsnspace: 'Please use only letters',
      },
      sobrenome: {
        required: 'Please enter your last name',
        alphabetsnspace: 'Please use only letters',
      },
      email: {
        required: 'Please enter your email for contact',
      },
      celular: {
        required: 'Please enter your mobile number',
        minlength: 'Please insert 11 digits (numbers only)',
      },
      mensagem: {
        alphabetsnspace2: 'Please do not use special characters',
      },
    },
  });
});

// Masking for the 'celular' input
$('#celular').mask('(00) 00000-0000');

// Restricting special characters in the 'mensagem' input
$('#mensagem').keypress(function (e) {
  let str = $(this).val();
  if (
    "'" != String.fromCharCode(e.which) &&
    '<' != String.fromCharCode(e.which) &&
    '>' != String.fromCharCode(e.which)
  ) {
    e.preventDefault();
    $(this).val(str + '');
  }
});
