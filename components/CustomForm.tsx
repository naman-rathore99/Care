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
import Image from 'next/image'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

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
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode
}


const RenderInput = ({ field, props }: { field: any, props: CustomProps }) => {
    const { fieldType, iconAlt, iconSrc, placeholder } = props

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className='flex rouned-md border  border-dark-500 bg-dark-400'>
                    {iconSrc && <Image src={iconSrc} alt={iconAlt || "icon"} width={24} height={24} className='ml-2' />}
                    <FormControl>
                        <Input placeholder={placeholder}
                            {...field} className='shad-input border-0' />
                    </FormControl>
                </div>
            )

            break;

        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput defaultCountry='US' placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className='input-phone'
                    />
                </FormControl>
            )
        default:
            break;
    }
}

const CustomForm = (props: CustomProps) => {
    const { control, fieldType, name, label, } = props


    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex-1'>
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    <RenderInput field={field} props={props} />
                    <FormMessage className='shad-error' />
                </FormItem>
            )}
        />)
}

export default CustomForm