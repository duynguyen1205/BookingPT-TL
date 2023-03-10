import React from "react";
import { Row, Col } from "reactstrap";

import { Studentslist } from "components";

import { getAllTrainee } from "variables/admin/students.jsx";

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainee: [],
    };
  }

  async componentDidMount() {
    const traineeData = await getAllTrainee();
    this.setState({
      trainee: traineeData,
    });
  }
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Trainee</h1>
                </div>
              </div>

              <div className="col-xl-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">All Trainee</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        <Studentslist students={this.state.trainee} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Student;
