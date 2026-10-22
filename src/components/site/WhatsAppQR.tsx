import { QRCodeSVG } from "qrcode.react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const WHATSAPP_URL =
  "https://wa.me/27789139800?text=Hi%20Tech%20Qho%2C%20I%27m%20interested%20in%20your%20services.%20Which%20one%20would%20you%20recommend%20for%20my%20needs%3F";

interface WhatsAppQRProps {
  className?: string;
  size?: number;
  layout?: "row" | "stack";
}

export function WhatsAppQR({
  className = "",
  size = 108,
  layout = "row",
}: WhatsAppQRProps) {
  const qr = (
    <div className="shrink-0 rounded-lg bg-white p-1.5">
      <QRCodeSVG
        value={WHATSAPP_URL}
        size={size}
        bgColor="#ffffff"
        fgColor="#0A192F"
        level="M"
        includeMargin={false}
      />
    </div>
  );

  const label = (
    <div className="text-sm">
      <div className="flex items-center justify-center gap-1.5 font-semibold text-navy-deep">
        <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
        WhatsApp
      </div>
      <p className="mt-1 text-xs text-slate-ink/70">
        Scan to start a chat with our South Africa team.
      </p>
    </div>
  );

  if (layout === "stack") {
    return (
      <div
        className={`flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white p-3 text-center shadow-card ${className}`}
      >
        {qr}
        {label}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white p-3 shadow-card ${className}`}
    >
      {qr}
      {label}
    </div>
  );
}
