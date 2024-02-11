import { useController } from "react-hook-form";

export const InputController = ({
  control,
  nameInput,
  typeField,
  labelInput,
}) => {
  const {
    field: { name, onChange, ref, value },
    fieldState: { invalid, error },
    formState: { isSubmitting },
  } = useController({
    name: nameInput,
    control,
    rules: { required: true },
  });
  return (
    <div className="mb-4">
      <label
        data-testid={`${name}_input_label`}
        htmlFor={name}
        className="block text-lg font-bold text-secondary"
      >
        {labelInput}
        <input
          type={typeField}
          id={name}
          disabled={isSubmitting}
          name={name}
          ref={ref}
          onChange={onChange}
          value={value}
          data-testid={`${name}_input_field`}
          className={`h-full w-full rounded-lg border-2 border-inputBackground bg-inputBackground  px-3 py-3 text-text transition duration-500 ${
            invalid ? " focus:border-error" : " focus:border-success-500"
          } focus:outline-none ${invalid && "border-error"}`}
        />
      </label>
      <p data-testid={`${name}_input_error`} className="text-error">
        {error?.message && error.message}
      </p>
    </div>
  );
};