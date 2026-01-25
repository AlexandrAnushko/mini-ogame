import { Path, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes } from "react";

type InputProps<T extends object> = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  name: Path<T>;
  type?: "text" | "email" | "password" | "number";
  register: UseFormRegister<T>;
  error?: string;
  disabled?: boolean;
  className?: string;
  classNameContainer?: string;
};

export const Input = <T extends object>({
  placeholder,
  name,
  type = "text",
  register,
  error,
  disabled,
  className,
  classNameContainer,
  ...rest
}: InputProps<T>) => (
  <div className={cn("relative", classNameContainer)}>
    <input
      id={String(name)}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      aria-describedby={`${String(name)}-error ${String(name)}-description`}
      aria-invalid={!!error}
      {...register(name)}
      data-slot="input"
      className="w-full border border-gray-200 rounded px-3 py-2"
      //   className={cn(
      //     "text-white placeholder:text-white selection:bg-primary selection:text-primary-foreground dark:bg-transparent border-input flex h-9 w-full min-w-0 border-b bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      //     !error && "focus-visible:border-accent",
      //     "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      //     error && "border-red-500 focus:border-red-500",
      //     disabled && "opacity-50 cursor-not-allowed",
      //     className,
      //   )}
      {...rest}
    />
    {error && (
      <p
        id={`${String(name)}-error`}
        className="absolute left-76 top-3.5 text-xs text-red-500 px-3 min-w-80"
      >
        {error}
      </p>
    )}
  </div>
);
