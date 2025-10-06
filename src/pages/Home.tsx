import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, TrendingUp, Users, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white px-6 py-20 md:py-32">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-float">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">AI เพื่อสร้างโอกาสให้เยาวชน</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            สร้างโอกาส
            <br />
            <span className="bg-gradient-to-r from-accent to-warm bg-clip-text text-transparent">
              Srang Okas
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
            AI ที่เข้าใจคุณและพาคุณไปไกลกว่าที่คิด
          </p>
          <p className="text-lg mb-12 text-white/70 max-w-2xl mx-auto">
            Connecting youth and jobs through AI — where learning meets real work
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/chat">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 hover:scale-105 transition-all shadow-lg text-lg px-8 py-6 rounded-full">
                <Sparkles className="w-5 h-5 mr-2" />
                เริ่มต้นใช้งาน / Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
              เรียนรู้เพิ่มเติม / Learn More
            </Button>
          </div>

          {/* Three-step infographic */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass rounded-3xl p-8 hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 glow-primary">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Chat with AI Aka</h3>
              <p className="text-white/70">คุยกับ Aka เพื่อเข้าใจตัวเองและทักษะ</p>
            </div>

            <div className="glass rounded-3xl p-8 hover:scale-105 transition-all" style={{ transitionDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 glow-warm">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Get Matched with Jobs</h3>
              <p className="text-white/70">หางานใกล้บ้านที่เหมาะกับคุณ</p>
            </div>

            <div className="glass rounded-3xl p-8 hover:scale-105 transition-all" style={{ transitionDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-warm rounded-2xl flex items-center justify-center mx-auto mb-4 glow-warm">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Grow Your Rank</h3>
              <p className="text-white/70">สะสม XP และเติบโตไปด้วยกัน</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              ทำไมต้อง Srang Okas?
            </h2>
            <p className="text-xl text-muted-foreground">
              Every job is a step toward your dream
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="AI Mentor เพื่อนคู่ใจ"
              description="Aka คอยช่วยวิเคราะห์ทักษะ ให้คำแนะนำ และอยู่เคียงข้างคุณเสมอ"
              gradient="from-primary to-primary-glow"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="เติบโตแบบเกม"
              description="สะสม XP, ปลดล็อก Badge, เลื่อนระดับ จาก Bronze ถึง Mentor"
              gradient="from-accent to-warm"
            />
            <FeatureCard
              icon={<MapPin className="w-8 h-8" />}
              title="งานใกล้บ้าน"
              description="แผนที่อัจฉริยะแสดงงานที่ปลอดภัยและเหมาะกับคุณ"
              gradient="from-primary to-accent"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="ชุมชนที่ปลอดภัย"
              description="แบ่งปันเรื่องราว หาเพื่อน และขอคำปรึกษาจากผู้ใหญ่ใจดี"
              gradient="from-warm to-accent"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="เรียนรู้สกิลใหม่"
              description="คอร์สวิดีโอสั้น สอนทักษะงาน ทักษะชีวิต และความปลอดภัย"
              gradient="from-accent to-primary"
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="ดูแลอารมณ์"
              description="Aka ไม่ใช่แค่ AI แต่เป็นเพื่อนที่เข้าใจและให้กำลังใจคุณ"
              gradient="from-warm to-primary"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            พร้อมเริ่มต้นภารกิจแรกของคุณแล้วหรือยัง?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            เริ่มต้นภารกิจแรกของคุณกับ Aka วันนี้เลย!
          </p>
          <Link to="/chat">
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90 hover:scale-105 transition-all shadow-lg text-lg px-12 py-7 rounded-full">
              <Sparkles className="w-6 h-6 mr-2" />
              เริ่มต้นเลย / Start Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard = ({ icon, title, description, gradient }: FeatureCardProps) => {
  return (
    <div className="bg-gradient-card rounded-3xl p-8 hover:scale-105 transition-all shadow-lg hover:shadow-xl">
      <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default Home;
