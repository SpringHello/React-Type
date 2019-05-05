import * as React from 'react'

export interface HelloProps {
    name: string,
    mes: string
}

export const Hello = (props: HelloProps) => <h1>Hello from {props.name} and {props.mes}!</h1>;
