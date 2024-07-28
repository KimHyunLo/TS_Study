import { useRef } from "react";
import Button from "./components/Button.tsx";
import Card from "./components/Card.tsx";
import Container from "./components/Container.tsx";
import IconButton from "./components/IconButton.tsx";
import Input from "./components/Input.tsx";
import List from "./components/List.tsx";
import Form, { FormHandle } from "./components/Form.tsx";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
