import { Spinner } from "react-bootstrap"

function Loader() {
  return (
    <>
  <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
</>
  )
}

export default Loader