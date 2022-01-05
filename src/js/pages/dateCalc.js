import { printError, printDateDiff } from "../utils/print.js";
import getDateDiff from "../utils/getDateDiff.js";

const form = document.querySelector("#calcDate");

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const dateFrom = formData.get("dateFrom");
  const dateTo = formData.get("dateTo");

  if (!dateFrom || !dateTo) {
    printError("Необходимо заполнить оба поля!");
    return;
  }

  const dateDiff = getDateDiff(dateFrom, dateTo);

  printDateDiff(dateDiff);
};
