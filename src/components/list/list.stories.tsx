import type { Meta, StoryObj } from "@storybook/react-vite";
import { List } from "./list";
import { Option } from "../../types/global-types";

const meta = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockedOptions: Option[] = [{ value: "List component" }, { value: "Value for test" }, { value: "Option number 3" }];

export const Default: Story = {
  args: {
    options: mockedOptions,
  },
};

export const WithCreate: Story = {
  args: {
    options: mockedOptions,
    onCreate: (value: string) => {
      alert(`Hai creato: ${value}`);
    },
  },
};
