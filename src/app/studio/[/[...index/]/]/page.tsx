'use client'

/**
 * This route is responsible for rendering the Sanity Studio.
 * It uses the catch-all route to allow for internal studio navigation.
 */

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity/config'


export default function StudioPage() {
    return <NextStudio config={config} />
}