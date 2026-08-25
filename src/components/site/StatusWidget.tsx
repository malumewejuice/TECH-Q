import { useState } from "react";
import { Activity, ChevronUp, ChevronDown } from "lucide-react";

const systems = [
  { name: "API Gateway", status: "Operational" },
  { name: "Cloud Infra", status: "Operational" },
  { name: "Security Mesh", status: "Operational" },
  { name: "Client Portals", status: "Operational" },
];

export function StatusWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-40 w-64 overflow-hidden rounded-xl border border-white/10 bg-navy-deep/90 text-white shadow-glow backdrop-blur-xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-green-400" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          <span className="text-xs font-semibold tracking-wide">
            All Systems Operational
          </span>
        </span>
        {open ? (
          <ChevronDown className="h-4 w-4 text-white/50" />
        ) : (
          <ChevronUp className="h-4 w-4 text-white/50" />
        )}
      </button>
      {open && (
        <div className="border-t border-white/10 px-4 py-3">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/40">
            <Activity className="h-3 w-3" /> Live status
          </div>
          <ul className="space-y-1.5">
            {systems.map((s) => (
              <li key={s.name} className="flex items-center justify-between text-xs">
                <span className="text-white/80">{s.name}</span>
                <span className="flex items-center gap-1.5 text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {s.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
