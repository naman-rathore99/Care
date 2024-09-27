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
import Image from 'next/image'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
interface CustomProps {
    control: Control<any>,
    fieldtype: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: string,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
    switch (props.fieldtype) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {props.iconSrc && (
                        <Image
                            src={props.iconSrc}
                            height={24}
                            width={24}
                            alt={props.iconAlt || "icon"}
                            className="ml-2"
                        />
                    )}
                    <FormControl>
                        <Input
                            placeholder={props.placeholder}
                            {...field}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            );
        case FormFieldType.TEXTAREA:
            return (
                <FormControl>
                    <textarea
                        placeholder={props.placeholder}
                        {...field}
                        className="shad-textArea"
                        disabled={props.disabled}
                    />
                </FormControl>
            );
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry="US"
                        placeholder={props.placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className="input-phone"
                    />
                </FormControl>
            );
        // case FormFieldType.CHECKBOX:
        //     return (
        //         <FormControl>
        //             <div className="flex items-center gap-4">
        //                 <Checkbox
        //                     id={props.name}
        //                     checked={field.value}
        //                     onCheckedChange={field.onChange}
        //                 />
        //                 <label htmlFor={props.name} className="checkbox-label">
        //                     {props.label}
        //                 </label>
        //             </div>
        //         </FormControl>
        //     );

    // switch (props.fieldtype) {
    //     case FormFieldType.INPUT:
    //         return (
    //             <div className="flex rounedd-md border border-dark-500 bg-dark-400">
    //                 {
    //                     iconSrc && (
    //                         <Image src={iconSrc}
    //                             alt={iconAlt || "Icon"}
    //                             height={24}
    //                             width={24}
    //                             className='mr-2' />
    //                     )
    //                 }

    //                 <FormControl>
    //                     <Input placeholder={placeholder}
    //                     {...field}  className='shad-input border-0'/>
                        
    //                 </FormControl>
    //             </div>
    //         )

    //         break;

    }
    
}
const CustomForm = (props: CustomProps) => {
    const { control, fieldtype, name, label } = props

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {fieldtype !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>
                            {label}
                        </FormLabel>
                    )}
                    <RenderInput field={field} props={props} />
                    <FormMessage className='shad-error' />
                </FormItem>
            )}
        />
    )
}

export default CustomForm