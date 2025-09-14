import { Card, Group, Input, Text } from "@mantine/core"
import { useEffect, useState, useMemo } from "react";

interface AudioItem {
  music: string;
  id: number;
  title: string;
}

const Audios = () => {
  const [audios, setAudios] = useState<AudioItem[]>([]);
  const [input, setInput] = useState("");

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

  return (
    <div>
       <div className="flex flex-col items-center gap-4 mt-6 w-full">
      <div>
        <Input
        variant="filled"
        size="md"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        radius="md"
        placeholder="Mashq raqamini kiriting!"
        className="w-[90%] md:w-[60%]"
      />
      </div>

      <div className="">
        {filteredPost.length > 0 ? (
          filteredPost.map((item) => (
            <Card
              key={item.id}
              shadow="sm"
              padding="lg"
              radius="md"
              className="w-[90%] md:w-[60%]"
            >
              <Group justify="space-between" mb="sm">
                <Text fw={500}>{item.title}-mashq ({item.title}-تمرين)</Text>
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
            Hech narsa topilmadi 😥
            (لم يتم العثور على شيء 😥)
          </Text>
        )}
      </div>
    </div>
    </div>
  );
};

export default Audios;
