export interface IWriteNowForm {
  destinationName: string;
  destinationAddress: string;
  dueDate: Date; // Alterar de string para Date
  subject: string;
  body: string;
}
