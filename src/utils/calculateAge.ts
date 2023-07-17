import moment from "moment";

export function calculateAge(birthdate: string | Date): string {
  const currentDate = moment();
  const birthdateObj = moment(birthdate);

  const years = currentDate.diff(birthdateObj, "years");
  birthdateObj.add(years, "years");

  const months = currentDate.diff(birthdateObj, "months");
  birthdateObj.add(months, "months");

  const weeks = currentDate.diff(birthdateObj, "weeks");
  birthdateObj.add(weeks, "weeks");

  const days = currentDate.diff(birthdateObj, "days");

  let age = "";

  if (years > 0) {
    age += `${years} ano${years > 1 ? "s" : ""}`;
    if (months > 0) {
      age += ` e ${months} mes${months > 1 ? "es" : ""}`;
    }
  } else if (months > 0) {
    age += `${months} mes${months > 1 ? "es" : ""}`;
    if (weeks > 0) {
      age += ` e ${weeks} sem${weeks > 1 ? "s" : ""}`;
    }
  } else if (weeks > 0) {
    age += `${weeks} sem${weeks > 1 ? "anas" : "ana"}`;
    if (days > 0) {
      age += ` e ${days} dias${days > 1 ? "s" : ""}`;
    }
  } else {
    age += `${days} dias${days > 1 ? "s" : ""}`;
  }

  return age;
}
