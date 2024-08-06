"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./FormInput";
import Button from "@mui/material/Button";

interface AuthFormProps {
  mode: "Login";
  onSubmit: (data: { username: string; password: string }) => Promise<void>;
  resetForm?: boolean;
}

// Define the validation schema using zod
const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormValues = z.infer<typeof schema>;

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit, resetForm }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (resetForm) {
      reset();
    }
  }, [resetForm, reset]);

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">{mode}</h2>
      <FormInput
        type="text"
        name="username"
        label="Username"
        control={control}
        errors={errors}
        required
      />
      <FormInput
        type="password"
        name="password"
        label="Password"
        control={control}
        errors={errors}
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="w-full"
      >
        {mode}
      </Button>
    </form>
  );
};

export default AuthForm;
