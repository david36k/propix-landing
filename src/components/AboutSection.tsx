export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="font-heebo text-4xl md:text-5xl font-bold text-hero-text mb-8 leading-tight" dir="rtl">
            אודות
            <br />
            <span className="text-hero-text/70">האפליקציה שלנו</span>
          </h2>
          <p className="font-inter text-xl md:text-2xl text-hero-text/70 mb-8 max-w-3xl mx-auto leading-relaxed" dir="rtl">
            PropertyApp היא אפליקציה מתקדמת לניהול נדל״ן שנועדה למשקיעים ומנהלי נכסים. 
            האפליקציה מציעה כלים מתקדמים לניתוח השקעות, ניהול תיקי נכסים ומעקב אחר ביצועים.
          </p>
        </div>
        
        <div className="space-y-6" dir="rtl">
          <div className="text-center">
            <h3 className="font-heebo text-2xl font-semibold text-hero-text mb-3">
              המשימה שלנו
            </h3>
            <p className="text-hero-text/70 leading-relaxed max-w-2xl mx-auto">
              להפוך את עולם ההשקעות בנדל״ן לנגיש יותר ולעזור למשקיעים לקבל החלטות מושכלות באמצעות טכנולוגיה מתקדמת.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="font-heebo text-2xl font-semibold text-hero-text mb-3">
              החזון שלנו
            </h3>
            <p className="text-hero-text/70 leading-relaxed max-w-2xl mx-auto">
              להיות האפליקציה המובילה לניהול נדל״ן בישראל ולסייע למשקיעים להשיג את מטרותיהם הפיננסיות.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};