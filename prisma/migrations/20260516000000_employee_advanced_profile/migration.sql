ALTER TABLE "Employee"
ADD COLUMN "profilePhotoUrl" TEXT,
ADD COLUMN "startDate" TIMESTAMP(3),
ADD COLUMN "eatsAtSchool" BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "EmployeeSubject" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EmployeeSubject_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TeachingAssignment" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "weekday" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "hours" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "TeachingAssignment_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SalaryAdjustment" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "effectiveDate" TIMESTAMP(3) NOT NULL,
    "previousSalary" DOUBLE PRECISION NOT NULL,
    "newSalary" DOUBLE PRECISION NOT NULL,
    "adjustmentValue" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SalaryAdjustment_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");
CREATE UNIQUE INDEX "EmployeeSubject_employeeId_subjectId_key" ON "EmployeeSubject"("employeeId", "subjectId");
CREATE INDEX "SalaryAdjustment_employeeId_effectiveDate_idx" ON "SalaryAdjustment"("employeeId", "effectiveDate");

ALTER TABLE "EmployeeSubject" ADD CONSTRAINT "EmployeeSubject_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "EmployeeSubject" ADD CONSTRAINT "EmployeeSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TeachingAssignment" ADD CONSTRAINT "TeachingAssignment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "TeachingAssignment" ADD CONSTRAINT "TeachingAssignment_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SalaryAdjustment" ADD CONSTRAINT "SalaryAdjustment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
