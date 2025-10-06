import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ThumbsUp, Sprout, MessageCircle, Star, Users } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            ชุมชน Srang Okas
          </h1>
          <p className="text-muted-foreground">แบ่งปันเรื่องราว แรงบันดาลใจ และช่วยเหลือกัน</p>
        </div>

        {/* Request Mentor Card */}
        <Card className="bg-gradient-warm text-white p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">ต้องการคำปรึกษา?</h3>
              <p className="text-white/90 text-sm">ขอคำแนะนำจากผู้ใหญ่ใจดีในชุมชน</p>
            </div>
            <Button className="bg-white text-warm hover:bg-white/90">
              ขอ Mentor
            </Button>
          </div>
        </Card>

        {/* Youth of the Week */}
        <Card className="p-6 mb-8 shadow-lg border-2 border-accent">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-6 h-6 text-accent animate-pulse-glow" />
            <h3 className="text-xl font-bold text-foreground">ผู้ใช้แห่งสัปดาห์</h3>
            <Badge className="bg-accent text-white">Youth of the Week</Badge>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              N
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg text-foreground mb-1">น้องนภัส</h4>
              <p className="text-muted-foreground text-sm mb-3">
                ทำงานครบ 15 งานในเดือนนี้ และช่วยเพื่อนในชุมชนอย่างสม่ำเสมอ 🌟
              </p>
              <div className="flex gap-3">
                <span className="text-sm text-primary font-semibold">2,450 XP</span>
                <span className="text-sm text-accent font-semibold">Gold Rank</span>
                <span className="text-sm text-warm font-semibold">8 Badges</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Community Feed */}
        <div className="space-y-6">
          <CommunityPost
            author="น้องเอิร์ท"
            authorLevel="Silver"
            time="2 ชั่วโมงที่แล้ว"
            content="วันนี้ทำงานช่วยร้านอาหารครั้งแรก ตื่นเต้นมากแต่เจ้าของร้านใจดีมากค่ะ สอนอะไรเยอะเลย! 💪"
            reactions={{ heart: 24, thumbsUp: 18, sprout: 12 }}
            comments={5}
          />

          <CommunityPost
            author="น้องมิ้นท์"
            authorLevel="Gold"
            time="5 ชั่วโมงที่แล้ว"
            content="ขอบคุณพี่ Mentor ที่ช่วยแนะนำเรื่องการทำงานเป็นทีม ตอนนี้เข้าใจมากขึ้นแล้วค่ะ! 🙏✨"
            reactions={{ heart: 42, thumbsUp: 35, sprout: 28 }}
            comments={12}
            badge="Mentor Helped"
          />

          <CommunityPost
            author="น้องพีท"
            authorLevel="Bronze"
            time="1 วันที่แล้ว"
            content="เพิ่งเริ่มใช้ Srang Okas ครับ รู้สึกดีใจมากที่มี AI Aka คอยแนะนำ ไม่รู้สึกโดดเดี่ยวเลย 😊"
            reactions={{ heart: 56, thumbsUp: 45, sprout: 38 }}
            comments={15}
            badge="New Member"
          />

          <CommunityPost
            author="น้องแพรว"
            authorLevel="Silver"
            time="2 วันที่แล้ว"
            content="ทำงานช่วงปิดเทอมนี้ ประหยัดเงินได้ 3,000 บาทแล้ว! ตั้งเป้าซื้อคอมพิวเตอร์เพื่อเรียนออนไลน์ครับ 💻"
            reactions={{ heart: 67, thumbsUp: 52, sprout: 41 }}
            comments={8}
          />
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="px-8">
            โหลดเรื่องราวเพิ่มเติม
          </Button>
        </div>
      </div>
    </div>
  );
};

interface CommunityPostProps {
  author: string;
  authorLevel: string;
  time: string;
  content: string;
  reactions: {
    heart: number;
    thumbsUp: number;
    sprout: number;
  };
  comments: number;
  badge?: string;
}

const CommunityPost = ({
  author,
  authorLevel,
  time,
  content,
  reactions,
  comments,
  badge,
}: CommunityPostProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-md">
          {author[2]}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground">{author}</h4>
            <Badge variant="secondary" className="text-xs">
              {authorLevel}
            </Badge>
            {badge && (
              <Badge className="bg-accent text-white text-xs">{badge}</Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{time}</p>
        </div>
      </div>

      <p className="text-foreground mb-4 leading-relaxed">{content}</p>

      <div className="flex items-center gap-6 text-sm">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-warm transition-colors">
          <Heart className="w-5 h-5" />
          <span>{reactions.heart}</span>
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <ThumbsUp className="w-5 h-5" />
          <span>{reactions.thumbsUp}</span>
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <Sprout className="w-5 h-5" />
          <span>{reactions.sprout}</span>
        </button>
        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ml-auto">
          <MessageCircle className="w-5 h-5" />
          <span>{comments} ความคิดเห็น</span>
        </button>
      </div>
    </Card>
  );
};

export default Community;
