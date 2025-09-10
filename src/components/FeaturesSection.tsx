import { Card, CardContent } from "@/components/ui/card";
import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";

const features = [
  {
    icon: "🔍",
    title: "חקרו את הגילויים של הקהילה",
    description: "גלו את ההזדמנויות הנדל״ניות הטובות ביותר שמשותפות על ידי קהילת המשקיעים שלנו.",
    image: appScreen1,
    bgColor: "bg-blue-50",
  },
  {
    icon: "📤",
    title: "שתפו את החוויות המועדפות עליכם",
    description: "שתפו את ההצלחות ואסטרטגיות ההשקעה שלכם עם הקהילה כדי לעזור לאחרים.",
    image: appScreen2,
    bgColor: "bg-green-50",
  },
  {
    icon: "⭐",
    title: "הדריכו חברים אחרים ותנו את דעתכם",
    description: "המליצו על השיטות הטובות ביותר ועזרו למשקיעים לקבל החלטות מושכלות.",
    image: appScreen3,
    bgColor: "bg-purple-50",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 px-6 bg-gradient-transition">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-heebo text-5xl md:text-6xl font-bold text-foreground mb-4" dir="rtl">
            יכולות המערכת
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-16 lg:gap-24`}
            >
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-right space-y-6" dir="rtl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 flex items-center justify-center text-3xl mx-auto lg:ml-0">
                  {feature.icon}
                </div>
                <h3 className="font-heebo text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-md mx-auto lg:ml-0">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:ml-0">
                  {feature.description}
                </p>
              </div>

              {/* Phone Mockup */}
              <div className="flex-1 flex justify-center">
                <Card className={`${feature.bgColor} border-0 rounded-[3rem] p-8 shadow-2xl max-w-sm`}>
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={feature.image}
                        alt={`${feature.title} interface`}
                        className="w-full h-auto rounded-[2rem] shadow-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};