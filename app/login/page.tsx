"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleDemoLogin = () => {
    login();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-border/50 shadow-lg">
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-2xl">B</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Klientská zóna</CardTitle>
          <p className="text-sm text-muted-foreground">
            Přihlaste se pro správu zakázek a faktur
          </p>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="space-y-2 text-left">
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input type="email" placeholder="vas@email.cz" defaultValue="demo@firma.cz" disabled className="bg-muted/50" />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-sm font-medium text-foreground">Heslo</label>
            <Input type="password" placeholder="••••••••" defaultValue="password" disabled className="bg-muted/50" />
          </div>
          <Button 
            className="w-full mt-6" 
            size="lg"
            onClick={handleDemoLogin}
          >
            Přihlásit se jako Demo uživatel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
