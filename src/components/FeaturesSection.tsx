import { Building2, Users, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "ניהול נכסים חכם",
    description: "מעקב אחר כל הנכסים שלכם במקום אחד",
    image: "/lovable-uploads/22c22b5b-36e6-40f0-ab51-b62490333291.png",
    overlayTitle: "רשימת נכסים",
    overlaySubtitle: "12 נכסים פעילים",
    overlayColor: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500"
  },
  {
    icon: Users,
    title: "ניהול דיירים",
    description: "קשר עם דיירים ומעקב תשלומים",
    image: "/lovable-uploads/3159d973-1b2a-41a4-a7f9-b93a33207d10.png",
    overlayTitle: "דיירים פעילים",
    overlaySubtitle: "8 דיירים משלמים",
    overlayColor: "from-green-500 to-green-600",
    iconBg: "bg-green-500"
  },
  {
    icon: BarChart3,
    title: "דוחות ואנליטיקה",
    description: "תובנות מתקדמות על ביצועים כספיים",
    image: "/lovable-uploads/8d6182d4-2a97-4773-a459-8527ea69efbf.png",
    overlayTitle: "דוח חודשי",
    overlaySubtitle: "₪45,000 הכנסות",
    overlayColor: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-500"
  },
  {
    icon: Shield,
    title: "אבטחה ובטיחות",
    description: "הצפנה ברמה בנקאית",
    image: "/lovable-uploads/920a6d53-4a16-4ab7-b9d6-d2310531dda5.png",
    overlayTitle: "מערכת מאובטחת",
    overlaySubtitle: "הצפנה 256-bit",
    overlayColor: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-500"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heebo text-4xl md:text-5xl font-bold text-hero-text mb-4" dir="rtl">
            יכולות המערכת
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Feature Title and Description */}
              <div className="space-y-4" dir="rtl">
                <div className={`w-16 h-16 rounded-full ${feature.iconBg} flex items-center justify-center mx-auto shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heebo text-2xl md:text-3xl font-bold text-hero-text">
                  {feature.title}
                </h3>
                <p className="text-hero-text/70 text-lg max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>

              {/* Phone Mockup with Overlay */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                    
                    {/* Phone Content */}
                    <img
                      src={feature.image}
                      alt={`${feature.title} interface`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Card */}
                    <div className="absolute bottom-8 left-4 right-4 z-10">
                      <div className={`bg-gradient-to-r ${feature.overlayColor} rounded-2xl p-4 shadow-xl backdrop-blur-sm`}>
                        <div className="text-white" dir="rtl">
                          <h4 className="font-bold text-lg mb-1">{feature.overlayTitle}</h4>
                          <p className="text-white/90 text-sm">{feature.overlaySubtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};