-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "productId" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
