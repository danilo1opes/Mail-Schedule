import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const WriteNowValidationSchema = yup.object().shape({
  destinationName: yup.string().required('Nome obrigatório'),
  destinationAddress: yup
    .string()
    .email('Email inválido')
    .required('Email obrigatório'),
  dueDate: yup.date().typeError('Data inválida').required('Data obrigatória'), // Aqui aceitamos Date
  subject: yup.string().required('Assunto obrigatório'),
  body: yup.string().required('Mensagem obrigatória'),
});

export const WriteNowResolver = yupResolver(WriteNowValidationSchema);
