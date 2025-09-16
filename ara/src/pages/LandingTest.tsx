import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Progress,
  Stack,
  Text,
  Title,
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
  const [answered, setAnswered] = useState(false);

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

  const handleAnswer = (value: string) => {
    if (answered) return;
    setSelected(value);
    setAnswered(true);

    if (value === questions[current].answer) {
      setScore((prev) => prev + 1);
      new Audio("/correct.mp3").play();
    } else {
      new Audio("/wrong.mp3").play();
    }

    setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  if (questions.length === 0) {
    return (
      <Center h="100vh">
        <Text size="lg" fw={500}>
          Yuklanmoqda...
        </Text>
      </Center>
    );
  }

  if (finished) {
    return (
      <Center>
        <Card shadow="xl" p="xl" radius="lg" withBorder maw={500} w="100%">
          <Stack align="center">
            <Title order={2}>🎉 Test tugadi!</Title>
            <Text size="xl" fw={600}>
              Siz {score} ta to‘g‘ri javob berdingiz (
              {Math.round((score / questions.length) * 100)}%)
            </Text>
            <Link to={"/tests"}>
              <Button variant="outline" size="md">
                Yana test yechish
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
    <Center h="80vh">
      <Card shadow="xl" p="xl" radius="lg" withBorder maw={600} w="100%">
        <Stack>
          <Stack>
            <Title order={3}>
              Savol {current + 1} / {questions.length}
            </Title>
            <Progress value={progress} color="blue" radius="xl" size="lg" />
          </Stack>

          <Text size="lg" fw={500}>
            {question.quiz}
          </Text>

          <Stack mt="sm">
            {question.variant.map((v) => {
              let color: string | undefined = "gray";
              let variant: "outline" | "filled" = "outline";

              if (answered) {
                if (v === question.answer) {
                  if (v === selected) {
                    color = "green";
                    variant = "filled";
                  } else {
                    color = "green";
                    variant = "outline";
                  }
                } else if (v === selected) {
                  color = "red";
                  variant = "outline";
                }
              }

              return (
                <Button
                  key={v}
                  onClick={() => handleAnswer(v)}
                  color={color}
                  variant={variant}
                  radius="md"
                  size="lg"
                  fullWidth
                  style={{ fontSize: "16px", padding: "14px" }}
                >
                  {v}
                </Button>
              );
            })}
          </Stack>
        </Stack>
      </Card>
    </Center>
  );
};

export default LandingTest;
