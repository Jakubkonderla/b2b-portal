"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { invoices } from "@/lib/mock-data";
import { Download } from "lucide-react";

export default function FakturyPage() {
  const handleDownload = (id: string) => {
    // Generate a mock text file blob to prove functionality
    const blob = new Blob([`Faktura ${id}\n\nToto je simulovaný stažený dokument pro ukázku funkcionality.`], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `faktura-${id}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Faktury</h2>
        <p className="text-muted-foreground mt-1">Přehled faktur a jejich stavu platby.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Seznam faktur</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b border-border">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Vystaveno</th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Částka</th>
                  <th className="h-12 px-4 text-center align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Akce</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle font-medium">{invoice.id}</td>
                    <td className="p-4 align-middle">{invoice.issueDate}</td>
                    <td className="p-4 align-middle text-right">
                      {new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(invoice.amount)}
                    </td>
                    <td className="p-4 align-middle text-center">
                      <Badge variant={invoice.status === "Zaplaceno" ? "success" : "destructive"}>
                        {invoice.status}
                      </Badge>
                    </td>
                    <td className="p-4 align-middle text-right">
                      <Button variant="outline" size="sm" onClick={() => handleDownload(invoice.id)}>
                        <Download className="mr-2 h-4 w-4" />
                        Stáhnout
                      </Button>
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
