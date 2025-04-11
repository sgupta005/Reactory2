CREATE TYPE "public"."file_type" AS ENUM('jsx', 'tsx', 'js', 'ts', 'css', 'scss', 'json', 'other');--> statement-breakpoint
CREATE TABLE "component_files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"componentId" uuid,
	"fileName" text NOT NULL,
	"content" text NOT NULL,
	"fileType" "file_type" NOT NULL,
	"isEntryFile" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "component_files" ADD CONSTRAINT "component_files_componentId_components_id_fk" FOREIGN KEY ("componentId") REFERENCES "public"."components"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "components" DROP COLUMN "code";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");