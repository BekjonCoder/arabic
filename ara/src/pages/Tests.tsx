import { Button, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TestItem {
  quiz: string;
  id: number;
  variant: string[];
  answer: string;
}

interface Levels {
  [key: string]: TestItem[];
}

const Tests = () => {
  const [levels, setLevels] = useState<Levels>({});
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setLevels(data));
  }, []);

  const handleClick = (levelName: string) => {
    localStorage.setItem('Name', levelName);
    navigate(`/test/${levelName}`);
  };

  return (
    <Stack>
      {Object.keys(levels).map((levelName) => (
        <Button
          key={levelName}
          fullWidth
          onClick={() => handleClick(levelName)}
        >
          {levelName}
        </Button>
      ))}
    </Stack>
  );
};

export default Tests;
