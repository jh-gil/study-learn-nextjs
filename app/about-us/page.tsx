import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import json from '../../json/data.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'No.', width: 150 },
  { field: 'title', headerName: '제목', width: 150 },
  { field: 'content', headerName: '내용', width: 150 },
];

export const metadata = {
  title: 'About us',
}

export default function AboutUs() {
  console.log('json', typeof json);
  const _data = new Array(100000).fill(0).map((_, i) => ({
    id: i,
    title: `title` + i,
    content: `content` + 1
  }))
  console.log('_data', typeof _data);

  return (
    <div style={{height: 300, width: '100%'}}>
      <DataGrid rows={json} columns={columns}/>
    </div>
  )
}
