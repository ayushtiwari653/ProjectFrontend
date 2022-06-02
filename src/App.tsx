import React from 'react';
import './App.css';
import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban';
import { DataManager } from '@syncfusion/ej2-data';
import Button from './button'
import HeaderButton from './HeaderButton';
import { color } from '@mui/system';
import Delete from './Delete';
import DeleteButton from './DeleteButton';
import { enableRipple } from '@syncfusion/ej2-base';
import ExportExcel from './components/ExportExcel';

export enum kanbanTask{
  Backlog,
  To_Do,
  In_Progress,
  Testing,
  Done
}

class App extends React.Component {
  public kanbanRemoteDatasource: DataManager = new DataManager(
    {
      url: 'https://localhost:7079/getAllTask',
      crossDomain: true
    }
  );


  public cardTooltipTemplate(data: any): JSX.Element {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Assign To :</td>
              <td>{data.assignTo}</td>
            </tr>
            <tr></tr>
            <td>Task ID :</td>
            <td>{data.tId}</td>
            <tr></tr>
            <td>Project Id :</td>
            <td>{data.pId}</td>
            <tr></tr>
            <td>Task Details : </td>
            <td>{data.taskDetails}</td>
            <tr></tr>
            <td>Assign By : </td>
            <td>{data.assignBy}</td>
          </tbody>
        </table>

      </div>
    );
  }
  render() {
    return (
      <div className="mt-3 px-4 max-height-test mb-8">
        <div className="kanban-control-section">
          <div className="col-lg-12 control-section">
            <div className="control-wrapper">
              
              <KanbanComponent dataSource={this.kanbanRemoteDatasource} keyField="taskStatusId"


                cardSettings={{ contentField: "taskDetails", headerField: "tId", selectionType: "Multiple",
                 grabberField: "Color" , }}

                width="100%" height="100%" swimlaneSettings={{ keyField: "assignTo" }}

                enableTooltip={true} tooltipTemplate={this.cardTooltipTemplate}>

                <div className="app">
                  <div className="app_nav">
                    <h1>Kanban Board</h1>
                  </div>
                </div>
                <HeaderButton />
                

                <ColumnsDirective>
                  <ColumnDirective headerText='Backlog' keyField={1}></ColumnDirective>
                  <ColumnDirective headerText='To Do' keyField={2}></ColumnDirective>
                  <ColumnDirective headerText='In Progress' keyField={3}></ColumnDirective>
                  <ColumnDirective headerText='Testing' keyField={4}></ColumnDirective>
                  <ColumnDirective headerText='Done' keyField={5}></ColumnDirective>

                </ColumnsDirective>

              </KanbanComponent>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
export default App;