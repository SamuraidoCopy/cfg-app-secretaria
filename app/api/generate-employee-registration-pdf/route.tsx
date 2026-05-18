/* eslint-disable jsx-a11y/alt-text */
import { NextRequest, NextResponse } from "next/server";
import { Document, Image, Page, StyleSheet, Text, View, renderToBuffer } from "@react-pdf/renderer";
import fs from "fs";
import path from "path";
import type { ReactNode } from "react";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/client";
import { WEEKDAY_LABELS, type Weekday } from "@/lib/work-schedule";

export const dynamic = "force-dynamic";

const WINE = "#4a0e1a";
const EMERALD = "#059669";
const AMBER = "#b45309";
const GRAY = "#374151";
const GRAY_LIGHT = "#6b7280";
const GRAY_BG = "#f9fafb";
const BORDER = "#e5e7eb";

const logoBuffer = fs.readFileSync(path.join(process.cwd(), "public", "logo.jpg"));

type EmployeeRegistrationRecord = Prisma.EmployeeGetPayload<{
  include: {
    employeeSubjects: { include: { subject: true } };
    teachingAssignments: { include: { subject: true } };
    salaryAdjustments: true;
  };
}>;

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    padding: 24,
    color: GRAY,
  },
  header: {
    backgroundColor: WINE,
    borderRadius: 12,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  logoBox: {
    width: 52,
    height: 52,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContent: { flex: 1 },
  headerEyebrow: {
    fontSize: 7,
    color: "#e7c2cb",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 3,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 900,
    color: "#ffffff",
  },
  headerSubtitle: {
    fontSize: 8,
    color: "#f4dce3",
    marginTop: 4,
  },
  headerMeta: {
    alignItems: "flex-end",
    gap: 3,
  },
  metaLabel: {
    fontSize: 6,
    color: "#e7c2cb",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  metaValue: {
    fontSize: 9,
    fontWeight: 900,
    color: "#ffffff",
  },
  profile: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    padding: 14,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  photo: {
    width: 58,
    height: 58,
    borderRadius: 10,
    objectFit: "cover",
  },
  photoPlaceholder: {
    width: 58,
    height: 58,
    borderRadius: 10,
    backgroundColor: "#f3e8ec",
    alignItems: "center",
    justifyContent: "center",
  },
  photoLetter: {
    color: WINE,
    fontSize: 24,
    fontWeight: 900,
  },
  profileMain: { flex: 1 },
  badgeRow: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 5,
  },
  badge: {
    borderWidth: 1,
    borderColor: WINE,
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: WINE,
    fontSize: 6,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  badgeGreen: {
    borderColor: EMERALD,
  },
  badgeGreenText: {
    color: EMERALD,
  },
  badgeAmber: {
    borderColor: AMBER,
  },
  badgeAmberText: {
    color: AMBER,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 900,
    color: WINE,
  },
  employeeRole: {
    fontSize: 9,
    fontWeight: 700,
    color: GRAY_LIGHT,
    marginTop: 2,
  },
  grid: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  column: {
    flex: 1,
    gap: 10,
  },
  section: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 10,
    padding: 10,
  },
  wideSection: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 8,
    fontWeight: 900,
    color: WINE,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: WINE,
    paddingBottom: 4,
    marginBottom: 8,
  },
  fieldGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  field: {
    width: "48%",
    backgroundColor: GRAY_BG,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 6,
    padding: 7,
  },
  fieldFull: {
    width: "100%",
  },
  fieldLabel: {
    fontSize: 5.5,
    fontWeight: 900,
    color: GRAY_LIGHT,
    textTransform: "uppercase",
    letterSpacing: 0.7,
    marginBottom: 3,
  },
  fieldValue: {
    fontSize: 8,
    fontWeight: 700,
    color: GRAY,
  },
  chipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  chip: {
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: GRAY_BG,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  chipText: {
    fontSize: 7,
    fontWeight: 700,
    color: GRAY,
  },
  table: {
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: WINE,
  },
  tableRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: BORDER,
  },
  th: {
    color: "#ffffff",
    fontSize: 6,
    fontWeight: 900,
    textTransform: "uppercase",
    padding: 6,
  },
  td: {
    color: GRAY,
    fontSize: 7,
    padding: 6,
  },
  footer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingTop: 8,
    fontSize: 6,
    color: GRAY_LIGHT,
    textAlign: "center",
  },
});

const BRL = (value: number | null | undefined) => {
  if (value === null || value === undefined) return "Nao informado";
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
};

const valueText = (value: string | number | null | undefined) => {
  if (value === null || value === undefined || value === "") return "Nao informado";
  return String(value);
};

const boolText = (value: boolean) => (value ? "Sim" : "Nao");

const localDate = (value: Date | string | null | undefined) => {
  if (!value) return "Nao informado";
  const date = new Date(value);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

const fileNamePart = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

function getPhotoSource(url: string | null) {
  if (!url || !url.startsWith("/")) return null;
  const filePath = path.join(process.cwd(), "public", url);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath);
}

function lessonLabel(assignment: {
  fullDay: boolean;
  lessonStart: number | null;
  lessonEnd: number | null;
}) {
  if (assignment.fullDay) return "Dia todo";
  if (assignment.lessonStart && assignment.lessonEnd && assignment.lessonStart !== assignment.lessonEnd) {
    return `Aulas ${assignment.lessonStart}-${assignment.lessonEnd}`;
  }
  if (assignment.lessonStart) return `Aula ${assignment.lessonStart}`;
  return "Nao informado";
}

function Field({ label, value, full = false }: { label: string; value: string; full?: boolean }) {
  return (
    <View style={full ? [styles.field, styles.fieldFull] : styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Text style={styles.fieldValue}>{value}</Text>
    </View>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function EmployeeRegistrationPDF({ employee, photo }: { employee: EmployeeRegistrationRecord; photo: Buffer | null }) {
  const account = [employee.accountType, employee.agency, employee.accountNumber].filter(Boolean).join(" / ");
  const issuedAt = new Date().toLocaleDateString("pt-BR");

  return (
    <Document title={`Cadastro - ${employee.name}`} author="Colegio Frei Galvao">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logoBox}>
            <Image src={logoBuffer} style={{ width: 44, height: 44 }} />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.headerEyebrow}>Colegio Frei Galvao</Text>
            <Text style={styles.headerTitle}>Relatorio Cadastral</Text>
            <Text style={styles.headerSubtitle}>Funcionario ativo no cadastro atual</Text>
          </View>
          <View style={styles.headerMeta}>
            <Text style={styles.metaLabel}>Emitido em</Text>
            <Text style={styles.metaValue}>{issuedAt}</Text>
          </View>
        </View>

        <View style={styles.profile} wrap={false}>
          {photo ? (
            <Image src={photo} style={styles.photo} />
          ) : (
            <View style={styles.photoPlaceholder}>
              <Text style={styles.photoLetter}>{employee.name.slice(0, 1).toUpperCase()}</Text>
            </View>
          )}
          <View style={styles.profileMain}>
            <View style={styles.badgeRow}>
              <View style={styles.badge}><Text style={styles.badgeText}>{employee.type}</Text></View>
              <View style={[styles.badge, styles.badgeGreen]}><Text style={[styles.badgeText, styles.badgeGreenText]}>{employee.active ? "Ativo" : "Inativo"}</Text></View>
              {employee.isAulista && <View style={[styles.badge, styles.badgeAmber]}><Text style={[styles.badgeText, styles.badgeAmberText]}>Aulista</Text></View>}
            </View>
            <Text style={styles.employeeName}>{employee.name}</Text>
            <Text style={styles.employeeRole}>{employee.role}</Text>
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.column}>
            <Section title="Identificacao">
              <View style={styles.fieldGrid}>
                <Field label="Nome" value={employee.name} />
                <Field label="CPF" value={employee.cpf} />
                <Field label="Tipo" value={employee.type} />
                <Field label="Cargo" value={employee.role} />
                <Field label="Data de inicio" value={localDate(employee.startDate)} />
                <Field label="Status" value={employee.active ? "Ativo" : "Inativo"} />
              </View>
            </Section>

            <Section title="Beneficios e pagamento">
              <View style={styles.fieldGrid}>
                <Field label="VT diario" value={BRL(employee.transportDaily)} />
                <Field label="Auxilio gasolina" value={BRL(employee.gasAssistance)} />
                <Field label="Almoca no colegio" value={boolText(employee.eatsAtSchool)} />
                <Field label="Metodo" value={employee.paymentMethod} />
                <Field label="Chave Pix" value={valueText(employee.pixKey)} full />
                <Field label="Banco" value={valueText(employee.bankName)} />
                <Field label="Conta" value={account || "Nao informado"} />
              </View>
            </Section>
          </View>

          <View style={styles.column}>
            <Section title="Remuneracao">
              <View style={styles.fieldGrid}>
                <Field label="Salario base" value={BRL(employee.baseSalary)} />
                <Field label="Aulista" value={boolText(employee.isAulista)} />
                <Field label="Valor hora" value={BRL(employee.hourlyRate)} />
                <Field label="Cesta basica" value={BRL(employee.cestaBasica)} />
                <Field label="Adiantamento" value={BRL(employee.salaryAdvance)} />
                <Field label="Desc. recorrentes" value={BRL(employee.recurringDeductions)} />
                <Field label="Desc. temporarios" value={BRL(employee.temporaryDeductions)} />
                <Field label="Validade desc. temp." value={valueText(employee.temporaryDeductionsExpiration)} />
                <Field label="Descricao desc. temp." value={valueText(employee.temporaryDeductionsDesc)} full />
              </View>
            </Section>

            <Section title="Materias possiveis">
              {employee.employeeSubjects.length ? (
                <View style={styles.chipWrap}>
                  {employee.employeeSubjects.map((item) => (
                    <View key={item.id} style={styles.chip}>
                      <Text style={styles.chipText}>{item.subject.name}</Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={styles.fieldValue}>Nao informado</Text>
              )}
            </Section>
          </View>
        </View>

        <View style={styles.wideSection}>
          <Text style={styles.sectionTitle}>Grade atual</Text>
          {employee.teachingAssignments.length ? (
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={[styles.th, { width: "16%" }]}>Dia</Text>
                <Text style={[styles.th, { width: "18%" }]}>Turma</Text>
                <Text style={[styles.th, { width: "30%" }]}>Materia</Text>
                <Text style={[styles.th, { width: "20%" }]}>Aula</Text>
                <Text style={[styles.th, { width: "16%" }]}>Carga</Text>
              </View>
              {employee.teachingAssignments.map((assignment) => (
                <View key={assignment.id} style={styles.tableRow}>
                  <Text style={[styles.td, { width: "16%" }]}>{WEEKDAY_LABELS[assignment.weekday as Weekday] || `Dia ${assignment.weekday}`}</Text>
                  <Text style={[styles.td, { width: "18%" }]}>{valueText(assignment.classGroup)}</Text>
                  <Text style={[styles.td, { width: "30%" }]}>{assignment.subject.name}</Text>
                  <Text style={[styles.td, { width: "20%" }]}>{lessonLabel(assignment)}</Text>
                  <Text style={[styles.td, { width: "16%" }]}>{assignment.hours.toLocaleString("pt-BR")}h</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.fieldValue}>Nao informado</Text>
          )}
        </View>

        <View style={styles.wideSection}>
          <Text style={styles.sectionTitle}>Historico de reajustes</Text>
          {employee.salaryAdjustments.length ? (
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text style={[styles.th, { width: "18%" }]}>Data</Text>
                <Text style={[styles.th, { width: "20%" }]}>Anterior</Text>
                <Text style={[styles.th, { width: "20%" }]}>Novo</Text>
                <Text style={[styles.th, { width: "20%" }]}>Diferenca</Text>
                <Text style={[styles.th, { width: "22%" }]}>Obs.</Text>
              </View>
              {employee.salaryAdjustments.map((adjustment) => (
                <View key={adjustment.id} style={styles.tableRow}>
                  <Text style={[styles.td, { width: "18%" }]}>{localDate(adjustment.effectiveDate)}</Text>
                  <Text style={[styles.td, { width: "20%" }]}>{BRL(adjustment.previousSalary)}</Text>
                  <Text style={[styles.td, { width: "20%" }]}>{BRL(adjustment.newSalary)}</Text>
                  <Text style={[styles.td, { width: "20%" }]}>{BRL(adjustment.adjustmentValue)}</Text>
                  <Text style={[styles.td, { width: "22%" }]}>{valueText(adjustment.notes)}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.fieldValue}>Nao informado</Text>
          )}
        </View>

        <Text style={styles.footer}>Documento gerado a partir do cadastro atual do sistema de folha.</Text>
      </Page>
    </Document>
  );
}

function renderEmployeeRegistrationPdf(employee: EmployeeRegistrationRecord, photo: Buffer | null) {
  return renderToBuffer(<EmployeeRegistrationPDF employee={employee} photo={photo} />);
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID nao fornecido" }, { status: 400 });

    const employee = await prisma.employee.findUnique({
      where: { id },
      include: {
        employeeSubjects: {
          include: { subject: true },
          orderBy: { subject: { name: "asc" } },
        },
        teachingAssignments: {
          include: { subject: true },
          orderBy: [{ weekday: "asc" }, { startTime: "asc" }],
        },
        salaryAdjustments: {
          orderBy: { effectiveDate: "desc" },
        },
      },
    });

    if (!employee) return NextResponse.json({ error: "Colaborador nao encontrado" }, { status: 404 });

    const photo = getPhotoSource(employee.profilePhotoUrl);
    const pdfBuffer = await renderEmployeeRegistrationPdf(employee, photo);

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="cadastro-${fileNamePart(employee.name)}.pdf"`,
      },
    });
  } catch (err: unknown) {
    console.error("PDF cadastro colaborador error:", err);
    const message = err instanceof Error ? err.message : "Erro na geracao do PDF";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
