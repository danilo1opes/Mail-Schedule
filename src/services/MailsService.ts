import { ISendEmail } from 'interfaces';
import { Api } from 'providers';

const sendEmail = (data: ISendEmail) => Api.post('/api/v1/mails');

export const MailServices = {
  sendEmail,
};
