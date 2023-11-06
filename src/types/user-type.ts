export type User = {
  email: string;
  password: string;
  personal: Personal;
  phone_number: string;
};

type Personal = {
  first_name: string;
  last_name: string;
};
