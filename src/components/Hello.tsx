import * as React from 'react'
import {Button} from 'antd'

export interface HelloProps {
    name: string,
    mes: string
}

export const Hello = (props: HelloProps) => <h1>Hello from {props.name} and {props.mes}!<Button>hello antd</Button>
</h1>;

