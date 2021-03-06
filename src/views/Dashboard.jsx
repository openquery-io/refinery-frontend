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
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table,} from "reactstrap";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/ext-language_tools";

// nodejs library that concatenates classes


class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        let tabs = [
            {
                name: "Query",
                active: true,
                key: 0,
                text: ""
            }
        ];

        this.state = {tabs: tabs};
        this.queryTabs = this.queryTabs.bind(this);
        this.newTab = this.newTab.bind(this);
        this.setActiveTab = this.setActiveTab.bind(this);
        this.closeTab = this.closeTab.bind(this);
        this.getActiveTab = this.getActiveTab.bind(this);
        this.setActiveTabText = this.setActiveTabText.bind(this);
    }

    newTab() {
        this.state.tabs.forEach(tab => tab.active = false);
        this.state.tabs.push(
            {
                name: "Query",
                active: true,
                key: this.state.tabs.length,
                text: ""
            }
        );
        this.setState(this.state);
    }

    setActiveTab(index) {
        this.state.tabs.forEach(tab => tab.active = false);
        this.state.tabs[index].active = true;
        this.setState(this.state);
    }

    closeTab(index) {
        // Remove tabs
        this.state.tabs = removeItem(this.state.tabs, index);

        if (this.state.tabs.length === 0) {
            this.state.tabs.push(
                {
                    name: "Query",
                    active: true,
                    key: 0,
                    text: ""
                }
            )
        }

        if (!thereIsAnActiveTab(this.state.tabs)) {
            // Set closest tab to active
            let newTabIndex = Math.max(0, index - 1);
            this.state.tabs[newTabIndex].active = true;
        }

        this.setState(this.state);

        // ---- helper methods ----

        function removeItem(items, i) {
            return items.slice(0, i).concat(items.slice(i + 1, items.length));
        }


        function thereIsAnActiveTab(tabs) {
            for (const tab of tabs) {
                if (tab.active) return true;
            }
            return false;
        }
    }

    getActiveTab() {
        return this.state.tabs
            .filter(tab => tab.active)[0];
    }

    setActiveTabText(e) {
        // todo send for planning?
        let activeTab = this.state.tabs
            .filter(tab => tab.active)[0];

        if (activeTab.text !== e) {
            activeTab.text = e;
        }
    }

    queryTabs() {
        return (
            <>
                <ul className="nav nav-tabs mr-auto">
                    {this.state.tabs.map((tab, index) => {
                            if (tab.active === true) {
                                return (
                                    <li className="nav-item" key={index}>
                                        <div className="nav-link active">
                                            <a href="#">{tab.name + tab.key}</a>
                                            <a href="#" onClick={() => this.closeTab(index)}>
                                                <span className="tim-icons icon-simple-remove"
                                                      data-notify="icon"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li className="nav-item" key={index}>
                                        <div className="nav-link">
                                            <a href="#" onClick={() => this.setActiveTab(index)}>{tab.name + tab.key} </a>
                                            <a href="#" onClick={() => this.closeTab(index)}>
                                                <span className="tim-icons icon-simple-remove"
                                                      data-notify="icon"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                )
                            }
                        }
                    )}
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.newTab}>+</a>
                    </li>
                </ul>
                {console.log(this.getActiveTab())}
                <AceEditor
                    mode="mysql"
                    theme="tomorrow_night"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                    fontSize={20}
                    width={"100%"}
                    height={"300px"}
                    enableLiveAutocompletion
                    enableBasicAutocompletion
                    value={this.getActiveTab().text}
                    onChange={this.setActiveTabText}
                    // https://stackoverflow.com/questions/53622096/how-to-specify-a-list-of-custom-tokens-to-list-for-autocompletion-in-ace-editor

                />
            </>
        );
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col xs="12">

                            {this.queryTabs()}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" md="11">
                                            <CardTitle tag="h3">Results</CardTitle>
                                        </Col>
                                        <Col md="1" className="text-left">
                                            <Button className="btn-icon" color="dark" type="submit">
                                                <i className="tim-icons icon-link-72"/>
                                            </Button>
                                            <Button className="btn-icon" color="dark" type="submit">
                                                <i className="tim-icons icon-cloud-download-93"/>
                                            </Button>
                                        </Col>
                                    </Row>

                                </CardHeader>
                                <CardBody>
                                    <Table className="tablesorter" responsive>
                                        <thead className="text-primary">
                                        <tr>
                                            <th>Name</th>
                                            <th>Country</th>
                                            <th>City</th>
                                            <th className="text-center">Salary</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Dakota Rice</td>
                                            <td>Niger</td>
                                            <td>Oud-Turnhout</td>
                                            <td className="text-center">$36,738</td>
                                        </tr>
                                        <tr>
                                            <td>Minerva Hooper</td>
                                            <td>Curaçao</td>
                                            <td>Sinaai-Waas</td>
                                            <td className="text-center">$23,789</td>
                                        </tr>
                                        <tr>
                                            <td>Sage Rodriguez</td>
                                            <td>Netherlands</td>
                                            <td>Baileux</td>
                                            <td className="text-center">$56,142</td>
                                        </tr>
                                        <tr>
                                            <td>Philip Chaney</td>
                                            <td>Korea, South</td>
                                            <td>Overland Park</td>
                                            <td className="text-center">$38,735</td>
                                        </tr>
                                        <tr>
                                            <td>Doris Greene</td>
                                            <td>Malawi</td>
                                            <td>Feldkirchen in Kärnten</td>
                                            <td className="text-center">$63,542</td>
                                        </tr>


                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Dashboard;
