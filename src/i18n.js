import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            navbar: {
                home: "Home",
                about: "About Me",
                skills: "Skills",
                projects: "Projects",
                info: "Personal Info",
                contact: "Contact",
            },
            home: {
                hello: "Hello, I am",
                name: "Ariel Hazout",
                role: "Full Stack Developer",
                description: "A young and motivated developer with a passion for the Full Stack world. I bring high work ethic, personal responsibility, and an open mind – always striving to learn new technologies and evolve with every project.",
                btn_projects: "My Projects",
                btn_contact: "Let's Talk",
            },
            about_page: {
                title: "Resume",
                story_title: "My Story",
                p1: "I am Ariel Hazout, a second-year Software Engineering student at Kinneret College. I have always been drawn to the technological world, but what truly connected me to this profession is the ability to create.",
                p2: "For me, programming is not just writing lines of code, but a tool that allows me to take wild imagination—an abstract idea that exists only in my mind—and turn it into a living, dynamic reality on the screen. The feeling of building something from scratch and watching it work is what drives me every single morning.",
                p3: "During my studies and personal projects, I have experimented with a wide range of fields: from developing advanced Web applications and management systems, to creating interactive games and fascinating integrations between software and hardware (Arduino). I believe that the best way to learn is through hands-on experience, and I am always looking for the next challenge that will teach me something new."
            },
            skills: {
                title: "Programming Languages & Technologies",
            },
            contact: {
                title: "Contact Me",
                subtitle: "I'd love to hear from you! Feel free to reach out via:",
            },
            projects: {
                title: "My Projects",
                btn_code: "View Code",
                btn_video: "Watch Video",
                btn_play: "Play Now",
                p1_desc: "A retro-style adventure platformer inspired by Mario and Terraria. The player explores worlds, collects ancient keys, and unlocks the legendary treasure chest.",
                p2_desc: "A physical and interactive version of the classic 'Simon' memory game, based on Arduino. The project combines Embedded programming with electronic circuit building.",
                p3_desc: "A classic and colorful memory game with an animal theme. Developed with a focus on game logic, responsive design, and a fun user experience for all ages.",
                p4_desc: "A smart system for managing daily tasks. The app allows efficient tracking, filtering by status, dynamic editing, and a clean, user-friendly interface.",
                p5_desc: "A comprehensive platform for project and team management. Includes features for creating projects, tracking status, and a democratic voting system for decision making.",
            },
            info: {
                title: "Personal Information",
                personal_details: "Personal Details",
                name_label: "Name:",
                age_label: "Age:",
                address_label: "Residence:",
                address_val: "Northern Israel",

                education_title: "Education",
                edu_1: "Software Engineering Student (Year 2) at Kinneret College",
                edu_2: "12 Years of Schooling",
                edu_3: "Military Certification: Light Construction Coordinator",

                military_title: "Military Service",
                military_desc: "Full service at Hoshaya Base (Construction/Maintenance).",

                employment_title: "Employment History",
                job_current: "General Maintenance - The Economic Company (Current)",
                job_maman: "Driver & Assistant - Maman Marketing (8 Months)",
                job_garage: "Mechanic - Galil Garage (1 Year)",
                job_restaurant: "Shift Manager - El Rancho (5 Years)",
            }
        },
    },
    he: {
        translation: {
            navbar: {
                home: "דף הבית",
                about: "קצת עליי",
                skills: "שפות תכנות",
                projects: "פרויקטים",
                info: "מידע אישי",
                contact: "צור קשר",
            },
            home: {
                hello: "שלום, אני",
                name: "אריאל חזוט",
                role: "Full Stack Developer",
                description: "מתכנת צעיר וחדור מטרה, בעל ראייה רחבה ותשוקה אמיתית לעולם ה-Full Stack. אני מביא איתי מוסר עבודה גבוה, אחריות אישית וראש פתוח – תמיד שואף ללמוד טכנולוגיות חדשות, להשקיע ולהתפתח בכל פרויקט מחדש.",
                btn_projects: "לפרויקטים שלי",
                btn_contact: "בואו נדבר",
            },
            about_page: {
                title: "קורות חיים",
                story_title: "הסיפור שלי",
                p1: "אני אריאל חזוט, סטודנט שנה ב' להנדסת תוכנה במכללת כנרת. מאז ומתמיד נמשכתי לעולם הטכנולוגי, אך מה שבאמת חיבר אותי למקצוע הזה היא היכולת ליצור.",
                p2: "עבורי, תכנות הוא לא רק כתיבת שורות קוד, אלא כלי שמאפשר לי לקחת דמיון פרוע, רעיון מופשט שקיים רק בראש שלי – ולהפוך אותו למציאות חיה ובועטת שפועלת על המסך. התחושה הזו, של לבנות משהו מאפס ולראות אותו עובד, היא מה שמניע אותי בכל בוקר מחדש.",
                p3: "במהלך הלימודים והעבודה העצמית שלי, אני מתנסה במגוון רחב של פרויקטים: החל מפיתוח אפליקציות Web מתקדמות ומערכות ניהול, ועד ליצירת משחקים אינטראקטיביים ושילוב מרתק בין תוכנה לחומרה (Arduino). אני מאמין שהדרך הכי טובה ללמוד היא דרך הידיים, ואני תמיד מחפש את האתגר הבא שילמד אותי משהו חדש."
            },
            skills: {
                title: "שפות תכנות וטכנולוגיות",
            },
            contact: {
                title: "צור קשר",
                subtitle: "אשמח לשמוע מכם! מוזמנים ליצור איתי קשר בדרכים הבאות:",
            },
            projects: {
                title: "הפרויקטים שלי",
                btn_code: "צפה בקוד",
                btn_video: "צפה בסרטון",
                btn_play: "שחק עכשיו",
                p1_desc: "משחק פלטפורמה הרפתקני בסגנון רטרו המשלב השראות ממריו וטרריה. השחקן נדרש לחקור עולמות, לאסוף ארבעה מפתחות עתיקים ולפתוח את תיבת האוצר האגדית.",
                p2_desc: "גרסה פיזית ואינטראקטיבית למשחק הזיכרון הקלאסי 'סיימון', המבוססת על בקר Arduino. הפרויקט משלב תכנות חומרה (Embedded) עם בניית מעגלים אלקטרוניים.",
                p3_desc: "משחק זיכרון קלאסי וצבעוני בנושא בעלי חיים. פותח בדגש על לוגיקת משחק, עיצוב רספונסיבי וחוויית משתמש מהנה לכל הגילאים.",
                p4_desc: "מערכת חכמה לניהול משימות יומיומיות. האפליקציה מאפשרת מעקב יעיל, סינון לפי סטטוס ביצוע, עריכה דינמית וממשק משתמש נקי ונוח.",
                p5_desc: "פלטפורמה מקיפה לניהול פרויקטים וצוותים. כוללת פיצ'רים של יצירת פרויקטים, מעקב סטטוסים, ומערכת הצבעות דמוקרטית לקבלת החלטות.",
            },
            info: {
                title: "מידע אישי",
                personal_details: "פרטים אישיים",
                name_label: "שם:",
                age_label: "גיל:",
                address_label: "מגורים:",
                address_val: "צפון הארץ",

                education_title: "השכלה",
                edu_1: "סטודנט להנדסאי תוכנה (שנה ב') במכללת כנרת",
                edu_2: "12 שנות לימוד",
                edu_3: "תעודת מקצוע צבאית: רכז בניה קלה",

                military_title: "שירות צבאי",
                military_desc: "שירות מלא בבסיס הושעיה (בינוי).",

                employment_title: "ניסיון תעסוקתי",
                job_current: "אחזקה כללית - החברה הכלכלית (נוכחי)",
                job_maman: "נהג ועוזר נהג - ממן שיווק (8 חודשים)",
                job_garage: "מכונאי - מוסך הגליל (שנה)",
                job_restaurant: "אחמ״ש - מסעדת אל רנצו (5 שנים)",
            }
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "he",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;