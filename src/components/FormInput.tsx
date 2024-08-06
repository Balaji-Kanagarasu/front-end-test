import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface FormInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errors: Record<string, any>;
  variant?: "outlined" | "standard" | "filled";
  type?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  control,
  errors,
  type = "text",
  variant = "filled",
}) => {
  const [hide, setHide] = useState(true);

  const handleClickShowPassword = () => {
    setHide(!hide);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          label={label}
          variant={variant}
          type={hide ? type : "text"}
          {...field}
          value={field.value ?? ""}
          fullWidth
          helperText={errors[name]?.message}
          error={!!errors[name]}
          {...{
            InputProps:
              type === "password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {hide ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined,
          }}
        />
      )}
    />
  );
};

export default FormInput;
