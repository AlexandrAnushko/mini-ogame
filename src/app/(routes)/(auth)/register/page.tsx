import { AuthForm } from "@/features/auth/AuthForm";

export default function RegisterPage() {
  return (
    <AuthForm
      title="Регистрация"
      successText="Регистрация успешна!"
      submitText="Зарегистрироваться"
      apiUrl="/api/auth/register"
    />
  );
}
