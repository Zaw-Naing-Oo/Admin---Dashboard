import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Group,  Resize, Sort, Filter, Edit, ContextMenu, Page, PdfExport, ExcelExport, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy' 
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header title="Orders" category="Page" />
        <GridComponent 
          id='gridcomp'
          dataSource={ordersData}
          allowPaging = {true}
          allowSorting
        >
          <ColumnsDirective>
            {ordersGrid.map((item,index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group, PdfExport, ExcelExport, ContextMenu, Resize, Edit]}/>
        </GridComponent>
    </div>
  )
}

export default Orders