export const isJsonString = (myString: string) => {
  try {
    JSON.parse(myString);
  } catch (e) {
    return false;
  }
  return true;
};

export const formatDate = (date: string): string => {

    const parts = date.split("-");
    if (parts.length !== 3) {
        return date;
    }
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
