import moment from "moment";

moment.locale("en-gb");

export const formatDate = (date) => {
  const parsedDate = moment(date);

  if (parsedDate.isValid()) {
    return parsedDate.format("D MMMM YYYY");
  } else {
    return null;
  }
};
