import DatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  name: string;
};

export function DateTimePicker({ name }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <DatePicker
            selected={value}
            onChange={(date: Date | null) => date && onChange(date)}
          />
        );
      }}
    />
  );
}
