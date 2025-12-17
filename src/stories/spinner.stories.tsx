// [build] library: 'shadcn'
import { Button } from "../components/ui/button";
import { Spinner } from "../components/ui/spinner";

const meta = {
  title: "ui/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => <Spinner />,
  args: {},
};

export const Small = {
  render: () => <Spinner className="size-3" />,
  args: {},
};

export const Large = {
  render: () => <Spinner className="size-8" />,
  args: {},
};

export const WithButton = {
  render: () => (
    <Button disabled>
      <Spinner className="mr-2" />
      Loading...
    </Button>
  ),
  args: {},
};

export const CustomColor = {
  render: () => <Spinner className="text-primary" />,
  args: {},
};

export const InCard = {
  render: () => (
    <div className="flex h-32 w-32 items-center justify-center rounded-lg border">
      <Spinner className="size-6" />
    </div>
  ),
  args: {},
};
