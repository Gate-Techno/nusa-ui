import { HeadMetaData } from "@/components/layout/HeadMetaData";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionContainer } from "@/components/layout/SectionContainer";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <PageContainer>
      <HeadMetaData title="Home" metaDescription="Home page of Nusa UI" />
      <SectionContainer centerContent>
        <main className="flex items-center justify-center min-h-screen">
          <Link href={"/"}>
            <h1 className="text-3xl font-bold underline">Dashboard</h1>
          </Link>
        </main>
      </SectionContainer>
    </PageContainer>
  );
}
