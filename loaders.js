import {
  getContacts,
  createContact,
  getContact,
  updateContact,
} from './src/contacts';
import { redirect } from 'react-router-dom';

export async function contactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function createAction() {
  const contact = await createContact();
  return { contact };
}

export async function contactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export async function editAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
