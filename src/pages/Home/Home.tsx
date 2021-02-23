export default function Home() {
  return (
    <>
      <p>Full stack web developer/software engineer based in Atlanta 🍑.</p>
      <h2>Links</h2>
      <ul>
        <li>
          <a href="https://github.com/brhue" target="_blank" rel="noopener noreferrer">github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bradley-donahue-093030117/" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer">
            resume
          </a>
        </li>
        <li>Email: donahue.bradley at gmail.com</li>
      </ul>
    </>
  );
}
