'use client';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';

const DynamicTable = () => {
  const data = {
    payment: {
      id: 1,
      slug: 'none',
      project: 1,
      name: null,
      auth_user: 4,
      entity: 1,
      category: 1,
      payment_type: 'withdrawal',
      payment_method: 'phonepe',
      status: 0,
      created_by: 4,
      created_at: '2024-03-27T13:02:10.031852Z',
      updated_by: null,
      updated_at: '2024-03-27T13:02:10.031950Z',
      created_ip: '127.0.0.1',
      deleted_by: null,
      deposit: [
        {
          id: 1,
          custom_input: [
            { type: 'options', label: 'card1', dom_attributes: 'col-6 border-red-600' },
            { type: 'options', label: 'card1' },
          ],
          country_sorting: [
            { sort: 1, action: true, country: 'India' },
            { sort: 2, action: false, country: 'USA' },
          ],
          slug: 'deposit-test-3',
          status: 0,
          name: 'Deposit Test 3',
          created_at: '2024-03-27T13:02:30.268538Z',
          created_ip: '127.0.0.1',
          updated_at: '2024-03-27T13:02:30.268639Z',
          updated_ip: null,
          deleted_ip: null,
          logo: '/media/uploads/dummy.png',
          maximum_amount: '1000.00',
          minimum_amount: '100.00',
          daily_maximum_limit: '5000.00',
          daily_maximum_count: 5,
          weekly_maximum_limit: '15000.00',
          weekly_maximum_count: 15,
          monthly_maximum_limit: '50000.00',
          monthly_maximum_count: 50,
          processing_fee: '10.00',
          processing_time: '08:00:00',
          processing_currency: 'USD',
          popular: 'Yes',
          type: 'deposit',
          integrations: 'Praxis',
          tab: 'NewTab',
          created_by: 4,
          updated_by: null,
          deleted_by: null,
          auth_user: 4,
          payment_id: 1,
        },
      ],
      withdrawl: [
        {
          id: 1,
          country_sorting: [
            { sort: 1, action: true, country: 'India' },
            { sort: 2, action: false, country: 'USA' },
          ],
          custom_input: [
            { type: 'options', label: 'card1', dom_attributes: 'col-6 border-red-600' },
            { type: 'options', label: 'card1' },
          ],
          slug: 'withdrawl-test',
          status: 0,
          name: 'withdrawl test',
          created_at: '2024-03-27T13:02:40.557291Z',
          created_ip: '127.0.0.1',
          updated_at: '2024-03-27T13:02:40.557354Z',
          updated_ip: null,
          deleted_ip: null,
          logo: '/media/uploads/dummy.png',
          maximum_amount: '1000.00',
          minimum_amount: '100.00',
          daily_maximum_limit: '5000.00',
          daily_maximum_count: 5,
          weekly_maximum_limit: '15000.00',
          weekly_maximum_count: 15,
          monthly_maximum_limit: '50000.00',
          monthly_maximum_count: 50,
          processing_fee: '10.00',
          processing_time: '08:00:00',
          processing_currency: 'USD',
          popular: 'Yes',
          type: 'withdrawal',
          minimum_withdrawl: '50.00',
          maximum_withdrawl: '500.00',
          hash_code: 'some_hash_value',
          created_by: 4,
          updated_by: null,
          deleted_by: null,
          auth_user: 4,
          payment_id: 1,
        },
      ],
    },
  };

  const renderValue = (value) => {
    if (!value || typeof value !== 'object' || value.type !== 'options') {
      return JSON.stringify(value);
    }

    return (
      <FormControl fullWidth>
        <Select value={value.label}>
          {value.custom_input.map((input, index) => (
            <MenuItem key={index} value={input.label}>
              {input.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };


  return (
    <div style={{ width: '80vw', margin: 'auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data.payment).map((key) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>
                  {Array.isArray(data.payment[key]) ? (
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            {Object.keys(data.payment[key][0]).map((subKey) => (
                              <TableCell key={subKey}>{subKey}</TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.payment[key].map((item, index) => (
                            <TableRow key={index}>
                              {Object.keys(item).map((subKey) => (
                                <TableCell key={subKey}>
                                  {renderValue(item[subKey])}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  ) : (
                    JSON.stringify(data.payment[key])
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DynamicTable;

