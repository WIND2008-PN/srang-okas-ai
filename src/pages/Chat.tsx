import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Sparkles, Heart, Smile } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "aka";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "aka",
      content: "สวัสดีค่ะ! ฉันชื่อ Aka (อาคา) 🌟 ฉันอยู่ที่นี่เพื่อเป็นเพื่อนและช่วยคุณค้นหาโอกาสใหม่ๆ! บอกฉันหน่อยว่า วันนี้คุณรู้สึกยังไงบ้าง?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate Aka's response
    setTimeout(() => {
      const responses = [
        "ฟังดูดีมากเลย! บอกฉันเพิ่มเติมหน่อยได้ไหม? 😊",
        "ฉันเข้าใจความรู้สึกนั้น แล้วคุณชอบทำอะไรในเวลาว่างล่ะ?",
        "เยี่ยมเลย! คุณเก่งมากนะ ฉันภูมิใจในตัวคุณ! 💪",
        "น่าสนใจมากเลย! มาลองค้นหาทักษะที่เหมาะกับคุณกันดีกว่า",
      ];

      const akaMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "aka",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, akaMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-warm rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-white">Aka Zone</h1>
            <p className="text-sm text-white/70">AI เพื่อนคู่ใจของคุณ</p>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-white/70">Online</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.type === "user" ? "flex-row-reverse" : ""}`}
            >
              {message.type === "aka" && (
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-warm rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              )}
              
              <Card className={`max-w-[70%] p-4 ${
                message.type === "user" 
                  ? "bg-primary text-white ml-auto" 
                  : "bg-white/95 backdrop-blur-sm text-foreground"
              }`}>
                <p className="leading-relaxed">{message.content}</p>
                <span className={`text-xs mt-2 block ${
                  message.type === "user" ? "text-white/70" : "text-muted-foreground"
                }`}>
                  {message.timestamp.toLocaleTimeString("th-TH", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </Card>

              {message.type === "user" && (
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Smile className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}

          {/* Suggested Skills Display */}
          {messages.length > 4 && (
            <Card className="glass p-6 border-2 border-primary/30">
              <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
                <Heart className="w-5 h-5 text-warm" />
                ทักษะที่ Aka เห็นในตัวคุณ
              </h3>
              <div className="space-y-3">
                <SkillBar label="Communication" value={70} />
                <SkillBar label="Creativity" value={85} />
                <SkillBar label="Problem Solving" value={60} />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                💬 นายทำได้ดีมากเลย อย่าลืมพักบ้างนะ!
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white/10 backdrop-blur-md border-t border-white/20 px-6 py-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="พิมพ์ข้อความ... / Type a message..."
            className="flex-1 bg-white/90 border-0 text-foreground placeholder:text-muted-foreground"
          />
          <Button
            onClick={handleSend}
            className="bg-primary hover:bg-primary/90 text-white px-6 rounded-full"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-center text-xs text-white/50 mt-2">
          ทุกคนเริ่มจากศูนย์ทั้งนั้น แต่อย่าหยุดนะ :)
        </p>
      </div>
    </div>
  );
};

interface SkillBarProps {
  label: string;
  value: number;
}

const SkillBar = ({ label, value }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm text-primary font-semibold">{value}%</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-progress"
          style={{ '--progress-width': `${value}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default Chat;
