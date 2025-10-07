import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Phone, 
  Mail, 
  Download, 
  Share2, 
  Edit, 
  QrCode,
  MapPin,
  Clock,
  Award,
  Briefcase,
  Lock,
  Eye,
  EyeOff,
  Star
} from "lucide-react";
import { VerificationModal } from "@/components/VerificationModal";

export default function Status() {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [privacySettings, setPrivacySettings] = useState({
    phone: true,
    email: true,
    availability: true,
    location: true,
    workHistory: true,
    skills: true,
    safetyInfo: false
  });

  // Mock data - will be replaced with real data from database
  const profile = {
    name: "สมชาย ใจดี",
    displayName: "Somchai J.",
    avatar: "",
    bio: "เยาวชนผู้กระตือรือร้นที่พร้อมเรียนรู้และพัฒนาทักษะใหม่ๆ | Eager youth ready to learn and grow",
    thaiIdVerified: false,
    phoneVerified: false,
    emailVerified: false,
    currentXP: 850,
    currentRank: "Silver",
    totalJobs: 12,
    totalHours: 89.5,
    avgRating: 4.8
  };

  const skills = {
    hard: [
      { name: "Cooking", level: 75 },
      { name: "Basic Repair", level: 60 },
      { name: "Customer Service", level: 85 }
    ],
    soft: [
      { name: "Communication", level: 80 },
      { name: "Teamwork", level: 90 },
      { name: "Problem Solving", level: 70 }
    ]
  };

  const workHistory = [
    {
      id: 1,
      jobTitle: "ผู้ช่วยร้านอาหาร / Food Service Assistant",
      employer: "ร้านอาหารบ้านสวน",
      location: "ลาดพร้าว, กรุงเทพฯ",
      hours: 24,
      pay: 2400,
      startDate: "2025-09-01",
      endDate: "2025-09-15",
      rating: 5.0,
      verified: true,
      description: "ช่วยเสร์ฟอาหาร จัดโต๊ะ และดูแลลูกค้า"
    },
    {
      id: 2,
      jobTitle: "ผู้ช่วยงานอีเวนต์ / Event Helper",
      employer: "บริษัท อีเวนต์โปร",
      location: "สยามสแควร์, กรุงเทพฯ",
      hours: 16,
      pay: 1920,
      startDate: "2025-08-20",
      endDate: "2025-08-21",
      rating: 4.5,
      verified: true,
      description: "ช่วยจัดเตรียมและดูแลงานอีเวนต์"
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "Basic Food Safety",
      issuer: "กรมอนามัย",
      issueDate: "2025-07-15"
    },
    {
      id: 2,
      name: "Customer Service Basics",
      issuer: "Aka Learning Platform",
      issueDate: "2025-08-01"
    }
  ];

  const availability = [
    { day: "Monday - Friday", time: "16:00 - 20:00" },
    { day: "Saturday - Sunday", time: "09:00 - 18:00" }
  ];

  const togglePrivacy = (field: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 pb-24">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="glass rounded-3xl p-8 mb-6 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-primary/20">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback className="bg-gradient-primary text-2xl text-white">
                {profile.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
              <p className="text-muted-foreground mb-4">{profile.bio}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge 
                  variant={profile.thaiIdVerified ? "default" : "secondary"}
                  className="gap-1 cursor-pointer"
                  onClick={() => !profile.thaiIdVerified && setShowVerificationModal(true)}
                >
                  <Shield className="h-3 w-3" />
                  ThaiID {profile.thaiIdVerified ? "✓" : "Not Verified"}
                </Badge>
                <Badge variant={profile.phoneVerified ? "default" : "secondary"} className="gap-1">
                  <Phone className="h-3 w-3" />
                  Phone {profile.phoneVerified ? "✓" : "Not Verified"}
                </Badge>
                <Badge variant={profile.emailVerified ? "default" : "secondary"} className="gap-1">
                  <Mail className="h-3 w-3" />
                  Email {profile.emailVerified ? "✓" : "Not Verified"}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="default" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Resume
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="outline" className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="gap-2">
                  <QrCode className="h-4 w-4" />
                  QR Check-in
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Rank & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="glass p-6 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{profile.currentRank}</div>
            <div className="text-sm text-muted-foreground">{profile.currentXP} XP</div>
          </Card>
          <Card className="glass p-6 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{profile.totalJobs}</div>
            <div className="text-sm text-muted-foreground">Jobs Completed</div>
          </Card>
          <Card className="glass p-6 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{profile.avgRating}</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </Card>
        </div>

        {/* Skills Matrix */}
        <Card className="glass p-6 mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Skill Matrix / ทักษะ
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePrivacy('skills')}
              className="gap-2"
            >
              {privacySettings.skills ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Hard Skills</h3>
              <div className="space-y-3">
                {skills.hard.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Soft Skills</h3>
              <div className="space-y-3">
                {skills.soft.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Work History */}
        <Card className="glass p-6 mb-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Work History / ประวัติการทำงาน
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePrivacy('workHistory')}
              className="gap-2"
            >
              {privacySettings.workHistory ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </Button>
          </div>

          <div className="space-y-4">
            {workHistory.map((job) => (
              <div key={job.id} className="border rounded-xl p-4 hover:bg-accent/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{job.jobTitle}</h3>
                    <p className="text-sm text-muted-foreground">{job.employer}</p>
                  </div>
                  {job.verified && (
                    <Badge variant="default" className="gap-1">
                      <Shield className="h-3 w-3" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <p className="text-sm mb-3">{job.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {job.hours}h
                  </div>
                  <div className="text-muted-foreground">
                    ฿{job.pay.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {job.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Learning & Certificates */}
        <Card className="glass p-6 mb-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Learning & Certificates / การเรียนรู้และใบรับรอง
          </h2>

          <div className="space-y-3">
            {certificates.map((cert) => (
              <div key={cert.id} className="border rounded-xl p-4 flex items-center justify-between hover:bg-accent/50 transition-colors">
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(cert.issueDate).toLocaleDateString('th-TH')}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Availability & Area */}
        <Card className="glass p-6 mb-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Availability & Area / ความพร้อมและพื้นที่
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => togglePrivacy('availability')}
              className="gap-2"
            >
              {privacySettings.availability ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </Button>
          </div>

          <div className="space-y-3">
            {availability.map((slot, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border rounded-xl">
                <span className="font-medium">{slot.day}</span>
                <span className="text-muted-foreground">{slot.time}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 p-3 border rounded-xl">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Work Radius: <strong>5 km</strong> from ลาดพร้าว</span>
            </div>
          </div>
        </Card>

        {/* Safety & Emergency Info */}
        <Card className="glass p-6 animate-fade-in border-accent" style={{ animationDelay: "0.8s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Lock className="h-5 w-5 text-accent" />
              Safety & Emergency / ความปลอดภัย
            </h2>
            <Badge variant="secondary" className="gap-1">
              <Lock className="h-3 w-3" />
              Visible After Job Acceptance
            </Badge>
          </div>

          <div className="text-sm text-muted-foreground bg-accent/10 p-4 rounded-xl">
            <p>ข้อมูลนี้จะแสดงเฉพาะกับนายจ้างหลังจากยอมรับงานเท่านั้น</p>
            <p className="mt-1">This information is only visible to employers after job acceptance.</p>
          </div>
        </Card>

        {/* PDPA Notice */}
        <Card className="glass p-6 mt-6 border-muted">
          <h3 className="font-semibold mb-2 text-sm">🔒 ความเป็นส่วนตัวและข้อมูลส่วนบุคคล / Privacy & PDPA</h3>
          <p className="text-xs text-muted-foreground mb-3">
            ข้อมูลของคุณได้รับการปกป้องตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
            <br />
            Your data is protected under the Personal Data Protection Act B.E. 2562 (PDPA)
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Export My Data</Button>
            <Button variant="outline" size="sm" className="text-destructive">Delete My Account</Button>
          </div>
        </Card>
      </div>

      <VerificationModal 
        open={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
    </div>
  );
}