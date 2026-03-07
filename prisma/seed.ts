import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
    const adminPassword = await bcrypt.hash('admin123', 10)

    // Ensure default admin user exists
    const admin = await prisma.user.upsert({
        where: { email: 'admin@freigalvao.com.br' },
        update: {},
        create: {
            email: 'admin@freigalvao.com.br',
            name: 'Administrador Geral',
            password: adminPassword,
            role: 'ADMIN',
        },
    })

    console.log('Seed executed successfully:')
    console.log({ admin })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
