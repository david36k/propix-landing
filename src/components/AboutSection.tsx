export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-poppins text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight" dir="rtl">
            אודות
            <br />
            <span className="text-foreground/70">האפליקציה שלנו</span>
          </h2>
          <p className="font-inter text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed" dir="rtl">
            PropertyApp היא אפליקציה מתקדמת לניהול נדל״ן שנועדה למשקיעים ומנהלי נכסים. 
            האפליקציה מציעה כלים מתקדמים לניתוח השקעות, ניהול תיקי נכסים ומעקב אחר ביצועים.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" dir="rtl">
            <div className="text-right">
              <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                המשימה שלנו
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                להפוך את עולם ההשקעות בנדל״ן לנגיש יותר ולעזור למשקיעים לקבל החלטות מושכלות באמצעות טכנולוגיה מתקדמת.
              </p>
            </div>
            
            <div className="text-right">
              <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                החזון שלנו
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                להיות האפליקציה המובילה לניהול נדל״ן בישראל ולסייע למשקיעים להשיג את מטרותיהם הפיננסיות.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-subtle rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
                <div className="text-foreground/70 text-sm" dir="rtl">משתמשים פעילים</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">50M+</div>
                <div className="text-foreground/70 text-sm" dir="rtl">₪ בהשקעות מנוהלות</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
                <div className="text-foreground/70 text-sm" dir="rtl">נכסים מנוהלים</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">4.8★</div>
                <div className="text-foreground/70 text-sm" dir="rtl">דירוג באפסטור</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};