import { reactive, computed } from "vue";
import validators from "@/utils/validators";

const errors = reactive({});

export function formValidation() {
  const { isEmpty, isEmail } = validators();

  const validateEmailField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isEmail(fieldName, fieldValue);
  };

  return {
    errors,
    validateEmailField,
  };
}

export function isAnyError(formData) {
  const isAnyError = computed(() => {
    let error = true;
    for (let prop in formData) {
      if (!formData[prop] || errors[prop]) {
        error = prop;
        break;
      }
      error = false;
    }
    return error;
  });

  if (isAnyError.value !== false && !errors[isAnyError.value]) {
    errors[isAnyError.value] = "This field is required";
  }

  return isAnyError;
}
