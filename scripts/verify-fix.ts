import { prisma } from './lib/prisma';

async function check() {
  try {
    // @ts-ignore - checking if the field exists at runtime
    console.log('Payroll model fields (via prisma.payroll):');
    // We can't easily get keys of a proxy, but we can check if a dummy call works or if types match
    const payroll = await prisma.payroll.findFirst();
    if (payroll) {
        console.log('Sample payroll record found. Keys:', Object.keys(payroll));
    } else {
        console.log('No payroll records found, but query succeeded.');
    }
  } catch (error) {
    console.error('Error during check:', error);
  } finally {
    process.exit(0);
  }
}

check();
