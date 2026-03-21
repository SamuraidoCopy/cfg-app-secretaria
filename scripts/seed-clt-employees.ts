import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from "../lib/generated/client";
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env from project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const employees = [
  {
    name: "ANDRESSA BASILE REZENDE",
    cpf: "358.721.638-00",
    role: "PROFESSOR(A)",
    baseSalary: 1960.56,
    isAulista: true,
    type: "CLT",
  },
  {
    name: "APARECIDA DE FATIMA DESIDERIO VENANCIO",
    cpf: "344.552.798-90",
    role: "AUXILIAR DE ENSINO",
    baseSalary: 2277.0,
    isAulista: false,
    type: "CLT",
  },
  {
    name: "CAMILA ARAUJO LOPES DA SILVA",
    cpf: "224.234.148-03",
    role: "PROFESSOR(A)",
    baseSalary: 1948.17,
    isAulista: false,
    type: "CLT",
  },
  {
    name: "CAROLINE TAYAMA DA SILVA PIMENTEL",
    cpf: "012.955.172-48",
    role: "PROFESSOR(A)",
    baseSalary: 2095.0,
    isAulista: false,
    cestaBasica: 180.0,
    type: "CLT",
  },
  {
    name: "CESAR AUGUSTO SANTOS CARMO",
    cpf: "377.710.578-37",
    role: "PROFESSOR(A)",
    baseSalary: 900.18,
    isAulista: true,
    type: "CLT",
  },
  {
    name: "ELISELMA ADDEU",
    cpf: "114.711.108-18",
    role: "COORDENADOR(A) PEDAGOGICO",
    baseSalary: 1632.0,
    isAulista: false,
    cestaBasica: 513.42,
    type: "CLT",
  },
  {
    name: "GUSTAVO LOPES DE OLIVEIRA",
    cpf: "459.826.918-95",
    role: "Auxiliar Administrativo",
    baseSalary: 1621.0,
    isAulista: false,
    type: "CLT",
  },
  {
    name: "MARCELA DOS SANTOS SOUZA",
    cpf: "490.218.748-57",
    role: "AUXILIAR DE ENSINO",
    baseSalary: 1632.0,
    isAulista: false,
    cestaBasica: 300.0,
    type: "CLT",
  },
  {
    name: "OLGA NASCIMENTO DA SILVA",
    cpf: "350.683.668-46",
    role: "PROFESSOR(A)",
    baseSalary: 3080.0,
    isAulista: false,
    type: "CLT",
  },
  {
    name: "RITA DE CASSIA ADDEU",
    cpf: "281.456.678-44",
    role: "Auxiliar Administrativo",
    baseSalary: 1621.0,
    isAulista: false,
    type: "CLT",
  },
];

async function main() {
  console.log("Seeding employees...");
  for (const emp of employees) {
    await prisma.employee.upsert({
      where: { cpf: emp.cpf },
      update: emp,
      create: emp,
    });
    console.log(`Registered/Updated: ${emp.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
