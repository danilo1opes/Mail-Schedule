import { DateTimePicker, Nav, RichInput } from 'components';
import { Button } from 'components/Button';

export function WriteNowPage() {
  const { register, handleSubmit } = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever Agora</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="destinationName">Nome Completo</label>
          <input {...register('destinationName')} type="text" />
          <label htmlFor="destinationAddress">Email</label>
          <input {...register('destinationAddress')} type="email" />
          <label htmlFor="dueDate">Data</label>
          <DateTimePicker />
          <label htmlFor="subject">Assunto</label>
          <input {...register('destinationAddress')} type="text" />
          <label htmlFor="Body">Mensagem</label>
          <RichInput />
          <Button type="submit" variant="primary">
            Enviar
          </Button>
        </form>
      </div>
    </>
  );
}

function useForm(): { register: any; handleSubmit: any } {
  throw new Error('Function not implemented.');
}
