import type { Meta, StoryObj } from "@storybook/react-vite";
import Toast from "./toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    toast: {
      id: "1",
      message: "Questa è una notifica di esempio",
      onClose: () => console.log("Toast chiuso"),
    },
    onRemove: (id: string) => console.log(`Toast rimosso con id: ${id}`),
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {};

export const WithLongMessage: Story = {
  args: {
    toast: {
      id: "2",
      message:
        "Questa è una notifica molto lunga per testare come il toast si comporta con un contenuto di lunghezza maggiore rispetto al normale. Deve rimanere leggibile e gestire correttamente il layout.",
      onClose: () => console.log("Toast lungo chiuso"),
    },
  },
};

export const WithoutCloseHandler: Story = {
  args: {
    toast: {
      id: "3",
      message: "Toast senza handler onClose",
    },
  },
};
