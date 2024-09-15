"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomForm from "../CustomForm"
import SubmitButton from "../SubmitButton"
import { useState } from "react"

export enum FormFieldType {
  INPUT = "input",
  PHONE_INPUT = "phonenumber",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton ",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function PatientForm() {

  const [isLoading,setIsloading]=useState(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there ✋</h1>
          <p className="text-dark-700">
            Schedule your appointment
          </p>
        </section>
        <CustomForm
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name"
          placeholder="jhon Doe"
          iconAlt="uesr"
          iconSrc="/assets/icons/user.svg"
          control={form.control}
        />
        <CustomForm
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Your Email Address"
          placeholder="jhondoe@example.com"
          iconAlt="email"
          iconSrc="/assets/icons/email.svg"
          control={form.control}
        />
        <CustomForm
          fieldType={FormFieldType.PHONE_INPUT}
          name="Phone"
          label="Phone No"
          placeholder="+91 123456789"

          control={form.control}
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}
