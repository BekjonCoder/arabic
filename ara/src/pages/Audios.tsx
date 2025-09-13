import { Card, Group, Input, Text } from "@mantine/core"
import { useState, useMemo } from "react"

interface AudioItem {
  music: string
  id: number
  title: string
}

const audios: AudioItem[] = [
  { music: "/35.ogg", id: 35, title: "35" },
  { music: "/37-38.ogg", id: 3738, title: "37-38" },
  { music: "/41-42.ogg", id: 4142, title: "41-42" },
  { music: "/45-46.ogg", id: 4546, title: "45-46" },
  { music: "/49-50.ogg", id: 4950, title: "49-50" },
  { music: "/53-54.ogg", id: 5354, title: "53-54" },
  { music: "/57-58-59.ogg", id: 575859, title: "57-58-59" },
  { music: "/62-63.ogg", id: 6263, title: "62-63" },
  { music: "/66-67-68.ogg", id: 666768, title: "66-67-68" },
  { music: "/71-72.ogg", id: 7172, title: "71-72" },
  { music: "/75-76-77.ogg", id: 757677, title: "75-76-77" },
  { music: "/80-81.ogg", id: 8081, title: "80-81" },
  { music: "/84-85.ogg", id: 8485, title: "84-85" },
  { music: "/88-89-90.ogg", id: 888990, title: "88-89-90" },
  { music: "/93-94-95.ogg", id: 939495, title: "93-94-95" },
  { music: "/97-98-99.ogg", id: 979899, title: "97-98-99" },
  { music: "/102-103-104.ogg", id: 102103104, title: "102-103-104" },
  { music: "/106-107-108.ogg", id: 106107108, title: "106-107-108" },
  { music: "/110-111-112.ogg", id: 110111112, title: "110-111-112" },
  { music: "/114-115-116.ogg", id: 114115116, title: "114-115-116" },
  { music: "/118-119-120.ogg", id: 118119120, title: "118-119-120" },
  { music: "/122-123-124.ogg", id: 122123124, title: "122-123-124" },
  { music: "/126-127-128.ogg", id: 126127128, title: "126-127-128" },
  { music: "/130-131-132.ogg", id: 130131132, title: "130-131-132" },
  { music: "/134-135-136.ogg", id: 134135136, title: "134-135-136" },
  { music: "/138-139-140.ogg", id: 138139140, title: "138-139-140" },
  { music: "/142-143-144.ogg", id: 142143144, title: "142-143-144" },
  { music: "/146-147-148.ogg", id: 146147148, title: "146-147-148" },
  { music: "/150.ogg", id: 150, title: "150" },
  { music: "/151.ogg", id: 151, title: "151" },
  { music: "/152.ogg", id: 152, title: "152" },
  { music: "/153.ogg", id: 153, title: "153" },
  { music: "/154.ogg", id: 154, title: "154" },
  { music: "/155.ogg", id: 155, title: "155" },
  { music: "/160.ogg", id: 160, title: "160" },
  { music: "/172.ogg", id: 172, title: "172" },
  { music: "/176.ogg", id: 176, title: "176" },
  { music: "/178.ogg", id: 178, title: "178" },
  { music: "/180.ogg", id: 180, title: "180" },
  { music: "/182.ogg", id: 182, title: "182" },
  { music: "/195.ogg", id: 195, title: "195" },
  { music: "/198.ogg", id: 198, title: "198" },
  { music: "/199.ogg", id: 199, title: "199" },
  { music: "/200.ogg", id: 200, title: "200" },
  { music: "/201.ogg", id: 201, title: "201" },
  { music: "/205.ogg", id: 205, title: "205" },
  { music: "/206.ogg", id: 206, title: "206" },
  { music: "/208.ogg", id: 208, title: "208" },
  { music: "/209.ogg", id: 209, title: "209" },
  { music: "/210.ogg", id: 210, title: "210" },
  { music: "/211.ogg", id: 211, title: "211" },
  { music: "/216.ogg", id: 216, title: "216" },
  { music: "/218.ogg", id: 218, title: "218" },
  { music: "/219.ogg", id: 219, title: "219" },
  { music: "/224.ogg", id: 224, title: "224" },
  { music: "/225.ogg", id: 225, title: "225" },
  { music: "/226.ogg", id: 226, title: "226" },
  { music: "/235.ogg", id: 235, title: "235" },
  { music: "/236.ogg", id: 236, title: "236" },
  { music: "/237.ogg", id: 237, title: "237" },
  { music: "/238.ogg", id: 238, title: "238" },
  { music: "/247.ogg", id: 247, title: "247" },
  { music: "/248.ogg", id: 248, title: "248" },
  { music: "/250.ogg", id: 250, title: "250" },
  { music: "/259.ogg", id: 259, title: "259" },
  { music: "/260.ogg", id: 260, title: "260" },
  { music: "/262.ogg", id: 262, title: "262" },
  { music: "/269.ogg", id: 269, title: "269" },
  { music: "/270.ogg", id: 270, title: "270" },
  { music: "/285.ogg", id: 285, title: "285" },
  { music: "/293.ogg", id: 293, title: "293" },
  { music: "/304.ogg", id: 304, title: "304" },
  { music: "/316.ogg", id: 316, title: "316" },
  { music: "/320.ogg", id: 320, title: "320" },
  { music: "/324.ogg", id: 324, title: "324" },
  { music: "/331.ogg", id: 331, title: "331" },
  { music: "/333.ogg", id: 333, title: "333" },
  { music: "/342.ogg", id: 342, title: "342" },
  { music: "/343.ogg", id: 343, title: "343" },
  { music: "/346.ogg", id: 346, title: "346" },
  { music: "/348.ogg", id: 348, title: "348" },
  { music: "/349.ogg", id: 349, title: "349" },
  { music: "/355.ogg", id: 355, title: "355" },
  { music: "/362.ogg", id: 362, title: "362" },
]
const Audios = () => {
  const [input, setInput] = useState("")

  const filteredPost = useMemo(() => {
    if (!input.trim()) return audios
    return audios.filter((post) =>
      post.id.toString().includes(input.trim())
    )
  }, [input])

  return (
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
  )
}

export default Audios
