import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@nextui-org/table';

import getDataTable from '../../helpers/getDataTable';

function HourlyTable({ data }) {
  const dataTable = getDataTable(data);
  return (
    <Table
      className='overflow-x-auto'
      aria-label='Datos del clima en las próximas horas'
    >
      <TableHeader>
        <TableColumn key='date'>HORA</TableColumn>
        <TableColumn key='temp'>TEMP.</TableColumn>
        <TableColumn className='hidden' key='condition'>
          CONDICIÓN
        </TableColumn>
        <TableColumn key='cloud'>NUBOSIDAD (%)</TableColumn>
        <TableColumn key='wind'>VIENTO (km/h)</TableColumn>
        <TableColumn key='humidity'>HUMEDAD (%)</TableColumn>
      </TableHeader>
      <TableBody items={dataTable}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default HourlyTable;
