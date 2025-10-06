import { Link, useLocation } from "react-router-dom";
import { Home, MessageCircle, TrendingUp, MapPin, Users, Sparkles } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home", labelTh: "หน้าหลัก" },
    { path: "/chat", icon: MessageCircle, label: "Aka Zone", labelTh: "Aka" },
    { path: "/growth", icon: TrendingUp, label: "Growth", labelTh: "เติบโต" },
    { path: "/map", icon: MapPin, label: "Jobs", labelTh: "งาน" },
    { path: "/community", icon: Users, label: "Community", labelTh: "ชุมชน" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border shadow-lg z-50 md:top-0 md:bottom-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between md:justify-start md:gap-8 h-16">
          {/* Logo - Desktop only */}
          <Link to="/" className="hidden md:flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">Srang Okas</span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center justify-around md:justify-start w-full md:w-auto md:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 rounded-xl transition-all ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className={`w-5 h-5 md:w-5 md:h-5 ${isActive ? "animate-pulse-glow" : ""}`} />
                  <span className="text-xs md:text-sm font-medium">
                    <span className="md:hidden">{item.labelTh}</span>
                    <span className="hidden md:inline">{item.label}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
