"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { sendMessage } from "@/actions/sendMessage";
import { useState, useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
export default function ContactForm() {
  const t = useTranslations("contact.form");
  const form = useForm<z.infer<typeof contactFormSchema>>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Debug: Check if the cookie exists
    const lastSubmission = document.cookie
      .split("; ")
      .find((row) => row.startsWith("last_submission="));
    if (lastSubmission) {
      console.log("Last submission cookie found:", lastSubmission);
    } else {
      console.log("No last submission cookie found");
    }
  }, []);

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    try {
      const result = await sendMessage(data);
      if (result.success) {
        form.reset();
        toast({
          title: "Success",
          description: result.success,
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
        // Debug: Log cookie after successful submission
        console.log("Cookies after submission:", document.cookie);
      } else if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `An unexpected error occurred: ${error}`,
        variant: "destructive",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-[600px] space-y-6 rounded-lg border border-border p-4"
        >
          <div className="flex gap-4 max-sm:flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{t("name")}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t("placeholderName")} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{t("email")}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t("placeholderEmail")} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("message")}</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder={t("placeholderMessage")} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : t("send")}
          </Button>
        </form>
      </Form>
    </>
  );
}
