import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import AdminUsuariosClient from "./client"

export default async function AdminUsuariosPage() {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== "ADMIN") {
        redirect("/")
    }

    const users = await prisma.user.findMany({
        orderBy: { createdAt: "desc" }
    })

    return <AdminUsuariosClient users={users} />
}
