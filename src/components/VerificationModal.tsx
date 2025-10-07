import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Camera, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VerificationModalProps {
  open: boolean;
  onClose: () => void;
}

export function VerificationModal({ open, onClose }: VerificationModalProps) {
  const [step, setStep] = useState(1);
  const [idImage, setIdImage] = useState<File | null>(null);
  const [selfieImage, setSelfieImage] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'id' | 'selfie'
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'id') {
        setIdImage(file);
      } else {
        setSelfieImage(file);
      }
    }
  };

  const handleSubmit = async () => {
    if (!consent) {
      toast({
        title: "กรุณายินยอมข้อตกลง",
        description: "Please accept the consent agreement",
        variant: "destructive",
      });
      return;
    }

    if (!idImage || !selfieImage) {
      toast({
        title: "กรุณาอัพโหลดรูปภาพ",
        description: "Please upload all required images",
        variant: "destructive",
      });
      return;
    }

    // In production, this would upload to backend and verify
    toast({
      title: "กำลังตรวจสอบข้อมูล...",
      description: "Verifying your identity. This may take a few minutes.",
    });

    // Simulate verification process
    setTimeout(() => {
      toast({
        title: "✅ ยืนยันตัวตนสำเร็จ!",
        description: "Your ThaiID has been successfully verified.",
      });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Shield className="h-6 w-6 text-primary" />
            ThaiID Verification / ยืนยันตัวตนด้วยบัตรประชาชน
          </DialogTitle>
          <DialogDescription>
            ยืนยันตัวตนของคุณเพื่อเพิ่มความน่าเชื่อถือและความปลอดภัย
            <br />
            Verify your identity to increase trust and safety
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className={`h-2 w-16 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`h-2 w-16 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`h-2 w-16 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div className="bg-accent/10 p-4 rounded-xl space-y-2">
                <h3 className="font-semibold">ข้อมูลที่เราจะเก็บ / Information We Collect:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• เลขที่บัตรประชาชน (เก็บเป็น hash + 4 หลักสุดท้าย) / ID number (stored as hash + last 4 digits)</li>
                  <li>• ชื่อ-นามสกุล / Full name</li>
                  <li>• วันเกิด / Date of birth</li>
                  <li>• รูปถ่ายใบหน้าเพื่อเปรียบเทียบ / Face photo for comparison</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-xl space-y-2">
                <h3 className="font-semibold">ความปลอดภัย / Security:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ ข้อมูลเข้ารหัส / Encrypted data</li>
                  <li>✓ ไม่แสดงเลขบัตรเต็ม / Never show full ID number</li>
                  <li>✓ ตรวจสอบโดย AI / AI-verified</li>
                  <li>✓ ปฏิบัติตาม PDPA / PDPA compliant</li>
                </ul>
              </div>

              <Button onClick={() => setStep(2)} className="w-full" size="lg">
                ดำเนินการต่อ / Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="id-upload" className="text-base font-semibold mb-2 block">
                  อัพโหลดรูปบัตรประชาชน / Upload ThaiID Card
                </Label>
                <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    id="id-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'id')}
                    className="hidden"
                  />
                  <label htmlFor="id-upload" className="cursor-pointer">
                    {idImage ? (
                      <div className="space-y-2">
                        <Upload className="h-12 w-12 mx-auto text-primary" />
                        <p className="text-sm font-medium">{idImage.name}</p>
                        <p className="text-xs text-muted-foreground">Click to change</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
                        <p className="font-medium">คลิกเพื่อถ่ายรูปหรืออัพโหลด</p>
                        <p className="text-sm text-muted-foreground">Click to take photo or upload</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <Label htmlFor="selfie-upload" className="text-base font-semibold mb-2 block">
                  ถ่ายรูปใบหน้าของคุณ / Take a Selfie
                </Label>
                <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <input
                    id="selfie-upload"
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={(e) => handleFileChange(e, 'selfie')}
                    className="hidden"
                  />
                  <label htmlFor="selfie-upload" className="cursor-pointer">
                    {selfieImage ? (
                      <div className="space-y-2">
                        <Upload className="h-12 w-12 mx-auto text-primary" />
                        <p className="text-sm font-medium">{selfieImage.name}</p>
                        <p className="text-xs text-muted-foreground">Click to retake</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
                        <p className="font-medium">คลิกเพื่อถ่ายเซลฟี่</p>
                        <p className="text-sm text-muted-foreground">Click to take selfie</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                  ย้อนกลับ / Back
                </Button>
                <Button onClick={() => setStep(3)} className="flex-1" disabled={!idImage || !selfieImage}>
                  ต่อไป / Next
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-accent/10 p-6 rounded-xl space-y-4">
                <h3 className="font-semibold text-lg">ข้อตกลงการใช้ข้อมูล / Data Usage Consent</h3>
                
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>TH:</strong> ข้าพเจ้ายินยอมให้ Srang Okas เก็บและใช้ข้อมูลส่วนบุคคลของข้าพเจ้า
                    เพื่อวัตถุประสงค์ในการยืนยันตัวตน สร้างความน่าเชื่อถือ และเพิ่มความปลอดภัยในการใช้งานแพลตฟอร์ม
                    ข้าพเจ้าเข้าใจว่าข้อมูลจะถูกเก็บในรูปแบบที่เข้ารหัสและไม่มีการแสดงเลขบัตรประชาชนเต็ม
                  </p>
                  <p>
                    <strong>EN:</strong> I consent to Srang Okas collecting and using my personal data
                    for the purpose of identity verification, building trust, and enhancing platform security.
                    I understand that data will be stored in encrypted form and the full ID number will never be displayed.
                  </p>
                </div>

                <div className="flex items-start space-x-2 pt-4 border-t">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    ข้าพเจ้ายอมรับข้อตกลงและเงื่อนไขการใช้ข้อมูล / I accept the data usage terms and conditions
                  </label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                  ย้อนกลับ / Back
                </Button>
                <Button onClick={handleSubmit} className="flex-1" disabled={!consent}>
                  ยืนยัน / Verify
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}