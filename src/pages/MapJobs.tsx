import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Filter, Navigation, Clock, DollarSign, Users, Star } from "lucide-react";

interface Job {
  id: string;
  title: string;
  employer: string;
  location: string;
  distance: string;
  duration: string;
  pay: string;
  type: "regular" | "skill";
  verified: boolean;
  description: string;
}

const MapJobs = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const sampleJobs: Job[] = [
    {
      id: "1",
      title: "ช่วยจัดของในร้าน",
      employer: "ร้านขายของชำป้าน้อย",
      location: "ใกล้บ้านคุณ 500m",
      distance: "500m",
      duration: "2 ชม.",
      pay: "80 บาท/ชม.",
      type: "regular",
      verified: true,
      description: "ช่วยจัดของในร้าน ยกของเบาๆ เรียงของบนชั้น",
    },
    {
      id: "2",
      title: "งานทำความสะอาด",
      employer: "โรงแรมเล็กริมน้ำ",
      location: "1.2 km",
      distance: "1.2 km",
      duration: "4 ชม.",
      pay: "100 บาท/ชม.",
      type: "skill",
      verified: true,
      description: "ทำความสะอาดห้องพัก ดูแลความเรียบร้อย",
    },
    {
      id: "3",
      title: "ช่วยดูแลสวน",
      employer: "บ้านคุณยายสมใจ",
      location: "800m",
      distance: "800m",
      duration: "3 ชม.",
      pay: "70 บาท/ชม.",
      type: "regular",
      verified: true,
      description: "รดน้ำต้นไม้ ตัดหญ้า ดูแลสวนเล็กๆ",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Map Area */}
        <div className="lg:w-2/3 h-64 lg:h-full bg-gradient-to-br from-primary/20 to-accent/20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8 glass rounded-3xl">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                แผนที่งานใกล้คุณ
              </h3>
              <p className="text-muted-foreground mb-4">
                Map visualization would go here
              </p>
              <div className="flex gap-2 justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">งานทั่วไป</span>
                <div className="w-3 h-3 bg-accent rounded-full ml-4"></div>
                <span className="text-sm text-muted-foreground">งานสกิล</span>
              </div>
            </div>
          </div>

          {/* Floating pins */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary rounded-full animate-pulse-glow shadow-lg flex items-center justify-center text-white">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent rounded-full animate-pulse-glow shadow-lg flex items-center justify-center text-white" style={{ animationDelay: '0.5s' }}>
            <MapPin className="w-5 h-5" />
          </div>
          <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-primary rounded-full animate-pulse-glow shadow-lg flex items-center justify-center text-white" style={{ animationDelay: '1s' }}>
            <MapPin className="w-5 h-5" />
          </div>
        </div>

        {/* Job List Area */}
        <div className="lg:w-1/3 bg-background p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-4">งานใกล้คุณ</h1>
            
            {/* Search & Filter */}
            <div className="flex gap-2 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="ค้นหางาน..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-2 mb-4">
              <Badge variant="secondary" className="cursor-pointer">
                ทั้งหมด
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                ใกล้ที่สุด
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                รายได้สูง
              </Badge>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {sampleJobs.map((job) => (
              <Card
                key={job.id}
                className={`p-4 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg ${
                  selectedJob?.id === job.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.employer}</p>
                  </div>
                  {job.verified && (
                    <Badge className="bg-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    {job.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-warm" />
                    <span className="font-semibold text-foreground">{job.pay}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{job.description}</p>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary text-white hover:bg-primary/90">
                    สมัครงาน
                  </Button>
                  <Button variant="outline" size="icon">
                    <Navigation className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Mode Toggle */}
          <div className="mt-6 p-4 bg-gradient-card rounded-xl">
            <p className="text-sm text-muted-foreground mb-3">คุณคือ:</p>
            <div className="flex gap-2">
              <Button variant="default" className="flex-1">
                <Users className="w-4 h-4 mr-2" />
                หางาน
              </Button>
              <Button variant="outline" className="flex-1">
                โพสต์งาน
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapJobs;
