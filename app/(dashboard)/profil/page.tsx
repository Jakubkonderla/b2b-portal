"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";

export default function ProfilPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    // Hide the alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Můj Profil</h2>
        <p className="text-muted-foreground mt-1">Spravujte své osobní údaje a nastavení účtu.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Osobní údaje</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Aktualizujte své kontaktní informace.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Jméno</label>
                <Input defaultValue="Demo Uživatel" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">E-mail</label>
                <Input type="email" defaultValue="demo@firma.cz" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Název firmy</label>
                <Input defaultValue="Demo Firma s.r.o." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Telefon</label>
                <Input type="tel" defaultValue="+420 123 456 789" />
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="w-full sm:w-auto">Uložit změny</Button>
              </div>

              {showAlert && (
                <div className="mt-4 flex items-center gap-2 rounded-md bg-destructive/15 px-4 py-3 text-sm text-destructive border border-destructive/20 animate-in fade-in slide-in-from-top-1">
                  <AlertCircle className="h-4 w-4" />
                  <p>V demo verzi systému nelze profilové údaje měnit.</p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
