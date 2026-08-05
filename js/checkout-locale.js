(() => {
	const CHECKOUT_INTL = "https://pay.hotmart.com/I106987842J?checkoutMode=10";

	const BRAZIL_TIME_ZONES = new Set([
		"America/Noronha", "America/Belem", "America/Fortaleza", "America/Recife",
		"America/Araguaina", "America/Maceio", "America/Bahia", "America/Sao_Paulo",
		"America/Campo_Grande", "America/Cuiaba", "America/Santarem", "America/Porto_Velho",
		"America/Boa_Vista", "America/Manaus", "America/Eirunepe", "America/Rio_Branco",
	]);

	const isBrazilianVisitor = () => {
		const languages = navigator.languages && navigator.languages.length
			? navigator.languages
			: [navigator.language || ""];
		const hasBrazilianLanguage = languages.some((lang) => /^pt-br$/i.test(lang));

		let timeZone = "";
		try {
			timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
		} catch (e) {
			// Intl indisponível: sem sinal de fuso, não assume Brasil.
		}
		const hasBrazilianTimeZone = BRAZIL_TIME_ZONES.has(timeZone);

		return hasBrazilianLanguage && hasBrazilianTimeZone;
	};

	// O href padrão no HTML já é o link do Brasil (CenterPag) — funciona
	// mesmo se este script não rodar. Só trocamos para o link internacional
	// (Hotmart) quando o visitante NÃO parece ser brasileiro.
	if (!isBrazilianVisitor()) {
		document.querySelectorAll(".js-checkout-link").forEach((link) => {
			link.href = CHECKOUT_INTL;
		});
	}
})();
