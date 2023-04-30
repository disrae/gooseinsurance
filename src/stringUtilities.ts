export function formatBirthday(birthdayString: string | undefined) {
  if (!birthdayString) return '';

  const date = new Date(birthdayString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
}

export function formatAddress(address: string | undefined) {
  if (!address) return '';

  const formattedAddress = address
    .replace(/(\d+)/, '$1\n')
    .replace(/([A-Z]{2}\s)/, '$1\n')
    .replace('\n', '');
  return formattedAddress;
}
