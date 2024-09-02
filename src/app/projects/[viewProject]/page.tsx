import { useRouter } from "next/router";
import projects from "../../../../projects.json";
interface Props {
  params: { project: string };
  searchParams: { lang: string };
}

export default function Project({ params, searchParams }: Props) {
  return (
    <>
      <h1 className="text-xl font-bold">{params.project}</h1>
    </>
  );
}
