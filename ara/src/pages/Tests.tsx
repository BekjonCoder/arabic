import { Button, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        setLevels(data);
      });
  }, []);
  const handleClick = (levelName: string) => {
  localStorage.setItem('Name',levelName)
  
};

  return (
    <Stack>
      {Object.keys(levels).map((levelName) => (
        <Button onClick={()=>handleClick(levelName)} key={levelName} fullWidth>
          {levelName}
        </Button>
      ))}
    </Stack>
  );
};

export default Tests;