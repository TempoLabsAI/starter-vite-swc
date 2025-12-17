// [build] library: 'shadcn'
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldContent,
} from "../components/ui/field";

const meta = {
  title: "ui/Field",
  component: Field,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="Enter your email" />
    </Field>
  ),
  args: {},
};

export const WithDescription = {
  render: () => (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="Enter your email" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  ),
  args: {},
};

export const WithError = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="Enter your email" aria-invalid="true" />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  ),
  args: {},
};

export const Horizontal = {
  render: () => (
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldContent>
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
        <FieldDescription>
          You agree to our Terms of Service and Privacy Policy.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
  args: {},
};

export const FieldGroupExample = {
  render: () => (
    <FieldGroup>
      <Field>
        <FieldLabel>First Name</FieldLabel>
        <Input placeholder="John" />
      </Field>
      <Field>
        <FieldLabel>Last Name</FieldLabel>
        <Input placeholder="Doe" />
      </Field>
    </FieldGroup>
  ),
  args: {},
};

export const FieldSetExample = {
  render: () => (
    <FieldSet>
      <FieldLegend>Contact Information</FieldLegend>
      <FieldDescription>Enter your contact details below.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="john@example.com" />
        </Field>
        <Field>
          <FieldLabel>Phone</FieldLabel>
          <Input type="tel" placeholder="+1 (555) 000-0000" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
  args: {},
};
