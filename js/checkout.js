(() => {
	const CHECKOUT_URL = "/checkout";

	const goToCheckout = () => {
		window.location.href = CHECKOUT_URL;
	};

	document.querySelectorAll(".js-checkout-btn").forEach((btn) => {
		btn.addEventListener("click", goToCheckout);
		btn.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				goToCheckout();
			}
		});
	});
})();
