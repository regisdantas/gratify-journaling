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

export const limitInputLength = (e: any, maxLength: number) => {
  const el = e.currentTarget;
  if (el.innerText.length > maxLength) {
    el.innerText = el.innerText.slice(0, maxLength);
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel?.removeAllRanges();
    sel?.addRange(range);
  }
}