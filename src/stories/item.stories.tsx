// [build] library: 'shadcn'
import { MoreHorizontal, FileText, Star, Trash } from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemHeader,
  ItemFooter,
} from "../components/ui/item";

const meta = {
  title: "ui/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => (
    <Item>
      <ItemContent>
        <ItemTitle>Item Title</ItemTitle>
        <ItemDescription>This is a description of the item.</ItemDescription>
      </ItemContent>
    </Item>
  ),
  args: {},
};

export const WithIcon = {
  render: () => (
    <Item>
      <ItemMedia variant="icon">
        <FileText />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Document</ItemTitle>
        <ItemDescription>A sample document item.</ItemDescription>
      </ItemContent>
    </Item>
  ),
  args: {},
};

export const WithImage = {
  render: () => (
    <Item>
      <ItemMedia variant="image">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
          alt="User"
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>Software Developer</ItemDescription>
      </ItemContent>
    </Item>
  ),
  args: {},
};

export const WithActions = {
  render: () => (
    <Item>
      <ItemMedia variant="icon">
        <FileText />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Project Report</ItemTitle>
        <ItemDescription>Last updated 2 hours ago</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <Star className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </ItemActions>
    </Item>
  ),
  args: {},
};

export const OutlineVariant = {
  render: () => (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Outlined Item</ItemTitle>
        <ItemDescription>This item has a border.</ItemDescription>
      </ItemContent>
    </Item>
  ),
  args: {},
};

export const MutedVariant = {
  render: () => (
    <Item variant="muted">
      <ItemContent>
        <ItemTitle>Muted Item</ItemTitle>
        <ItemDescription>This item has a muted background.</ItemDescription>
      </ItemContent>
    </Item>
  ),
  args: {},
};

export const ItemGroupExample = {
  render: () => (
    <ItemGroup>
      <Item>
        <ItemMedia variant="icon">
          <FileText />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>First Item</ItemTitle>
          <ItemDescription>Description for first item</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <FileText />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Second Item</ItemTitle>
          <ItemDescription>Description for second item</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <FileText />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Third Item</ItemTitle>
          <ItemDescription>Description for third item</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
  args: {},
};

export const WithHeaderAndFooter = {
  render: () => (
    <Item variant="outline">
      <ItemHeader>
        <ItemTitle>Task Title</ItemTitle>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </ItemHeader>
      <ItemDescription>
        This is a detailed description of the task that spans the full width.
      </ItemDescription>
      <ItemFooter>
        <span className="text-xs text-muted-foreground">Created yesterday</span>
        <Button variant="ghost" size="sm">
          <Trash className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </ItemFooter>
    </Item>
  ),
  args: {},
};
