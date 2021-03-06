/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import Job from "../components/openquery/Job";



class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Jobs</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Job
                        timeExecuted={"2019-10-30 T 11:10 UTC"}
                        query={"SELECT * FROM organisation.confidential_dataset.table"}
                        jobStatus={"running"}
                        jobId={"123"}
                    />
                    <Job
                        timeExecuted={"2019-10-30 T 10:45 UTC"}
                        query={"SELECT * FROM organisation.confidential_dataset.table"}
                        jobStatus={"success"}
                        jobId={"456"}
                    />
                    <Job
                        timeExecuted={"2019-10-30 T 09:42 UTC"}
                        query={"SELECT * FROM organisation.confidential_dataset.no_table"}
                        jobStatus={"failed"}
                        jobId={"789"}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Jobs;
