"use client";

import { monthlySpending } from "@/lib/mock-data";

export function SpendingChart() {
  const maxAmount = Math.max(...monthlySpending.map((d) => d.amount));

  return (
    <div className="h-64 w-full flex items-end gap-2 pt-6">
      {monthlySpending.map((data, index) => {
        const heightPercentage = (data.amount / maxAmount) * 100;
        return (
          <div key={index} className="flex flex-col items-center flex-1 gap-2 group h-full justify-end">
            <div className="relative w-full flex justify-center h-full items-end">
              <div 
                className="w-full max-w-[48px] bg-primary/20 group-hover:bg-primary/40 rounded-t-md transition-all duration-300 relative"
                style={{ height: `${heightPercentage}%` }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 bg-primary rounded-t-md transition-all duration-300"
                  style={{ height: '4px' }}
                />
                
                {/* Mobile permanent label */}
                <div className="lg:hidden absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] leading-none text-foreground font-medium text-center">
                  <div>{new Intl.NumberFormat('cs-CZ').format(data.amount)}</div>
                  <div className="text-[9px] text-muted-foreground mt-0.5">Kč</div>
                </div>

                {/* Desktop Tooltip */}
                <div className="hidden lg:block opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs py-1 px-2 rounded shadow-md whitespace-nowrap transition-opacity pointer-events-none z-10 border border-border">
                  {new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(data.amount)}
                </div>
              </div>
            </div>
            <span className="text-xs text-muted-foreground font-medium">{data.month}</span>
          </div>
        );
      })}
    </div>
  );
}
