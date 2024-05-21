document.addEventListener('DOMContentLoaded', function () {
	const ratingButtons = document.querySelectorAll('.rank');
	const submitButton = document.getElementById('submit-button');
	const ratingState = document.getElementById('rating-state');
	const thankYouState = document.getElementById('thank-you-state');
	const selectedRatingSpan = document.querySelector('.rate');
	let selectedRating = 0;

	ratingButtons.forEach(button => {
		button.addEventListener('click', function () {
			// Remove active class from all buttons
			ratingButtons.forEach(btn => btn.classList.remove('active'));
			// Add active class to the clicked button
			this.classList.add('active');
			// Set the selected rating value
			selectedRating = this.getAttribute('data-value');
		});
	});

	submitButton.addEventListener('click', function () {
		if (selectedRating > 0) {
			// Update the rating in the thank you message
			selectedRatingSpan.textContent = selectedRating;
			// Hide the rating state and show the thank you state
			ratingState.classList.add('hidden');
			thankYouState.style.display = "grid"
		} else {
			alert('Please select a rating before submitting.');
		}
	});
});
