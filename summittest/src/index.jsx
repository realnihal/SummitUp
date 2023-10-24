import ForgeUI, {
  render,
  Button,
  Form,
  Fragment,
  TextField,
  CheckboxGroup,
  Checkbox,
  Macro,
  useState,
  Text,
} from "@forge/ui";

import { fetch } from "@forge/api";

const App = () => {
  const [formState, setFormState] = useState(undefined);

  const onSubmit = async (formData) => {
    try {
      // Send the formData to a server using the fetch API
      const response = await fetch(
        "https://ec2-3-111-35-194.ap-south-1.compute.amazonaws.com:5000/run",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Successfully sent data to the server");
        // Successfully sent data to the server
        // You can handle the response here if needed
        // For example, if the server sends back a response, you can parse and use it
      } else {
        // Handle the error if the request was not successful
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error("An error occurred while sending data:", error);
    }

    setFormState(formData);
  };

  const goBack = () => {};
  const cancel = () => {};

  const actionButtons = [
    <Button text="Go back" onClick={goBack} />,
    <Button text="Cancel" onClick={cancel} />,
  ];

  return (
    <Fragment>
      <Form onSubmit={onSubmit} actionButtons={actionButtons}>
        <TextField name="username" label="MEETING ID" />
        <TextField name="apikey" label="YOUR API KEY" />
        <TextField name="parentPageID" label="ParentPageID" />
      </Form>
      {formState && <Text>{JSON.stringify(formState)}</Text>}
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
