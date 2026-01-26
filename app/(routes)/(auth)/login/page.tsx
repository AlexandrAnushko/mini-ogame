import { AuthForm } from "@/features/auth/AuthForm";

export default function LoginPage() {
  return (
    <AuthForm
      title="Вход"
      successText="Авторизация успешна!"
      submitText="Войти"
      apiUrl="/api/auth/login"
    />
  );
}
