import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./../Modal";
import { Button } from "../../Atoms/Button";
import { useState } from "react";
const Story: ComponentMeta<typeof Modal> = {
  component: Modal,
  title: "Organisms/Modal",
};

export default Story;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setisOpen(true)}>Open Modal</Button>
      <Modal {...args} isVisible={isOpen} onClose={setisOpen}>
        Content
      </Modal>
    </>
  );
};

export const Default = Template;
