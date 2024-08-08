"use client";

import Programs from "../pages/programs";
import TimeTable from "../pages/timetable";
import About from "../pages/about";
import Donate from "../pages/donate";

export default function Home() {
  return (
    <main  id="main" className="flex min-h-screen w-full max-w-screen flex-col items-center justify-between p-24">
        <section className="flex flex-col items-center justify-center">
          <About/>
        </section>
        <section className="flex flex-col items-center justify-center">
          <Donate />
        </section>
        <section className="flex flex-col items-center justify-center">
          <TimeTable/>
        </section>
        <section className="flex flex-col items-center justify-center">
          <Programs />
        </section>
    </main>
  );
}
