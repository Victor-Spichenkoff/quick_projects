-- CreateTable
CREATE TABLE "to-do" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL,
    "collection_id" INTEGER NOT NULL
);
