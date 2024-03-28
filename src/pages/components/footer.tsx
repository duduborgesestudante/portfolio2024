import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <p className='foot '>
        <a target='_blank' href="https://github.com/duduborges"><FaGithub className='git' color={"black"} size={25} /></a>
        <a className='tex' >Eduardo Borges &copy;</a>
        <a target='_blank' href="https://www.linkedin.com/in/eduardo-borges-cambraia-809225269/"><FaLinkedin className='linkd' size={25} color='blue' /></a>
      </p>

    </footer>
  )
}
export { Footer }