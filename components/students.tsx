"use client";

import houseSelector from "@/lib/houseSelector";
import Image from "next/image";
import { useState } from "react";

import griffindorLogo from "../public/gryffindor.png";
import ravenclawLogo from "../public/ravenclaw.png";
import hufflepuffLogo from "../public/hufflepuff.png";
import slytherinLogo from "../public/slytherin.png";

const studentsArr: Array<string> = [
  "agos",
  "belcha",
  "chucho",
  "coqui",
  "dardo",
  "juli",
  "kami",
  "manu",
  "nacho",
  "nati",
  "rueditas",
  "santoro",
];

export default function Students() {
  // Houses state
  const [gryffindorStudents, setGriffindorStudents] = useState<string[]>([]);
  const [ravenclawStudents, setRavenclawStudents] = useState<string[]>([]);
  const [hufflepuffStudents, setHufflepuffStudents] = useState<string[]>([]);
  const [slytherinStudents, setSlytherinStudents] = useState<string[]>([]);

  const [students, setStudents] = useState<string[]>(studentsArr);

  const housesMap = {
    Gryffindor: {
      list: gryffindorStudents,
      update: setGriffindorStudents,
    },
    Ravenclaw: {
      list: ravenclawStudents,
      update: setRavenclawStudents,
    },
    Hufflepuff: {
      list: hufflepuffStudents,
      update: setHufflepuffStudents,
    },
    Slytherin: {
      list: slytherinStudents,
      update: setSlytherinStudents,
    },
  };

  // const studentsMap: Array<string> = [
  //   "agos",
  //   "belcha",
  //   "chucho",
  //   "coqui",
  //   "dardo",
  //   "juli",
  //   "kami",
  //   "manu",
  //   "marta",
  //   "nacho",
  //   "nati",
  //   "santoro",
  // ];

  const handleStudentInputChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const student = e.target.value;
    setStudents(students.filter((s) => s !== student));
    let chosenHouse = houseSelector();
    let audio = new Audio(`/audios/${student.toLowerCase()}.mp3`);
    audio.addEventListener("ended", (ev) => {
      let houseAudio = new Audio(`/audios/${chosenHouse.toLowerCase()}.mp3`);
      houseAudio.addEventListener("ended", () => {
        housesMap[chosenHouse].update([
          ...housesMap[chosenHouse].list,
          student,
        ]);
      });
      houseAudio.play();
    });
    audio.play();
  };
  const toListItem = (student: string) => {
    if (student === "" || student === "Choose...") return;
    return (
      <li key={student} className="text-center p-1">
        <span className="font-mono">{student}</span>
      </li>
    );
  };

  return (
    <section className="p-4 flex flex-col items-center">
      <select
        name="student"
        placeholder="Choose..."
        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none my-12 focus:within:border-slate-100"
        onChange={handleStudentInputChange}
      >
        <option selected className="text-slate-500" value="Choose...">
          Choose...
        </option>
        {students.map((student) => {
          return (
            <option className="text-slate-500" key={student} value={student}>
              {student}
            </option>
          );
        })}
      </select>
      <div className="container flex">
        <div>
          <Image
            src={griffindorLogo}
            alt={"Gryffindor logo"}
            className="my-2 w-40 h-40"
          />
          <ul role="list">{gryffindorStudents.map(toListItem)}</ul>
        </div>
        <div>
          <Image
            src={ravenclawLogo}
            alt={"Ravenclaw logo"}
            className="my-2 w-40 h-40"
          />
          <ul role="list">{ravenclawStudents.map(toListItem)}</ul>
        </div>
        <div>
          <Image
            src={hufflepuffLogo}
            alt={"Hufflepuff logo"}
            className="my-2 w-40 h-40"
          />
          <ul role="list">{hufflepuffStudents.map(toListItem)}</ul>
        </div>
        <div>
          <Image
            src={slytherinLogo}
            alt={"Slytherin logo"}
            className="my-2 w-40 h-40"
          />
          <ul role="list">{slytherinStudents.map(toListItem)}</ul>
        </div>
      </div>
    </section>
  );
}
