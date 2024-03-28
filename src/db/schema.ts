import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";

export const notes = pgTable('notes', {
    id: serial('id').primaryKey(),
    title: text('name').notNull(),
    content: text('content'),
    createdAt: timestamp('created_at').notNull().defaultNow()
})