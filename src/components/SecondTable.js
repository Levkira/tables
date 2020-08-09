import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Loader, Input, Container, Button } from 'semantic-ui-react'
import { fetchSecondTableData, sortColumnActionSecond, searchActionSecond, filterSecondTable, resetSecondTable } from '../redux/actions/secondTableActions';

export default function SecondTable() {
  const dispatch = useDispatch();
  const { secondTable } = useSelector(state => state);

  useEffect(() => {
    if (secondTable.items.length === 0) {
      dispatch(fetchSecondTableData())
    }
  }, []);

  return (
    <React.Fragment>
      {secondTable.isLoading && <Loader active inline='centered' />}
      <Container textAlign='right'>
        <Input icon='search' placeholder='Search...'
          onChange={(e) => dispatch(searchActionSecond(e.target.value))}
          value={secondTable.searchValue}
        />
        <Button content='Filter out' primary onClick={() => dispatch(filterSecondTable())}
        />
        <Button content='Cancel' secondary onClick={() => dispatch(resetSecondTable())}
        />
      </Container>
      {Object.keys(secondTable.items).length > 0 ?
        <Table striped sortable={true} celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={secondTable.sortColumn === 'firstName' ? secondTable.sortDirection : null}
                onClick={() => dispatch(sortColumnActionSecond('firstName'))}
              > First Name</Table.HeaderCell>
              <Table.HeaderCell
                sorted={secondTable.sortColumn === 'lastName' ? secondTable.sortDirection : null}
                onClick={() => dispatch(sortColumnActionSecond('lastName'))}
              >Last Name</Table.HeaderCell>
              <Table.HeaderCell
                sorted={secondTable.sortColumn === 'email' ? secondTable.sortDirection : null}
                onClick={() => dispatch(sortColumnActionSecond('email'))}
              >E-mail</Table.HeaderCell>
              <Table.HeaderCell
                sorted={secondTable.sortColumn === 'phone' ? secondTable.sortDirection : null}
                onClick={() => dispatch(sortColumnActionSecond('phone'))}
              >Phone</Table.HeaderCell>
              <Table.HeaderCell
                sorted={secondTable.sortColumn === 'adress.city' ? secondTable.sortDirection : null}
                onClick={() => dispatch(sortColumnActionSecond('adress.city'))}
              >Adress</Table.HeaderCell>
              <Table.HeaderCell
                sorted={secondTable.sortColumn === 'description' ? secondTable.sortDirection : null}
                onClick={() => dispatch(sortColumnActionSecond('description'))}
              >Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {secondTable.items.map(customer =>
              <Table.Row key={customer.phone}>
                <Table.Cell>{customer.firstName}</Table.Cell>
                <Table.Cell>{customer.lastName}</Table.Cell>
                <Table.Cell>{customer.email}</Table.Cell>
                <Table.Cell singleLine>{customer.phone}</Table.Cell>
                <Table.Cell>{customer.adress.streetAddress} {customer.adress.city} {customer.adress.state} {customer.adress.zip}</Table.Cell>
                <Table.Cell>{customer.description}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table> : ''}
    </React.Fragment>
  )
}
