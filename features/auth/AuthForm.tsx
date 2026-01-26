"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { authFormSchema, AuthFormValues } from "./authSchema";

interface AuthFormProps {
  title: string;
  submitText: string;
  apiUrl: string;
  successText: string;
  isLogin?: boolean;
}

export function AuthForm({
  title,
  submitText,
  apiUrl,
  successText,
  isLogin = false,
}: AuthFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AuthFormValues> = async ({
    email,
    password,
  }) => {
    const result = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (result.ok) {
      toast.success(successText);
      router.push(isLogin ? "/resources" : "/login");
    } else {
      toast.error(isLogin ? "Неверный логин или пароль" : "Ошибка регистрации");
    }
  };

  return (
    <div className="max-w-75 my-10 mx-auto">
      <h2 className="text-lg font-medium mb-1">{title}</h2>

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

        <Button text={submitText} type="submit" className="max-w-[60%]" />
      </form>
    </div>
  );
}
