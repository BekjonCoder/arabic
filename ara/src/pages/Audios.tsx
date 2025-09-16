import { Card, Group, Input, Text, Button } from "@mantine/core";
import { useEffect, useState, useMemo } from "react";

interface AudioItem {
  music: string;
  id: number;
  title: string;
}

const Audios = () => {
  const [audios, setAudios] = useState<AudioItem[]>([]);
  const [input, setInput] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    fetch("/audios.json")
      .then((res) => res.json())
      .then((data) => setAudios(data));
  }, []);

  const filteredPost = useMemo(() => {
    if (!input.trim()) return audios;
    return audios.filter((post) =>
      post.id.toString().includes(input.trim())
    );
  }, [input, audios]);

  const visiblePosts = filteredPost.slice(0, visibleCount);

  return (
    <div className="flex flex-col items-center gap-4 mt-6 w-full">
      <Input
        variant="filled"
        size="md"
        onChange={(e) => {
          setInput(e.target.value);
          setVisibleCount(20); 
        }}
        value={input}
        radius="md"
        placeholder="!ابحث باسم التمرين  (Mashq nomi bo'yicha qidiring!)"
        className="w-[90%] md:w-[60%]"
      />

      <div className="flex flex-col gap-4 w-full items-center">
        {visiblePosts.length > 0 ? (
          visiblePosts.map((item) => (
            <Card
              key={item.id}
              shadow="sm"
              padding="lg"
              radius="md"
              className="w-[90%] md:w-[60%]"
            >
              <Group justify="space-between" mb="sm">
                <Text fw={500}>
                  {item.title}-تمرين  ( {item.title}-mashq)
                </Text>
              </Group>

              <audio
                controls
                aria-label={`${item.title}-mashq audiosi`}
                className="w-full rounded-md shadow-sm border border-gray-300"
              >
                <source src={item.music} type="audio/ogg" />
                Sizning brauzeringiz audio tegini qo‘llab-quvvatlamaydi. 😥
              </audio>
            </Card>
          ))
        ) : (
          <Text c="dimmed" ta="center">
            لم يتم العثور على شيء 😥  (Hech narsa topilmadi 😥)
          </Text>
        )}

        {visibleCount < filteredPost.length && (
          <Button
            variant="light"
            onClick={() => setVisibleCount((prev) => prev + 20)}
          >
            Ko'proq ko'rsatish
          </Button>
        )}
      </div>
    </div>
  );
};

export default Audios;
