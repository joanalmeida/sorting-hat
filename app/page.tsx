import SortingHat from "@/components/sortingHat";
import Students from "@/components/students";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl">Welcome to Hogwarts!</h1>
      <br />
      <SortingHat />
      <Students />
    </>
  );
}
