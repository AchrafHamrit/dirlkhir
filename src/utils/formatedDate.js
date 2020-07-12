const dateFormated = old_date => {
  let year = '';
  let month = '';
  let day = '';
  let hours = '';
  let minutes = '';
  let dateFormated = '';

  let date = new Date(old_date);

  year = date.getFullYear();
  month =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  dateFormated = `${year}-${month}-${day} ${hours}:${minutes}`;

  return dateFormated;
};

export default dateFormated;
