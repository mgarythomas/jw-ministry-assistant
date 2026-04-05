-- CreateTable
CREATE TABLE "Territory" (
    "id" UUID NOT NULL,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mapUrl" TEXT,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Territory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TerritoryAssignment" (
    "id" UUID NOT NULL,
    "territoryId" UUID NOT NULL,
    "publisherId" UUID NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "TerritoryAssignment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TerritoryAssignment" ADD CONSTRAINT "TerritoryAssignment_territoryId_fkey" FOREIGN KEY ("territoryId") REFERENCES "Territory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
