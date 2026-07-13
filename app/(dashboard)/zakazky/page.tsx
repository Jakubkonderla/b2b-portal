import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/mock-data";

export default function ZakazkyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Zakázky</h2>
        <p className="text-muted-foreground mt-1">Přehled všech vašich aktivních i dokončených zakázek.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Seznam zakázek</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b border-border">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Název</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Průběh</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle font-medium">{project.id}</td>
                    <td className="p-4 align-middle">{project.name}</td>
                    <td className="p-4 align-middle">
                      <Badge variant={project.status === "Hotovo" ? "success" : project.status === "Realizace" ? "default" : "outline"}>
                        {project.status}
                      </Badge>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <div className="w-full max-w-[120px] bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${project.progress}%` }} 
                          />
                        </div>
                        <span className="text-xs text-muted-foreground w-8">{project.progress}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
