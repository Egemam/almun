import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen pb-20 gap-16">
        <section className="flex flex-col gap-5 justify-center items-center text-center bg-[url(/background.png)] bg-cover w-screen h-screen">
            <div className="">
                <h1 className="md:text-8xl text-6xl font-bold leading-tight">ALMUN&apos;25</h1>
                <h2 className="md:text-xl text-lg">Antalya High School Model United Nations Conference</h2>
            </div>
            {/*<Link className={"text-2xl p-2.5 rounded-xl bg-red-950 hover:bg-red-900 duration-150 w-fit"} href={"/apply"}>Apply Now!</Link>*/}
        </section>

        <section className="p-15 flex flex-col gap-5">
            <header className="text-center">
                <h2 className="text-6xl italic">LETTER FROM</h2>
                <h3 className="text-5xl italic">SECRETARY-GENERAL</h3>
            </header>
            <article className="text-xl text-center flex flex-col items-center justify-center">
                <p>
                    asdasd
                </p>
                <p>
                    asdasdasd
                </p>
            </article>
        </section>
    </div>
  );
}