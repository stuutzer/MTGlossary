'use server'

import { redirect } from 'next/navigation'

export async function navigate(query: string) {
    redirect(`/?${query}`)
}