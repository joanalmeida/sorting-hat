"use client";

import houseSelector from "@/lib/houseSelector";
import Image from "next/image";
import { KeyboardEvent, useState } from "react";

import griffindorLogo from "../public/gryffindor.png";
import ravenclawLogo from "../public/ravenclaw.png";
import hufflepuffLogo from "../public/hufflepuff.png";
import slytherinLogo from "../public/slytherin.png";

const ENTER_CODE = "Enter";

export default function Students() {
  // Houses state
  const [gryffindorStudents, setGriffindorStudents] = useState<string[]>([]);
  const [ravenclawStudents, setRavenclawStudents] = useState<string[]>([]);
  const [hufflepuffStudents, setHufflepuffStudents] = useState<string[]>([]);
  const [slytherinStudents, setSlytherinStudents] = useState<string[]>([]);

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

  // Student controlled input
  const [student, setStudent] = useState<string>("");
  const handleStudentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent(e.target.value);
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === ENTER_CODE) {
      let randomHouse = houseSelector();
      housesMap[randomHouse].update([...housesMap[randomHouse].list, student]);
      setStudent("");
    }
  };

  const toListItem = (student: string) => {
    return (
      <li className="text-center p-1">
        <span className="font-mono">{student}</span>
      </li>
    );
  };

  return (
    <section className="p-4 flex flex-col items-center">
      <input
        type="text"
        name="student"
        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none my-12 focus:within:border-slate-100"
        value={student}
        onChange={handleStudentInputChange}
        onKeyDown={handleKeyDown}
      />
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
