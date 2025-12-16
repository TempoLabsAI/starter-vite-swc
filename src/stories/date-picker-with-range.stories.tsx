// [build] library: 'shadcn'
import DatePickerWithRange from "../components/ui/date-picker-with-range";

const meta = {
  title: "ui/DatePickerWithRange",
  component: DatePickerWithRange,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

export const Default = {
  render: () => <DatePickerWithRange />,
  args: {},
};

export const WithClassName = {
  render: () => <DatePickerWithRange className="w-[400px]" />,
  args: {},
};
