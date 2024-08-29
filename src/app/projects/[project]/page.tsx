import { useRouter } from "next/router";

interface Props {
  params: { nickname: string };
  searchParams: { lang: string };
}

export default function Project({ params, searchParams }: Props) {
  return (
    <>
      <h1 className="text-xl font-bold">
        Perfil: {params.nickname} (Idioma: {searchParams.lang})
      </h1>
    </>
  );
}
