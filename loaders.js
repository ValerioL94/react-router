import { getContacts, createContact, getContact } from './src/contacts';

export async function contactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return { contact };
}

export async function contactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
