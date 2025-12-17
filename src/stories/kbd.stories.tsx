// [build] library: 'shadcn'
import { Command } from "lucide-react";

import { Kbd, KbdGroup } from "../components/ui/kbd";

const meta = {
  title: "ui/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => <Kbd>K</Kbd>,
  args: {},
};

export const WithModifier = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
  args: {},
};

export const WithIcon = {
  render: () => (
    <Kbd>
      <Command className="h-3 w-3" />
    </Kbd>
  ),
  args: {},
};

export const CommonShortcuts = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground w-20">Copy</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground w-20">Paste</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>V</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground w-20">Save</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground w-20">Undo</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
    </div>
  ),
  args: {},
};

export const Escape = {
  render: () => <Kbd>Esc</Kbd>,
  args: {},
};

export const Enter = {
  render: () => <Kbd>↵</Kbd>,
  args: {},
};
