import React from 'react'
import { Input } from "@/components/ui/input"
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Control } from 'react-hook-form'
import { FormFieldType } from './forms/PatientsForm'


interface CustomProps {
    control: Control<any>,
    fieldtype: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: string,
    dateFormat?:string,

}
const CustomForm = ({ control, fieldtype,name,label }: CustomProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {fieldtype !== FormFieldType.CHECKBOX && label &&( 
                        <FormLabel>
                            {label}
                        </FormLabel>
                    ) }
               </FormItem>
            )}
        />
    )
}

export default CustomForm