import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Loader, Input, Container, Button, Pagination } from 'semantic-ui-react'
import { fetchFirstTableData, sortColumnActionFirst, searchActionFirst, filterFirstTable, resetFirstTable, selectPage } from '../redux/actions/firstTableActions';

export default function FirstTable() {
  const dispatch = useDispatch();
  const { isLoading, items, sortColumn, sortDirection, searchValue, currentPage, perPage } = useSelector(state => state.firstTable);


  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchFirstTableData())
    }
  }, []);

  function getPageItems(items, page, perPage) {
    const indexFrom = (page - 1) * perPage;
    const indexTo = page * perPage;
    return items.slice(indexFrom, indexTo);
  }

  return (
    <React.Fragment>
      {isLoading && <Loader active inline='centered' />}
      <Container textAlign='right'>
        <Input icon='search' placeholder='Search...'
          onChange={(e) => dispatch(searchActionFirst(e.target.value))}
          value={searchValue} className='search'
        />
        <Button content='Filter out' primary
          onClick={() => dispatch(filterFirstTable())}
        />
        <Button content='Cancel' secondary
          onClick={() => dispatch(resetFirstTable())}
        />
      </Container>
      {Object.keys(items).length > 0 ?
        <Table striped sortable={true} celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={sortColumn === 'title' ? sortDirection : null}
                onClick={() => dispatch(sortColumnActionFirst('title'))}
              >Title</Table.HeaderCell>
              <Table.HeaderCell
                sorted={sortColumn === 'description' ? sortDirection : null}
                onClick={() => dispatch(sortColumnActionFirst('description'))}
              >Description</Table.HeaderCell>
              <Table.HeaderCell
                sorted={sortColumn === 'phone' ? sortDirection : null}
                onClick={() => dispatch(sortColumnActionFirst('phone'))}
              >Phone</Table.HeaderCell>
              <Table.HeaderCell
                sorted={sortColumn === 'billing' ? sortDirection : null}
                onClick={() => dispatch(sortColumnActionFirst('billing'))}
              >Billing</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {getPageItems(items, currentPage, perPage).map(project =>
              <Table.Row key={project.billing}>
                <Table.Cell>{project.title}</Table.Cell>
                <Table.Cell>{project.description}</Table.Cell>
                <Table.Cell singleLine>{project.phone}</Table.Cell>
                <Table.Cell>{project.billing}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell textAlign='center' colSpan='4'>
                <Pagination
                  activePage={currentPage}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={10}
                  totalPages={items.length / perPage}
                  onPageChange={(e, data) => dispatch(selectPage(data.activePage))}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table> : ''}
    </React.Fragment>
  )
}