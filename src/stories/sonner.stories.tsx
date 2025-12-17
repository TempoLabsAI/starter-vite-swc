// [build] library: 'shadcn'
import { toast } from "sonner";

import { Button } from "../components/ui/button";
import { Toaster } from "../components/ui/sonner";

const meta = {
  title: "ui/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => (
    <div>
      <Toaster />
      <Button onClick={() => toast("Event has been created")}>
        Show Toast
      </Button>
    </div>
  ),
  args: {},
};

export const WithDescription = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Show Toast with Description
      </Button>
    </div>
  ),
  args: {},
};

export const Success = {
  render: () => (
    <div>
      <Toaster />
      <Button onClick={() => toast.success("Successfully saved!")}>
        Show Success Toast
      </Button>
    </div>
  ),
  args: {},
};

export const Error = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="destructive"
        onClick={() => toast.error("Something went wrong")}
      >
        Show Error Toast
      </Button>
    </div>
  ),
  args: {},
};

export const WithAction = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast("Event has been created", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast with Action
      </Button>
    </div>
  ),
  args: {},
};

export const Promise = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() => {
          const promise = new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Sonner" }), 2000)
          );

          toast.promise(promise, {
            loading: "Loading...",
            success: "Data loaded successfully",
            error: "Error loading data",
          });
        }}
      >
        Show Promise Toast
      </Button>
    </div>
  ),
  args: {},
};
