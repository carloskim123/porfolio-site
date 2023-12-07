/// <reference types="vite/client" />

interface Quote {
    param: string
}

interface Project {
    name: string
    id: number
    img: string
    tech_stack: string
    project_url: string
    view_live: string | null
    description: string
}

type Link = {
    url?: string
    title?: string
    icon?: string
    pathname?: string
    path?: string
}

type Accordion = {
    title: string,
    content: string
}

interface MotionWrapperProps {
    children: React.ReactNode
}

interface ContactProps { }

interface FormErrors {
    name: string
    email: string
    message: string
}

interface Errors {
    name?: string
    email?: string
    message?: string
}
