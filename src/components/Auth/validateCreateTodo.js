export default function validateCreateTodo(values) {
  let errors = {};

  // Title errors
  if (!values.title) {
    errors.title = "Title required";
  }

  // Description errors
  if (!values.description) {
    errors.description = "Description required";
  }

  // Category errors
  if (!values.category) {
    errors.category = "Please choose a ctegory";
  }
  return errors;
}
