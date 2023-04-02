export default function validators() {
  const isEmpty = (fieldName, fieldValue) => {
    return !fieldValue ? `The ${fieldName} field is required` : "";
  };

  const isEmail = (fieldName, fieldValue) => {
    let re = String(fieldValue)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return !re ? `Please enter a valid ${fieldName}` : "";
  };

  return { isEmpty, isEmail };
}
