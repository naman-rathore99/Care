"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomForm from "../CustomForm"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { createUser } from "@/lib/actions/patientAction"
import { useRouter } from "next/navigation";


export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON="skeleton"
}


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})


const PatientsForm = () => {  

    const router = useRouter();


    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        }
    })
  

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof UserFormValidation>) {
        setIsLoading(true);

        try {
            const user = {
                name: values.name,
                email: values.email,
                phone: values.phone,
            };

            const newUser = await createUser(user);

            if (newUser) {
                router.push(`/patients/${newUser.$id}/register`);
            }
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
                <section className="space-y-4 mb-12">
                    <h1 className="text-24-bold">Hi there, welcome to care</h1>
                    <p className="text-dark-700">Schedule your appointment</p>
                </section>
                <CustomForm
                fieldtype={FormFieldType.INPUT}
                    control={form.control}
                    name="username"
                    label="Username"
                    placeholder="Enter your username"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />
                <CustomForm
                fieldtype={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="email"
                    placeholder="your email"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />
                <CustomForm
                fieldtype={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone numbeer"
                    label="phone number"
                    placeholder="+1 (123) 456-7890"

                />
                <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
            </form>
        </Form>
  )
}

export default PatientsForm