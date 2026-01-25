"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const loginFormSchema = z.object({
  email: z.email("Некорректный адрес email"),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать не менее 6 символов." }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async ({
    email,
    password,
  }) => {
    // setIsAuthLoading(true);
    const result = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (result.ok) {
      toast.success("Авторизация успешна!");
      router.push("/buildings");
    } else {
      toast.error("Неверный логин или пароль");
    }
    // setIsAuthLoading(false);
  };

  return (
    <div className="max-w-75 my-10 mx-auto">
      <h2 className="text-lg font-medium mb-1">Вход</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <Input
          name="email"
          placeholder="Email"
          type="email"
          register={register}
          error={errors.email?.message}
          classNameContainer="w-full mb-3"
        />

        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          register={register}
          error={errors.password?.message}
          classNameContainer="w-full mb-3"
        />
        <Button text="Войти" type="submit" className="max-w-[50%]" />
      </form>
    </div>
  );
}
