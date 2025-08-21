import React from "react";

// Bank logo data with actual brand colors and professional styling
export const bankLogos = {
  "SBI": {
    name: "State Bank of India",
    initials: "SBI",
    primaryColor: "#1C4E80", // SBI Blue
    secondaryColor: "#FF6B35", // SBI Orange
    textColor: "#FFFFFF"
  },
  "HDFC": {
    name: "HDFC Bank",
    initials: "HDFC",
    primaryColor: "#004C8F", // HDFC Blue
    secondaryColor: "#ED1C24", // HDFC Red
    textColor: "#FFFFFF"
  },
  "ICICI": {
    name: "ICICI Bank", 
    initials: "ICICI",
    primaryColor: "#F47920", // ICICI Orange
    secondaryColor: "#005BAA", // ICICI Blue
    textColor: "#FFFFFF"
  },
  "Union Bank": {
    name: "Union Bank of India",
    initials: "UBI",
    primaryColor: "#8B4513", // Union Brown
    secondaryColor: "#228B22", // Union Green
    textColor: "#FFFFFF"
  },
  "BOB": {
    name: "Bank of Baroda",
    initials: "BOB", 
    primaryColor: "#FF6600", // BOB Orange
    secondaryColor: "#0066CC", // BOB Blue
    textColor: "#FFFFFF"
  },
  "Canara": {
    name: "Canara Bank",
    initials: "CNB",
    primaryColor: "#DC143C", // Canara Red
    secondaryColor: "#FFD700", // Canara Gold
    textColor: "#FFFFFF"
  }
};

interface BankLogoProps {
  bankKey: keyof typeof bankLogos;
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Enhanced bank-specific logo components
function SBILogo({ size, className }: { size: string; className: string }) {
  const bankData = bankLogos["SBI"];
  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center border-2 border-gray-200 relative overflow-hidden ${className}`}
      style={{ backgroundColor: bankData.primaryColor }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-white relative z-10" style={{ fontSize: 'inherit' }}>SBI</div>
        <div 
          className="w-full h-0.5 mt-0.5"
          style={{ backgroundColor: bankData.secondaryColor }}
        />
      </div>
      <div 
        className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: bankData.secondaryColor }}
      />
    </div>
  );
}

function HDFCLogo({ size, className }: { size: string; className: string }) {
  const bankData = bankLogos["HDFC"];
  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center border-2 border-gray-200 relative overflow-hidden ${className}`}
      style={{ backgroundColor: bankData.primaryColor }}
    >
      <div className="font-bold text-white relative z-10" style={{ fontSize: 'inherit' }}>HDFC</div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(45deg, ${bankData.secondaryColor} 0%, transparent 70%)`
        }}
      />
      <div 
        className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: bankData.secondaryColor }}
      />
    </div>
  );
}

function ICICILogo({ size, className }: { size: string; className: string }) {
  const bankData = bankLogos["ICICI"];
  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center border-2 border-gray-200 relative overflow-hidden ${className}`}
      style={{ backgroundColor: bankData.primaryColor }}
    >
      <div className="font-bold text-white relative z-10" style={{ fontSize: 'inherit' }}>ICICI</div>
      <div 
        className="absolute top-0 right-0 w-full h-full opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${bankData.secondaryColor} 0%, transparent 60%)`
        }}
      />
    </div>
  );
}

function UnionBankLogo({ size, className }: { size: string; className: string }) {
  const bankData = bankLogos["Union Bank"];
  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center border-2 border-gray-200 relative overflow-hidden ${className}`}
      style={{ backgroundColor: bankData.primaryColor }}
    >
      <div className="font-bold text-white relative z-10" style={{ fontSize: 'inherit' }}>UBI</div>
      <div 
        className="absolute bottom-0 left-0 w-full h-2 opacity-30"
        style={{ backgroundColor: bankData.secondaryColor }}
      />
    </div>
  );
}

function BOBLogo({ size, className }: { size: string; className: string }) {
  const bankData = bankLogos["BOB"];
  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center border-2 border-gray-200 relative overflow-hidden ${className}`}
      style={{ backgroundColor: bankData.primaryColor }}
    >
      <div className="font-bold text-white relative z-10" style={{ fontSize: 'inherit' }}>BOB</div>
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${bankData.secondaryColor} 70%, transparent 100%)`
        }}
      />
    </div>
  );
}

function CanaraLogo({ size, className }: { size: string; className: string }) {
  const bankData = bankLogos["Canara"];
  return (
    <div 
      className={`${size} rounded-lg flex items-center justify-center border-2 border-gray-200 relative overflow-hidden ${className}`}
      style={{ backgroundColor: bankData.primaryColor }}
    >
      <div className="font-bold text-white relative z-10" style={{ fontSize: 'inherit' }}>CNB</div>
      <div 
        className="absolute top-1 left-1 w-2 h-2 rounded-full opacity-40"
        style={{ backgroundColor: bankData.secondaryColor }}
      />
      <div 
        className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full opacity-40"
        style={{ backgroundColor: bankData.secondaryColor }}
      />
    </div>
  );
}

export function BankLogo({ bankKey, size = "md", className = "" }: BankLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm", 
    lg: "w-16 h-16 text-base"
  };

  const sizeClass = sizeClasses[size];
  
  switch (bankKey) {
    case "SBI":
      return <SBILogo size={sizeClass} className={className} />;
    case "HDFC":
      return <HDFCLogo size={sizeClass} className={className} />;
    case "ICICI":
      return <ICICILogo size={sizeClass} className={className} />;
    case "Union Bank":
      return <UnionBankLogo size={sizeClass} className={className} />;
    case "BOB":
      return <BOBLogo size={sizeClass} className={className} />;
    case "Canara":
      return <CanaraLogo size={sizeClass} className={className} />;
    default:
      return (
        <div className={`${sizeClass} bg-gray-400 rounded-lg flex items-center justify-center ${className}`}>
          <span className="text-white font-bold">
            {bankKey.slice(0, 2)}
          </span>
        </div>
      );
  }
}