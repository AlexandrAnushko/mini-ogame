import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "60px auto",
        textAlign: "center",
        padding: 20,
      }}
    >
      <h1>Mini‑OGame</h1>
      <p>Добро пожаловать в браузерную стратегию!</p>

      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Link
          href="/login"
          style={{
            padding: "10px 20px",
            background: "#0070f3",
            color: "white",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          Войти
        </Link>

        <Link
          href="/register"
          style={{
            padding: "10px 20px",
            background: "#555",
            color: "white",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          Регистрация
        </Link>
      </div>
    </div>
  );
}
