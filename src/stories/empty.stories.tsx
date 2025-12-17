// [build] library: 'shadcn'
import { Inbox, Plus } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "../components/ui/empty";

const meta = {
  title: "ui/Empty",
  component: Empty,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating a new item.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  args: {},
};

export const WithAction = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Create your first project to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </EmptyContent>
    </Empty>
  ),
  args: {},
};

export const WithDefaultMedia = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <Inbox className="h-10 w-10 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>Empty state</EmptyTitle>
        <EmptyDescription>
          This is an empty state with default media variant.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
  args: {},
};
