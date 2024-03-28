import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { Hono } from "hono"
import { z } from 'zod'
import { notes } from "./db/schema"

type Env = {
	DATABASE_URL: string
}

const app = new Hono<{ Bindings: Env }>()

app.get('/', (ctx) => {
	return ctx.json({ message: 'Hello Hono' })
})

app.post('/note', async (ctx) => {
	const { title, content } = z.object({
		title: z.string(),
		content: z.string().optional(),
	}).parse(await ctx.req.json())


	const sql = neon(ctx.env.DATABASE_URL!)
	const db = drizzle(sql)
	await db.insert(notes).values({ title, content })
	return ctx.json({ success: true, message: 'create note successfully' })
})

app.get('/note', async (ctx) => {

	const sql = neon(ctx.env.DATABASE_URL!)
	const db = drizzle(sql)
	const allNotes = await db.select().from(notes)
	return ctx.json({ success: true, allNotes })
})



export default app