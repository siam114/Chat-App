// export function formatMessageTime(date) {
//   return new Date(date).toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//   });
// }


export const formatDate = (date, withZone = true, timezone) => {
  date = new Date(date);
  const userTimezone = timezone ? timezone : Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options= {
    ...(withZone ? { timeZone: userTimezone } : {}),
    day: "numeric",
    month: "short",
    // year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};