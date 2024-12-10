import { useState } from 'react'
import { Row, Col, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { manageFavourites } from '../redux/actions'

const Job = ({ data }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  // Recupera la lista dei preferiti e garantisci che sia un array
  const favouritesCompanies = useSelector((state) => state.favourites.content)

  const handleAddCompany = (companyName) => {
    dispatch(manageFavourites(companyName))
  }

  return (
    <Row
      className='mx-0 mt-3 p-3'
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>

        <FaHeart
          className={`ms-1 ${
            favouritesCompanies.includes(data.company_name) ? 'text-danger' : ''
          }`}
          onClick={() => handleAddCompany(data.company_name)}
        />
      </Col>
      <Col xs={9}>
        <div onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
          {data.title}
        </div>
        <Collapse in={open}>
          {/* Render HTML dinamico, fai attenzione a non avere contenuti pericolosi */}
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </Collapse>
      </Col>
    </Row>
  )
}

export default Job
