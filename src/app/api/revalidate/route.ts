import { revalidatePath } from 'next/cache'

export async function POST(req: Request) {
    const secret = process.env.REVALIDATE_SECRET
    const body = await req.json().catch(() => ({}))

    if (body.secret !== secret) {
        return Response.json({ message: 'Invalid secret' }, { status: 401 })
    }

    try {
        revalidatePath('/')
        revalidatePath('/newspage')

        return Response.json({ revalidated: true, timestamp: Date.now() })
    } catch (err) {
        return Response.json({ error: (err as Error).message }, { status: 500 })
    }
}
