"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { tickets as initialTickets } from "@/lib/mock-data";

export default function PodporaPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [ticketList, setTicketList] = useState(initialTickets);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message) return;
    
    const newTicket = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      subject,
      status: "Čeká na odpověď" as const,
      date: new Date().toLocaleDateString('cs-CZ', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\s/g, ' ')
    };
    
    setTicketList([newTicket, ...ticketList]);
    setSubject("");
    setMessage("");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Podpora</h2>
        <p className="text-muted-foreground mt-1">Zadejte nový požadavek nebo zkontrolujte stav vašich dotazů.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Nový požadavek</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Potřebujete pomoct? Napište nám zprávu a my se vám co nejdříve ozveme.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Předmět</label>
                <Input 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Např. Dotaz k instalaci" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Zpráva</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Popište váš problém..."
                  required
                  className="flex min-h-[120px] w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">Odeslat požadavek</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Moje požadavky</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Historie vaší komunikace s podporou.</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ticketList.map((ticket) => (
                <div key={ticket.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg bg-muted/20 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground">ID #{ticket.id} - {ticket.subject}</h4>
                    <p className="text-xs text-muted-foreground mt-1">Vytvořeno: {ticket.date}</p>
                  </div>
                  <Badge variant={ticket.status === "Vyřešeno" ? "success" : "warning"}>
                    {ticket.status}
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
