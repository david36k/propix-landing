import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsDialogProps {
  children: React.ReactNode;
}

export const TermsDialog: React.FC<TermsDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">תנאי שימוש</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full pr-4">
          <div className="space-y-4 text-sm leading-relaxed">
            <section>
              <h3 className="font-semibold text-base mb-2">1. הסכמה לתנאים</h3>
              <p>
                בעת השימוש באפליקציית PropertyApp, אתם מסכימים לתנאי השימוש הבאים. 
                אם אינכם מסכימים לתנאים אלה, אנא הפסיקו להשתמש באפליקציה.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. שימוש באפליקציה</h3>
              <p>
                האפליקציה מיועדת לסיוע בהסרת רקע מתמונות נדל"ן ועיבוד תמונות. 
                השימוש באפליקציה הוא באחריותכם הבלעדית.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. זכויות יוצרים</h3>
              <p>
                כל התכנים, העיצובים והקוד של האפליקציה מוגנים בזכויות יוצרים. 
                אסור להעתיק, לשכפל או להפיץ את התכנים ללא הרשאה מפורשת.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. הגבלת אחריות</h3>
              <p>
                האפליקציה מסופקת "כמות שהיא" ללא אחריות מכל סוג. 
                איננו אחראים לנזקים שעלולים להיגרם כתוצאה מהשימוש באפליקציה.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. עדכון תנאים</h3>
              <p>
                אנו שומרים לעצמנו את הזכות לעדכן את תנאי השימוש בכל עת. 
                המשך השימוש באפליקציה מהווה הסכמה לתנאים המעודכנים.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. פרטיות</h3>
              <p>
                השימוש באפליקציה כפוף למדיניות הפרטיות שלנו. 
                אנא קראו את מדיניות הפרטיות בקפידה.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. יצירת קשר</h3>
              <p>
                לשאלות או הבהרות בנוגע לתנאי השימוש, ניתן ליצור קשר דרך האפליקציה.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};