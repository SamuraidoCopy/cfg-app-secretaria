require('dotenv').config();
const { PrismaClient } = require('../lib/generated/client');
const prisma = new PrismaClient();

async function check() {
    console.log('Testing prisma.payroll.fields...');
    try {
        // Checking if the field exists in the model's metadata
        const dmmf = await prisma._getDmmf();
        const payrollModel = dmmf.datamodel.models.find(m => m.name === 'Payroll');
        const fields = payrollModel.fields.map(f => f.name);
        console.log('Payroll fields from DMMF:', fields);
        
        if (fields.includes('hoursAulista')) {
            console.log('✅ hoursAulista FOUND in local generated client!');
        } else {
            console.log('❌ hoursAulista NOT found in local generated client.');
        }
    } catch (e) {
        console.error('Error checking:', e);
    } finally {
        process.exit(0);
    }
}

check();
