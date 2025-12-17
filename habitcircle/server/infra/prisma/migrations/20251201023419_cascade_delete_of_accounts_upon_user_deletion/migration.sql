-- DropForeignKey
ALTER TABLE "public"."CredentialsAccount" DROP CONSTRAINT "CredentialsAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OAuthAccount" DROP CONSTRAINT "OAuthAccount_userId_fkey";

-- AddForeignKey
ALTER TABLE "CredentialsAccount" ADD CONSTRAINT "CredentialsAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuthAccount" ADD CONSTRAINT "OAuthAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
