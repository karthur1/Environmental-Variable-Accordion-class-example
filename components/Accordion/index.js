import { useState } from "react"

export default function Accordion({
  term,
  code,
  title,
  credits,
  desciption
}) {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
        Term: {term}
        <div onClick={() => setIsActive(!isActive)}>
          {code}
          {title}
          {credits}
          <div>{isActive ? '¯\_(ツ)_/¯' : '≧◔◡◔≦'}</div>
        </div> 

        {isActive && <div>{desciption}</div>}
    </>
  )
}