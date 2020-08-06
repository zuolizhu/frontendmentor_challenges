// form validation
import * as yup from 'yup';

const genErrorMsg = 'This field is required';

const regSchema = yup.object().shape({
  name: yup.string().required(genErrorMsg),
  email: yup.string().required(genErrorMsg).email('Email format is not valid'),
  companyname: yup.string().required(genErrorMsg),
  title: yup.string().required(genErrorMsg),
  message: yup.string().required(genErrorMsg)
});

export { regSchema };