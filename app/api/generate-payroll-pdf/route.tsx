import { NextRequest, NextResponse } from "next/server"
import { renderToBuffer, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer"
import path from "path"
import fs from "fs"

export const dynamic = 'force-dynamic'

const logoBuffer = fs.readFileSync(path.join(process.cwd(), "public", "logo.jpg"))
const cabecalhoBuffer = fs.readFileSync(path.join(process.cwd(), "public", "cabecalho.jpg"))

const WINE = "#4a0e1a"
const WINE_LIGHT = "#7a1e30"
const ROSE = "#be123c"
const EMERALD = "#059669"
const GRAY = "#374151"
const GRAY_LIGHT = "#9ca3af"
const GRAY_BG = "#f9fafb"
const BORDER = "#e5e7eb"

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    padding: 0,
  },
  header: {
    backgroundColor: WINE,
    padding: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  headerLogoBox: {
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  headerLogoPlaceholder: {
    width: 52,
    height: 52,
    backgroundColor: "#e9d5db",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  headerLogoText: {
    fontSize: 10,
    fontWeight: 900,
    color: WINE,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 900,
    color: "#ffffff",
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 9,
    color: "#d9a0b0",
    marginTop: 3,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  headerBadge: {
    backgroundColor: WINE_LIGHT,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  headerBadgeText: {
    fontSize: 9,
    fontWeight: 700,
    color: "#fde8ef",
    letterSpacing: 0.5,
  },
  statsBar: {
    backgroundColor: "#f3f0f1",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
    gap: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 8,
  },
  statBorder: {
    borderRightWidth: 1,
    borderRightColor: BORDER,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 900,
    letterSpacing: -1,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: GRAY_LIGHT,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  body: {
    padding: 28,
    gap: 28,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
    borderBottomWidth: 2,
    borderBottomColor: WINE,
    paddingBottom: 6,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 900,
    color: WINE,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  sectionBadge: {
    marginLeft: "auto",
    backgroundColor: "#fce7f3",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  sectionBadgeText: {
    fontSize: 7,
    fontWeight: 700,
    color: ROSE,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  // DIVERGENCE CARD
  inconsistentCard: {
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: BORDER,
    borderRadius: 12,
    marginBottom: 14,
    overflow: "hidden",
  },
  inconsistentCardHeader: {
    backgroundColor: "#fff1f2",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#fecdd3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inconsistentName: {
    fontSize: 11,
    fontWeight: 900,
    color: WINE,
  },
  inconsistentTag: {
    backgroundColor: ROSE,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  inconsistentTagText: {
    fontSize: 7,
    fontWeight: 700,
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  inconsistentBody: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
  },
  compareRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },
  compareBox: {
    flex: 1,
    backgroundColor: GRAY_BG,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: BORDER,
  },
  compareBoxRight: {
    backgroundColor: "#fff1f2",
    borderColor: "#fecdd3",
  },
  compareLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: GRAY_LIGHT,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  compareLabelRight: {
    color: ROSE,
  },
  compareValue: {
    fontSize: 16,
    fontWeight: 900,
    color: GRAY,
  },
  compareValueRight: {
    color: ROSE,
    textDecoration: "underline",
  },
  compareSub: {
    marginTop: 4,
    flexDirection: "row",
    gap: 4,
  },
  compareSubItem: {
    flex: 1,
  },
  compareSubLabel: {
    fontSize: 6,
    fontWeight: 700,
    color: GRAY_LIGHT,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  compareSubValue: {
    fontSize: 9,
    fontWeight: 700,
    color: GRAY,
  },
  compareSubValueRight: {
    color: ROSE,
  },
  benefitsRow: {
    marginTop: 8,
    flexDirection: "row",
    gap: 8,
  },
  benefitItem: {
    flex: 1,
    backgroundColor: GRAY_BG,
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: "center",
  },
  benefitLabel: {
    fontSize: 6,
    fontWeight: 700,
    color: GRAY_LIGHT,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
    textAlign: "center",
  },
  benefitAppValue: {
    fontSize: 9,
    fontWeight: 700,
    color: GRAY,
    marginBottom: 2,
  },
  benefitArrow: {
    fontSize: 7,
    color: GRAY_LIGHT,
    marginBottom: 2,
  },
  benefitPdfValue: {
    fontSize: 9,
    fontWeight: 900,
    color: EMERALD,
  },
  benefitPdfValueError: {
    color: ROSE,
    textDecoration: "underline",
  },
  // APPROVED Grid
  approvedSection: {
    breakBefore: "page",
  },
  approvedGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  approvedItem: {
    width: "31.5%",
    backgroundColor: "#ecfdf5",
    borderWidth: 1,
    borderColor: "#a7f3d0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  approvedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: EMERALD,
  },
  approvedName: {
    fontSize: 7.5,
    fontWeight: 700,
    color: "#065f46",
    flex: 1,
  },
  // ALERTS
  alertItem: {
    backgroundColor: "#fffbeb",
    borderWidth: 1,
    borderColor: "#fde68a",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  alertDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#d97706",
  },
  alertName: {
    fontSize: 8,
    fontWeight: 700,
    color: "#78350f",
    flex: 1,
  },
  alertReason: {
    fontSize: 7,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: "#d97706",
    fontWeight: 700,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: GRAY_BG,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 7,
    color: GRAY_LIGHT,
  },
  footerBold: {
    fontWeight: 700,
    color: GRAY,
  },
})

const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

function DivergenceCard({ item }: { item: any }) {
  const benefits = [
    { l: "Vale Transporte", a: item.payroll?.transportTotal ?? 0, d: item.pdfItem.valeTransporte },
    { l: "Cesta Básica", a: item.emp?.cestaBasica ?? 0, d: item.pdfItem.cestaBasica },
    { l: "Adiantamento", a: item.payroll?.salaryAdvance ?? 0, d: item.pdfItem.advanceDeduction },
  ]

  return (
    <View style={styles.inconsistentCard} wrap={false}>
      <View style={styles.inconsistentCardHeader}>
        <Text style={styles.inconsistentName}>{item.pdfItem.name}</Text>
        <View style={styles.inconsistentTag}>
          <Text style={styles.inconsistentTagText}>
            {item.diffGross > 1 ? "Base INSS Divergente" : "Rubricas Divergentes"}
          </Text>
        </View>
      </View>
      <View style={styles.inconsistentBody}>
        {/* Main values side by side */}
        <View style={styles.compareRow}>
          <View style={styles.compareBox}>
            <Text style={styles.compareLabel}>Sistema CFG (App)</Text>
            <Text style={styles.compareValue}>R$ {item.payroll?.grossEarnings.toFixed(2)}</Text>
            <View style={styles.compareSub}>
              <View style={styles.compareSubItem}>
                <Text style={styles.compareSubLabel}>Desc. INSS</Text>
                <Text style={styles.compareSubValue}>R$ {item.payroll?.inssDeduction.toFixed(2)}</Text>
              </View>
              <View style={styles.compareSubItem}>
                <Text style={styles.compareSubLabel}>FGTS</Text>
                <Text style={styles.compareSubValue}>R$ {item.payroll?.fgtsValue.toFixed(2)}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.compareBox, styles.compareBoxRight]}>
            <Text style={[styles.compareLabel, styles.compareLabelRight]}>Extrato Contábil (PDF)</Text>
            <Text style={[styles.compareValue, styles.compareValueRight]}>R$ {item.pdfItem.baseInss.toFixed(2)}</Text>
            <View style={styles.compareSub}>
              <View style={styles.compareSubItem}>
                <Text style={[styles.compareSubLabel, { color: ROSE }]}>Desc. INSS</Text>
                <Text style={[styles.compareSubValue, styles.compareSubValueRight]}>R$ {item.pdfItem.inssDeduction.toFixed(2)}</Text>
              </View>
              <View style={styles.compareSubItem}>
                <Text style={[styles.compareSubLabel, { color: ROSE }]}>FGTS</Text>
                <Text style={[styles.compareSubValue, styles.compareSubValueRight]}>R$ {item.pdfItem.fgtsValue.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Benefits */}
        <View style={styles.benefitsRow}>
          {benefits.map((b, i) => {
            const hasError = Math.abs(b.a - b.d) > 1
            return (
              <View key={i} style={styles.benefitItem}>
                <Text style={styles.benefitLabel}>{b.l}</Text>
                <Text style={styles.benefitAppValue}>App: R$ {b.a.toFixed(2)}</Text>
                <Text style={styles.benefitArrow}>↓</Text>
                <Text style={[styles.benefitPdfValue, hasError ? styles.benefitPdfValueError : {}]}>
                  PDF: R$ {b.d.toFixed(2)}
                </Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}

function AuditPDF({ data }: { data: any }) {
  const { report, month, year, approved, inconsistent, notFound } = data

  return (
    <Document title={`Audit Folha - ${monthNames[month]} ${year}`} author="Colégio Frei Galvão">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLogoBox}>
            <Image src={logoBuffer} style={{ width: 52, height: 52 }} />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Relatório de Conferência da Folha</Text>
            <Text style={styles.headerSubtitle}>Colégio Frei Galvão · Departamento de RH</Text>
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>
                Referência: {monthNames[month]} de {year} · Gerado em {new Date().toLocaleDateString("pt-BR")}
              </Text>
            </View>
          </View>
        </View>

        {/* Stats Bar */}
        <View style={styles.statsBar}>
          {[
            { label: "Colaboradores Auditados", value: report.length, color: GRAY },
            { label: "Valores Conferidos", value: approved.length, color: EMERALD },
            { label: "Divergências Encontradas", value: inconsistent.length, color: ROSE },
            { label: "Alertas de Cadastro", value: notFound.length, color: "#d97706" },
          ].map((s, i) => (
            <View key={i} style={[styles.statItem, i < 3 ? styles.statBorder : {}]}>
              <Text style={[styles.statValue, { color: s.color }]}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.body}>
          {/* Divergences */}
          {inconsistent.length > 0 && (
            <View>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>⚠ Divergências Prioritárias</Text>
                <View style={styles.sectionBadge}>
                  <Text style={styles.sectionBadgeText}>Ação Imediata Necessária</Text>
                </View>
              </View>
              {inconsistent.map((item: any, i: number) => (
                <DivergenceCard key={i} item={item} />
              ))}
            </View>
          )}

          {/* Approved */}
          {approved.length > 0 && (
            <View style={inconsistent.length > 3 ? styles.approvedSection : {}}>
              <View style={[styles.sectionHeader, { borderBottomColor: EMERALD }]}>
                <Text style={[styles.sectionTitle, { color: EMERALD }]}>✓ Colaboradores Conferidos com Sucesso</Text>
              </View>
              <View style={styles.approvedGrid}>
                {approved.map((item: any, i: number) => (
                  <View key={i} style={styles.approvedItem}>
                    <View style={styles.approvedDot} />
                    <Text style={styles.approvedName}>{item.pdfItem.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Alerts */}
          {notFound.length > 0 && (
            <View>
              <View style={[styles.sectionHeader, { borderBottomColor: "#d97706" }]}>
                <Text style={[styles.sectionTitle, { color: "#d97706" }]}>! Alertas de Cadastro</Text>
              </View>
              {notFound.map((item: any, i: number) => (
                <View key={i} style={styles.alertItem}>
                  <View style={styles.alertDot} />
                  <Text style={styles.alertName}>{item.pdfItem.name}</Text>
                  <Text style={styles.alertReason}>
                    {item.status === "NOT_FOUND" ? "Sem cadastro no sistema" : "Sem folha neste mês"}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            <Text style={styles.footerBold}>Colégio Frei Galvão</Text> · Relatório Confidencial
          </Text>
          <Text style={styles.footerText}>
            Folha de Pagamento · {monthNames[month]} {year} · CFG © {new Date().getFullYear()}
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const pdfBuffer = await renderToBuffer(<AuditPDF data={data} />)

    return new NextResponse(pdfBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="audit-folha-${data.month}-${data.year}.pdf"`,
      },
    })
  } catch (err: any) {
    console.error("PDF generation error:", err)
    return NextResponse.json({ error: err.message || "Erro desconhecido na geração do PDF" }, { status: 500 })
  }
}
