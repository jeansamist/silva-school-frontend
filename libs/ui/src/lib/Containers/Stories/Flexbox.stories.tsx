import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flexbox } from "./../Flexbox";
import { Box } from "../../Atoms/Box";
const Story: ComponentMeta<typeof Flexbox> = {
  component: Flexbox,
  title: "Containers/Flexbox",
};

export default Story;

const Template: ComponentStory<typeof Flexbox> = (args) => (
  <Flexbox {...args}>
    <Box padding border>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ducimus odit delectus a minus reiciendis labore ipsa rem nisi id adipisci iste
      quo numquam nulla, magni enim quasi, autem odio?
    </Box>
    <Box padding border>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ducimus odit delectus a minus reiciendis labore ipsa rem nisi id adipisci iste
      quo numquam nulla, magni enim quasi, autem odio?
    </Box>
    <Box padding border>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ducimus odit delectus a minus reiciendis labore ipsa rem nisi id adipisci iste
      quo numquam nulla, magni enim quasi, autem odio?
    </Box>
    <Box padding border>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ducimus odit delectus a minus reiciendis labore ipsa rem nisi id adipisci iste
      quo numquam nulla, magni enim quasi, autem odio?
    </Box>
    <Box padding border>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ducimus odit delectus a minus reiciendis labore ipsa rem nisi id adipisci iste
      quo numquam nulla, magni enim quasi, autem odio?
    </Box>
  </Flexbox>
);

export const Default = Template;
