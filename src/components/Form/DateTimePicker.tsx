import DatePicker, { registerLocale } from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
registerLocale('pt-BR', ptBR);

type Props = {
  name: string;
};

export function DateTimePicker({ name }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={new Date().setHours(9, 30)}
      render={({ field: { onChange, value } }) => {
        return (
          <DatePicker
            showTimeSelect
            locale="pt-BR"
            dateFormat="Pp"
            selected={new Date(value)}
            onChange={(date: Date | null) => date && onChange(date.toISOString)}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          />
        );
      }}
    />
  );
}
