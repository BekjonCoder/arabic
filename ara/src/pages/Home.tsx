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

        <Text size="md" lh={1.7}>
          Bu web-site aynan birinchi kitobga asoslangan va bu barcha uchun qulaylikni taminlash maqsadida yaratildi. Bu yerda sizlar audiolarni osongina topishingiz va yangi so'zlarni qnchalik o'zlashtirganingizni bilishingiz uchun test yechish imkoninggiz ham bor. Agarda sizga zarraxhalik foydasi tegsa ham xursandman🙂
        </Text>
      </Card>
    </div>
  );
};

export default Home;