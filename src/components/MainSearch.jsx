import { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobs, setSearchQuery, setSearchResults } from '../redux/actions'
import { use } from 'react'

const MainSearch = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery)
  const jobs = useSelector((state) => state.search.searchResults)
  const dispatch = useDispatch()

  const [query, setQuery] = useState(searchQuery || '')

  const handleChange = (e) => {
    setQuery(e.target.value) // Aggiorna lo stato locale
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(fetchJobs(query))
    dispatch(setSearchQuery(query))
  }

  console.log('MainSearch - jobs', jobs)

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query} // Stato locale controllato
              onChange={handleChange} // Aggiorna lo stato locale
              placeholder='Type and press Enter'
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
