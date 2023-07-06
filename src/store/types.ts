import { ReactNode } from "react"

export type ContainerProps = {
    columns ?: number,
    rows ?: number,
    styles ?:any,
    children?:any,
    className?:string
}
export type TextFieldProps = {
    title:string,
    styles?:any
}
export type TextInputFieldProps = {
    name?:string,
    type?:string,
    id?:string,
    placeholder?:string,
    onChange?:any,
    onClick ?:any,
    styles ?:any,
    disabled?:boolean,
    value?:any,
    isChecked?:boolean,
    isValid?:any,
    icon?:ReactNode,
    required?:boolean
}

export type RegisteredUser = {
    displayName:string,
    email:string,
    password:string,
    confirmpassword:string
}

export type LoggedInUser = {
    username:string,
    password:string
}