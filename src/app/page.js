import Head from "next/head";
import BootstrapCarousel from "../../carousels/Bootstrap";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gray-300 bg-opacity-100">
        <div>
          <h1 class="text-center text-white">justin lu photography</h1>
          <BootstrapCarousel />
        </div>

      </main>
    </>
  )
}
