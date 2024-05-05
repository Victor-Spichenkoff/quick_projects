-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_to-do" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "checked" BOOLEAN DEFAULT false,
    "collection_id" INTEGER NOT NULL
);
INSERT INTO "new_to-do" ("checked", "collection_id", "id", "label") SELECT "checked", "collection_id", "id", "label" FROM "to-do";
DROP TABLE "to-do";
ALTER TABLE "new_to-do" RENAME TO "to-do";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
