import { calculateTeacherComponents } from './lib/payroll-calc'

function debugVT() {
  const workingDays = 10;
  const transportDaily = 11.66;
  
  const transportTotal = workingDays * transportDaily;
  
  console.log('--- Debug VT ---');
  console.log(`Working Days: ${workingDays}`);
  console.log(`Daily Rate: ${transportDaily}`);
  console.log(`Multiplication: ${workingDays * transportDaily}`);
  console.log(`ToFixed(2): ${(workingDays * transportDaily).toFixed(2)}`);
  
  // Simulation of absences logic from actions.ts
  const totalDays = 22;
  const absencesVT = 12;
  let tTotal = totalDays * transportDaily;
  let tDeduction = absencesVT * transportDaily;
  let result = tTotal - tDeduction;
  
  console.log('\n--- Simulation with Absences ---');
  console.log(`(22 * 11.66) - (12 * 11.66) = ${result}`);
  console.log(`Rounded result: ${Number(result.toFixed(2))}`);
}

debugVT();
