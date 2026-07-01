import { redirect } from "next/navigation";

type PageProps = { params: Promise<{ asset_id: string }> };

export default async function RegistryAssetRedirectPage({ params }: PageProps) {
  const { asset_id } = await params;
  redirect(`/wiki/assets/${asset_id}`);
}
