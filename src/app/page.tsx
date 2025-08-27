"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginSchema, type TLoginFormData } from "@/lib/validations";
import { userApi } from "@/lib/api";
import { storage } from "@/lib/storage";
import {TUser} from "@/types";

export default function LoginPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Check if user is already authenticated
  useEffect(() => {
    setIsClient(true);
    if (storage.isAuthenticated()) {
      router.push("/dashboard");
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors , isValid },
  } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
    mode:"onChange",
  });

  const loginMutation = useMutation({
    mutationFn: async (formData: TLoginFormData) => {
      const res = await userApi.getRandomUser();
      const user:TUser = { ...res.results[0], phoneNumber: formData.phoneNumber };
      return user;
    },
    onSuccess: (user) => {
      storage.setUser(user);
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    },
  });


  const onSubmit = (data: TLoginFormData) => {
    console.log(data)
    loginMutation.mutate(data);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-600">
              Enter your Iranian mobile number to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="09xxxxxxxxx"
                  error={!!errors.phoneNumber}
                  {...register("phoneNumber")}
                  className="w-full"
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: 09xxxxxxxxx, +989xxxxxxxxx, 00989xxxxxxxxx
                </p>
              </div>

              <Button
                type="submit"
                className="w-full"
                loading={loginMutation.isPending}
                disabled={loginMutation.isPending || !isValid  }
              >
                {loginMutation.isPending ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
