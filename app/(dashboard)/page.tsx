import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpendingChart } from "@/components/charts/spending-chart";
import { metrics, projects } from "@/lib/mock-data";
import { ArrowUpRight, DollarSign, Briefcase, FileWarning } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Nástěnka</h2>
        <p className="text-muted-foreground mt-1">Vítejte zpět, zde je přehled vaší klientské zóny.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Celkem profakturováno</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(metrics.totalSpent)}
            </div>
            <p className="text-xs text-emerald-500 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +12.5% od minulého měsíce
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Aktivní zakázky</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.activeProjects}</div>
            <p className="text-xs text-muted-foreground mt-1">
              1 projekt čeká na schválení
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Nezaplacené faktury</CardTitle>
            <FileWarning className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.unpaidInvoices}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Vyžaduje vaši pozornost
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Měsíční čerpání rozpočtu</CardTitle>
          </CardHeader>
          <CardContent>
            <SpendingChart />
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Nedávná aktivita</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.slice(0, 3).map((project, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Status aktualizován na {project.status}
                    </p>
                  </div>
                  <Badge variant={project.status === "Hotovo" ? "success" : project.status === "Realizace" ? "default" : "outline"}>
                    {project.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
