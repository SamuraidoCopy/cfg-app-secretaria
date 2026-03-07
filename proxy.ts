import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
    matcher: [
        /*
         * Proteger todas as rotas exceto:
         * - api/auth (NextAuth endpoints)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - Arquivos públicos na raiz (favicon.ico, logo.jpg)
         * - /login (a página de login)
         */
        "/((?!api/auth|_next/static|_next/image|favicon.ico|logo.jpg|login).*)",
    ],
};
