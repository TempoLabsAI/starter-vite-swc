// [build] library: 'shadcn'
import { Bold, Italic, Underline } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "../components/ui/button-group";

const meta = {
  title: "ui/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
  args: {},
};

export const WithIcons = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Underline className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  ),
  args: {},
};

export const Vertical = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
  args: {},
};

export const WithSeparator = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Save</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
  args: {},
};

export const WithText = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Label</ButtonGroupText>
      <Button variant="outline">Action</Button>
    </ButtonGroup>
  ),
  args: {},
};
