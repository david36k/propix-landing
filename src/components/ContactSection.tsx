import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heebo text-4xl md:text-5xl font-bold text-hero-text mb-8 leading-tight" dir="rtl">
            צור קשר
          </h2>
          <p className="font-inter text-xl md:text-2xl text-hero-text/70 mb-8 max-w-3xl mx-auto leading-relaxed" dir="rtl">
            השאירו פרטים ונחזור אליכם בהקדם
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-hero-text font-heebo text-lg mb-2" dir="rtl">
                שם מלא
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="הכניסו את שמכם המלא"
                className="bg-white/10 border-white/20 text-hero-text placeholder:text-hero-text/50"
                required
                dir="rtl"
              />
            </div>
            
            <div>
              <label className="block text-hero-text font-heebo text-lg mb-2" dir="rtl">
                טלפון
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="הכניסו מספר טלפון"
                className="bg-white/10 border-white/20 text-hero-text placeholder:text-hero-text/50"
                required
                dir="rtl"
              />
            </div>
            
            <div>
              <label className="block text-hero-text font-heebo text-lg mb-2" dir="rtl">
                הודעה
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="כתבו כאן את הודעתכם..."
                className="bg-white/10 border-white/20 text-hero-text placeholder:text-hero-text/50 min-h-32"
                required
                dir="rtl"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white font-heebo text-lg py-6"
            >
              <Send className="w-5 h-5 ml-2" />
              שלח הודעה
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-hero-text/70 mb-4" dir="rtl">
              או צרו קשר ישירות:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => window.open("mailto:support@propix.co.il")}
                className="flex-1 sm:flex-none"
              >
                support@propix.co.il
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open("https://wa.me/972501234567")}
                className="flex-1 sm:flex-none"
              >
                וואטסאפ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};