const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatUpdated(iso: string) {
  const [year, month, day] = iso.split("-");
  const monthIndex = Number(month) - 1;

  if (!year || !day || Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
    return iso;
  }

  return `${Number(day)} ${MONTHS[monthIndex]} ${year}`;
}

export function formatReading(minutes: number) {
  return `${minutes} min read`;
}
