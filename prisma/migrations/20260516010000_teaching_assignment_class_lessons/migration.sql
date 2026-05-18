ALTER TABLE "TeachingAssignment"
ADD COLUMN "classGroup" TEXT,
ADD COLUMN "lessonStart" INTEGER,
ADD COLUMN "lessonEnd" INTEGER,
ADD COLUMN "fullDay" BOOLEAN NOT NULL DEFAULT false;
