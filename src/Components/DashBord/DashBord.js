import React from 'react';
import { Col, Container, Row,} from 'react-bootstrap';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBord.css'

const DashBord = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <Container >
                <Row className='justify-content-center align-items-center container-dashBord'>
                    <Col xs={12} md={6}>

                        <AreaChart width={550} height={400} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>

                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <XAxis dataKey="month" />
                            <YAxis />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                             <Tooltip></Tooltip>
                            
                            <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />

                        </AreaChart>


                    </Col>

                    <Col xs={12} md={6} >
                        <ComposedChart width={630} height={400} data={data}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip></Tooltip>
                            <Legend></Legend>
                            <CartesianGrid stroke="#f5f5f5" />
                            <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                        </ComposedChart>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashBord;