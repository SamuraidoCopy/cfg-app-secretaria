"use server"

import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function createUser(data: FormData) {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "ADMIN") {
        return { error: "Sem acesso. Apenas administradores podem criar usuários." }
    }

    const name = data.get("name")?.toString()
    const email = data.get("email")?.toString()
    const password = data.get("password")?.toString()
    const role = data.get("role")?.toString() || "USER"

    if (!name || !email || !password) {
        return { error: "Todos os campos (nome, email, senha) são obrigatórios." }
    }

    try {
        const existing = await prisma.user.findUnique({ where: { email } })
        if (existing) {
            return { error: "Este email já está cadastrado no sistema." }
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            }
        })

        revalidatePath("/admin/usuarios")
        return { success: true }
    } catch (err: any) {
        return { error: "Erro ao criar usuário: " + err.message }
    }
}

export async function deleteUser(id: string) {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "ADMIN") {
        return { error: "Sem acesso." }
    }

    // Não deletar a si mesmo e não deletar o admin principal se houver regra assim
    if (session.user.id === id) {
        return { error: "Você não pode deletar sua própria conta." }
    }

    try {
        await prisma.user.delete({ where: { id } })
        revalidatePath("/admin/usuarios")
        return { success: true }
    } catch (err: any) {
        return { error: "Erro ao deletar usuário." }
    }
}
