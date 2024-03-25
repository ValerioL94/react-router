import {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} from './src/contacts';
import { redirect } from 'react-router-dom';

export async function rootLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await getContacts(q);
  return { contacts };
}

export async function contactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export async function rootAction() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function editAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function destroyAction({ params }) {
  // throw new Error('oh dang!');
  await deleteContact(params.contactId);
  return redirect('/');
}
