export interface Project {
  id: string;
  name: string;
  status: "V přípravě" | "Realizace" | "Hotovo";
  progress: number;
}

export interface Invoice {
  id: string;
  issueDate: string;
  amount: number;
  status: "Zaplaceno" | "Po splatnosti";
}

export interface Ticket {
  id: string;
  subject: string;
  status: "Vyřešeno" | "Čeká na odpověď";
  date: string;
}

export const metrics = {
  totalSpent: 1250000,
  activeProjects: 3,
  unpaidInvoices: 2,
};

export const projects: Project[] = [
  { id: "PRJ-001", name: "Montáž solárních panelů - Fáze 2", status: "Realizace", progress: 65 },
  { id: "PRJ-002", name: "Renovace kancelářských prostor", status: "V přípravě", progress: 10 },
  { id: "PRJ-003", name: "Instalace tepelného čerpadla", status: "Hotovo", progress: 100 },
];

export const invoices: Invoice[] = [
  { id: "INV-2023-041", issueDate: "12. 05. 2026", amount: 45000, status: "Zaplaceno" },
  { id: "INV-2023-042", issueDate: "28. 06. 2026", amount: 120500, status: "Po splatnosti" },
  { id: "INV-2023-045", issueDate: "03. 07. 2026", amount: 35000, status: "Zaplaceno" },
];

export const tickets: Ticket[] = [
  { id: "1240", subject: "Dotaz k fakturaci", status: "Vyřešeno", date: "10. 07. 2026" },
  { id: "1241", subject: "Změna termínu montáže", status: "Čeká na odpověď", date: "12. 07. 2026" },
];

export const monthlySpending = [
  { month: "Led", amount: 45000 },
  { month: "Úno", amount: 52000 },
  { month: "Bře", amount: 38000 },
  { month: "Dub", amount: 65000 },
  { month: "Kvě", amount: 89000 },
  { month: "Črv", amount: 110000 },
  { month: "Čvc", amount: 105000 },
];
