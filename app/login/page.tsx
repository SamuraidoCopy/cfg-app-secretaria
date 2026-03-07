"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, Lock } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError(res.error);
        } else {
            router.push("/");
        }
    };

    return (
        <div className="flex w-full min-h-screen items-center justify-center p-4">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wine-500/20 rounded-full blur-[100px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="w-full max-w-md bg-white rounded-3xl shadow-premium p-8 border border-wine-100/50">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-auto mb-6">
                        <Image
                            src="/logo.jpg"
                            alt="Logo Colégio Frei Galvão"
                            width={120}
                            height={120}
                            className="w-full h-auto object-contain mix-blend-multiply"
                        />
                    </div>
                    <h1 className="text-2xl font-display font-black tracking-tight text-wine-950">Acesso Restrito</h1>
                    <p className="text-sm text-wine-600/70 font-medium tracking-wide mt-1">Secretaria Acadêmica</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-sm font-medium text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-wine-900 ml-1">E-mail</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-wine-400">
                                <User className="h-5 w-5" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 focus:border-wine-500 transition-all font-medium text-wine-950 placeholder:text-wine-400/50"
                                placeholder="coordenacao@freigalvao.com.br"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-wine-900 ml-1">Senha</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-wine-400">
                                <Lock className="h-5 w-5" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-wine-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-wine-500/30 focus:border-wine-500 transition-all font-medium text-wine-950 focus:font-sans placeholder:text-wine-400/50"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-wine-800 to-wine-950 hover:from-wine-700 hover:to-wine-900 text-white rounded-xl font-bold shadow-lg shadow-wine-950/20 hover:shadow-wine-950/40 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
                    >
                        Entrar no Sistema
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-wine-100 flex justify-center">
                    <p className="text-xs text-wine-400 font-medium tracking-wide">
                        © {new Date().getFullYear()} Colégio Frei Galvão
                    </p>
                </div>
            </div>
        </div>
    );
}
