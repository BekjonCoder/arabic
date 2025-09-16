import { Card, Text, Title, Divider } from "@mantine/core";

const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <Card shadow="md" radius="lg" withBorder style={{ maxWidth: 700, width: "100%" }}>

        <div dir="rtl" style={{ textAlign: "right", marginBottom: "1rem" }}>
          <Title order={2} fw={600} fz={30} style={{ fontStyle: "italic" }}>
            😀اللغة العربية أسهل مع المعلم شير محمد
          </Title>
        </div>
        <Text fz="lg" fs="italic" mb="md" c="dimmed">
          (Arab tili, Sher Muhammad ustoz bilan osonroq😀)
        </Text>

        <Divider mb="md" />

        <Text
          size="md"
          lh={1.7}
          dir="rtl"
          style={{ textAlign: "right", marginBottom: "1rem" }}
        >
          هنا يمكنك البحث عن الملفات الصوتية والاستماع إليها دون الحاجة إلى تحميلها. ولمن يرغب، تتوفر إمكانية التحميل أيضًا. كما يمكنك اجتياز اختبارات خاصة لمعرفة مدى إتقانك للمفردات. والأهم من ذلك — لا تتوقف عن المحاولة أبدًا!
        </Text>

        <Text size="md" lh={1.7} style={{ textAlign: "left" }}>
          Bu yerda siz audio fayllarni qidirib topishingiz, ularni yuklab olmasdan
          tinglashingiz mumkin. Xohlovchilar uchun esa yuklab olish imkoniyati ham
          mavjud. Shuningdek, lug‘atni qanchalik o‘zlashtirganingizni tekshirish uchun
          maxsus testlardan o‘tishingiz mumkin. Eng muhimi — hech qachon harakatdan
          to‘xtamang!
        </Text>
      </Card>
    </div>
  );
};

export default Home;
