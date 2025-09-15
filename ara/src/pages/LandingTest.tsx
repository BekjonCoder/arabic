import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Progress,
  Radio,
  Stack,
  Text,
  Title,
  Group,
  Center,
} from "@mantine/core";
import { Link } from "react-router-dom";

interface TestItem {
  quiz: string;
  id: number;
  variant: string[];
  answer: string;
}

const LandingTest = () => {
  const [questions, setQuestions] = useState<TestItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const levelName = localStorage.getItem("Name");

    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        if (levelName && data[levelName]) {
          setQuestions(data[levelName]);
        }
      });
  }, []);

  const handleNext = () => {
    if (selected) {
      if (selected === questions[current].answer) {
        setScore((prev) => prev + 1);
      }
      setSelected(null);

      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setFinished(true);
      }
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setSelected(null);
    }
  };

  if (questions.length === 0) {
    return (
      <Center h="100vh">
        <Text size="lg" fw={500}>
          Loading...
        </Text>
      </Center>
    );
  }

  if (finished) {
    return (
      <Center h="100vh">
        <Card shadow="xl" p="xl" radius="lg" withBorder maw={500} w="100%">
          <Stack align="center" >
            <Title order={2}>🎉 Test tugadi!</Title>
            <Text size="xl" fw={600}>
              Sizning natijangiz: {score} / {questions.length}
            </Text>
            <Link to={'/tests'}>
            <Button
              variant="outline"
              size="md"
            >
              Orqaga qaytish
            </Button>
            </Link>
          </Stack>
        </Card>
      </Center>
    );
  }

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <Center h="100vh">
      <Card shadow="xl" p="xl" radius="lg" withBorder maw={600} w="100%">
        <Stack>
          <Stack >
            <Title order={3}>
              Savol {current + 1} / {questions.length}
            </Title>
            <Progress value={progress} color="blue" radius="xl" size="lg" />
          </Stack>

          <Text size="lg" fw={500}>
            {question.quiz}
          </Text>

          <Radio.Group
            value={selected}
            onChange={setSelected}
            name={`q-${question.id}`}
          >
            <Stack>
              {question.variant.map((v) => (
                <Radio
                  key={v}
                  value={v}
                  label={v}
                  size="md"
                  radius="md"
                  color="blue"
                />
              ))}
            </Stack>
          </Radio.Group>

          <Group grow mt="lg">
            <Button
              variant="outline"
              color="gray"
              onClick={handleBack}
              disabled={current === 0}
            >
              Orqaga
            </Button>
            <Button onClick={handleNext} disabled={!selected}>
              {current + 1 === questions.length ? "Tugatish" : "Keyingi"}
            </Button>
          </Group>
        </Stack>
      </Card>
    </Center>
  );
};

export default LandingTest;
