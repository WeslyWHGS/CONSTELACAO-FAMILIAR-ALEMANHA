export const config = {
	matcher: "/checkout",
};

// TODO: substituir pelo link real de checkout para o Brasil.
const CHECKOUT_BR = "https://www.youtube.com/";
const CHECKOUT_INTL = "https://pay.hotmart.com/I106987842J?checkoutMode=10";

export default function middleware(request) {
	const country = request.headers.get("x-vercel-ip-country");
	const target = country === "BR" ? CHECKOUT_BR : CHECKOUT_INTL;
	return Response.redirect(target, 307);
}
