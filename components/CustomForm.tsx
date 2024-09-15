'use client'

import React from 'react'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'
import { FormFieldType } from './forms/PatientForm'

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: String,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disable?: boolean,
    dateFormat?: string,
    showTimeSelect?: string,
    children: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}

const CustomForm = ({ control, fieldType, name, label }: CustomProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex-1'>
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                </FormItem>
            )}
        />)
}

export default CustomForm