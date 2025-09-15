import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AudioPage from "./pages/Audios";
import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellMain,
  Burger,
  Group,
  Text,
  Button,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Tests from "./pages/Tests";
import LandingTest from "./pages/LandingTest";

function App() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShellHeader>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={700}>📚 Arab tilini oson o'rganing</Text>
        </Group>
      </AppShellHeader>

      <AppShellNavbar p="md">
        <Stack>
          <Button
            component={Link}
            to="/"
            onClick={close}
            color="blue"
            variant="filled"
            radius="md"
          >
            🏠 Bosh sahifa
          </Button>

          <Button
            component={Link}
            to="/audios"
            onClick={close}
            color="teal"
            variant="filled"
            radius="md"
          >
            🎧 Audiolar
          </Button>
          <Button
            component={Link}
            to="/tests"
            onClick={close}
            color="yellow"
            variant="filled"
            radius="md"
          >
            🧪 Testlar
          </Button>
        </Stack>
      </AppShellNavbar>

      <AppShellMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audios" element={<AudioPage />} />
          <Route path="tests" element={<Tests/>}/>
          <Route path="test/:name" element={<LandingTest/>}/>
        </Routes>
      </AppShellMain>
    </AppShell>
  );
}

export default App;
