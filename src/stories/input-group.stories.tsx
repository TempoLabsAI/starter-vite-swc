// [build] library: 'shadcn'
import { Search, Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "../components/ui/input-group";
import { Kbd } from "../components/ui/kbd";

const meta = {
  title: "ui/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Mail className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Enter your email" />
    </InputGroup>
  ),
  args: {},
};

export const WithButton = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <Search className="h-4 w-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
  args: {},
};

export const WithText = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
  args: {},
};

export const WithKbd = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
  args: {},
};

function PasswordInputGroup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <InputGroupInput
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

export const PasswordToggle = {
  render: () => <PasswordInputGroup />,
  args: {},
};

export const WithTextarea = {
  render: () => (
    <InputGroup>
      <InputGroupTextarea placeholder="Enter your message..." />
    </InputGroup>
  ),
  args: {},
};
