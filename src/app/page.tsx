import { Link } from "@/shared/components/Link";

export default function HomePage() {
  return (
    <div className="max-w-100 p-5 text-center my-15 mx-auto">
      <h1>Mini‑OGame</h1>
      <p>Добро пожаловать в браузерную стратегию!</p>

      <div className="mt-7.5 flex flex-col gap-2.5">
        <Link text="Войти" href="/login" bgColor="bg-blue-600" />

        <Link text="Регистрация" href="/register" bgColor="bg-gray-500" />
      </div>
    </div>
  );
}
