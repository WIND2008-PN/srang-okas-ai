import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Briefcase, Sparkles, Star, TrendingUp, Calendar, Coins } from "lucide-react";

const Growth = () => {
  const userXP = 850;
  const nextLevelXP = 1000;
  const progressPercent = (userXP / nextLevelXP) * 100;

  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            การเติบโตของคุณ
          </h1>
          <p className="text-muted-foreground">My Growth Dashboard</p>
        </div>

        {/* Rank Card */}
        <Card className="bg-gradient-hero text-white p-8 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                <Trophy className="w-16 h-16 text-secondary" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-warm px-4 py-1 rounded-full shadow-lg">
                <span className="text-sm font-bold">Silver</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">ระดับ Silver</h2>
              <p className="text-white/80 mb-4">
                เหลืออีก {nextLevelXP - userXP} XP ถึงระดับ Gold!
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{userXP} XP</span>
                  <span>{nextLevelXP} XP</span>
                </div>
                <Progress value={progressPercent} className="h-3 bg-white/20" />
              </div>
              <div className="flex gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-accent" />
                  <span className="font-semibold">450 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="font-semibold">5 Badges</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Progress Circles */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <ProgressCircle
            icon={<Sparkles className="w-8 h-8" />}
            label="Skills Learned"
            value={65}
            color="from-primary to-accent"
          />
          <ProgressCircle
            icon={<Briefcase className="w-8 h-8" />}
            label="Jobs Completed"
            value={40}
            color="from-accent to-warm"
          />
          <ProgressCircle
            icon={<TrendingUp className="w-8 h-8" />}
            label="Growth Score"
            value={75}
            color="from-warm to-primary"
          />
        </div>

        {/* Weekly Goals */}
        <Card className="p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">เป้าหมายสัปดาห์นี้</h3>
          </div>

          <div className="space-y-4">
            <GoalItem
              title="ทำงานครบ 3 งาน"
              progress={66}
              current={2}
              target={3}
              xpReward={150}
            />
            <GoalItem
              title="เรียนสกิลใหม่ 1 บท"
              progress={100}
              current={1}
              target={1}
              xpReward={100}
              completed
            />
            <GoalItem
              title="แชร์เรื่องราวในชุมชน"
              progress={0}
              current={0}
              target={1}
              xpReward={50}
            />
          </div>
        </Card>

        {/* Skills Progress */}
        <Card className="p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold text-foreground">ทักษะของคุณ</h3>
          </div>

          <div className="space-y-5">
            <SkillProgress label="Communication" value={70} level={2} />
            <SkillProgress label="Teamwork" value={55} level={1} />
            <SkillProgress label="Time Management" value={80} level={3} />
            <SkillProgress label="Problem Solving" value={60} level={2} />
            <SkillProgress label="Creativity" value={85} level={3} />
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-warm" />
            <h3 className="text-xl font-bold text-foreground">ความสำเร็จ / Achievements</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AchievementBadge
              icon="🏆"
              title="First Step"
              description="งานแรกสำเร็จ"
              unlocked
            />
            <AchievementBadge
              icon="⭐"
              title="5 Star"
              description="ทำงาน 5 งาน"
              unlocked
            />
            <AchievementBadge
              icon="📚"
              title="Learner"
              description="เรียนสกิล 3 บท"
              unlocked
            />
            <AchievementBadge
              icon="🎯"
              title="Goal Master"
              description="เป้าหมาย 10 ครั้ง"
            />
            <AchievementBadge
              icon="🤝"
              title="Team Player"
              description="งานกลุ่ม 3 ครั้ง"
            />
            <AchievementBadge
              icon="💎"
              title="Diamond"
              description="ถึงระดับ Diamond"
            />
            <AchievementBadge
              icon="🌟"
              title="Rising Star"
              description="XP 2000"
            />
            <AchievementBadge
              icon="👑"
              title="Mentor"
              description="ระดับสูงสุด"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

interface ProgressCircleProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}

const ProgressCircle = ({ icon, label, value, color }: ProgressCircleProps) => {
  return (
    <Card className="p-6 text-center hover:scale-105 transition-all shadow-lg">
      <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
        {icon}
      </div>
      <div className="text-4xl font-bold text-foreground mb-2">{value}%</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </Card>
  );
};

interface GoalItemProps {
  title: string;
  progress: number;
  current: number;
  target: number;
  xpReward: number;
  completed?: boolean;
}

const GoalItem = ({ title, progress, current, target, xpReward, completed }: GoalItemProps) => {
  return (
    <div className={`p-4 rounded-xl ${completed ? 'bg-primary/10' : 'bg-muted/50'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className={`font-medium ${completed ? 'text-primary' : 'text-foreground'}`}>
          {title}
        </span>
        <span className="text-sm text-accent font-semibold">+{xpReward} XP</span>
      </div>
      <div className="flex items-center gap-3">
        <Progress value={progress} className="flex-1 h-2" />
        <span className="text-sm text-muted-foreground">{current}/{target}</span>
      </div>
    </div>
  );
};

interface SkillProgressProps {
  label: string;
  value: number;
  level: number;
}

const SkillProgress = ({ label, value, level }: SkillProgressProps) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-sm text-primary">Level {level}</span>
      </div>
      <Progress value={value} className="h-3" />
    </div>
  );
};

interface AchievementBadgeProps {
  icon: string;
  title: string;
  description: string;
  unlocked?: boolean;
}

const AchievementBadge = ({ icon, title, description, unlocked }: AchievementBadgeProps) => {
  return (
    <div
      className={`p-4 rounded-xl text-center transition-all ${
        unlocked
          ? "bg-gradient-to-br from-accent/20 to-primary/20 hover:scale-105 shadow-md"
          : "bg-muted/30 opacity-50 grayscale"
      }`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-sm font-semibold text-foreground mb-1">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
};

export default Growth;
