import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-heebo text-4xl md:text-5xl font-bold text-hero-text mb-8 leading-tight" dir="rtl">
            צור קשר
            <br />
            <span className="text-hero-text/70">נשמח לעזור</span>
          </h2>
          <p className="font-inter text-xl md:text-2xl text-hero-text/70 mb-8 max-w-3xl mx-auto leading-relaxed" dir="rtl">
            יש לך שאלות או זקוק לעזרה? צור איתנו קשר ונחזור אליך בהקדם
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heebo text-xl font-semibold text-hero-text mb-3" dir="rtl">
              שלח מייל
            </h3>
            <p className="text-hero-text/70 mb-4" dir="rtl">
              support@propix.co.il
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("mailto:support@propix.co.il")}
            >
              <Mail className="w-4 h-4 mr-2" />
              שלח מייל
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heebo text-xl font-semibold text-hero-text mb-3" dir="rtl">
              התקשר אלינו
            </h3>
            <p className="text-hero-text/70 mb-4" dir="rtl">
              03-1234567
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("tel:03-1234567")}
            >
              <Phone className="w-4 h-4 mr-2" />
              התקשר עכשיו
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-heebo text-xl font-semibold text-hero-text mb-3" dir="rtl">
              צ׳אט בווטסאפ
            </h3>
            <p className="text-hero-text/70 mb-4" dir="rtl">
              תמיכה מהירה בווטסאפ
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open("https://wa.me/972501234567")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              פתח צ׳אט
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};