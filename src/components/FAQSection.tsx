import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "איך מתחילים להשתמש במערכת?",
    answer: "ההרשמה פשוטה, קלה וחינמית. אחרי ההרשמה תקבלו הדרכה מלאה וליווי אישי להתחלת השימוש במערכת."
  },
  {
    question: "האם המערכת מתאימה לבעלי נכס אחד?",
    answer: "בהחלט! המערכת מתאימה הן לבעלי נכס יחיד והן לבעלי תיקי נכסים גדולים."
  },
  {
    question: "איך מתבצע הגיבוי של הנתונים?",
    answer: "כל הנתונים נשמרים בענן בצורה מאובטחת עם גיבוי אוטומטי מדי יום. הנתונים שלכם תמיד מוגנים."
  },
  {
    question: "האם יש תמיכה טכנית?",
    answer: "כן, יש לנו תמיכה טכנית מלאה בעברית בכל ימות השבוע. ניתן ליצור קשר בטלפון, מייל או וואטסאפ."
  },
  {
    question: "כמה עולה השימוש במערכת?",
    answer: "המערכת חינמית, אז למה אתם מחכים? הירשמו עכשיו."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heebo text-4xl md:text-5xl font-bold text-hero-text mb-8 leading-tight" dir="rtl">
            שאלות נפוצות
          </h2>
          <p className="font-inter text-xl md:text-2xl text-hero-text/70 mb-8 max-w-3xl mx-auto leading-relaxed" dir="rtl">
            מצאו תשובות לשאלות הנפוצות ביותר שלנו
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-right flex justify-between items-center hover:bg-white/5 transition-colors"
                dir="rtl"
              >
                <h3 className="font-heebo text-xl font-semibold text-hero-text">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-hero-text/70 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-hero-text/70 flex-shrink-0 ml-4" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-white/10">
                  <p className="text-hero-text/70 text-lg leading-relaxed mt-4" dir="rtl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Divider */}
      <div className="container max-w-4xl mx-auto mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-teal-600/50 to-transparent"></div>
      </div>
    </section>
  );
};