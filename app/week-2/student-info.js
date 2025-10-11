import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2>Yash Pandya</h2>
      <h2>Dev Chatrala</h2>
      <h2>Mohammed Mohin</h2>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/YashPandya10/CPRG306-Assignments.git"
          target="_blank"
        >
          Visit my repository
        </Link>
      </p>
    </div>
  );
}
