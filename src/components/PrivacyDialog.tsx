import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyDialogProps {
  children: React.ReactNode;
}

export const PrivacyDialog: React.FC<PrivacyDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">מדיניות פרטיות</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full pr-4">
          <div className="space-y-4 text-sm leading-relaxed">
            <section>
              <h3 className="font-semibold text-base mb-2">1. מבוא</h3>
              <p>
                מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם 
                בעת השימוש באפליקציית PropertyApp.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. מידע שאנו אוספים</h3>
              <p>
                אנו עשויים לאסוף מידע טכני כגון סוג הדפדפן, כתובת IP ונתוני שימוש באפליקציה. 
                התמונות שאתם מעלים מעובדות מקומית ואינן נשמרות בשרתים שלנו.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. שימוש במידע</h3>
              <p>
                המידע שאנו אוספים משמש לשיפור האפליקציה, מתן שירות טוב יותר 
                ולהבטחת אבטחת המערכת.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. שיתוף מידע</h3>
              <p>
                אנו לא משתפים מידע אישי עם צדדים שלישיים, למעט במקרים בהם נדרש 
                על פי חוק או לצורכי אבטחה.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. אבטחת מידע</h3>
              <p>
                אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלכם. 
                עם זאת, שום מערכת אינה בטוחה ב-100%.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. עיבוד תמונות</h3>
              <p>
                התמונות שאתם מעלים מעובדות באופן מקומי במכשיר שלכם. 
                אנו לא שומרים או מעבירים את התמונות לשרתים חיצוניים.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. זכויותיכם</h3>
              <p>
                לכם יש זכות לגשת למידע האישי שלכם, לתקן אותו או לבקש למחוק אותו. 
                ניתן לפנות אלינו בכל עת בנוגע לזכויות אלה.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">8. עדכוני מדיניות</h3>
              <p>
                מדיניות הפרטיות עשויה להתעדכן מעת לעת. 
                נודיע על שינויים משמעותיים באפליקציה.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">9. יצירת קשר</h3>
              <p>
                לשאלות בנוגע למדיניות הפרטיות, ניתן ליצור קשר דרך האפליקציה.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};