$(document).ready(() => {
	$('.btn').on('click', event => {
		event.preventDefault();
		var emailValue = $('#email-input').val();
		var passwordValue = $('#password-input').val();
		
		if (emailValue == "") {
			$('.email-error').html("Please enter your email")
		}

		if (passwordValue == "") {
			$('.password-error').html("Please enter your password");
		}
	})
})

