CREATE TABLE IF NOT EXISTS "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"content" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
